import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, ChevronDown, FileText, Download } from "lucide-react";
import {
  PROFILE,
  CONTACT,
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  EXPERIENCES,
  EDUCATION,
  LANGUAGES,
  CERTIFICATIONS,
} from "@/const";

export default function Home() {
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{PROFILE.name}</h1>
          <div className="flex gap-4">
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Compétences
            </a>
            <a href="#experiences" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Expériences
            </a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/profile-photo.png"
              alt="Yassine Barboura"
              className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg border-4 border-blue-500"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">{PROFILE.name}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">{PROFILE.title}</p>
          <p className="text-slate-500 dark:text-slate-400 mb-8">{PROFILE.school}</p>
          <p className="text-lg text-slate-700 dark:text-slate-200 max-w-2xl mx-auto mb-8">{PROFILE.bio}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`mailto:${CONTACT.email}`}>
              <Button className="gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </a>
            <a href={CONTACT.cv} download>
              <Button className="gap-2 bg-green-600 hover:bg-green-700">
                <Download className="w-4 h-4" />
                Télécharger CV
              </Button>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Compétences</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Compétences Techniques</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Langages</h4>
                  <div className="flex flex-wrap gap-2">
                    {TECHNICAL_SKILLS.languages.map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Frameworks & Outils</h4>
                  <div className="flex flex-wrap gap-2">
                    {TECHNICAL_SKILLS.frameworks.map((fw) => (
                      <span key={fw} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Systèmes & Réseaux</h4>
                  <div className="flex flex-wrap gap-2">
                    {TECHNICAL_SKILLS.systems.map((sys) => (
                      <span key={sys} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                        {sys}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Compétences Personnelles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {SOFT_SKILLS.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Expériences Professionnelles</h3>
          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <Card key={exp.id} className="cursor-pointer hover:shadow-lg transition" onClick={() => setExpandedExperience(expandedExperience === exp.id ? null : exp.id)}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      <CardDescription className="text-base mt-1">{exp.position}</CardDescription>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{exp.project}</p>
                    </div>
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedExperience === exp.id ? "rotate-180" : ""}`} />
                  </div>
                </CardHeader>
                {expandedExperience === exp.id && (
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Formation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{EDUCATION.degree}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{EDUCATION.school}</p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-2">Domaine: {EDUCATION.domain}</p>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Langues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {LANGUAGES.map((lang) => (
                  <div key={lang.language}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-slate-900 dark:text-white">{lang.language}</span>
                      <span className="text-sm text-slate-600 dark:text-slate-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${lang.percentage}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Certifications & Réalisations</h3>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-yellow-600 dark:text-yellow-400 mt-1">★</span>
                    <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Me Contacter</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a href={`mailto:${CONTACT.email}`} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition">
              <Mail className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Email</p>
              <p className="text-slate-600 dark:text-slate-400">{CONTACT.email}</p>
            </a>
            <a href={`tel:${CONTACT.phone}`} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition">
              <Phone className="w-8 h-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
              <p className="font-semibold text-slate-900 dark:text-white mb-1">Téléphone</p>
              <p className="text-slate-600 dark:text-slate-400">{CONTACT.phone}</p>
            </a>
          </div>
          <div className="flex gap-4 justify-center">
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-400">© 2025 {PROFILE.name}. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
