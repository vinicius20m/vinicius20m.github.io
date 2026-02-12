import trelloThumb from '../assets/images/videoframe_92846.png';
import receiptsThumb from '../assets/images/videoframe_30349.png';
import toDoThumb from '../assets/images/videoframe_250136.png'

const pt = {
  header: {
    nav: {
      hero: "Início",
      projects: "Projetos",
      skills: "Habilidades",
      certificates: "Certificados",
      experience: "Experiência",
      about: "Sobre",
      contact: "Contato"
    }
  },
  hero: {
    name: "Vinicius Mendes",
    microLabel: "Desenvolvedor Full-Stack",
    headline: "Criando soluções com qualidade e performance",
    subtext: "Experiência com React, PHP e arquitetura moderna. Transformo ideias em soluções escaláveis e funcionais.",
    techStack: ["PHP", "Laravel", "Livewire", "JavaScript", "React", "Tailwind"],
    projectsButton: "Ver Projetos",
    contactButton: "Contato",
    darkModeButton: "🌙",
    languageButton: "PT | EN"
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
    title: "Sobre",
    sections: [
      {
        subtitle: "Visão geral",
        content: [
          "Sou movido pela curiosidade em entender como as coisas funcionam, especialmente no universo da tecnologia. Meu interesse vai muito além das linguagens de programação e começou bem antes de escrever código. Sempre quis entender como sistemas se comunicam, como dispositivos funcionam por trás da tela e como tudo se conecta.",
          "Esse olhar mais analítico acabou moldando minha forma de pensar tecnologia não apenas como código, mas como soluções bem estruturadas para problemas reais."
        ]
      },
      {
        subtitle: "Caminho na programação",
        content: [
          "Na programação, nunca me limitei a uma única linguagem ou paradigma. Comecei pelos fundamentos de lógica de programação, explorando diferentes abordagens e tecnologias, e ao longo do tempo aprofundei meus conhecimentos no desenvolvimento web e mobile.",
          "Essa trajetória me permitiu transitar entre diferentes stacks, compreender contextos variados e construir soluções com foco em clareza, manutenibilidade e consistência técnica, sempre pensando na aplicação prática e no valor entregue."
        ]
      }
    ]
  },
  contact: {
    title: "Contato",
    description: "Estou aberto a oportunidades profissionais e conversas. Vamos nos conectar!"
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
        jobTitle: "FullStack Web & Mobile Developer",
        company: "GIGATRON FRANCHISING LTDA",
        dateRange: "Jun 2024 — May 2025",
        description: "Desenvolvimento e manutenção de sistemas ERP web e mobile, com foco em integrações, performance e estabilidade de aplicações em produção.",
        achievements: [
          "Integração de ERP com marketplaces como Shopee, Mercado Livre, Amazon, Magalu e NuvemShop",
          "Desenvolvimento e manutenção de sistemas escaláveis usando PHP e PostgreSQL",
          "Evolução contínua de aplicação mobile PDV em React Native",
          "Implementação de módulos nativos em Java para integração com maquininhas Stone e PagBank",
          "Suporte a integrações externas e automação de fluxos operacionais"
        ],
        techStack: ["PHP", "Laravel", "PostgreSQL", "JavaScript", "React Native", "Java", "Git"]
      },
      {
        jobTitle: "React Native Developer",
        company: "GIGATRON FRANCHISING LTDA",
        dateRange: "Aug 2022 — May 2024",
        description: "Atuação no desenvolvimento de um aplicativo mobile PDV, com foco em performance, integração com hardware e experiência do usuário.",
        achievements: [
          "Desenvolvimento do zero de um aplicativo PDV usando React Native",
          "Implementação de arquitetura offline-first com persistência local de dados",
          "Integração com maquininhas SMART da Stone e PagBank",
          "Impressão via Bluetooth usando protocolo ESCPOS",
          "Criação de sistema White Label com design personalizável"
        ],
        techStack: ["React Native", "JavaScript", "TypeScript", "Java", "SQLite", "Git"]
      },
      {
        jobTitle: "PHP FullStack Junior Developer",
        company: "AUDITOR PÚBLICO ASSESSORIA E TECNOLOGIA LTDA",
        dateRange: "Feb 2021 — Aug 2021",
        description: "Suporte e manutenção de sistemas web para gestão pública, atuando em módulos fiscais, de saúde e automação de processos administrativos.",
        achievements: [
          "Manutenção de sistemas públicos nas áreas de saúde e fiscal",
          "Geração de relatórios PDF e automação de envios de e-mails",
          "Controle de estoque de farmácia e agendamento de viagens",
          "Implementação de permissões de acesso e autenticação de usuários",
          "Processamento de documentos fiscais como SPED e GIA"
        ],
        techStack: ["PHP", "Laravel", "Zend Framework", "JavaScript (jQuery)", "PostgreSQL", "Git"]
      }
    ],
    courses: {
      title: "Cursos",
      description: "Cursos realizados para aprimorar minhas habilidades.",
      items: [
        {
          title: "Lógica de Programação",
          institution: "PREPARA CURSOS PROFISSIONALIZANTES",
          year: "2017",
          bullets: [
            "Conceitos básicos de lógica de programação usando Java, Pascal e Delphi",
            "Conceitos introdutórios de banco de dados"
          ]
        },
        {
          title: "Operador de Computador",
          institution: "PREPARA CURSOS PROFISSIONALIZANTES",
          year: "2015",
          bullets: [
            "Funções e ferramentas do Sistema Operacional Windows 7",
            "Pacote Office Completo"
          ]
        }
      ]
    }
  }
};

export default pt;
