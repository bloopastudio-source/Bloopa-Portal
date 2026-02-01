import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import Aircraft from './Aircraft';

export default function Scene3D({ enableControls = false }) {
  return (
    <Canvas
      shadows
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 2]}
      className="absolute inset-0 w-full h-full"
    >
      <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={50} />
      
      {/* Lighting Setup */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 5]} intensity={0.4} color="#D6A240" />

      <Suspense fallback={null}>
        <Aircraft />
      </Suspense>

      {/* Ground plane for shadows */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.1} />
      </mesh>

      {enableControls && <OrbitControls enableDamping dampingFactor={0.05} />}
    </Canvas>
  );
}
