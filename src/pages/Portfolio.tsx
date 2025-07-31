import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutSection } from "@/components/portfolio/AboutSection"
import { ExperienceSection } from "@/components/portfolio/ExperienceSection"
import { ProjectsSection } from "@/components/portfolio/ProjectsSection"
import { ContactSection } from "@/components/portfolio/ContactSection"
import { Navigation } from "@/components/portfolio/Navigation"
import { useEffect, useState } from "react"
import { Footer } from "@/components/Footer"
import { CertificationSection } from "@/components/portfolio/Certification"

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    console.log("Portfolio component mounted")
    
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} />
      <div className="space-y-0">
        <HeroSection />
        <AboutSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <CertificationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}