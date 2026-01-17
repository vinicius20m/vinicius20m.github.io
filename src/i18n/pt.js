import trelloThumb from '../assets/images/videoframe_92846.png';
import receiptsThumb from '../assets/images/videoframe_30349.png';
import toDoThumb from '../assets/images/videoframe_250136.png'

const pt = {
  header: {
    nav: {
      hero: "Herói",
      projects: "Projetos",
      about: "Sobre",
      contact: "Contato"
    }
  },
  hero: {
    name: "Vinicius Mendes",
    role: "Desenvolvedor Full-Stack",
    description: "Apaixonado por criar soluções web inovadoras com tecnologias modernas.",
    techStack: ["PHP", "Laravel", "Livewire", "JavaScript", "React", "Tailwind"],
    button1: "Ver Projetos",
    button2: "Entre em Contato"
  },
  projects: {
    title: "Projetos",
    description: "Aqui estão alguns dos meus projetos. Esta seção tem conteúdo para preencher a tela.",
    hero: {
      title: "Clone Trello",
      description: "Um clone completo do Trello construído com tecnologias web modernas, apresentando funcionalidade de arrastar e soltar, colaboração em tempo real e design responsivo.",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/vinicius20m/clone-trello",
      thumbnail: trelloThumb,
      youtube: "https://www.youtube.com/embed/ligqidJ1esg"
    },
    secondary: [
      {
        title: "Receitas",
        description: "Uma plataforma de e-commerce escalável com autenticação de usuário, integração de pagamentos e painel de administração.",
        techStack: ["React", "Express", "PostgreSQL", "Stripe"],
        github: "https://github.com/vinicius20m/ecommerce-platform",
        thumbnail: receiptsThumb,
        youtube: "https://www.youtube.com/embed/MGvogzSHiF8"
      },
      {
        title: "ToDo",
        description: "Um aplicativo de clima que fornece previsões em tempo real, dados baseados em localização e mapas interativos.",
        techStack: ["React", "OpenWeather API", "Leaflet"],
        github: "https://github.com/vinicius20m/weather-app",
        thumbnail: toDoThumb,
        youtube: "https://www.youtube.com/embed/tULBFdK0fAU"
      }
    ]
  },
  about: {
    title: "Sobre Mim",
    description: "Saiba mais sobre mim nesta seção. Adicionando conteúdo para teste de rolagem."
  },
  contact: {
    title: "Contato",
    description: "Entre em contato. Este é um espaço reservado para a seção de contato."
  }
};

export default pt;
