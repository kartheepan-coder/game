// import * as THREE from 'three'
// import { createRoot } from 'react-dom/client'
// import { Suspense, useState, useRef, useEffect, useLayoutEffect, useMemo } from 'react'
// import { Canvas, useLoader } from '@react-three/fiber'
// import { SVGLoader } from 'three-stdlib'
// import { MapControls, am } from '@react-three/drei'

// const hoveredCursor =
//   'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNi41IiBmaWxsPSJibGFjayIgc3Ryb2tlPSJibGFjayIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIgMzJMMzIgNDVIMzNMMzMgMzJINDVWMzFIMzNWMTlIMzJWMzFIMTlWMzJIMzJaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0xLjk2MjMxIDEuOTYyMzFMMTMuNzAzMyA1LjEwODI5TDUuMTA4MjkgMTMuNzAzM0wxLjk2MjMxIDEuOTYyMzFaIiBmaWxsPSJibGFjayIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImNsaXAwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIi8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+'
// const defaultCursor =
//   'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNi41IiBzdHJva2U9ImJsYWNrIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMiAzMkw0MS4xOTI0IDQxLjE5MjRMNDEuODk5NSA0MC40ODUzTDMyLjcwNzEgMzEuMjkyOUw0MS4xOTI0IDIyLjgwNzZMNDAuNDg1MyAyMi4xMDA1TDMyIDMwLjU4NThMMjMuNTE0NyAyMi4xMDA1TDIyLjgwNzYgMjIuODA3NkwzMS4yOTI5IDMxLjI5MjlMMjIuMTAwNSA0MC40ODUzTDIyLjgwNzYgNDEuMTkyNEwzMiAzMloiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTUuMzY3MTEgMTIuNzM3M0wyLjY2OTQyIDIuNjY5NDJMMTIuNzM3MyA1LjM2NzExTDUuMzY3MTEgMTIuNzM3M1oiIHN0cm9rZT0iYmxhY2siLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJjbGlwMCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg=='

// function Cell({ color, shape, fillOpacity }) {
//   const [hovered, hover] = useState(false)
//   useEffect(
//     () => void (document.body.style.cursor = hovered ? `url('${hoveredCursor}'), pointer` : `url('${defaultCursor}'), auto`),
//     [hovered]
//   )
//   return (
//     <mesh onPointerOver={(e) => hover(true)} onPointerOut={() => hover(false)}>
//       <meshBasicMaterial color={hovered ? '#0A7AB9' : color} opacity={fillOpacity} depthWrite={false} transparent />
//       <shapeBufferGeometry args={[shape, 32]} />
//     </mesh>
//   )
// }

// function Svg({ url }) {
//   const { paths } = useLoader(SVGLoader, url)
//   const shapes = useMemo(
//     () => paths.flatMap((p) => p.toShapes(true).map((shape) => ({ shape, color: p.color, fillOpacity: p.userData.style.fillOpacity }))),
//     [paths]
//   )

//   const ref = useRef()
//   useLayoutEffect(() => {
//     const sphere = new THREE.Box3().setFromObject(ref.current).getBoundingSphere(new THREE.Sphere())
//     ref.current.position.set(-sphere.center.x, -sphere.center.y, 0)
//   }, [])

//   useLayoutEffect(() => {
//     if (ref.current) {
//       // Calculate the bounding sphere to ensure it is centered
//       const sphere = new THREE.Box3().setFromObject(ref.current).getBoundingSphere(new THREE.Sphere())
//       ref.current.position.set(sphere.center.x, sphere.center.y, 0)

//       // Log the position of the SVG group
//       console.log('SVG Position:', ref.current.position)
//     }
//   }, [])

//   return (
//     <group ref={ref} scale={[1, -1, 1]}>
//       {shapes.map((props, index) => (
//         <Cell key={props.shape.uuid} {...props} />
//       ))}
//     </group>
//   )
// }

// function App() {
//   return (
//     <Canvas antialias frameloop="demand" orthographic camera={{ position: [0, 0, 50], zoom: 2, up: [0, 0, 1], far: 10000 }}>
//       <Suspense fallback={null}>
//         <Svg url="/map.svg" />
//       </Suspense>
//       <MapControls enableRotate={false} />
//     </Canvas>
//   )
// // }
import { createRoot } from 'react-dom/client'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, Line, Text, GizmoHelper, GizmoViewport, Trail } from '@react-three/drei'
import './styles.css'
import { forwardRef, useEffect, useRef, useState } from 'react'
// import { useControls } from 'leva'

function App() {
  const orbitControlsRef = useRef() // Create ref here

  const resetControls = () => {
    if (orbitControlsRef.current) {
      console.log(orbitControlsRef.current)
      orbitControlsRef.current.reset() // Reset orbit controls to their initial state
      orbitControlsRef.current.target.set(0, 0, 0) // Set the target to the origin
    }
  }

  return (
    <>
      <Canvas
        orthographic
        // frameloop="demand"
        camera={{
          zoom: 100, // Adjust zoom to control the view size
          near: 1,
          far: 100
        }}>
        {/* <Canvas antialias  orthographic camera={{ position: [0, 3, 5] }}> */}
        <OrbitControls ref={orbitControlsRef} enableRotate={true} />
        <Scene orbitControlsRef={orbitControlsRef} />
        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={['#9d4b4b', '#2f7f4f', 'pink']} labelColor="white" />
        </GizmoHelper>
      </Canvas>
      <button onClick={resetControls} style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1 }}>
        Reset View
      </button>
    </>
  )
}

