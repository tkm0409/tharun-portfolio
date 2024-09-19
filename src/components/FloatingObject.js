import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

export default function FloatingObject() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#8a2be2" wireframe />
    </Icosahedron>
  );
}
