"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, while complex applications with custom features may take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What are the payment terms?",
      answer:
        "We offer flexible payment terms including upfront deposits, milestone-based payments, and full project payments. Typically, we require 50% upfront and 50% on project completion. Custom payment plans are available for larger projects.",
    },
    {
      question: "Do you provide post-deployment support?",
      answer:
        "Yes! All our projects include post-deployment support. The duration depends on your package—Starter includes 1 month, Business includes 2 months, and Premium includes 3 months with dedicated support.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "We specialize in redesigning existing websites to be more modern, performant, and visually appealing. We'll analyze your current site and provide recommendations for improvement.",
    },
    {
      question: "Can we schedule a meeting before starting?",
      answer:
        "Of course! We encourage an initial consultation to discuss your project requirements, goals, and timeline. You can schedule a call with us via WhatsApp or email. No commitment necessary.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our services.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown size={20} className="text-primary" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-card/20 border border-purple-500/10 border-t-0 rounded-b-2xl">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
