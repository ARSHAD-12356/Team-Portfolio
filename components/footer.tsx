"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: "👨‍💻", label: "GitHub", url: "#" },
    { icon: "🔗", label: "LinkedIn", url: "#" },
    { icon: "📷", label: "Instagram", url: "#" },
    { icon: "✉️", label: "Email", url: "#" },
  ]

  return (
    <footer className="relative border-t border-primary/10 bg-background/50 backdrop-blur-sm">
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                TriVerse Studio
              </span>
            </h3>
            <p className="text-muted-foreground">
              Building visually stunning, scalable & high-performance web applications with 3D experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Services", "Projects", "Team", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">→</span>
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-foreground">Connect With Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg bg-card/50 border border-primary/20 flex items-center justify-center text-xl hover:border-primary transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground text-sm"
        >
          <p>© {currentYear} TriVerse Studio — Built by Arshad, Tushar & Chhotu</p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ textDecoration: "underline" }}
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ textDecoration: "underline" }}
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
