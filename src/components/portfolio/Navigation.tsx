import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, User, Briefcase, FolderOpen, Mail, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageToggle } from "@/components/LanguageToggle"

interface NavigationProps {
  activeSection: string
}

export function Navigation({ activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { id: "hero", label: t('nav.home'), icon: Home, command: t('nav.command.home') },
    { id: "about", label: t('nav.about'), icon: User, command: t('nav.command.about') },
    { id: "experience", label: t('nav.experience'), icon: Briefcase, command: t('nav.command.work') },
    { id: "projects", label: t('nav.projects'), icon: FolderOpen, command: t('nav.command.projects') },
    { id: "contact", label: t('nav.contact'), icon: Mail, command: t('nav.command.contact') },
  ]

  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to section: ${sectionId}`)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="retro-nav rounded-sm p-3 shadow-lg">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-12 h-12 rounded-sm p-0 transition-all duration-300 border font-mono",
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground border-primary shadow-lg"
                      : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                  )}
                  title={item.command}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed top-4 right-4 z-50 lg:hidden flex gap-2">
        <LanguageToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="retro-nav border-primary text-primary">
              <Terminal className="h-5 w-5 mr-2" />
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 bg-black border-primary">
            <div className="terminal-window p-4 mt-8">
              <div className="pt-8">
                <div className="text-primary font-mono text-sm mb-4">
                  <span className="text-accent">~/navigation$</span> ls -la
                </div>
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "justify-start gap-3 h-12 font-mono border rounded-sm",
                          activeSection === item.id
                            ? "bg-primary/20 text-primary border-primary"
                            : "border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-xs">{item.command}</span>
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Language Toggle */}
      <div className="fixed top-4 right-4 z-50 hidden lg:block">
        <LanguageToggle />
      </div>
    </>
  )
}