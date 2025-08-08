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
} from "lucide-react";
import fotoPerfil from "./assets/teste.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobre", "skills", "experiencia", "contato"];
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

  // Função para o botão de Download do CV
  const handleDownloadCV = () => {
    // O seu currículo PDF deve estar na pasta 'public' do seu projeto React
    const link = document.createElement("a");
    link.href = "Gustavo_Goes_DevFrontend_JR.pdf";
    link.setAttribute("download", "CV_Gustavo_Goes.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- SUAS SKILLS ---
  const skills = [
    { name: "Vue.js", icon: Code },
    { name: "JavaScript / TypeScript", icon: Code },
    { name: "Python", icon: Code },
    { name: "Tailwind CSS / Bootstrap", icon: Palette },
    { name: "Git & GitHub", icon: Github },
    { name: "Figma", icon: Palette },
    { name: "Photoshop", icon: Palette },
    { name: "AWS (Básico)", icon: Server },
    { name: "Google Cloud (Básico)", icon: Server },
  ];

  // --- SUAS EXPERIÊNCIAS ---
  const experiences = [
    {
      title: "Desenvolvedor Front-end (Freelancer)",
      company: "FEPESBA - Fed. dos Pescadores do Est. da Bahia",
      period: "Fev 2025 - Mai 2025",
      description:
        "Criei o layout e identidade visual no Photoshop, alinhado com os valores da fundação. Realizei o deploy completo via AWS, configurando hospedagem e domínio. Fui responsável pela manutenção técnica por 3 meses após a entrega, garantindo atualizações e suporte contínuo.",
      technologies: ["Vue.js", "JavaScript", "Photoshop", "AWS"],
    },
    {
      title: "Estagiário de Desenvolvimento Web",
      company: "SEMDEC",
      period: "2023 - 2025",
      description:
        "Desenvolvi interfaces com foco em acessibilidade e semântica utilizando Vue.js e Bootstrap. Realizei a integração com APIs públicas do Gov.BR para exibição dinâmica de dados e fui responsável por manutenções e atualizações em sistemas existentes.",
      technologies: ["Vue.js", "Bootstrap", "API Rest", "Git", "GitHub"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-red-600/30">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-red-500">Gus.DEV</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "sobre", label: "Sobre", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "experiencia", label: "Experiência", icon: Briefcase },
                { id: "contato", label: "Contato", icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-red-600/20 ${
                    activeSection === id
                      ? "text-red-500 bg-red-600/10"
                      : "text-gray-300"
                  }`}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
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
                { id: "experiencia", label: "Experiência", icon: Briefcase },
                { id: "contato", label: "Contato", icon: MessageSquare },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-all duration-300 hover:bg-red-600/20 ${
                    activeSection === id
                      ? "text-red-500 bg-red-600/10"
                      : "text-gray-300"
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
      <section className="pt-24 pb-16 px-6 bg-gradient-to-br from-black via-gray-900 to-red-900/20">
        <div className="container mx-auto text-center">
          <div className=" rounded-full flex items-center justify-center">
            <img
              src={fotoPerfil}
              alt="Foto de perfil de Gustavo Goes"
              className="w-32 h-32 mx-auto mb-8 rounded-full object-cover border-4 border-red-600/50"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Gustavo</span>
            <span className="text-red-500"> Goes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Desenvolvedor Frontend Júnior
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageSquare size={20} />
              <span>Entre em Contato</span>
            </button>
            <button
              onClick={handleDownloadCV}
              className="border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-red-500">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 items-center max-w-4xl mx-auto">
            <div className="space-y-6 text-center">
              <p className="text-lg text-gray-300 leading-relaxed">
                Desenvolvedor Frontend com experiência prática como estagiário e
                freelancer, utilizando Vue.js, Bootstrap e JavaScript.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
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
      <section id="skills" className="py-20 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="text-red-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-xl border border-red-600/20 hover:border-red-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-red-600 transition-colors duration-300">
                      <Icon
                        size={24}
                        className="text-red-500 group-hover:text-white"
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

      {/* Experience Section */}
      <section id="experiencia" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-500">Experiência</span> Profissional
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-red-600/30 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-red-600 rounded-full border-4 border-black"></div>
                <div className="bg-black/40 p-6 rounded-xl border border-red-600/20 hover:border-red-500/50 transition-all duration-300 ml-4">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-red-500 mb-2">
                        <Building2 size={18} className="mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar size={18} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-red-600/20 text-red-400 rounded-full text-sm border border-red-600/30"
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

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-red-500">Contato</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border border-red-600/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-400">gustavorafael2001@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gray-900 rounded-xl border border-red-600/20 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-gray-400">(71) 99404-4125</p>
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
                    className="w-12 h-12 bg-gray-900 border border-red-600/20 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                  >
                    <Github
                      size={20}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gus-goes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 border border-red-600/20 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 group"
                  >
                    <Linkedin
                      size={20}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-red-600/30 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Gustavo Goes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
