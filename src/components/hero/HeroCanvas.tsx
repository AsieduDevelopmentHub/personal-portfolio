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
    mesh.rotation.x = state.clock.elapsedTime * 0.1;
    mesh.rotation.y = state.clock.elapsedTime * 0.16;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.28} floatIntensity={0.45}>
      <mesh ref={ref} scale={1.22}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#2a2824"
          emissive="#4a5a28"
          emissiveIntensity={0.45}
          roughness={0.35}
          metalness={0.72}
          distort={0.28}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  return (
    <div className="h-full min-h-[220px] w-full md:min-h-[300px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.35} />
        <directionalLight
          position={[3, 2, 2]}
          intensity={0.85}
          color="#c9e85b"
        />
        <pointLight position={[-2.5, -1, 2]} intensity={0.45} color="#f2efe8" />
        <DigitalCore />
      </Canvas>
    </div>
  );
}
