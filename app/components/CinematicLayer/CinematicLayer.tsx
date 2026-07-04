"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./CinematicLayer.module.css";

/* ── PARTICLE COUNT ── */
const PARTICLE_COUNT = 600;

/* ── CINEMATIC BOKEH PARTICLES ── */
function CinematicParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { camera } = useThree();

  /* Generate particle positions and colors */
  const { positions, colors, sizes, phases } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const col = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);
    const pha = new Float32Array(PARTICLE_COUNT); // phase offsets for sine

    const orangeColor = new THREE.Color("#ff8c42");
    const warmWhite = new THREE.Color("#fff5e6");
    const softAmber = new THREE.Color("#ffb366");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Spread particles in a wide volume
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

      // Random color blend: orange, warm white, soft amber
      const colorChoice = Math.random();
      let c: THREE.Color;
      if (colorChoice < 0.45) {
        c = orangeColor.clone();
      } else if (colorChoice < 0.75) {
        c = warmWhite.clone();
      } else {
        c = softAmber.clone();
      }
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;

      // Random sizes for depth variation
      siz[i] = 0.02 + Math.random() * 0.08;

      // Phase offset for sine oscillation
      pha[i] = Math.random() * Math.PI * 2;
    }

    return { positions: pos, colors: col, sizes: siz, phases: pha };
  }, []);

  /* Custom shader material for soft glow */
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float aSize;
        attribute float aPhase;
        uniform float uTime;
        uniform float uPixelRatio;
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          vColor = color;
          
          // Sine-wave floating motion
          vec3 pos = position;
          pos.y += sin(uTime * 0.3 + aPhase) * 0.15;
          pos.x += cos(uTime * 0.2 + aPhase * 1.3) * 0.08;
          pos.z += sin(uTime * 0.15 + aPhase * 0.7) * 0.05;
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          // Distance-based alpha fade
          float dist = length(mvPosition.xyz);
          vAlpha = smoothstep(8.0, 2.0, dist) * 0.8;
          
          gl_PointSize = aSize * uPixelRatio * (200.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        
        void main() {
          // Soft circular gradient (bokeh effect)
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
          alpha *= alpha; // softer falloff
          alpha *= vAlpha;
          
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });
  }, []);

  /* Mouse tracking for parallax */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* Animation loop */
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Update shader time
    shaderMaterial.uniforms.uTime.value = time;

    // Mouse parallax on camera (very subtle)
    const targetX = mouseRef.current.x * 0.3;
    const targetY = mouseRef.current.y * 0.2;
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (-targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  /* Cleanup */
  useEffect(() => {
    return () => {
      shaderMaterial.dispose();
    };
  }, [shaderMaterial]);

  return (
    <points ref={pointsRef} material={shaderMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={PARTICLE_COUNT}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aPhase"
          count={PARTICLE_COUNT}
          array={phases}
          itemSize={1}
        />
      </bufferGeometry>
    </points>
  );
}

export default function CinematicLayer() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <CinematicParticles />
      </Canvas>
    </div>
  );
}
