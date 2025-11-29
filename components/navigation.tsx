"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "team", label: "Team" },
    { id: "techstack", label: "Tech Stack" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              TriVerse
            </span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-12">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition-all duration-300 relative group ${activeSection === section.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {section.label}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover:w-full transition-all duration-500 rounded-full shadow-lg shadow-primary/50 w-0" />
              </a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white text-sm font-semibold shadow-lg hover:shadow-primary/50 transition-shadow neon-glow"
          >
            Start a Project
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
