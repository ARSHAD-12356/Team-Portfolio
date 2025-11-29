"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Saurabh",
      role: "Startup Founder",
      location: "India",
      content: "Professional team with incredible attention to detail.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Neha",
      role: "Business Owner",
      location: "India",
      content: "Our ecommerce sales increased 70% after redesign.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "John",
      role: "Tech Entrepreneur",
      location: "USA",
      content: "Fast delivery, impressive communication and 3D UI was mind-blowing.",
      rating: 5,
      avatar: "👨‍🔬",
    },
    {
      name: "Aman",
      role: "CTO",
      location: "India",
      content: "Best agency for dashboards and admin systems.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Karan",
      role: "CEO",
      location: "India",
      content: "They transformed our idea into a full SaaS product.",
      rating: 5,
      avatar: "👨‍🎓",
    },
    {
      name: "Shruti",
      role: "Influencer",
      location: "India",
      content: "Worth every rupee — highly recommended!",
      rating: 5,
      avatar: "👩‍🦰",
    },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<any>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    let animationId: number

    const animate = () => {
      if (!isHovering && container) {
        container.scrollLeft += 1
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isHovering])

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by founders, companies and entrepreneurs worldwide.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="flex-shrink-0 w-96 p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg hover:border-purple-500/50 transition-all duration-300 group"
            >
              {/* 5-star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-foreground/90 mb-4 italic">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10 bg-gradient-to-br from-purple-600 to-pink-600"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
