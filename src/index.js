import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import './styles.css'

function LIGHTSS() {
  return (
    <group>
      <ambientLight intensity={0.8} />
      <spotLight intensity={0.6} position={[20, 10, 10]} angle={0.2} penumbra={1} />
    </group>
  )
}

function SeGeo() {
  const { viewport } = useThree()
  const ref = useRef()
  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x, y, 0)
    ref.current.rotation.set(x, y, 0)
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'red'} />
    </mesh>
  )
}

function Sphere(props) {
  const mesh = useRef()
  const [active, setActive] = useState(false)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [3, 3, 3] : [5, 5, 5]}
      position={active ? [3, 2, 0] : [-3, 0, 0]}
      onClick={e => setActive(!active)}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 10, 10]} />
      <meshStandardMaterial attach="material" color={'#C54B09'} transparent opacity={0.75} />
    </mesh>
  )
}

function Sphere2(props) {
  const mesh = useRef()
  const [active, setActive] = useState(false)
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [3, 3, 3]}
      position={active ? [-3, 2, 0] : [3, 0, 0]}
      onClick={e => setActive(!active)}>
      <sphereBufferGeometry attach="geometry" args={[0.5, 10, 10]} />
      <meshStandardMaterial attach="material" color={'pink'} />
    </mesh>
  )
}

function Sphere3(props) {
  const mesh = useRef()
  const [active, setActive] = useState(false)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [2, 2, 2]}
      position={active ? [-2, 2, 0] : [2, -1, 0]}
      onClick={e => setActive(!active)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={'#8161FA'} transparent opacity={0.75} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas style={{ background: 'blue' }} shadowMap camera={{ position: [0, 0, 5] }}>
      <LIGHTSS />
      <mesh>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshPhongMaterial attach="material" color="#C3EFEC" />
      </mesh>
      <Sphere />
      <Sphere2 />
      <Sphere3 position={[0, -3, 0]} />
      <SeGeo />
    </Canvas>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
