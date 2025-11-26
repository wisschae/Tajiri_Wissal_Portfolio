"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background - Custom Blue Palette */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#395886] via-[#628ECB] to-[#395886]">
        {/* Light blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8AAEE0]/20 to-[#B1C9EF]/10" />
        {/* Blue accent glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#628ECB]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8AAEE0]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            WISSAL TAJIRI
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-light mb-8 text-[#B1C9EF]"
          >
            Software Engineer — MIAGE & Computer Networks
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-[#D5DEEF] max-w-2xl mx-auto leading-relaxed"
          >
            Développeuse passionnée par la conception de solutions numériques robustes, sécurisées et élégantes. Spécialisée en développement full-stack, réseaux et intelligence artificielle.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("resume")}
              className="text-lg px-8 py-3 glow-effect hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Voir Mes Projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="text-lg px-8 py-3 border-blue-400 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-500 transition-all duration-300"
            >
              Me Contacter
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://linkedin.com/in/wissal-tajiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:tajiriwissal98@gmail.com"
              className="text-gray-300 hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
