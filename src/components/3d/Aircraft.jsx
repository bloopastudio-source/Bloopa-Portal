import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useAircraft } from '../../context/AircraftContext';
import * as THREE from 'three';

export default function Aircraft() {
  const groupRef = useRef();
  const { aircraftRef, currentSection } = useAircraft();

  useEffect(() => {
    if (groupRef.current) {
      aircraftRef.current = groupRef.current;
    }
  }, [aircraftRef]);

  // Gentle hover animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Fuselage */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.3, 0.4, 4, 16]} />
        <meshStandardMaterial 
          color="#F4F1E8" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Nose Cone */}
      <mesh position={[0, 0, 2.2]} castShadow>
        <coneGeometry args={[0.3, 0.6, 16]} />
        <meshStandardMaterial 
          color="#F4F1E8" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Wings with Gold Accents */}
      <group position={[0, 0, 0]}>
        {/* Main Wings */}
        <mesh position={[0, -0.1, 0]} rotation={[0, 0, 0]} castShadow>
          <boxGeometry args={[6, 0.1, 1]} />
          <meshStandardMaterial 
            color="#F4F1E8" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
        
        {/* Gold Wing Tips */}
        <mesh position={[3, -0.1, 0]} castShadow>
          <boxGeometry args={[0.3, 0.12, 0.8]} />
          <meshStandardMaterial 
            color="#B28E4A" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#D6A240"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-3, -0.1, 0]} castShadow>
          <boxGeometry args={[0.3, 0.12, 0.8]} />
          <meshStandardMaterial 
            color="#B28E4A" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#D6A240"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>

      {/* Tail */}
      <group position={[0, 0, -2]}>
        {/* Vertical Stabilizer with Gold */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[0.1, 1.2, 0.8]} />
          <meshStandardMaterial 
            color="#B28E4A" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#D6A240"
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Horizontal Stabilizer */}
        <mesh position={[0, 0.6, 0]} rotation={[0, 0, 0]} castShadow>
          <boxGeometry args={[2, 0.1, 0.6]} />
          <meshStandardMaterial 
            color="#F4F1E8" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Cockpit Window */}
      <mesh position={[0, 0.35, 1.5]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[0.5, 0.3, 0.4]} />
        <meshStandardMaterial 
          color="#5D5B58" 
          metalness={0.9} 
          roughness={0.05}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Propeller (simple) */}
      <group position={[0, 0, 2.7]} rotation={[0, 0, 0]}>
        <mesh rotation={[0, 0, 0]}>
          <boxGeometry args={[0.1, 2, 0.1]} />
          <meshStandardMaterial color="#5D5B58" metalness={0.8} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <boxGeometry args={[0.1, 2, 0.1]} />
          <meshStandardMaterial color="#5D5B58" metalness={0.8} />
        </mesh>
      </group>
    </group>
  );
}
