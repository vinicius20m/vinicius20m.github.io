import trelloThumb from '../assets/images/videoframe_92846.png';
import receiptsThumb from '../assets/images/videoframe_30349.png';
import toDoThumb from '../assets/images/videoframe_250136.png'

const en = {
  header: {
    nav: {
      hero: "Hero",
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
    description: "Here are some of my projects. This section has content to fill the screen.",
    hero: {
      title: "Clone Trello",
      description: "A full-featured Trello clone built with modern web technologies, featuring drag-and-drop functionality, real-time collaboration, and responsive design.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/vinicius20m/CloneTrello",
      thumbnail: trelloThumb,
      youtube: "https://www.youtube.com/embed/ligqidJ1esg"
    },
    secondary: [
      {
        title: "Top Receitas",
        description: "A scalable e-commerce platform with user authentication, payment integration, and admin dashboard.",
        techStack: ["React", "Express", "PostgreSQL", "Stripe"],
        github: "https://github.com/vinicius20m/tReceitas",
        thumbnail: receiptsThumb,
        youtube: "https://www.youtube.com/embed/MGvogzSHiF8"
      },
      {
        title: "To-Do",
        description: "A weather application providing real-time forecasts, location-based data, and interactive maps.",
        techStack: ["React", "OpenWeather API", "Leaflet"],
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
  }
};

export default en;
