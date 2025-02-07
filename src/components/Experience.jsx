import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Box = ({ position, args, color }) => {

  const boxRef = useRef()

  useFrame((state, delta)=>{
    boxRef.current.rotation.x += 0.002 
    boxRef.current.rotation.y += 0.002 
    boxRef.current.rotation.z += 0.003 

    boxRef.current.position.x = Math.sin(state.clock.elapsedTime) * 3
  })

  return (
  <mesh position={position} ref={boxRef}>
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
        {/* <ambientLight /> */}
        {/* <spotLight position={[0,0,2]}/> */}
        <directionalLight position={[2, 2, 4]} intensity={1} />
        <group position={[0,-2,0]}>
          <Box position={[0, 0, 0]} args={[2, 2, 2]} color={"red"} />
          {/* <Box position={[2, 0, 3]} args={[2, 2, 3]} color={"orange"} />
          <Box position={[-2, 0, 0]} args={[2, 2, 3]} color={"blue"} />
          <Box position={[-4, 0, 3]} args={[2, 2, 3]} color={"green"} /> */}
        </group>
      </Canvas>
    </>
  );
}

export default Experience;
