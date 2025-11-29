"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import Hero3DScene from "@/components/hero-3d-scene"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!leftRef.current) return

    gsap.to(leftRef.current, {
      y: scrollY * 0.3,
      opacity: Math.max(0, 1 - scrollY / 600),
      duration: 0.1,
    })

    if (rightRef.current) {
      gsap.to(rightRef.current, {
        y: scrollY * 0.2,
        duration: 0.1,
      })
    }
  }, [scrollY])

  // Add idle floating animation to 3D scene
  useEffect(() => {
    if (sceneRef.current) {
      gsap.fromTo(
        sceneRef.current,
        { y: -10 },
        {
          y: 10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
      )
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      {/* Gradient orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
      <div
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <motion.div ref={leftRef} variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Welcome to TriVerse Studio
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
                We Are <span className="neon-text">TriVerse Studio</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light mb-8">
                Three Developers. One Vision.
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground/90 max-w-lg mb-12 leading-relaxed"
            >
              We build visually stunning, scalable & high-performance web applications with 3D experiences, motion
              design and modern tech stacks.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold text-base hover:shadow-lg hover:shadow-primary/50 transition-all neon-glow">
                Start a Project
              </button>
              <button className="px-8 py-4 rounded-full border-2 border-primary/50 text-foreground font-semibold hover:bg-primary/10 hover:border-primary transition-all">
                See Our Work
              </button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm text-muted-foreground/70 flex items-center gap-2 italic"
            >
              <span className="w-1 h-1 rounded-full bg-primary" />
              Premium Web Development • 3D Experiences • Modern UI Engineering
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN - 3D SCENE */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-primary/30 rounded-2xl backdrop-blur-sm" />

            {/* Animated grid background */}
            <div className="absolute inset-0 cyber-grid opacity-20" />

            <div ref={sceneRef} className="absolute inset-0">
              <Hero3DScene />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
