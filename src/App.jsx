import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import CustomObject from "./CustomObject";

// extend({ OrbitControls });

const App = () => {
  const cube = useRef();
  const sphere = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        depthTest={false}
        anchor={[0, 0, 0]}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        // scale={2}
        // fixed={true}
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphere, cube]}
          >
            woof Woof 🐶
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cube} rotation-y={Math.PI * 0.25} position-x={3} scale={1.5}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <boxGeometry scale={1.5} />
        <meshStandardMaterial color="mediumpurple" wireframe={false} />
        {/* <torusKnotGeometry />
        <meshNormalMaterial /> */}
      </mesh>

      <TransformControls object={cube} />

      <mesh position-y={-2} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mirror={0.25}
          maxBlur={0.75}
          color="greenyellow"
        />
      </mesh>
      <Float speed={5} floatIntensity={3}>
        <Text
          fontSize={1}
          font="./Bangers-Regular.ttf"
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          {/* <meshNormalMaterial />   change the color when you move */}
          Woof Woof !
        </Text>
      </Float>

      {/* <CustomObject /> */}
    </>
  );
};

export default App;
