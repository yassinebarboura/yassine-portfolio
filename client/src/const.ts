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
  bio: "Développeur passionné par les technologies web et les réseaux informatiques. Expérience en développement backend, frontend et déploiement d'applications.",
};

// Contact Information
export const CONTACT = {
  email: "barbourayassine45@gmail.com",
  phone: "20314939",
  linkedin: "https://www.linkedin.com/in/yassine-barboura-517b39325",
  github: "https://github.com/yassinebarboura",
};

// Technical Skills
export const TECHNICAL_SKILLS = {
  languages: ["Python", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
  frameworks: ["Flask", "PyWebIO", "React.js", "Firebase"],
  tools: ["Nginx", "Dnsmasq", "GNS3", "VMware"],
  systems: ["Linux (Ubuntu/Debian)", "Windows Server"],
  databases: ["MySQL", "Oracle"],
  specialties: ["Programmation asynchrone (Asyncio)", "Conception client/serveur", "Déploiement d'applications"],
};

// Soft Skills
export const SOFT_SKILLS = [
  "Bonne communication et esprit d'équipe",
  "Capacité d'adaptation et apprentissage rapide",
  "Sens de l'organisation et de la résolution de problèmes",
  "Motivation à apprendre les technologies DevOps et Cloud",
];

// Professional Experiences
export const EXPERIENCES = [
  {
    id: 1,
    company: "Dice Studios",
    department: "Département Développement",
    position: "Développeur",
    project: "Application de chat en temps réel",
    description: "Développement d'une application de chat en temps réel avec Python et Flask.",
    tasks: [
      "Développement backend avec Python (Flask) et PyWebIO",
      "Implémentation de la communication en temps réel avec Asyncio",
      "Configuration et déploiement avec Nginx comme reverse proxy",
      "Utilisation de machines virtuelles Linux pour le déploiement (serveur + client)",
      "Configuration réseau et simulation via GNS3",
    ],
  },
  {
    id: 2,
    company: "Ring Technologies",
    department: "Département Développement",
    position: "Stagiaire en développement web et mobile",
    project: "Application CRUD avec PHP/MySQL",
    description: "Développement d'une application CRUD complète avec interface utilisateur.",
    tasks: [
      "Conception d'une interface utilisateur simple et fonctionnelle",
      "Gestion complète du cycle CRUD (Create, Read, Update, Delete)",
      "Collaboration avec l'équipe de développement pour l'optimisation des performances",
    ],
  },
  {
    id: 3,
    company: "MentorNations Bootcamp",
    department: "Formation intensive",
    position: "Participant",
    project: "Site web en React.js + Firebase pour sensibiliser contre la cyberintimidation",
    description: "Développement d'un site web complet pour sensibiliser contre la cyberintimidation.",
    tasks: [
      "Authentification utilisateur via Firebase",
      "Gestion en temps réel des données",
      "Déploiement et hébergement sur Firebase Hosting",
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
  { language: "Anglais", level: "B2" },
  { language: "Français", level: "B2" },
];

// Certifications
export const CERTIFICATIONS = [
  "Participation à un bootcamp de développement web (MentorNations)",
  "Expériences pratiques de déploiement d'applications et configuration réseau",
];
