"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  color: string
}

export default function GlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const particleCountRef = useRef(0)
  const lastParticleTimeRef = useRef(0)

  useEffect(() => {
    const colors = ["#ff3cff", "#00eaff", "#ff8b3d"]

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Generate particles at throttled intervals
      const now = Date.now()
      if (now - lastParticleTimeRef.current > 30) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const newParticle: Particle = {
          id: particleCountRef.current++,
          x: e.clientX,
          y: e.clientY,
          color: randomColor,
        }

        setParticles((prev) => {
          const updated = [...prev, newParticle]
          // Keep only 10 particles max for performance
          return updated.slice(-10)
        })

        lastParticleTimeRef.current = now
      }

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" || target.tagName === "A" || target.closest("button") || target.closest("a")
      setIsHoveringInteractive(!!isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1))
    }, 600)

    return () => clearTimeout(timer)
  }, [particles.length])

  return (
    <>
      {/* Glow effect */}
      <div
        className={`pointer-events-none fixed w-64 h-64 rounded-full transition-opacity duration-300 ${
          isVisible ? "opacity-30" : "opacity-0"
        }`}
        style={{
          left: `${position.x - 128}px`,
          top: `${position.y - 128}px`,
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Cursor dot with scale on hover */}
      <div
        className={`pointer-events-none fixed rounded-full bg-primary transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: isHoveringInteractive ? "6px" : "12px",
          height: isHoveringInteractive ? "6px" : "12px",
          left: `${position.x - (isHoveringInteractive ? 3 : 6)}px`,
          top: `${position.y - (isHoveringInteractive ? 3 : 6)}px`,
        }}
      />

      {/* Particle trail */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none fixed w-1 h-1 rounded-full"
          initial={{ x: particle.x, y: particle.y, opacity: 1, scale: isHoveringInteractive ? 1.5 : 1 }}
          animate={{
            x: particle.x + (Math.random() - 0.5) * 40,
            y: particle.y - 30,
            opacity: 0,
            scale: isHoveringInteractive ? 1.2 : 0.5,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            backgroundColor: particle.color,
            boxShadow: `0 0 8px ${particle.color}`,
          }}
        />
      ))}
    </>
  )
}
