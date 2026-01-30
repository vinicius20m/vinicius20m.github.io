import trelloThumb from '../assets/images/videoframe_92846.png';
import receiptsThumb from '../assets/images/videoframe_30349.png';
import toDoThumb from '../assets/images/videoframe_250136.png'

const pt = {
  header: {
    nav: {
      hero: "Início",
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
    description: "Aqui estão alguns dos meus projetos apresentados em video e com link para o repositório Github.",
    hero: {
      title: "Clone Trello",
      description: "Um clone completo do Trello construído com tecnologias web modernas, apresentando funcionalidade de arrastar e soltar, colaboração em tempo real e design responsivo.",
      techStack: ["Laravel", "Axios", "Vue.Js", "Inertia", "Vuetify", "LoginSocial"],
      github: "https://github.com/vinicius20m/CloneTrello",
      thumbnail: trelloThumb,
      youtube: "https://www.youtube.com/embed/ligqidJ1esg"
    },
    secondary: [
      {
        title: "Top Receitas",
        description: "Uma plataforma de receitas, com suporte para comentários, seguidores, receitas favoritas, like/dislike e receitas privadas.",
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        github: "https://github.com/vinicius20m/tReceitas",
        thumbnail: receiptsThumb,
        youtube: "https://www.youtube.com/embed/MGvogzSHiF8"
      },
      {
        title: "To-Do",
        description: "Aplicação de Lista de Afazeres, podendo vincular direntes tarefas com ambientes de trabalho, usando React e ASP-NET.",
        techStack: ["ASP-NET", "C#", "React", "MS-SQL-Server", "Bootstrap"],
        github: "https://github.com/vinicius20m/ApiToDo-Beta",
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
  },
  skills: {
    title: "Habilidades",
    description: "Aqui estão as tecnologias e ferramentas com as quais trabalho.",
    categories: {
      languages: "Linguagens",
      frameworksPlatforms: "Frameworks & Plataformas",
      librariesUI: "Bibliotecas & UI",
      databases: "Bancos de Dados",
      toolsQuality: "Ferramentas & Qualidade",
      engineeringPractices: "Práticas de Engenharia"
    }
  },
  certificates: {
    title: "Certificados",
    description: "Aqui estão alguns dos meus certificados profissionais e conquistas."
  }
};

export default pt;
