"use client"

import { motion } from "framer-motion"

const services = [
  {
    icon: "🎨",
    title: "Custom 3D Animated Websites",
    description: "Immersive web experiences with GSAP + Three.js animations that captivate users.",
  },
  {
    icon: "⚡",
    title: "MERN Full-Stack Applications",
    description: "Scalable, high-performance applications built with React, Node.js, and MongoDB.",
  },
  {
    icon: "📊",
    title: "SaaS / Dashboards / Admin Panels",
    description: "Professional dashboard solutions with real-time data visualization and analytics.",
  },
  {
    icon: "🎯",
    title: "Portfolio + Branding + UI/UX",
    description: "Complete branding solutions that showcase your business with modern design.",
  },
]

export default function ServicesSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-background via-background/50 to-background">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Our Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Services We Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver cutting-edge solutions tailored to your vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glow-card p-6 rounded-2xl cursor-pointer group h-full transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
