"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function DigitalCore() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    const mesh = ref.current;
    if (!mesh) return;
    mesh.rotation.x = state.clock.elapsedTime * 0.12;
    mesh.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={ref} scale={1.28}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#22D3EE"
          emissiveIntensity={0.32}
          roughness={0.25}
          metalness={0.82}
          distort={0.38}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="h-full min-h-[240px] w-full md:min-h-[320px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[4, 2, 2]}
          intensity={1.1}
          color="#8B5CF6"
        />
        <pointLight position={[-3, -1, 2]} intensity={0.75} color="#22D3EE" />
        <DigitalCore />
      </Canvas>
    </div>
  );
}
