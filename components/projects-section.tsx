"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform with 3D Product Viewer",
    description: "Revolutionary online store with interactive 3D product visualization and AR preview capabilities.",
    stack: ["Next.js", "Three.js", "Stripe", "MongoDB"],
    preview: "🛍️",
    tags: ["Featured", "3D"],
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Enterprise-grade dashboard with real-time data visualization and predictive insights.",
    stack: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    preview: "📊",
    tags: ["SaaS", "Real-time"],
  },
  {
    title: "AI-Powered Content Manager",
    description: "Intelligent content management system with AI-powered recommendations and automation.",
    stack: ["Next.js", "AI/ML", "Firebase", "Tailwind"],
    preview: "🤖",
    tags: ["AI", "Automation"],
  },
  {
    title: "Motion Design Portfolio Generator",
    description: "Auto-generating premium portfolios with GSAP animations and custom branding.",
    stack: ["React", "GSAP", "Express", "MongoDB"],
    preview: "✨",
    tags: ["Animation", "Generator"],
  },
]

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcase of our recent work—scalable applications, stunning UX, and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden"
            >
              <div className="relative glow-card p-8 h-full cursor-pointer">
                <div className="mb-6 text-6xl opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  {project.preview}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-md text-xs font-semibold bg-accent/20 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-6 border-t border-primary/10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-sm font-medium"
                  >
                    Live Demo
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    View Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
