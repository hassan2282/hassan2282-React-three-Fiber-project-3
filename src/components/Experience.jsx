import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Box = ({ position, args, color }) => {
  return (
  <mesh position={position}>
    <boxGeometry args={args} />
    <meshStandardMaterial color={color} />
  </mesh>
  )
};

function Experience() {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <spotLight position={[0,0,2]}/>
        <directionalLight position={[2, 2, 4]} intensity={1} />
        <group position={[0,-2,0]}>
          <Box position={[0, 0, 0]} args={[2, 2, 3]} color={"red"} />
          <Box position={[2, 0, 3]} args={[2, 2, 3]} color={"orange"} />
          <Box position={[-2, 0, 0]} args={[2, 2, 3]} color={"blue"} />
          <Box position={[-4, 0, 3]} args={[2, 2, 3]} color={"green"} />
        </group>
      </Canvas>
    </>
  );
}

export default Experience;
