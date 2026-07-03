"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Rotating wireframe icosahedron core — the "expensive" 3D centerpiece */
function Core() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -state.clock.elapsedTime * 0.25;
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.4, 0]}>
      <mesh>
        <icosahedronGeometry args={[2.6, 1]} />
        <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.22} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshBasicMaterial color="#b829dd" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

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
    <lineSegments ref={meshRef} geometry={geometry} position={[0, -3.2, 0]}>
      <lineBasicMaterial color="#00f0ff" transparent opacity={0.12} />
    </lineSegments>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 400;
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
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
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
        size={0.045}
        color="#d4b47a"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export default function CyberGrid() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 1.5, 9], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#030305", 12, 32]} />
        <ambientLight intensity={0.2} />
        <Core />
        <Grid />
        <Particles />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(3,3,5,0.6)_100%)] pointer-events-none" />
    </div>
  );
}
