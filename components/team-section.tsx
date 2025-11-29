"use client"

import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Arshad",
    role: "Full-Stack Developer",
    expertise: "Backend + 3D Logic",
    icon: "👨‍💼",
    socials: ["github", "linkedin", "twitter"],
  },
  {
    name: "Tushar",
    role: "Frontend & Motion Developer",
    expertise: "UI/UX Animation",
    icon: "👨‍💻",
    socials: ["github", "linkedin", "dribbble"],
  },
  {
    name: "Chhotu",
    role: "Full-Stack & API Developer",
    expertise: "Database & APIs",
    icon: "👨‍🔬",
    socials: ["github", "linkedin", "twitter"],
  },
]

export default function TeamSection() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Meet the Creators</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Our Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three developers united by a passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -12 }} className="group relative">
              <div className="glow-card p-8 rounded-2xl h-full flex flex-col">
                {/* Avatar */}
                <div className="mb-6 text-7xl group-hover:scale-110 transition-transform duration-300">
                  {member.icon}
                </div>

                {/* Info */}
                <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground mb-6 flex-1">{member.expertise}</p>

                {/* Social Links */}
                <div className="flex gap-3 pt-6 border-t border-primary/10">
                  {member.socials.map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors flex items-center justify-center text-sm font-semibold"
                    >
                      {social.charAt(0).toUpperCase()}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
