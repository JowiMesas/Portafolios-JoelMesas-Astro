import enTranslation from "../../public/locales/en/translation.json";
import esTranslation from "../../public/locales/es/translation.json";

export const languages = {
  es: "Español",
  en: "English",
};
export const defaultLang = "es";
export const ui = {
  es: {
    'site.title': 'Portafolios de Joel Mesas',
    'header.nav.home': 'Inicio',
    'header.nav.about': 'Sobre Mi',
    'header.nav.projects': 'Proyectos',
    'header.nav.curriculum': 'Curriculum',
    //Footer
    'footer.contacts':'Contactos',
    'footer.phone': 'Teléfono',
    'footer.view_profile': 'Ver Perfil',
    'footer.web_developer': 'Desarrolador Web',

      },
  en: {
    'site.title': 'Portfolio of Joel Mesas',
    'header.nav.home': 'Home',
    'header.nav.about': 'About Me',
    'header.nav.projects': 'Projects',
    'header.nav.curriculum' : 'Resume',
    
    //Footer
    'footer.contacts': 'Contacts',
    'footer.phone': 'Phone',
    'footer.view_profile': 'View Profile',
    'footer.web_developer': 'Web Developer',
     },
} as const;
