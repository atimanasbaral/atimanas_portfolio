"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(600);
    for (let i = 0; i < 600; i += 3) {
      arr[i]     = (Math.random() - 0.5) * 10;
      arr[i + 1] = (Math.random() - 0.5) * 10;
      arr[i + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
  });

  return (
    <Points ref={ref} limit={200}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#66CCFF"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function AvatarSprite() {
  const texture = useMemo(
    () => new THREE.TextureLoader().load("/avatar.png"),
    []
  );

  {/* TODO: Phase 18 — swap this Plane + SpriteMaterial for a glTF character model */}
  return (
    <mesh position={[0, -0.5, 0]}>
      <planeGeometry args={[2.2, 2.2]} />
      <meshBasicMaterial
        map={texture}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function CyberpunkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 3, 2]} intensity={1.2} color="#246BFF" />
      <pointLight position={[-2, -1, 1]} intensity={0.6} color="#66CCFF" />
      <Particles />
      <AvatarSprite />
    </Canvas>
  );
}