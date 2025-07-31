import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Terminal, Folder } from "lucide-react";
import { certifications } from "@/api/portfolio";
import { useLanguage } from "@/contexts/useLanguage";


export function CertificationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 scanlines"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              <span className="text-accent"></span> {t("certification.title")}
            </h2>
            <div className="text-muted-foreground font-mono">
              <span className="text-accent">{t("certification.command")}</span>
            </div>
          </div>


          <div className="grid">
            {certifications.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="retro-card h-full">
                  <CardHeader className="pb-4">
                    <div className="aspect-video rounded-sm bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center border-2 border-primary/50">
                      <div className="text-center">
                        <Folder className="h-12 w-12 text-primary mb-2" />
                        <span className="text-2xl font-bold text-primary font-mono">
                          {project.title.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-primary font-mono">
                      <Terminal className="inline h-4 w-4 mr-2" />
                      {project.title.toUpperCase()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="terminal-window p-3">
                      <div className="pt-6">
                        <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                          <span className="text-accent">
                            {t("projects.description")}
                          </span>
                          <br />
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="terminal-window p-3">
                      <div className="pt-6">
                        <div className="text-primary font-mono text-xs mb-2">
                          <span className="text-accent">
                            {t("projects.tech")}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              className="retro-badge text-xs justify-center"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm flex-1"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            className="flex gap-2"
                          >
                            <Github className="h-4 w-4" />
                            {t("projects.code")}
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          className="retro-button gap-2 rounded-sm flex-1"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            className="flex gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {t("projects.demo")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
