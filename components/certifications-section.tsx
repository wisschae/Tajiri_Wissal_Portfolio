"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

const certifications = [
  { name: "Oracle Cloud DevOps", issuer: "Oracle", date: "Oct 2025" },
  { name: "React Basics", issuer: "Meta", date: "Janv 2025" },
  { name: "Java OOP", issuer: "Pennsylvania Univ", date: "Janv 2025" },
  { name: "Docker Kubernetes", issuer: "IBM", date: "Mai 2025" },
  { name: "Azure Networks", issuer: "Whizlabs", date: "Mai 2025" },
  { name: "Software Design", issuer: "Hong Kong Univ", date: "Mai 2024" },
  { name: "Programming Python", issuer: "Michigan Univ", date: "Mai 2024" },
  { name: "Unix Workbench", issuer: "Polytechnique", date: "Mars 2024" },
  { name: "JavaScript Interactivity", issuer: "Michigan Univ", date: "Janv 2024" },
  { name: "HTML CSS JavaScript", issuer: "Johns Hopkins", date: "Mai 2023" },
  { name: "Arduino & C", issuer: "UC Irvine", date: "Avril 2023" },
  { name: "SQL Language", issuer: "Colorado Boulder", date: "Avril 2023" },
  { name: "Impact & SDGs", issuer: "Duke University", date: "Mai 2022" },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 section-dark-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Qualifications professionnelles validant mon expertise technique
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 bg-slate-800/80 border-blue-400/40">
                <CardContent className="p-6">
                  <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-blue-300" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{cert.name}</h3>
                  <p className="text-xs text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-blue-300 font-medium">{cert.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
