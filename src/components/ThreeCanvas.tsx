
import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Create particles in a 3D space
const ParticleField = ({ count = 1000 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const { viewport } = useThree();
  
  useEffect(() => {
    // Create positions for each particle
    for (let i = 0; i < count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * viewport.width * 4,
        (Math.random() - 0.5) * viewport.height * 4,
        (Math.random() - 0.5) * 20
      );
      
      const matrix = new THREE.Matrix4();
      const scale = Math.random() * 0.3 + 0.1;
      
      matrix.compose(
        position,
        new THREE.Quaternion(),
        new THREE.Vector3(scale, scale, scale)
      );
      
      mesh.current.setMatrixAt(i, matrix);
    }
    
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count, viewport]);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.1;
    
    // Rotate the entire particle field
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.1;
      mesh.current.rotation.z = time * 0.05;
    }
  });
  
  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshStandardMaterial color="#8e44ad" emissive="#8e44ad" emissiveIntensity={0.3} toneMapped={false} />
    </instancedMesh>
  );
};

// Main scene
const Scene = () => {
  const isMobile = useIsMobile();
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={60} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#00ffff" intensity={0.5} />
      
      <ParticleField count={isMobile ? 500 : 1000} />
      
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.5}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const ThreeCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas dpr={[1, 2]} gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
