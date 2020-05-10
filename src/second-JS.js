import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import './styles.css'
import { PlaneBufferGeometry } from 'three'

function theShadow() {
  return (
    <mesh>
      <PlaneBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" color="orange" />
    </mesh>
  )
}
