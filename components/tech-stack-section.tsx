"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GSAP", icon: "✨" },
  { name: "Three.js", icon: "📦" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Express", icon: "⚡" },
  { name: "Redux", icon: "🔴" },
]

export default function TechStackSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const marquee = marqueeRef.current
    const content = contentRef.current
    if (!marquee || !content) return

    let animationId: number
    let scrollPos = 0
    const scrollSpeed = 1 // Desktop speed (1px per frame)

    const animate = () => {
      if (!isHovering) {
        scrollPos += scrollSpeed
        // Reset to start for seamless loop
        if (scrollPos >= content.scrollWidth / 2) {
          scrollPos = 0
        }
        marquee.scrollLeft = scrollPos
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isHovering])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="techstack" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our Arsenal</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Tech Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tech that powers our creativity. We use the latest and greatest technologies to build amazing experiences.
          </p>
        </motion.div>

        <div
          ref={marqueeRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative overflow-hidden mask-gradient"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            ref={contentRef}
            className="flex gap-6 pb-4 md:pb-6 will-change-transform"
            style={{
              width: "max-content",
            }}
          >
            {/* Render tech cards twice for seamless loop */}
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div key={`${tech.name}-${index}`} whileHover={{ scale: 1.1, y: -5 }} className="flex-shrink-0">
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-2xl glow-card flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-primary/50 transition-all duration-300">
                  <div className="text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="font-semibold text-xs md:text-sm text-foreground">{tech.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground italic">
            3D rotating cube animation showcasing our tech stack will be rendered here with Three.js
          </p>
        </motion.div>
      </div>
    </section>
  )
}
