"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Tech Corp",
    period: "2022 - Present",
    description:
      "Led development of microservices architecture, mentored junior developers, improved performance by 40%",
  },
  {
    role: "Full-Stack Developer",
    company: "StartUp Inc",
    period: "2020 - 2022",
    description: "Built scalable web applications, implemented real-time features, managed database optimization",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2019 - 2020",
    description: "Created responsive UIs, worked with design teams, optimized web performance",
  },
]

export default function ExperienceTimeline() {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/30 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-primary/50"
            >
              <motion.div
                className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary -translate-x-2.5 mt-1"
                whileHover={{ scale: 1.5 }}
              />

              <div className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <p className="text-primary text-sm font-semibold mb-3">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
