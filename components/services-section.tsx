"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Brain, Shield, Network, Laptop } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Développement Full-Stack",
    description: "Applications web complètes avec React, Spring Boot et bases de données modernes.",
  },
  {
    icon: Network,
    title: "Réseaux & Infrastructure",
    description: "Installation, configuration et optimisation d'infrastructures réseau sécurisées.",
  },
  {
    icon: Brain,
    title: "Intelligence Artificielle",
    description: "Solutions basées sur le Machine Learning et l'IA pour l'analyse de données.",
  },
  {
    icon: Shield,
    title: "Sécurité Informatique",
    description: "Audits de sécurité, analyse de vulnérabilités et mise en place de solutions sécurisées.",
  },
  {
    icon: Database,
    title: "Gestion de Données",
    description: "Conception d'architectures de bases de données robustes et performantes.",
  },
  {
    icon: Laptop,
    title: "Applications Desktop & Mobile",
    description: "Développement d'applications desktop (Java) et mobiles (Android).",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 section-nude-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">Domaines d'Expertise</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Compétences techniques et domaines de spécialisation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 bg-slate-800/80 border-blue-400/40">
                  <CardContent className="p-6">
                    <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
