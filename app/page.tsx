"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import PricingSection from "@/components/pricing-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import TeamSection from "@/components/team-section"
import TechStackSection from "@/components/tech-stack-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import GlowCursor from "@/components/glow-cursor"
import ParticleBackground from "@/components/particle-background"
import AIChatbot from "@/components/ai-chatbot"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      <GlowCursor />
      <AIChatbot />
      <FloatingWhatsAppButton />
      <Navigation />
      <HeroSection scrollY={scrollY} />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <TeamSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
