import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import planeScene from "../assets/3d/plane.glb";

const Plane = ({ islandRef, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const takeOffAnimation = actions["Take 001"];
    if (takeOffAnimation && !takeOffAnimation.isRunning()) {
      takeOffAnimation.play();
    }
  }, [actions]); // Runs once when the component mounts

  useFrame(() => {
    if (islandRef?.current) {
      const angle = islandRef.current.rotation.y;
      const radius = 8; // Distance from island

      ref.current.position.set(Math.sin(angle) * radius, -4, Math.cos(angle) * radius);
      ref.current.rotation.y = angle + Math.PI; // Adjust plane orientation
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
