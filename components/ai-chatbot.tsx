"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mic, Volume2, X, Minimize2, Send } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const CHATBOT_KNOWLEDGE = {
  team: {
    Arshad: "Arshad is our Full-Stack Developer specializing in Backend development and 3D Logic implementation.",
    Tushar: "Tushar is our Frontend & Motion Developer expert in UI/UX design, GSAP animations, and Framer Motion.",
    Chhotu: "Chhotu is our Full-Stack & API Developer handling Database design, API development, and Infrastructure.",
  },
  services: [
    "3D animated websites using Three.js and GSAP",
    "MERN full-stack applications",
    "Admin panels and SaaS dashboards",
    "Business portfolios and branding sites",
    "E-Commerce web applications",
  ],
  projects:
    "We've worked on E-Commerce platforms with 3D product viewers, Real-time Analytics dashboards, AI-powered content managers, and Motion design portfolio generators.",
  contact: "You can reach us via WhatsApp or email us at hello@triverse.studio",
  pricing:
    "Pricing varies based on project scope. Contact us to discuss your specific requirements and get a custom quote.",
  hiring:
    "Yes! We're available for freelance projects and contract work. Get in touch with us to discuss your project needs.",
  default:
    "That's a great question! I'm specialized in TriVerse Studio information. Feel free to ask about our team, services, projects, tech stack, or how to hire us.",
}

const QUICK_REPLIES = ["Services", "Pricing", "Projects", "Tech Stack", "Contact", "Hire Us"]

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()

  if (message.includes("service")) {
    return `We offer: ${CHATBOT_KNOWLEDGE.services.join(", ")}`
  }
  if (message.includes("arshad") || message.includes("backend")) {
    return CHATBOT_KNOWLEDGE.team.Arshad
  }
  if (message.includes("tushar") || message.includes("frontend") || message.includes("motion")) {
    return CHATBOT_KNOWLEDGE.team.Tushar
  }
  if (message.includes("chhotu") || message.includes("api") || message.includes("database")) {
    return CHATBOT_KNOWLEDGE.team.Chhotu
  }
  if (message.includes("team")) {
    return "Our team consists of 3 talented developers: Arshad (Backend & 3D), Tushar (Frontend & Motion), and Chhotu (Full-Stack & APIs). Together we create amazing web experiences."
  }
  if (message.includes("project")) {
    return CHATBOT_KNOWLEDGE.projects
  }
  if (message.includes("contact") || message.includes("email") || message.includes("whatsapp")) {
    return CHATBOT_KNOWLEDGE.contact
  }
  if (message.includes("price") || message.includes("cost")) {
    return CHATBOT_KNOWLEDGE.pricing
  }
  if (message.includes("hire") || message.includes("freelance") || message.includes("work")) {
    return CHATBOT_KNOWLEDGE.hiring
  }
  if (message.includes("tech") || message.includes("stack")) {
    return "We use React, Next.js, Node.js, MongoDB, GSAP, Three.js, Tailwind CSS, Express, and Redux for modern web development."
  }

  return CHATBOT_KNOWLEDGE.default
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      text: "Hey 👋 I'm the TriVerse Assistant. Ask anything about our team, projects, services or collaboration.",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Initialize Web Speech API
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.onstart = () => setIsListening(true)
      recognitionRef.current.onend = () => setIsListening(false)
      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join("")
        if (transcript) {
          setInputValue(transcript)
          handleSendMessage(transcript)
        }
      }
    }
  }, [])

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])

      // Auto-speak bot response
      speakMessage(botResponse.text)
    }, 500)
  }

  const handleMicrophone = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop()
      } else {
        recognitionRef.current.start()
      }
    }
  }

  const speakMessage = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 1
      utterance.pitch = 1
      utterance.volume = 1
      setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  const handleStopSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  return (
    <>
      {/* Floating chatbot button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen)
          setIsMinimized(false)
        }}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-primary/50 transition-shadow flex items-center justify-center neon-glow"
      >
        {isOpen ? <X size={24} /> : <Mic size={24} />}
      </motion.button>

      {/* Chatbot window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 max-h-96 bg-card border border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden glow-card"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-4 border-b border-primary/20 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">TriVerse Assistant</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Minimize2 size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                          msg.sender === "user"
                            ? "bg-primary text-white rounded-br-none"
                            : "bg-primary/20 text-foreground rounded-bl-none border border-primary/30"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick replies */}
                <div className="px-4 py-2 border-t border-primary/10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {QUICK_REPLIES.map((reply) => (
                      <motion.button
                        key={reply}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/30"
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Input area */}
                <div className="p-4 border-t border-primary/10 flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30 text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleSendMessage()}
                    className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    <Send size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={handleMicrophone}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening ? "bg-accent text-white" : "bg-primary/20 text-primary hover:bg-primary/30"
                    }`}
                  >
                    <Mic size={16} />
                  </motion.button>
                  {isSpeaking && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={handleStopSpeech}
                      className="p-2 rounded-lg bg-secondary text-white hover:bg-secondary/90 transition-colors"
                    >
                      <Volume2 size={16} />
                    </motion.button>
                  )}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
