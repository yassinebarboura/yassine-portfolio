export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "App";

export const APP_LOGO = "https://placehold.co/128x128/E1E7EF/1F2937?text=App";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL;
  const appId = import.meta.env.VITE_APP_ID;
  const redirectUri = `${window.location.origin}/api/oauth/callback`;
  const state = btoa(redirectUri);

  const url = new URL(`${oauthPortalUrl}/app-auth`);
  url.searchParams.set("appId", appId);
  url.searchParams.set("redirectUri", redirectUri);
  url.searchParams.set("state", state);
  url.searchParams.set("type", "signIn");

  return url.toString();
};

// Profile Information
export const PROFILE = {
  name: "Yassine Barboura",
  title: "Étudiant en Réseaux et Services Informatiques",
  school: "Institut Supérieur des Études Technologiques de Mahdia (ISET Mahdia)",
  bio: "Développeur passionné avec expertise en technologies web et réseaux informatiques. Spécialisé en développement backend, frontend et déploiement d'applications. Motivé pour acquérir des compétences en DevOps et Cloud.",
  keywords: "Full-Stack Development | Backend Development | Network Configuration | Cloud Infrastructure | DevOps | Application Deployment | Real-time Communication",
};

// Contact Information
export const CONTACT = {
  email: "barbourayassine45@gmail.com",
  phone: "+216 20314939",
  location: "Mahdia, Tunisie",
  linkedin: "https://www.linkedin.com/in/yassine-barboura-517b39325",
  github: "https://github.com/yassinebarboura",
  cv: "/YassineBarboura-CV.pdf",
};

// Technical Skills
export const TECHNICAL_SKILLS = {
  languages: ["Python", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
  frameworks: ["Flask", "PyWebIO", "React.js", "Firebase"],
  tools: ["Nginx", "Dnsmasq", "GNS3", "Proxmox"],
  systems: ["Linux (Ubuntu/Debian)", "Windows Server", "HA", "VLAN", "Routage"],
  databases: ["MySQL", "Oracle"],
  specialties: ["Full-Stack Development", "Backend Development", "Network Configuration", "Cloud Infrastructure", "DevOps", "Application Deployment", "Real-time Communication"],
};

// Soft Skills
export const SOFT_SKILLS = [
  "Communication",
  "Esprit d'équipe",
  "Adaptation",
  "Organisation",
  "Résolution de problèmes",
  "Apprentissage rapide",
  "Motivation DevOps & Cloud",
];

// Professional Experiences
export const EXPERIENCES = [
  {
    id: 1,
    company: "Dice Studios",
    position: "Développeur",
    project: "Application de Chat en Temps Réel",
    description: "Développement d'une application de chat en temps réel avec Python et Flask.",
    tasks: [
      "Développement backend avec Python (Flask) et PyWebIO",
      "Implémentation communication asynchrone (Asyncio)",
      "Configuration Nginx reverse proxy et déploiement Linux",
      "Configuration réseau et simulation GNS3",
    ],
  },
  {
    id: 2,
    company: "Ring Technologies",
    position: "Stagiaire Développement Web & Mobile",
    project: "Application CRUD avec PHP/MySQL",
    description: "Conception et développement d'une application CRUD complète avec interface utilisateur.",
    tasks: [
      "Conception interface utilisateur",
      "Gestion complète du cycle CRUD",
      "Optimisation des performances",
    ],
  },
  {
    id: 3,
    company: "MentorNations Bootcamp",
    position: "Participant",
    project: "Site Web React.js + Firebase (Contre la Rage)",
    description: "Développement d'un site web complet pour sensibiliser contre la rage.",
    tasks: [
      "Authentification utilisateur Firebase",
      "Gestion données en temps réel",
      "Déploiement Firebase Hosting",
    ],
  },
];

// Education
export const EDUCATION = {
  degree: "Licence appliquée en Réseaux et Services Informatiques",
  school: "Institut Supérieur des Études Technologiques de Mahdia",
  domain: "Technologies de l'informatique",
  program: "Réseaux et Services Informatiques",
};

// Languages
export const LANGUAGES = [
  { language: "Anglais", level: "B2", percentage: 80 },
  { language: "Français", level: "B2", percentage: 80 },
  { language: "Arabe", level: "Natif", percentage: 100 },
];

// Certifications & Projects
export const CERTIFICATIONS = [
  "Participation bootcamp développement web (MentorNations)",
  "Expériences pratiques déploiement applications et configuration réseau",
  "Infrastructure Cloud Haute Disponibilité (Proxmox, HA)",
  "Intégration Réseau Multi-Sites (VLAN, Routage, VPN)",
];
