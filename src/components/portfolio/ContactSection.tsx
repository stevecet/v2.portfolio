import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/useToast"
import { useForm } from "react-hook-form"
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send, Copy, Terminal, MessageSquare } from "lucide-react"
import { sendContactMessage } from "@/api/portfolio"
import { useLanguage } from "@/contexts/useLanguage"

interface ContactForm {
  name: string
  email: string
  message: string
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>()
  const { t } = useLanguage()

  const onSubmit = async (data: ContactForm) => {
    console.log("Submitting contact form:", data)
    setIsSubmitting(true)

    try {
      await sendContactMessage(data)
      toast({
        title: t('contact.success'),
        description: t('contact.successDesc'),
      })
      reset()
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: t('contact.error'),
        description: t('contact.errorDesc'),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("john.doe@example.com")
    toast({
      title: t('contact.copied'),
      description: t('contact.copiedDesc'),
    })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 scanlines">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-mono mb-4">
              <span className="text-accent"></span> {t('contact.title')}
            </h2>
            <div className="text-muted-foreground font-mono mb-8">
              <span className="text-accent">{t('contact.command')}</span>
            </div>
          </div>

          <div className="terminal-window p-6 mb-16 max-w-3xl mx-auto">
            <div className="pt-8">
              <p className="text-primary font-mono text-sm leading-relaxed text-center">
                <span className="text-accent">{t('contact.status')}</span><br/>
                <span className="text-muted-foreground whitespace-pre-line">
                  {t('contact.description')}
                </span>
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
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
                    {t('contact.info')}
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
                          <p className="font-mono text-primary text-sm">{t('contact.email')}</p>
                          <div className="flex items-center gap-2">
                            <p className="text-muted-foreground font-mono text-sm">john.doe@example.com</p>
                            <Button variant="ghost" size="sm" onClick={copyEmail} className="h-6 w-6 p-0 hover:bg-primary/10">
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
                          <p className="font-mono text-primary text-sm">{t('contact.location')}</p>
                          <p className="text-muted-foreground font-mono text-sm">SAN_FRANCISCO_CA</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-sm bg-primary/20 border border-primary">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-mono text-primary text-sm">{t('contact.phone')}</p>
                          <p className="text-muted-foreground font-mono text-sm">+1_(555)_123-4567</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="terminal-window p-4">
                    <div className="pt-8">
                      <p className="font-mono text-primary text-sm mb-4">{t('contact.social')}</p>
                      <div className="grid grid-cols-3 gap-3">
                        <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm">
                          <Github className="h-4 w-4" />
                          GIT
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm">
                          <Linkedin className="h-4 w-4" />
                          LINK
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm">
                          <Twitter className="h-4 w-4" />
                          TWEET
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="retro-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary font-mono">
                    <MessageSquare className="inline h-6 w-6 mr-2" />
                    {t('contact.form')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-primary font-mono text-sm">{t('contact.name')}</Label>
                      <Input
                        id="name"
                        {...register("name", { required: `Name ${t('form.required')}` })}
                        placeholder={t('form.name')}
                        className="retro-input rounded-sm font-mono"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive font-mono">{t('common.error')} {errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary font-mono text-sm">{t('contact.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: `Email ${t('form.required')}`,
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: t('form.invalidEmail')
                          }
                        })}
                        placeholder={t('form.email')}
                        className="retro-input rounded-sm font-mono"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive font-mono">{t('common.error')} {errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-primary font-mono text-sm">{t('contact.message')}</Label>
                      <Textarea
                        id="message"
                        {...register("message", { required: `Message ${t('form.required')}` })}
                        placeholder={t('form.message')}
                        rows={5}
                        className="retro-input rounded-sm font-mono resize-none"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive font-mono">{t('common.error')} {errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="retro-button w-full rounded-sm"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2 font-mono">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground"></div>
                          {t('contact.sending')}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 font-mono">
                          <Send className="h-4 w-4" />
                          {t('contact.send')}
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}