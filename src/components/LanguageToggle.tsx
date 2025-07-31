import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-sm"
    >
      <Languages className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  )
}