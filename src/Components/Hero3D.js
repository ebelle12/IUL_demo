import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function Hero3D() {
  return (
    <Canvas className="w-full h-96">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <Suspense fallback={null}>
        {/* Animated distorted sphere */}
        <Sphere args={[1.5, 64, 64]} scale={1}>
          <MeshDistortMaterial 
            color="#0466c8" 
            attach="material" 
            distort={0.4} 
            speed={2} 
          />
        </Sphere>
      </Suspense>

      {/* Optional user control */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}

export default Hero3D;
