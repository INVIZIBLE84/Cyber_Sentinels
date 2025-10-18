"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { resolvedTheme } = useTheme();

  const accentColor = useMemo(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    if (color) {
      return new THREE.Color(`hsl(${color.replace(/ /g, ', ')})`);
    }
    return new THREE.Color('#ff0055'); // fallback
  }, [resolvedTheme]);


  useFrame((state) => {
    const { clock } = state;
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * Math.PI * 0.1;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.z = Math.cos(clock.getElapsedTime() * 0.15) * Math.PI * 0.05;
      
      const scale = 1 + Math.sin(clock.getElapsedTime() * 0.3) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 1), []);

  return (
    <mesh ref={meshRef}>
      <primitive object={geometry} />
      <meshStandardMaterial wireframe color={accentColor} emissive={accentColor} emissiveIntensity={0.5} />
    </mesh>
  );
};

export function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 5, 5]} intensity={0.2}/>
        <pointLight position={[-5, -5, 5]} intensity={50} color="#ff0055" />
        <pointLight position={[5, 5, -5]} intensity={50} color="#ffffff" />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
