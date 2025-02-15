import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {
  const { scene } = useGLTF(skyScene); 
  const skyref = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyref.current.rotation.y += 0.5 * delta; // Smooth rotation
    }
  });

  return (
    <mesh ref={skyref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
