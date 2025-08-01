import React, { createContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    'nav.certifications': 'Certifications',
    "nav.command.home": "./home.sh",
    "nav.command.about": "./about.sh",
    "nav.command.work": "./work.sh",
    "nav.command.projects": "./projects.sh",
    'nav.command.certifications': './certifications.sh',
    "nav.command.contact": "./contact.sh",

    // Hero Section
    "hero.whoami": "$ whoami",
    "hero.name": "> STEVECETO_",
    "hero.tagline": "I build exceptional digital experiences",
    "hero.description":
      "Software engineer specializing in building exceptional\ndigital experiences. Currently focused on accessible,\nhuman-centered products with cutting-edge technology.",
    "hero.explore": "./explore_profile.sh",
    "hero.resume": "download resume.pdf",
    "hero.resume_path": "/CV_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "CV_Gilchrist_Steve_Aurel_Veceto.pdf",

    // About Section
    "about.title": "> ABOUT.EXE",
    "about.command": "~/portfolio$ cat about_me.txt",
    "about.loading": "~/loading$ Initializing profile data...",
    "about.output": "output_",
    "about.download": "./download_resume.pdf",
    "about.profile": "USER.PROFILE",
    "about.skills": "SKILLS_ARRAY[]",

    // Experience Section
    "experience.title": "> WORK_HISTORY.LOG",
    "experience.command": "~/career$ cat experience.txt",
    "experience.loading": "~/experience$ Loading work history...",
    "experience.tasks": "~/tasks$ cat responsibilities.txt",
    "experience.tech": "~/tech$ ls technologies/",
    "experience.present": "PRESENT",

    // Projects Section
    "projects.title": "> PROJECTS.DIR",
    "projects.command": "~/portfolio$ ls -la projects/",
    "projects.loading": "~/projects$ Compiling project data...",
    "projects.filter": "./filter_{category}.sh",
    "projects.all": "All",
    "projects.description": "description:",
    "projects.tech": "tech_stack[]:",
    "projects.code": "CODE",
    "projects.demo": "DEMO",

    // Certification Section
    "certification.title": "> CERTIFICATIONS.DIR",
    "certification.command": "~/portfolio$ ls -la certifications/",

    // Contact Section
    "contact.title": "> CONTACT.SH",
    "contact.command": "~/communication$ ./establish_connection.sh",
    "contact.status": "status: AVAILABLE_FOR_OPPORTUNITIES",
    "contact.description":
      "Currently opened to challenges and collaborations.\nFeel free to reach out for projects, questions, or just to say hello!",
    "contact.info": "CONNECTION_INFO",
    "contact.form": "SEND_MESSAGE.FORM",
    "contact.email": "EMAIL_ADDRESS:",
    "contact.location": "LOCATION:",
    "contact.localisation": "Douala_Cameroon",
    "contact.phone": "PHONE_NUMBER:",
    "contact.social": "SOCIAL_LINKS[]:",
    "contact.name": "USER_NAME:",
    "contact.message": "MESSAGE_CONTENT:",
    "contact.send": "./SEND_MESSAGE.SH",
    "contact.sending": "TRANSMITTING...",
    "contact.success": "Message sent!",
    "contact.successDesc":
      "Thank you for your message. I'll get back to you soon.",
    "contact.error": "Error",
    "contact.errorDesc": "Failed to send message. Please try again.",
    "contact.copied": "Email copied!",
    "phone.copied": "Phone copied!",
    "contact.copiedDesc": "Email address copied to clipboard.",
    "phone.copiedDesc": "Phone number copied to clipboard.",

    // Form placeholders
    "form.name": "Enter your name...",
    "form.email": "your.email@domain.com",
    "form.message": "Type your message here...",
    "form.required": "is required",
    "form.invalidEmail": "Invalid email format",

    // Common
    "common.loading": "Loading...",
    "common.error": "ERROR:",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    'nav.certifications': 'Certifications',
    "nav.contact": "Contact",
    "nav.command.home": "./accueil.sh",
    "nav.command.about": "./apropos.sh",
    "nav.command.work": "./travail.sh",
    "nav.command.projects": "./projets.sh",
    "nav.command.certifications": "./certifications.sh",
    "nav.command.contact": "./contact.sh",

    // Hero Section
    "hero.whoami": "$ whoami",
    "hero.name": "> STEVECETO_",
    "hero.tagline": "Je crée des expériences numériques exceptionnelles",
    "hero.description":
      "Ingénieur logiciel spécialisé dans la création d'expériences\nnumériques exceptionnelles. Actuellement concentré sur des\nproduits accessibles et centrés sur l'humain avec une technologie de pointe.",
    "hero.explore": "./explorer_profil.sh",
    "hero.resume": "télécharger cv.pdf",
    "hero.resume_path": "/Resume_Gilchrist_Steve_Aurel_Veceto.pdf",
    "hero.resume_file": "Resume_Gilchrist_Steve_Aurel_Veceto.pdf",

    // About Section
    "about.title": "> APROPOS.EXE",
    "about.command": "~/portfolio$ cat a_propos_moi.txt",
    "about.loading": "~/chargement$ Initialisation des données de profil...",
    "about.output": "sortie_",
    "about.download": "./telecharger_cv.pdf",
    "about.profile": "PROFIL.UTILISATEUR",
    "about.skills": "COMPETENCES_ARRAY[]",

    // Experience Section
    "experience.title": "> HISTORIQUE_TRAVAIL.LOG",
    "experience.command": "~/carriere$ cat experience.txt",
    "experience.loading":
      "~/experience$ Chargement de l'historique de travail...",
    "experience.tasks": "~/taches$ cat responsabilites.txt",
    "experience.tech": "~/tech$ ls technologies/",
    "experience.present": "PRÉSENT",

    // Projects Section
    "projects.title": "> PROJETS.DIR",
    "projects.command": "~/portfolio$ ls -la projets/",
    "projects.loading": "~/projets$ Compilation des données de projet...",
    "projects.filter": "./filtrer_{category}.sh",
    "projects.all": "Tous",
    "projects.description": "description:",
    "projects.tech": "pile_tech[]:",
    "projects.code": "CODE",
    "projects.demo": "DÉMO",

    // Certification Section
    "certification.title": "> CERTIFICATIONS.DIR",
    "certification.command": "~/portfolio$ ls -la certifications/",

    // Contact Section
    "contact.title": "> CONTACT.SH",
    "contact.command": "~/communication$ ./etablir_connexion.sh",
    "contact.status": "statut: DISPONIBLE_POUR_OPPORTUNITÉS",
    "contact.description":
      "Actuellement ouverts aux nouveaux défis et collaborations.\nN'hésitez pas à me contacter pour des projets, des questions, ou juste pour dire bonjour!",
    "contact.info": "INFO_CONNEXION",
    "contact.form": "ENVOYER_MESSAGE.FORM",
    "contact.email": "ADRESSE_EMAIL:",
    "contact.location": "LOCALISATION:",
    "contact.localisation": "Douala_Cameroun",
    "contact.phone": "NUMÉRO_TÉLÉPHONE:",
    "contact.social": "LIENS_SOCIAUX[]:",
    "contact.name": "NOM_UTILISATEUR:",
    "contact.message": "CONTENU_MESSAGE:",
    "contact.send": "./ENVOYER_MESSAGE.SH",
    "contact.sending": "TRANSMISSION...",
    "contact.success": "Message envoyé!",
    "contact.successDesc":
      "Merci pour votre message. Je vous répondrai bientôt.",
    "contact.error": "Erreur",
    "contact.errorDesc": "Échec de l'envoi du message. Veuillez réessayer.",
    "contact.copied": "Email copié!",
    "phone.copied": "Telephone copié!",
    "contact.copiedDesc": "Adresse email copiée dans le presse-papiers.",
    "phone.copiedDesc": "Numero de téléphone copié dans le presse-papiers.",

    // Form placeholders
    "form.name": "Entrez votre nom...",
    "form.email": "votre.email@domaine.com",
    "form.message": "Tapez votre message ici...",
    "form.required": "est requis",
    "form.invalidEmail": "Format d'email invalide",

    // Common
    "common.loading": "Chargement...",
    "common.error": "ERREUR:",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: string | undefined = (
      translations[language as keyof typeof translations] as Record<
        string,
        string
      >
    )[key];

    // If direct key lookup fails, try nested lookup (for future extensibility)
    if (value === undefined && keys.length > 1) {
      let nested: unknown = translations[language as keyof typeof translations];
      for (const k of keys) {
        if (typeof nested === "object" && nested !== null && k in nested) {
          nested = (nested as Record<string, unknown>)[k];
        } else {
          nested = undefined;
          break;
        }
      }
      if (typeof nested === "string") {
        value = nested;
      }
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// useLanguage hook moved to a separate file for Fast Refresh compatibility.
