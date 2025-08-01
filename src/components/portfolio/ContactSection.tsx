import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/useToast";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Copy,
  Terminal,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/contexts/useLanguage";

export function ContactSection() {
  const { toast } = useToast();

  const { t } = useLanguage();

  const copyEmail = () => {
    navigator.clipboard.writeText("steveceto@gmail.com");
    toast({
      title: t("contact.copied"),
      description: t("contact.copiedDesc"),
    });
  };
  const copyPhone = () => {
    navigator.clipboard.writeText("237659461748");
    toast({
      title: t("phone.copied"),
      description: t("phone.copiedDesc"),
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 scanlines"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-mono mb-4">
              <span className="text-accent"></span> {t("contact.title")}
            </h2>
            <div className="text-muted-foreground font-mono mb-8">
              <span className="text-accent">{t("contact.command")}</span>
            </div>
          </div>

          <div className="terminal-window p-6 mb-16 max-w-3xl mx-auto">
            <div className="pt-8">
              <p className="text-primary font-mono text-sm leading-relaxed text-center">
                <span className="text-accent">{t("contact.status")}</span>
                <br />
                <span className="text-muted-foreground whitespace-pre-line pt-4">
                  {t("contact.description")}
                </span>
              </p>
            </div>
          </div>

          <div className="max-w-3xl  mb-16 mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary font-mono">
                    <Terminal className="inline h-6 w-6 mr-2" />
                    {t("contact.info")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="terminal-window p-4">
                    <div className="pt-8 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-mono text-primary text-xs md:text-md">
                            {t("contact.email")}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-muted-foreground font-mono text-xs md:text-md">
                              steveceto@gmail.com
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={copyEmail}
                              className="h-6 w-6 p-0 hover:bg-primary/10"
                            >
                              <Copy className="h-3 w-3 text-primary" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-mono text-primary text-xs md:text-md">
                            {t("contact.phone")}
                          </p>
                          <div className="flex items-center gap-2">
                            <p className="text-muted-foreground font-mono text-xs md:text-md">
                              237659461748
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={copyPhone}
                              className="h-6 w-6 p-0 hover:bg-primary/10"
                            >
                              <Copy className="h-3 w-3 text-primary" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-mono text-primary text-xs md:text-md">
                            {t("contact.location")}
                          </p>
                          <p className="text-muted-foreground font-mono text-xs md:text-md">
                            {t("contact.localisation")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="terminal-window p-4">
                    <div className="pt-8">
                      <p className="font-mono text-primary text-sm mb-4">
                        {t("contact.social")}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 sm:gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm text-xs sm:text-sm"
                        >
                          <a
                            href="https://github.com/stevecet/"
                            target="_blank"
                            className="flex gap-1 sm:gap-2 items-center"
                          >
                            <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                            GIT
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 sm:gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm text-xs sm:text-sm"
                        >
                          <a
                            href="https://www.linkedin.com/in/gilchrist-steve-aurel-veceto-6a4216202/"
                            target="_blank"
                            className="flex gap-1 sm:gap-2 items-center"
                          >
                            <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                            LINKEDIN
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1 sm:gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm text-xs sm:text-sm"
                        >
                          <a
                            href="https://wa.me/237659461748"
                            target="_blank"
                            className="flex gap-1 sm:gap-2 items-center"
                          >
                            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            WHATSAPP
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
