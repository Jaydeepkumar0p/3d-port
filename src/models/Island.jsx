/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import planeScene from "../assets/3d/plane.glb";
import { MathUtils } from "three";

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  const { gl, viewport } = useThree();

  const lastx = useRef(0);
  const rotationspeed = useRef(0.002);
  const dampingFactor = 0.95;
  const userInteracting = useRef(false);

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    userInteracting.current = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastx.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
    userInteracting.current = false;
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastx.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastx.current = clientX;
      rotationspeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      userInteracting.current = true;
      setIsRotating(true);
      const rotationDirection = e.key === "ArrowLeft" ? 1 : -1;
      islandRef.current.rotation.y += rotationDirection * 0.01 * Math.PI;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
      userInteracting.current = false;
    }
  };

  useFrame(() => {
    if (!userInteracting.current) {
      rotationspeed.current *= dampingFactor;
      if (Math.abs(rotationspeed.current) < 0.0005) {
        rotationspeed.current = 0.002;
      }
      islandRef.current.rotation.y += rotationspeed.current;
    }
    const rotation = islandRef.current.rotation.y;
    const normalizedRotation = MathUtils.euclideanModulo(rotation, Math.PI * 2);

    if (setCurrentStage) {
      if (normalizedRotation >= 5.45 && normalizedRotation <= 5.85) {
        setCurrentStage(4);
      } else if (normalizedRotation >= 0.85 && normalizedRotation <= 1.3) {
        setCurrentStage(3);
      } else if (normalizedRotation >= 2.4 && normalizedRotation <= 2.6) {
        setCurrentStage(2);
      } else if (normalizedRotation >= 4.25 && normalizedRotation <= 4.75) {
        setCurrentStage(1);
      } else {
        setCurrentStage(null);
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
};

export default Island;