const Circle = forwardRef(({ position, color }, ref) => {
  return (
    <mesh position={position} ref={ref}>
      <circleGeometry args={[0.1, 132]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
})

const Scene = (orbitControlsRef) => {
  // const [control,setControl ]

  const { camera } = useThree()

  const circlesRefs = useRef([])
  const c2 = useRef()
  const lineRef = useRef()
  // const points = [c1.current.position, c2.current.position]
  const [points, setPoints] = useState([
    [0, 0, 0], // Start point
    [2, 2, 0]
  ])
  const [position, setPosition] = useState(
    [0, 0, -0.001] // Start point
  )

  // Change position or log position during runtime
  // useFrame((state) => {
  //   // console.log(state.)
  //   if (circlesRefs.current[0]) {
  //     // Access the current position and modify it (e.g., move it along the x-axis)
  //     const currentPos = circlesRefs.current[9].position
  //     // Log the current position (optional)
  //     console.log('Current position of Circle 1:', currentPos)
  //     // Modify the position over time
  //     currentPos.x += 0.01 // Move to the right over time
  //   }
  // })

  // useEffect(() => {
  //   if (c1 && c2) {
  //     // console.log(orbitControlsRef.orbitControlsRef.current)
  //     // console.log('hi')
  //     // camera.position.setY(0)
  //     // console.log(camera.position)
  //     // console.log(meshRef.current.rotation)
  //     // meshRef.current.position.set
  //     console.log(c1.current)
  //     console.log(c2.current.position)
  //     // console.log(orbitControlsRef.orbitControlsRef.current.target)
  //     setPoints([c1.current.position, c2.current.position])
  //     console.log(lineRef.current)
  //   }
  // }, [c1, c2])

  // const createLabels = () => {
  //   const labels = []
  //   for (let i = 0; i <= 5; i++) {
  //     labels.push(
  //       <Text
  //         key={i}
  //         position={[i, -0.5, 0]} // Adjust y position as needed
  //         fontSize={0.2}
  //         color="black">
  //         {i}
  //       </Text>
  //     )
  //   }
  //   return labels
  // }
  const textRefs = useRef([])
  const createCircles = (vertical = false) => {
    const circles = []
    const labels = []
    const count = 10
    let position = []
    let textpPos = []
    console.log(vertical)
    for (let i = -count; i <= count; i++) {
      if (vertical) {
        position = [0, i, 0]
        textpPos = [0.5, i, 0]
      } else {
        position = [i, 0, 0]
        textpPos = [i, -0.5, 0]
      }
      circles.push(<Circle color={'orange'} position={position} ref={(el) => (circlesRefs.current[i + count] = el)} key={i} />)
      labels.push(
        <Text
          key={i}
          position={textpPos} // Adjust y position as needed
          fontSize={0.2}
          color="black"
          ref={(el) => (textRefs.current[i + count] = el)}>
          {i}
        </Text>
      )
    }
    return [circles, labels]
  }

  useEffect(() => {
    // console.log(textRefs.current)
    // circlesRefs.current.map((element) => {
    //   console.log(element)
    // })
    console.log(circlesRefs.current[9])
    // console.log(circlesRefs.current[circlesRefs.current.length - 1])

    setPoints([circlesRefs.current[0].position, circlesRefs.current[circlesRefs.current.length - 1].position])
  }, [textRefs, circlesRefs])

  return (
    // <mesh ref={meshRef}>
    //   {/* Circle Geometry with radius 1 */}
    //   <circleGeometry args={[0.1, 128]} />
    //   {/* Material to color the circle */}
    //   <meshBasicMaterial color="orange" />

    // </mesh>
    <Trail>
      {/* <Circle color={'red'} position={[0, 0, 0]} ref={c1} />*/}
      {/* <Circle color={'orange'} position={[1, 0, 0]} ref={c2} />  */}
      {}
      {/* <Circle color={'orange'} position={[2, 0, 0]} ref={c2} />
      <Circle color={'orange'} position={[-1, 0, 0]} ref={c2} /> */}
      {/* {createCircles(true)} */}
      {createCircles()}
      <Line
        points={points}
        color="red"
        lineWidth={3}
        position={position}
        ref={lineRef}
        // dashed={true}
        vertexColors={[
          [1, 0, 0],
          [0, 1, 0]
        ]} // Optional: specify colors for each point
        // Material properties
        dashSize={0.01} // Length of the dashes
        gapSize={0.01}></Line>
      {/* Render labels below the grid */}
    </Trail>
  )
}

createRoot(document.getElementById('root')).render(<App />)
