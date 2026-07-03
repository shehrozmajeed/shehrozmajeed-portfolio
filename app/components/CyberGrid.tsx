"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Grid() {
  const meshRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const size = 40;
    const divisions = 40;
    const vertices = [];

    for (let i = 0; i <= divisions; i++) {
      const pos = (i / divisions) * size - size / 2;
      vertices.push(pos, 0, -size / 2, pos, 0, size / 2);
      vertices.push(-size / 2, 0, pos, size / 2, 0, pos);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.z = (state.clock.elapsedTime * 2) % 2;
    }
  });

  return (
    <lineSegments ref={meshRef} geometry={geometry}>
      <lineBasicMaterial color="#00f0ff" transparent opacity={0.15} />
    </lineSegments>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#b829dd"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function CyberGrid() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 8, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#05050a", 15, 35]} />
        <ambientLight intensity={0.2} />
        <Grid />
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-black pointer-events-none" />
    </div>
  );
}