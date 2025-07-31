import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, User, Code2 } from "lucide-react"
import { getAboutData } from "@/api/portfolio"
import { useLanguage } from "@/contexts/useLanguage"

interface AboutData {
  description: string[]
  skills: string[]
  profileImage: string
}

export function AboutSection() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null)
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    console.log("AboutSection mounted, fetching about data")
    const fetchAboutData = async () => {
      try {
        const data = await getAboutData()
        setAboutData(data as AboutData)
        console.log("About data fetched successfully")
      } catch (error) {
        console.error("Error fetching about data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAboutData()
  }, [])

  if (loading) {
    return (
      <section id="about" className="min-h-screen flex items-center justify-center">
        <div className="terminal-window p-8">
          <div className="pt-8 text-primary font-mono">
            <span className="text-accent">{t('about.loading')}</span>
            <div className="animate-pulse mt-4">████████████████████</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className="min-h-screen flex items-center py-20 scanlines">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              <span className="text-accent"></span> {t('about.title')}
            </h2>
            <div className="text-muted-foreground font-mono">
              <span className="text-accent">{t('about.command')}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {aboutData?.description.map((paragraph, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="terminal-window p-6"
                >
                  <div className="pt-8">
                    <p className="text-primary font-mono text-sm leading-relaxed">
                      <span className="text-accent">{t('about.output')}{index + 1}:</span><br/>
                      <span className="text-muted-foreground">{paragraph}</span>
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button className="retro-button mt-6 px-6 py-3 rounded-sm">
                  <Download className="mr-2 h-4 w-4" />
                  {t('about.download')}
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="retro-card overflow-hidden">
                <CardContent className="p-8">
                  <div className="aspect-square rounded-sm overflow-hidden mb-6 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary">
                    <div className="text-center">
                      <User className="h-24 w-24 text-primary mb-4 mx-auto" />
                      <span className="text-2xl font-bold text-primary font-mono">{t('about.profile')}</span>
                    </div>
                  </div>

                  <div className="terminal-window p-4 mb-4">
                    <div className="pt-8">
                      <h3 className="text-primary font-mono font-semibold mb-2">
                        <Code2 className="inline h-4 w-4 mr-2" />
                        {t('about.skills')}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {aboutData?.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge className="retro-badge w-full justify-center py-1">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}