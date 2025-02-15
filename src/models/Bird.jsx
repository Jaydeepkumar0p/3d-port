import React, { useEffect, useRef } from 'react';
import BirdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(BirdScene);
    const { actions } = useAnimations(animations, birdRef);
    const { camera } = useThree();

    useEffect(() => {
        // Ensure the animation plays once it is ready
        if (actions["Take 001"]) {
            actions["Take 001"].play();
        }
    }, [actions]);

    useFrame((state) => {
        if (!birdRef.current) return; // Check if birdRef is valid

        const elapsedTime = state.clock.getElapsedTime();

        // Bird floating movement
        birdRef.current.position.y = Math.sin(elapsedTime) * 0.2 + 2;

        // Movement and rotation based on camera position
        const boundary = 10;
        if (birdRef.current.position.x > camera.position.x + boundary) {
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - boundary) {
            birdRef.current.rotation.y = 0;
        }

        // Adjust position based on rotation
        const speed = 0.01;
        if (birdRef.current.rotation.y === 0) {
            birdRef.current.position.x += speed;
            birdRef.current.position.z -= speed;
        } else {
            birdRef.current.position.x -= speed;
            birdRef.current.position.z += speed;
        }
    });

    return (
        <mesh position={[-5, 2, 1]} scale={[0.001, 0.001, 0.001]} ref={birdRef}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Bird;
