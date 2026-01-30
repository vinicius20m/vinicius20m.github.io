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
  },
  experience: {
    title: "Experiência",
    description: "Minha jornada profissional e principais conquistas.",
    items: [
      {
        jobTitle: "Desenvolvedor Full-Stack Sênior",
        company: "Tech Innovations Inc.",
        dateRange: "Jan 2022 - Presente",
        description: "Liderando o desenvolvimento de aplicações web escaláveis usando tecnologias modernas.",
        achievements: [
          "Desenvolveu e implantou 5+ aplicações full-stack atendendo 10k+ usuários",
          "Implementou pipelines CI/CD reduzindo o tempo de implantação em 40%",
          "Mentorou desenvolvedores juniores e conduziu revisões de código"
        ],
        techStack: ["React", "Node.js", "PostgreSQL", "AWS"]
      },
      {
        jobTitle: "Desenvolvedor Full-Stack",
        company: "Digital Solutions Ltd.",
        dateRange: "Jun 2020 - Dez 2021",
        description: "Construiu aplicações web responsivas e APIs para diversos clientes.",
        achievements: [
          "Criou APIs RESTful lidando com 1M+ solicitações por mês",
          "Otimizou consultas de banco de dados melhorando o desempenho em 30%",
          "Colaborou com equipe de design para implementar UIs pixel-perfect"
        ],
        techStack: ["Vue.js", "Laravel", "MySQL", "Docker"]
      },
      {
        jobTitle: "Desenvolvedor Júnior",
        company: "StartupXYZ",
        dateRange: "Mar 2019 - Mai 2020",
        description: "Contribuiu para o desenvolvimento de uma plataforma SaaS desde o início.",
        achievements: [
          "Construiu sistema de autenticação de usuário com integração OAuth",
          "Desenvolveu recurso de chat em tempo real usando WebSockets",
          "Participou de processos de desenvolvimento ágil"
        ],
        techStack: ["React", "Express.js", "MongoDB", "Socket.io"]
      }
    ]
  }
};

export default pt;
