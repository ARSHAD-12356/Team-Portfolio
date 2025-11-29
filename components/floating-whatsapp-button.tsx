"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

const FloatingWhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918873867316?text=Hi+TriVerse+Studio,+I+want+to+start+a+project"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-30 w-16 h-16 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-full bg-green-400/30 animate-pulse"></div>
      <MessageCircle size={28} className="relative z-10" />
    </motion.a>
  )
}

export default FloatingWhatsAppButton
