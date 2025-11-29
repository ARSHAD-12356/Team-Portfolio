"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="relative rounded-2xl overflow-hidden h-96 group">
            <img
              src="/professional-developer-portrait.jpg"
              alt="Developer portrait"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-primary transition-colors" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about creating exceptional digital experiences that solve real problems. With over 5 years
              of full-stack development experience, I specialize in building scalable applications using modern
              technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines technical expertise with a deep understanding of user needs, resulting in products
              that are both powerful and intuitive. I'm constantly learning and adapting to new technologies to stay at
              the forefront of web development.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                Let's Connect
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
