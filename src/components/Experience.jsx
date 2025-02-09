import { MeshDistortMaterial, MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { CylinderGeometry, DirectionalLightHelper, PlaneGeometry } from "three";

const Box = ({ position, args, color }) => {

  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const boxRef = useRef()

  useFrame((state, delta)=>{
    // boxRef.current.rotation.x += 0.002
    const speed = isHover ? 0.05 : 0.02
    // boxRef.current.rotation.y += speed 
    // boxRef.current.rotation.z += 0.003 

    // boxRef.current.position.x = Math.sin(state.clock.elapsedTime) * 3
  })

  return (
  <mesh position={position} ref={boxRef} onPointerEnter={()=>setIsHover(true)} onPointerLeave={()=>setIsHover(false)} onClick={()=>setIsClick(!isClick)} scale={isClick ? 1.5 : 1 }>
    {/* <torusKnotGeometry args={args} /> */}
    <planeGeometry args={args} />
    {/* <meshStandardMaterial color={isHover ? "gold" : color} /> */}
    {/* <MeshWobbleMaterial factor={2} speed={1} color={isHover ? "gold" : color} /> */}
    <MeshDistortMaterial color={isHover ? "gold" : color} speed={5}/>
  </mesh>
  )
};

const Scene = () => {

  const directionalLightRef = useRef()
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")

  return (
    <>
      <OrbitControls />
          {/* <ambientLight /> */}
          {/* <spotLight position={[2,5,9]} intensity={60} /> */}
          <directionalLight position={[2, 2, 4]} intensity={5} ref={directionalLightRef}/>
          <group position={[0,0,0]}>
            <Box position={[0, 0, 0]} args={[2, 2, 4]} color={"red"}/>
            {/* <Box position={[2, 0, 3]} args={[2, 2, 3]} color={"orange"} />
            <Box position={[-2, 0, 0]} args={[2, 2, 3]} color={"blue"} />
            <Box position={[-4, 0, 3]} args={[2, 2, 3]} color={"green"} /> */}
          </group>
    </>
  )
}

function Experience() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  );
}

export default Experience;
