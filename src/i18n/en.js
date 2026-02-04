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
  },
  experience: {
    title: "Experience",
    description: "My professional journey and key achievements.",
    items: [
      {
        jobTitle: "FullStack Web & Mobile Developer",
        company: "GIGATRON FRANCHISING LTDA",
        dateRange: "Jun 2024 — May 2025",
        description: "Development and maintenance of ERP web and mobile systems, focusing on integrations, performance, and production stability.",
        achievements: [
          "Integrated ERP with marketplaces such as Shopee, Mercado Livre, Amazon, Magalu, and NuvemShop",
          "Developed and maintained scalable systems using PHP and PostgreSQL",
          "Continuously improved a mobile POS application built with React Native",
          "Implemented native Java modules to integrate Stone and PagBank payment terminals",
          "Supported third-party integrations and automated operational workflows"
        ],
        techStack: ["PHP", "Laravel", "PostgreSQL", "JavaScript", "React Native", "Java", "Git"]
      },
      {
        jobTitle: "React Native Developer",
        company: "GIGATRON FRANCHISING LTDA",
        dateRange: "Aug 2022 — May 2024",
        description: "Worked on building a mobile POS application, focusing on performance, hardware integration, and user experience.",
        achievements: [
          "Built a POS mobile application from scratch using React Native",
          "Implemented offline-first architecture with local data persistence",
          "Integrated SMART payment terminals from Stone and PagBank",
          "Enabled Bluetooth printing using the ESCPOS protocol",
          "Developed a White Label system with customizable UI"
        ],
        techStack: ["React Native", "JavaScript", "TypeScript", "Java", "SQLite", "Git"]
      },
      {
        jobTitle: "PHP FullStack Junior Developer",
        company: "AUDITOR PÚBLICO ASSESSORIA E TECNOLOGIA LTDA",
        dateRange: "Feb 2021 — Aug 2021",
        description: "Maintained and supported public sector web systems, working on health, fiscal, and administrative automation modules.",
        achievements: [
          "Maintained public sector systems for health and fiscal operations",
          "Built PDF reporting features and automated email workflows",
          "Implemented pharmacy inventory control and travel scheduling",
          "Developed user access control and permission systems",
          "Processed fiscal documents such as SPED and GIA"
        ],
        techStack: ["PHP", "Laravel", "Zend Framework", "JavaScript (jQuery)", "PostgreSQL", "Git"]
      }
    ],
    courses: {
      title: "Courses",
      description: "Courses taken to enhance my skills.",
      items: [
        {
          title: "Programming Logic",
          institution: "PREPARA CURSOS PROFISSIONALIZANTES",
          year: "2017",
          bullets: [
            "Basic programming logic concepts using Java, Pascal, and Delphi",
            "Introductory database concepts"
          ]
        },
        {
          title: "Computer Operator",
          institution: "PREPARA CURSOS PROFISSIONALIZANTES",
          year: "2015",
          bullets: [
            "Functions and tools of the Windows 7 Operating System",
            "Complete Office Suite"
          ]
        }
      ]
    }
  }
};

export default en;
