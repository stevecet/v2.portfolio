import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Terminal } from "lucide-react"
import { getExperienceData } from "@/api/portfolio"
import { useLanguage } from "@/contexts/useLanguage"

interface Experience {
  _id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  current: boolean
  description: string[]
  technologies: string[]
  website?: string
}

export function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("")
  const { t } = useLanguage()

  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const data = await getExperienceData()
        const experienceData = data as { experiences: Experience[] }
        setExperiences(experienceData.experiences)
        if (experienceData.experiences.length > 0) {
          setActiveTab(experienceData.experiences[0]._id)
        }
      } catch (error) {
        console.error("Error fetching experience data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchExperienceData()
  }, [])

  if (loading) {
    return (
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <div className="terminal-window p-8">
          <div className="pt-8 text-primary font-mono">
            <span className="text-accent">{t('experience.loading')}</span>
            <div className="animate-pulse mt-4">████████████████████</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 scanlines">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-primary font-mono mb-4">
              <span className="text-accent "></span> {t('experience.title')}
            </h2>
            <div className="text-muted-foreground font-mono">
              <span className="text-accent text-sm md:text-md">{t('experience.command')}</span>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8 bg-black border border-primary rounded-sm">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp._id}
                  value={exp._id}
                  className="text-sm font-mono font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-primary border-r border-primary/30 last:border-r-0 rounded-none"
                >
                  {exp.company.toUpperCase()}
                </TabsTrigger>
              ))}
            </TabsList>

            {experiences.map((exp) => (
              <TabsContent key={exp._id} value={exp._id}>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="retro-card">
                    <CardHeader>
                      <CardTitle className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-primary font-mono">
                            <Terminal className="inline h-6 w-6 mr-2" />
                            {exp.position.toUpperCase()}
                          </h3>
                          <p className="text-lg text-accent font-mono">
                            @ {exp.company.toUpperCase()}
                          </p>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                            <Calendar className="h-4 w-4" />
                            {exp.startDate} - {exp.current ? t('experience.present') : exp.endDate}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                            <MapPin className="h-4 w-4" />
                            {exp.location.toUpperCase()}
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="terminal-window p-4">
                        <div className="pt-8">
                          <div className="text-primary font-mono text-sm mb-3">
                            <span className="text-accent">{t('experience.tasks')}</span>
                          </div>
                          <ul className="space-y-3">
                            {exp.description.map((item, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 text-muted-foreground font-mono text-sm"
                              >
                                <span className="text-primary mt-1">&gt;</span>
                                <span className="text-xs md:text-sm">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="terminal-window p-4">
                        <div className="pt-8">
                          <div className="text-primary font-mono text-sm mb-3">
                            <span className="text-accent">{t('experience.tech')}</span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                            {exp.technologies.map((tech, index) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Badge className="retro-badge w-full justify-center">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}