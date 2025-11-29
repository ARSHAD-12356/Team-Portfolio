"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹14,999",
      description: "For personal portfolios and small businesses.",
      features: [
        "Animated UI (GSAP + Framer Motion)",
        "Up to 5 pages",
        "Contact form + social integrations",
        "Full deployment",
      ],
    },
    {
      name: "Business",
      price: "₹29,999",
      description: "For companies and organizations.",
      features: [
        "Animated UI",
        "Up to 10 pages",
        "Admin dashboard",
        "Authentication + database",
        "Deployment + hosting setup",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "₹49,999+",
      description: "For stores & SaaS products.",
      features: [
        "Full system + payments",
        "Dashboard + APIs",
        "Admin + roles",
        "Deploy + monitoring + 1-month support",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Plans That Fit Every Need</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a package that aligns with your goals and scale your business with confidence.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: 5,
              }}
              className={`relative group ${plan.featured ? "md:scale-105" : ""}`}
            >
              <div
                className={`relative rounded-2xl p-8 backdrop-blur-lg border transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 shadow-2xl shadow-purple-500/30"
                    : "bg-card/50 border-purple-500/20 hover:border-purple-500/50"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-purple-400">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById("contact")
                    element?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Start a Project
                </motion.button>
              </div>

              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 ${
                  plan.featured
                    ? "bg-gradient-to-br from-purple-600 to-pink-600"
                    : "bg-gradient-to-br from-purple-500 to-cyan-500"
                }`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
