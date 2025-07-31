import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, Terminal, Code } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/useLanguage"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const { t } = useLanguage()
  const fullText = t('hero.tagline')

  useEffect(() => {
    console.log("HeroSection mounted, starting typing animation")
    setDisplayText("")
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  const scrollToAbout = () => {
    console.log("Scrolling to about section")
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-black" />
      
      {/* Matrix-style background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2255aa 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #2255aa 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-primary/80 text-lg mb-4 font-mono"
          >
            <Terminal className="h-5 w-5" />
            <span>{t('hero.whoami')}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-primary mb-4 font-mono tracking-wider"
            style={{ textShadow: '0 0 20px rgba(34, 85, 170, 0.5)' }}
          >
            JOHN DOE
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-accent mb-8 font-mono"
          >
            {displayText}
            <span className="typing-cursor"></span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="terminal-window p-6 mb-12 max-w-2xl mx-auto"
          >
            <div className="pt-8">
              <p className="text-left text-primary font-mono text-sm leading-relaxed">
                <span className="text-accent">~/portfolio$</span> cat about.txt<br/>
                <span className="text-muted-foreground whitespace-pre-line">
                  {t('hero.description')}
                </span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="retro-button px-8 py-3 rounded-sm transition-all duration-300 hover:scale-105"
            >
              <Code className="mr-2 h-4 w-4" />
              {t('hero.explore')}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-sm border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              {t('hero.resume')}
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6"
          >
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-sm p-3 hover:bg-primary/10 border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <Github className="h-6 w-6 text-primary" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-sm p-3 hover:bg-primary/10 border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <Linkedin className="h-6 w-6 text-primary" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-sm p-3 hover:bg-primary/10 border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <Mail className="h-6 w-6 text-primary" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}