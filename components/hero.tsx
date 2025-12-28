"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Text,
  Float,
  Stars,
  Sparkles,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Box,
  Cylinder,
  Torus,
  Cone
} from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// 3D Mandap Stage Component
function MandapStage() {
  return (
    <group position={[0, -2, 0]}>
      {/* Base Platform */}
      <Box args={[10, 0.5, 10]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f4e4bc" roughness={0.3} metalness={0.2} />
      </Box>
      <Cylinder args={[5.2, 5.2, 0.2, 32]} position={[0, 0.3, 0]}>
         <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.2} />
      </Cylinder>

      {/* Pillars */}
      {[-3, 3].map((x) =>
        [-3, 3].map((z) => (
          <group key={`${x}-${z}`} position={[x, 2, z]}>
            <Cylinder args={[0.2, 0.3, 4, 16]}>
              <meshStandardMaterial color="#f4e4bc" />
            </Cylinder>
            {/* Pillar decoration */}
            <Torus args={[0.25, 0.05, 16, 32]} position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
               <meshStandardMaterial color="#d4af37" />
            </Torus>
             <Torus args={[0.25, 0.05, 16, 32]} position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]}>
               <meshStandardMaterial color="#d4af37" />
            </Torus>
          </group>
        ))
      )}

      {/* Canopy / Top Structure */}
      <group position={[0, 4, 0]}>
        <Box args={[7, 0.2, 7]}>
          <meshStandardMaterial color="#800020" /> {/* Maroon color */}
        </Box>
        {/* Hanging decorations (simplified as spheres/cones) */}
        {Array.from({ length: 8 }).map((_, i) => (
            <Cone args={[0.2, 0.5, 16]} position={[Math.cos(i * Math.PI / 4) * 3, -0.5, Math.sin(i * Math.PI / 4) * 3]} rotation={[0,0,Math.PI]}>
                 <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} />
            </Cone>
        ))}
      </group>

      {/* Center Fire / Havan Kund */}
       <Box args={[1, 0.5, 1]} position={[0, 0.5, 0]}>
          <meshStandardMaterial color="#8b4513" />
       </Box>
       <Sparkles position={[0, 1, 0]} count={50} scale={1} size={4} speed={0.4} opacity={0.8} color="#ff4500" />
    </group>
  )
}

function FloatingPetals() {
    // Simulating petals with colored sparkles for now, ideally would be custom geometry
    return (
        <>
            <Sparkles count={100} scale={[12, 10, 12]} size={6} speed={0.2} opacity={0.7} color="#ffc0cb" />
            <Sparkles count={50} scale={[10, 10, 10]} size={8} speed={0.3} opacity={0.5} color="#d4af37" />
        </>
    )
}

function CameraRig() {
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        // Cinematic slow pan
        state.camera.position.x = Math.sin(t * 0.1) * 8
        state.camera.position.z = Math.cos(t * 0.1) * 12
        state.camera.position.y = 2 + Math.cos(t * 0.2) * 1
        state.camera.lookAt(0, 0, 0)
    })
    return null
}

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 5, 12]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#d4af37" />
        <spotLight position={[0, 10, 0]} intensity={2} penumbra={1} angle={0.5} castShadow />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <fog attach="fog" args={['#1a1a1a', 5, 30]} />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
            <MandapStage />
        </Float>

        <FloatingPetals />
        <CameraRig />
        {/* <Environment preset="sunset" /> */}
      </Canvas>

      {/* UI Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 text-center px-4">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
             <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-6 drop-shadow-lg" style={{textShadow: "0 4px 20px rgba(212, 175, 55, 0.5)"}}>
            We Don’t Organize Events <br /> We Create Experiences
            </h1>
        </motion.div>

        <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="flex flex-col md:flex-row gap-6 mt-8 pointer-events-auto"
        >
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white border-0 hover:from-yellow-700 hover:to-yellow-900 text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all transform hover:scale-105">
                Plan Your Event
            </Button>
            <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-900/20 hover:text-yellow-300 text-lg px-8 py-6 rounded-full backdrop-blur-sm transition-all transform hover:scale-105">
                View Our Work
            </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
                className="w-1 h-1 bg-white rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
        </div>
      </motion.div>
    </div>
  )
}
