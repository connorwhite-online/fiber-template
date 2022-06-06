import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/kerosene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials["Stainless Steel"]}
        position={[0, 0.8, -0.62]}
        rotation={[-0.93, 0, 0]}
        scale={[-0.13, 0.03, -0.13]}
      />
      <mesh
        // handle events directly in the mesh object
        onClick={(e) => console.log('the model was clicked')}
        castShadow
        receiveShadow
        geometry={nodes.Jerry_Can.geometry}
        material={materials["Red Gloss Paint"]}
      />
    </group>
  );
}

useGLTF.preload("/kerosene.gltf");
