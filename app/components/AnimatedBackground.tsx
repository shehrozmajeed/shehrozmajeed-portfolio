"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const count = 4000;
    const radius = 1.5;
    const points = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      const sinPhi = Math.sin(phi);
      points[i * 3] = r * sinPhi * Math.cos(theta);
      points[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background">
      {/* Subtle base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-background to-background"></div>
      
      {/* 3D Particle Scene */}
      <div className="absolute inset-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 1.2] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Noise texture overlay for a premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
}
