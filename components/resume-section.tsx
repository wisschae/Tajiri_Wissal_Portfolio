"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Code, Download } from "lucide-react"

const education = [
  { period: "2021 – Présent", institution: "Ecole Marocaine Des Sciences De L'ingénieur (EMSI)", degree: "Cycle Ingénieur - 5ème année Ingénierie Informatique et Réseaux - MIAGE", status: "En cours" },
  { period: "2018 – 2021", institution: "L.O. Ibn Souleimane Roudani", degree: "Baccalauréat", status: "Complété" },
]

const experience = [
  {
    year: "07/2025 – 08/2025",
    company: "Anouar Almostakbal (Groupe Anouar Invest)",
    role: "Stagiaire en Développement Full Stack",
    description:
      "Développement de BiscVIP - Solution de gestion intégrée (ERP) pour biscuiterie industrielle. Conception de la base de données et développement des modules de gestion.",
    technologies: ["Java", "Spring Boot", "Database"],
  },
  {
    year: "07/2024",
    company: "Finatech",
    role: "Stagiaire en Observation - Equipe Network & Security",
    description: "Participation à l'installation et à l'optimisation de l'infrastructure réseau. Rédige la documentation technique. Collaboration avec l'équipe pour analyser les vulnérabilités.",
    technologies: ["Réseaux", "Sécurité", "Documentation"],
  },
]

const projects = [
  { year: "2025", title: "Système de Reconnaissance Hybride", description: "Système d'accès sécurisé multi-niveaux avec reconnaissance faciale, MFA et moteur décisionnel IA.", technologies: ["Python", "Spring Boot", "AI/ML", "Sécurité"] },
  { year: "2025", title: "Plateforme MyCoLiving (Microservices)", description: "Plateforme de colocation en architecture microservices avec Eureka, Gateway, Kafka, Keycloak et bases PostgreSQL.", technologies: ["Spring Boot", "Microservices", "Kafka", "PostgreSQL"] },
  { year: "2025", title: "BiscVIP - ERP Biscuiterie", description: "Solution de gestion intégrée pour biscuiterie industrielle.", technologies: ["Java", "Spring Boot", "Database"] },
  { year: "2025", title: "Application Mobile Gestion Absences", description: "Application mobile de gestion des absences des étudiants pour l'établissement.", technologies: ["Android", "Mobile", "Java"] },
  { year: "2025", title: "MindCareAI", description: "Application web d'accompagnement émotionnel basée IA.", technologies: ["AI/ML", "Python", "React"] },
  { year: "2024", title: "Plateforme Gestion Université", description: "Application web complète pour gestion académique et administrative.", technologies: ["React", "Spring Boot", "Web"] },
  { year: "2023", title: "Interface Console Gestion Patients", description: "Interface console pour la gestion des dossiers et rendez-vous des patients.", technologies: ["Java", "Console", "Database"] },
  { year: "2023", title: "Gestion Ventes en Ligne", description: "Application web de gestion des ventes en ligne avec interface e-commerce.", technologies: ["Web", "E-commerce", "Database"] },
]

type CardType = "education" | "experience" | "projects" | "download" | null

export function ResumeSection() {
  const [activeCard, setActiveCard] = useState<CardType>(null)

  const handleCardClick = (cardType: CardType) => {
    setActiveCard(activeCard === cardType ? null : cardType)
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/WISSAL_TAJIRI_CV.pdf"
    link.download = "WISSAL_TAJIRI_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 section-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Parcours & CV</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Education Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${activeCard === "education" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
                }`}
              onClick={() => handleCardClick("education")}
            >
              <CardContent className="p-6 text-center">
                <GraduationCap className={`h-8 w-8 mx-auto mb-4 ${activeCard === "education" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "education" ? "text-white" : "text-gray-900"}`}>
                  Formation
                </h3>
                <p className={`text-sm ${activeCard === "education" ? "text-blue-100" : "text-gray-500"}`}>Parcours académique</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${activeCard === "experience" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
                }`}
              onClick={() => handleCardClick("experience")}
            >
              <CardContent className="p-6 text-center">
                <Briefcase className={`h-8 w-8 mx-auto mb-4 ${activeCard === "experience" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "experience" ? "text-white" : "text-gray-900"}`}>
                  Expériences
                </h3>
                <p className={`text-sm ${activeCard === "experience" ? "text-blue-100" : "text-gray-500"}`}>Parcours professionnel</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Academic Projects Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${activeCard === "projects" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
                }`}
              onClick={() => handleCardClick("projects")}
            >
              <CardContent className="p-6 text-center">
                <Code className={`h-8 w-8 mx-auto mb-4 ${activeCard === "projects" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "projects" ? "text-white" : "text-gray-900"}`}>
                  Projets
                </h3>
                <p className={`text-sm ${activeCard === "projects" ? "text-blue-100" : "text-gray-500"}`}>Projets réalisés</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Download CV Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="cursor-pointer">
            <Card
              className={`border hover:border-blue-500 transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${activeCard === "download" ? "bg-blue-600 border-blue-500 shadow-blue-200" : "bg-gray-50"
                }`}
              onClick={() => handleCardClick("download")}
            >
              <CardContent className="p-6 text-center">
                <Download className={`h-8 w-8 mx-auto mb-4 ${activeCard === "download" ? "text-white" : "text-blue-600"}`} />
                <h3 className={`text-lg font-semibold mb-2 ${activeCard === "download" ? "text-white" : "text-gray-900"}`}>
                  Télécharger CV
                </h3>
                <p className={`text-sm ${activeCard === "download" ? "text-blue-100" : "text-gray-500"}`}>Obtenir mon CV</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Content Display */}
        <AnimatePresence mode="wait">
          {activeCard && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <Card className="bg-gray-50 border rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <div>
                    {activeCard === "education" && (
                      <div className="space-y-4">
                        {education.map((edu, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="p-3 border rounded-lg bg-gray-100">
                            <div className="flex justify-between items-start mb-2">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200">
                                {edu.period}
                              </Badge>
                              <Badge variant="outline" className="border-gray-300 text-gray-600">
                                {edu.status}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                            <p className="text-gray-600">{edu.institution}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeCard === "experience" && (
                      <div className="space-y-4">
                        {experience.map((exp, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="p-3 border rounded-lg bg-gray-100">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200 mb-2">
                              {exp.year}
                            </Badge>
                            <h4 className="font-semibold text-gray-900 mb-1">{exp.role}</h4>
                            <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeCard === "projects" && (
                      <div className="space-y-4">
                        {projects.map((project, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="p-3 border rounded-lg bg-gray-100">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200 mb-2">
                              {project.year}
                            </Badge>
                            <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
                            <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {activeCard === "download" && (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="text-center py-8">
                        <Download className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Télécharger mon CV</h3>
                        <p className="text-gray-600 mb-6">Obtenez la dernière version de mon CV au format PDF</p>
                        <Button
                          onClick={handleDownloadCV}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger le CV
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
