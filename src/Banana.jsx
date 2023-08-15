/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 banana.glb --transform 
Files: banana.glb [252.01KB] > banana-transformed.glb [37.39KB] (85%)
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export default function Banana({ z }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });
  const { nodes, materials } = useGLTF("/banana-transformed.glb");
  // const { viewport, camera } = useThree();
  // const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  // const [data] = useState({
  //   x: THREE.MathUtils.randFloatSpread(2),
  //   y: THREE.MathUtils.randFloatSpread(height * 2),
  //   rX: Math.random() * Math.PI,
  //   rY: Math.random() * Math.PI,
  //   rZ: Math.random() * Math.PI,
  // });

  // useFrame((state) => {
  //   ref.current.rotation.set(
  //     (data.rX += 0.0001),
  //     (data.rY += 0.001),
  //     (data.rZ += 0.0005)
  //   );
  //   ref.current.position.set(data.x * width, (data.y += 0.025), z);

  //   if (data.y > height) {
  //     data.y = -height;
  //   }
  // });
  return (
    <>
      <mesh
        ref={ref}
        geometry={nodes.banana.geometry}
        material={materials.Banana_High}
        material-emissive="orange"
        scale={0.5}
      />
    </>
  );
}
useGLTF.preload("/banana-transformed.glb");
