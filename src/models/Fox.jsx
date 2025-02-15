/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import scene from '../assets/3d/fox.glb';

const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    // Stop all animations
    Object.values(actions).forEach((action) => action.stop());

    // Play the selected animation
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        {Object.keys(nodes)
          .filter((key) => key.startsWith("Object_"))
          .map((key) => (
            <skinnedMesh
              key={key}
              name={nodes[key].name}
              geometry={nodes[key].geometry}
              material={materials.PaletteMaterial001}
              skeleton={nodes[key].skeleton}
            />
          ))}
      </group>
    </group>
  );
};

export default Fox;
