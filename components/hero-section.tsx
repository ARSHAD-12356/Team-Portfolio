"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

interface HeroSectionProps {
  scrollY: number
}

export default function HeroSection({ scrollY }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)

  // Scroll animation removed to prevent jitter
  // useEffect(() => {
  //   if (!leftRef.current) return
  //   gsap.to(leftRef.current, { y: scrollY * 0.3, ... })
  // }, [scrollY])

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

          {/* RIGHT COLUMN - PREMIUM 3D CARD */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative h-auto w-full mx-auto flex items-center justify-center"
            style={{
              transform: "translateZ(0) !important",
              willChange: "auto !important",
              backfaceVisibility: "hidden",
              perspective: "1000px",
            } as any}
          >
            {/* Gradient glow background */}
            <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-3xl opacity-40 animate-pulse" 
              style={{ animationDuration: '4s' }} />
            
            {/* Glassmorphism premium card */}
            <div className="relative w-full" 
              style={{
                aspectRatio: '4/3',
                maxWidth: 'clamp(300px, 45vw, 600px)',
              }}
            >
              {/* Neon border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-75 blur-xl" />
              
              {/* Card container with blur background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-900/80 rounded-2xl backdrop-blur-2xl border border-primary/20 overflow-hidden shadow-2xl" />
              
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl pointer-events-none" />
              
              {/* Animated grid overlay */}
              <div className="absolute inset-0 cyber-grid opacity-10 rounded-2xl" />

              {/* 3D Scene */}
              <div ref={sceneRef} className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* <Hero3DScene /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
