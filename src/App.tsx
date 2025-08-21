import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Server,
  Palette,
  Calendar,
  Building2,
  Download,
  User,
  Briefcase,
  MessageSquare,
  Award,
  ExternalLink,
} from "lucide-react";
import fotoPerfil from "./assets/teste.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "sobre",
        "skills",
        "projetos",
        "experiencia",
        "certificados",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "Gustavo_Goes_DevFrontend_JR.pdf";
    link.setAttribute("download", "CV_Gustavo_Goes.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- SUAS SKILLS ---
  const skills = [
    { name: "Vue.js", icon: Code, level: 90 },
    { name: "JavaScript / TypeScript", icon: Code, level: 85 },
    { name: "Python", icon: Code, level: 75 },
    { name: "Tailwind CSS / Bootstrap", icon: Palette, level: 95 },
    { name: "Git & GitHub", icon: Github, level: 90 },
    { name: "Figma", icon: Palette, level: 80 },
    { name: "Photoshop", icon: Palette, level: 70 },
    { name: "AWS (Básico)", icon: Server, level: 65 },
    { name: "Google Cloud (Básico)", icon: Server, level: 60 },
  ];

  // --- SEUS PROJETOS ---
  const projects = [
    {
      title: "Site FEPESBA",
      description:
        "Desenvolvi o site institucional da FEPESBA utilizando Vue.js, com foco em responsividade, performance e boa experiência do usuário.",
      image: "fepesba.jpeg",
      technologies: ["Vue.js", "JavaScript", "AWS"],
    },
    {
      title: "Plataforma Salvador Tech",
      description:
        "Plataforma para ensino com foco em informações para estudantes, integraçao com API do Gov.BR, inscriçoes para cursos e etc",
      image: "salvadortech.jpg",
      technologies: ["Vue.js", "Bootstrap", "API Rest"],
      demoLink: "https://salvadortech.salvador.ba.gov.br",
    },
    {
      title: "Landing Page Responsiva para Servidor de FiveM",
      description:
        "Website de interface moderna, com integraçao de API do FiveM para o website",
      image: "misterrp.jpg",
      technologies: ["Vue.js", "JavaScript", "AWS"],
      codeLink: "https://github.com/gus-goes/MisterTorcida-Site",
    },
    {
      title: "Webapp Cookin UP",
      description:
        "Desenvolvi o site institucional da FEPESBA utilizando Vue.js, com foco em responsividade, performance e boa experiência do usuário.",
      image: "cookingup.jpg",
      technologies: ["Vue.js", "Typescript"],
      codeLink: "https://github.com/gus-goes/cookin-up",
    },
  ];

  // --- SUAS EXPERIÊNCIAS ---
  const experiences = [
    {
      title: "Desenvolvedor Fullstack (Freelancer)",
      company: "FEPESBA - Fed. dos Pescadores do Est. da Bahia",
      period: "Fev 2025 - Mai 2025",
      description:
        "Criei o layout e identidade visual no Photoshop, alinhados com os valores da fundação. Realizei o deploy completo via AWS, configurando hospedagem e domínio. Fui responsável pela manutenção técnica por 3 meses após a entrega, garantindo atualizações e suporte contínuo.",
      technologies: ["Vue.js", "JavaScript", "Photoshop", "AWS"],
    },
    {
      title: "Estagiário de Desenvolvimento Web",
      company: "SEMDEC",
      period: "2023 - 2025",
      description:
        "Desenvolvi interfaces com foco em acessibilidade e semântica utilizando Vue.JS e Bootstrap. Realizei a integração com APIs públicas do Gov.BR para exibição dinâmica de dados e fui responsável por manutenções e atualizações em sistemas existentes.",
      technologies: ["Vue.js", "Bootstrap", "API Rest", "Git", "GitHub"],
    },
  ];

  // --- SEUS CERTIFICADOS ---
  const certificates = [
    {
      title: "Cryptography and Information Theory",
      issuer: "University of Colorado System (Coursera)",
      date: "Ago 2025",
      credentialId: "RI3J7E5RLWXL",
      image: "uocc.jpg",
      link: "https://www.coursera.org/account/accomplishments/verify/RI3J7E5RLWXL",
    },
    {
      title: "Figma: conhecendo a ferramenta",
      issuer: "Alura",
      date: "Jun 2025",
      credentialId: "f185360d-47cb-473f-902f-1cce4452e3b7",
      image: "alura.jpeg",
      link: "https://example.com/certificado2",
    },
    {
      title:
        "Vue 3: entendendo componentes, diretivas e reatividade no framework",
      issuer: "Alura",
      date: "Jan 2025",
      credentialId: "a21e64ec-dd3c-47f4-8a63-cd077ec83b56",
      image: "alura.jpeg",
      link: "https://example.com/certificado3",
    },
    {
      title: "Network Defense",
      issuer: "Cisco",
      date: "Dez 2024",
      credentialId: "7595f79d-264a-49cf-b7e0-aeec845d1c54",
      image: "cisco.png",
      link: "https://www.credly.com/badges/7595f79d-264a-49cf-b7e0-aeec845d1c54/linked_in_profile",
    },
    {
      title: "Cloud Foundations",
      issuer: "AWS Academy",
      date: "Set 2022",
      credentialId: "",
      image: "awss.jpg",
      link: "https://www.credly.com/badges/3fe6d491-1aeb-4d3b-b863-3d40e47a2877/linked_in_profile",
    },
    {
      title: "Machine Learning Foundations",
      issuer: "AWS Academy",
      date: "Set 2022",
      credentialId: "",
      image: "awss.jpg",
      link: "https://www.credly.com/badges/a435b7c7-ef03-4fc8-aa13-4486dfc109cc/linked_in_profile",
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "Google Cloud",
      date: "Set 2022",
      credentialId: "2605896",
      image: "google.png",
      link: "https://www.cloudskillsboost.google/public_profiles/4c13deb2-fe34-4c3d-9ee9-ee0ec56b06d5/badges/2605896?locale=pt_BR&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Data, ML, and AI in Google Cloud",
      issuer: "Google Cloud",
      date: "Set 2022",
      credentialId: "2650260",
      image: "google.png",
      link: "https://www.cloudskillsboost.google/public_profiles/4c13deb2-fe34-4c3d-9ee9-ee0ec56b06d5/badges/2650260?locale=pt_BR&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Infrastructure in Google Cloud",
      issuer: "Google Cloud",
      date: "Set 2022",
      credentialId: "2616736",
      image: "google.png",
      link: "https://www.cloudskillsboost.google/public_profiles/4c13deb2-fe34-4c3d-9ee9-ee0ec56b06d5/badges/2616736?locale=pt_BR&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "Networking & Security in Google Cloud",
      issuer: "Google Cloud",
      date: "Set 2022",
      credentialId: "2623721",
      image: "google.png",
      link: "https://www.cloudskillsboost.google/public_profiles/4c13deb2-fe34-4c3d-9ee9-ee0ec56b06d5/badges/2623721?locale=pt_BR&utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    },
    {
      title: "IA Generativa",
      issuer: "Santander Open Academy",
      date: "Jan 2025",
      credentialId: "OA-2025-0128000769046",
      image: "santander.jpg",
      link: "https://www.linkedin.com/in/gus-goes/details/certifications/1738073414592/single-media-viewer/?profileId=ACoAAEUtM9gBe7JPoKy4VMkw4RatuFYBG750iWo",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-500">Gus.DEV</div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "sobre", label: "Sobre", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projetos", label: "Projetos", icon: Briefcase },
                { id: "experiencia", label: "Experiência", icon: Briefcase },
                { id: "certificados", label: "Certificados", icon: Award },
                { id: "contato", label: "Contato", icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-900/30 ${
                    activeSection === id
                      ? "text-blue-400 bg-blue-900/20"
                      : "text-slate-300"
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {[
                { id: "sobre", label: "Sobre", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projetos", label: "Projetos", icon: Briefcase },
                { id: "experiencia", label: "Experiência", icon: Briefcase },
                { id: "certificados", label: "Certificados", icon: Award },
                { id: "contato", label: "Contato", icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-300 hover:bg-blue-900/30 ${
                    activeSection === id
                      ? "text-blue-400 bg-blue-900/20"
                      : "text-slate-300"
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20">
        <div className="container mx-auto text-center">
          <div className="rounded-full flex items-center justify-center">
            <img
              src={fotoPerfil}
              alt="Foto de perfil de Gustavo Goes"
              className="w-32 h-32 mx-auto mb-8 rounded-full object-cover border-4 border-blue-500/50"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-slate-100">Gustavo</span>
            <span className="text-blue-400"> Goes</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Fullstack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-blue-600 hover:bg-blue-700 text-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageSquare size={20} />
              <span>Entre em Contato</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-slate-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-blue-400">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-lg text-slate-300 leading-relaxed">
                Desenvolvedor Fullstack com experiência prática como estagiário
                e freelancer, utilizando Vue.js, Bootstrap e JavaScript.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Familiarizado com ferramentas de versionamento como Git/GitHub,
                consumo de APIs RESTful, e princípios de UI/UX. Atualmente em
                busca de uma oportunidade como Desenvolvedor Júnior para aplicar
                e expandir minhas habilidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="text-blue-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-900/50 transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-blue-400 group-hover:text-blue-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-blue-400">Projetos</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-slate-800 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                    >
                      Demo
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                    >
                      Código
                      <Github size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-blue-400">Experiência</span> Profissional
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-blue-500/30 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-blue-400 mb-2">
                        <Building2 size={18} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <Calendar size={18} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm border border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificados" className="py-20 px-6 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-blue-400">Certificados</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-slate-800 flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 mb-1">{cert.issuer}</p>
                  <p className="text-slate-400 mb-1">{cert.date}</p>
                  <p className="text-slate-500 text-sm mb-4">
                    ID: {cert.credentialId}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                  >
                    Ver Certificado
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-blue-400">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-slate-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-slate-400">gustavorafael2001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-slate-100" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-slate-400">(71) 99404-4125</p>
                </div>
              </div>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Conecte-se comigo
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/gus-goes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  >
                    <Github
                      size={20}
                      className="text-slate-400 group-hover:text-slate-100"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gus-goes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group"
                  >
                    <Linkedin
                      size={20}
                      className="text-slate-400 group-hover:text-slate-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Gustavo Goes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
