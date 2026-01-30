import trelloThumb from '../assets/images/videoframe_92846.png';
import receiptsThumb from '../assets/images/videoframe_30349.png';
import toDoThumb from '../assets/images/videoframe_250136.png'

const en = {
  header: {
    nav: {
      hero: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact"
    }
  },
  hero: {
    name: "Vinicius Mendes",
    role: "Full-Stack Developer",
    description: "Passionate about creating innovative web solutions with modern technologies.",
    techStack: ["PHP", "Laravel", "Livewire", "JavaScript", "React", "Tailwind"],
    button1: "View Projects",
    button2: "Contact Me"
  },
  projects: {
    title: "Projects",
    description: "Here are some of my projects presented in video and with a link to the Github repository.",
    hero: {
      title: "Clone Trello",
      description: "A complete Trello clone built with modern web technologies, featuring drag-and-drop functionality, real-time collaboration, and responsive design.",
      techStack: ["Laravel", "Axios", "Vue.Js", "Inertia", "Vuetify", "LoginSocial"],
      github: "https://github.com/vinicius20m/CloneTrello",
      thumbnail: trelloThumb,
      youtube: "https://www.youtube.com/embed/ligqidJ1esg"
    },
    secondary: [
      {
        title: "Top Recipes",
        description: "A recipe platform, with support for comments, followers, favorite recipes, like/dislike, and private recipes.",
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        github: "https://github.com/vinicius20m/tReceitas",
        thumbnail: receiptsThumb,
        youtube: "https://www.youtube.com/embed/MGvogzSHiF8"
      },
      {
        title: "To-Do",
        description: "To-Do List Application, able to link different tasks with work environments, using React and ASP-NET.",
        techStack: ["ASP-NET", "C#", "React", "MS-SQL-Server", "Bootstrap"],
        github: "https://github.com/vinicius20m/ApiToDo-Beta",
        thumbnail: toDoThumb,
        youtube: "https://www.youtube.com/embed/tULBFdK0fAU"
      }
    ]
  },
  about: {
    title: "About Me",
    description: "Learn more about me in this section. Adding content for scrolling test."
  },
  contact: {
    title: "Contact",
    description: "Get in touch. This is a placeholder for the contact section."
  },
  skills: {
    title: "Skills",
    description: "Here are the skills and staks that i work with.",
    categories: {
      languages: "Languages",
      frameworksPlatforms: "Frameworks & Platforms",
      librariesUI: "Libraries & UI",
      databases: "Data Bases",
      toolsQuality: "Quality and Tools",
      engineeringPractices: "Engeneering Practices"
    }
  },
  certificates: {
    title: "Certificates",
    description: "Here are some of my professional certificates and achievements."
  }
};

export default en;
