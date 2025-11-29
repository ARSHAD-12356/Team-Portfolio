"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    requirement: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", company: "", email: "", requirement: "" })
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Let's Build Something <span className="neon-text">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Company Name</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3 text-foreground">Project Requirement *</label>
              <textarea
                value={formData.requirement}
                onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-card/50 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-shadow neon-glow"
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick contact buttons */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact</h3>

              <motion.a
                href="https://wa.me/1234567890"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-6 glow-card rounded-2xl group cursor-pointer"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform">💬</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">Message us directly</p>
                </div>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>

              <motion.a
                href="mailto:hello@triverse.studio"
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-6 glow-card rounded-2xl group cursor-pointer"
              >
                <div className="text-4xl group-hover:scale-125 transition-transform">✉️</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">hello@triverse.studio</p>
                </div>
                <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>
            </div>

            {/* Neon network animation placeholder */}
            <div className="relative h-64 rounded-2xl glow-card overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 cyber-grid opacity-20" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="text-6xl opacity-50"
              >
                🌐
              </motion.div>
              <p className="absolute text-muted-foreground text-xs text-center px-4">
                Interactive network animation (Three.js)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
