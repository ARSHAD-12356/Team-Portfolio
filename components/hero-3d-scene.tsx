"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PresentationControls, ContactShadows, Html, Text } from "@react-three/drei"
import { useRef, useState, useMemo } from "react"
import * as THREE from "three"

function Laptop(props: any) {
    const group = useRef<THREE.Group>(null)

    // Procedural Laptop Model
    return (
        <group ref={group} {...props} dispose={null}>
            {/* Base */}
            <mesh position={[0, -0.5, 0]}>
                <boxGeometry args={[3, 0.2, 2]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
            </mesh>

            {/* Screen Hinge */}
            <group position={[0, -0.4, -1]} rotation={[Math.PI / 10, 0, 0]}>
                <mesh position={[0, 1, 0]}>
                    <boxGeometry args={[3, 2, 0.1]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
                </mesh>

                {/* Screen Display */}
                <mesh position={[0, 1, 0.06]}>
                    <planeGeometry args={[2.8, 1.8]} />
                    <meshBasicMaterial color="#000000" />
                </mesh>

                {/* Animated Code Text */}
                <group position={[-1.3, 1.8, 0.07]} scale={0.1}>
                    <CodeText />
                </group>
            </group>

            {/* Keyboard Area */}
            <mesh position={[0, -0.39, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2.8, 1.2]} />
                <meshStandardMaterial color="#0f0f0f" roughness={0.8} />
            </mesh>
        </group>
    )
}

function CodeText() {
    const [text, setText] = useState("")
    const fullText = `
import { TriVerse } from 'future';

function App() {
  return (
    <Experience 
      mode="3D"
      quality="Premium"
    />
  )
}`

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        const charIndex = Math.floor(t * 10) % (fullText.length + 20)
        if (charIndex <= fullText.length) {
            setText(fullText.substring(0, charIndex))
        }
    })

    return (
        <Text
            color="#00ff00"
            anchorX="left"
            anchorY="top"
            fontSize={0.8}
            maxWidth={25}
            lineHeight={1.2}
            font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
        >
            {text}
        </Text>
    )
}

function LogoHologram() {
    const ref = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.01
            ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2
        }
    })

    return (
        <group ref={ref} position={[0, 1, -2]}>
            <mesh>
                <torusGeometry args={[1.5, 0.1, 16, 100]} />
                <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.2, 0.05, 16, 100]} />
                <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2} toneMapped={false} />
            </mesh>
        </group>
    )
}

function Particles({ count = 40 }) {
    const mesh = useRef<THREE.InstancedMesh>(null)
    const dummy = useMemo(() => new THREE.Object3D(), [])

    // Generate random initial positions and speeds
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -10 + Math.random() * 20
            const yFactor = -10 + Math.random() * 20
            const zFactor = -10 + Math.random() * 20
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    useFrame((state) => {
        if (!mesh.current) return

        // Mouse interaction: target position based on mouse
        const targetX = (state.pointer.x * state.viewport.width) / 2
        const targetY = (state.pointer.y * state.viewport.height) / 2

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle

            // Update time
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            // Gentle float
            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )

            // React to mouse: push away slightly if close
            const dx = dummy.position.x - targetX
            const dy = dummy.position.y - targetY
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 4) {
                dummy.position.x += dx * 0.02
                dummy.position.y += dy * 0.02
            }

            dummy.scale.setScalar(Math.max(0.1, s * 0.5)) // Vary size
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.1, 10, 10]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} toneMapped={false} transparent opacity={0.6} />
        </instancedMesh>
    )
}

function DynamicLights() {
    const spotRef = useRef<THREE.SpotLight>(null)
    const pointRef = useRef<THREE.PointLight>(null)

    useFrame((state) => {
        // Calculate distance of pointer from center (0 to ~1.5)
        const dist = state.pointer.length()
        // Increase intensity when pointer is close (dist is small)
        // Base intensity + proximity boost
        const boost = Math.max(0, 1 - dist) * 2 // Boost up to +2 when very close

        if (spotRef.current) {
            spotRef.current.intensity = 10 + boost * 10
        }
        if (pointRef.current) {
            pointRef.current.intensity = 1 + boost
        }
    })

    return (
        <>
            <spotLight ref={spotRef} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
            <pointLight ref={pointRef} position={[-10, -10, -10]} color="#a855f7" intensity={1} />
            <pointLight position={[10, 0, -10]} color="#ec4899" intensity={1} />
        </>
    )
}

export default function Hero3DScene() {
    return (
        <div className="w-full h-full relative">
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <DynamicLights />

                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0.3, 0]}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                >
                    <Float rotationIntensity={0.4}>
                        <Laptop position={[0, -0.5, 0]} />
                        <LogoHologram />
                    </Float>
                </PresentationControls>

                <Particles />

                <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2.5} far={4.5} />
                <Environment preset="city" />
            </Canvas>

            <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <h3 className="text-foreground font-bold text-lg">Interactive Developer Workspace</h3>
                <p className="text-muted-foreground text-xs">Powered by Three.js + React-Three-Fiber</p>
            </div>
        </div>
    )
}
