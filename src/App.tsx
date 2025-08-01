import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { LanguageProvider } from "./contexts/LanguageContext"
import { Toaster } from "./components/ui/toaster"
import { Portfolio } from "./pages/Portfolio"
import { BlankPage } from "./pages/BlankPage"
import { useState, useEffect } from 'react'

function App() {
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500) 
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <section id="experience" className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="terminal-window p-8">
          <div className="pt-8 text-primary font-mono">
            <span className="text-accent">Loading experience...</span>
            <div className="animate-pulse mt-4">████████████████████</div>
          </div>
        </div>
      </section>
    )
  }
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<BlankPage />} />
          </Routes>
        </Router>
        <Toaster />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App