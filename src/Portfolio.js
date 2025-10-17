import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code,
  Database, 
  Terminal,
  FileCode,
  Box,
  Server,
  Smartphone,
  ChevronUp,
  ChevronDown,
  Briefcase,
  Users,
  DownloadCloud,
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Moon,
  Sun,
  Brain,
  Shield,
  Globe,
  Zap,
  Star
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredWord, setHoveredWord] = useState(null);
  const fullText = 'MS in Computer Science @ USC';

  // Professional Purple color scheme
  const colors = {
    primary: '#7c3aed', // purple-600 (slightly muted)
    secondary: '#a78bfa', // purple-400 (softer)
    accent: '#ddd6fe', // purple-200 (subtle)
    light: '#f5f3ff', // purple-50 (very light)
    dark: '#5b21b6', // purple-800
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)'
  };

  // Enhanced tech stack with creative design
  const techStack = {
    "Languages": [
      { name: "Python", icon: <Code className="w-6 h-6" />, color: "#3776ab" },
      { name: "Java", icon: <FileCode className="w-6 h-6" />, color: "#f89820" },
      { name: "JavaScript", icon: <FileCode className="w-6 h-6" />, color: "#f7df1e" },
      { name: "TypeScript", icon: <FileCode className="w-6 h-6" />, color: "#3178c6" },
      { name: "Go", icon: <FileCode className="w-6 h-6" />, color: "#00add8" },
      { name: "SQL", icon: <Database className="w-6 h-6" />, color: "#336791" },
      { name: "C++", icon: <Code className="w-6 h-6" />, color: "#00599C" },
      { name: "HTML/CSS", icon: <FileCode className="w-6 h-6" />, color: "#E34F26" }
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: <Box className="w-6 h-6" />, color: "#61dafb" },
      { name: "Node.js", icon: <Server className="w-6 h-6" />, color: "#339933" },
      { name: "Express.js", icon: <Server className="w-6 h-6" />, color: "#000000" },
      { name: "Flask", icon: <Server className="w-6 h-6" />, color: "#000000" },
      { name: "PyTorch", icon: <Brain className="w-6 h-6" />, color: "#ee4c2c" },
      { name: "TensorFlow", icon: <Brain className="w-6 h-6" />, color: "#FF6F00" },
      { name: "Scikit-learn", icon: <Brain className="w-6 h-6" />, color: "#F7931E" },
      { name: "Pandas", icon: <Database className="w-6 h-6" />, color: "#150458" },
      { name: "LangChain", icon: <Code className="w-6 h-6" />, color: "#1C3C3C" },
      { name: "Tailwind CSS", icon: <FileCode className="w-6 h-6" />, color: "#06B6D4" }
    ],
    "Databases & Tools": [
      { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "#47A248" },
      { name: "MySQL", icon: <Database className="w-6 h-6" />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "#336791" },
      { name: "Redis", icon: <Database className="w-6 h-6" />, color: "#DC382D" },
      { name: "Git", icon: <Terminal className="w-6 h-6" />, color: "#F05032" },
      { name: "FHIR", icon: <FileCode className="w-6 h-6" />, color: "#FF6B6B" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <Globe className="w-6 h-6" />, color: "#ff9900" },
      { name: "Docker", icon: <Box className="w-6 h-6" />, color: "#2496ed" },
      { name: "Kubernetes", icon: <Server className="w-6 h-6" />, color: "#326ce5" },
      { name: "GitHub Actions", icon: <Terminal className="w-6 h-6" />, color: "#2088ff" },
      { name: "CI/CD", icon: <Terminal className="w-6 h-6" />, color: "#2088ff" },
      { name: "Vite", icon: <Zap className="w-6 h-6" />, color: "#646CFF" }
    ]
  };

  // Enhanced projects data
  const projects = [
    {
      title: "Real-Time Stock Portfolio Tracker",
      description: "Built a full-stack MERN investment portfolio management application with live market data via Finnhub WebSocket API, enabling real-time tracking of 21+ stocks and crypto assets. Implemented secure JWT authentication, analyst recommendation insights, and glassmorphism UI design.",
      tech: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "JWT", "Vite", "Finnhub API", "Framer Motion"],
      location: "Los Angeles, CA",
      period: "Oct 2025",
      category: "fullstack",
      highlights: ["Real-time WebSocket price updates", "Secure JWT authentication with bcrypt", "Multi-API data aggregation with Promise.all()", "Glassmorphism UI with animations"],
      github: "https://github.com/SiddhiGalada44/portfolio-tracker"
    },
    {
      title: "Ticket Helper — LLM-Powered Support Assistant",
      description: "Built a Retrieval-Augmented Generation chatbot using FAISS and LangChain for ticket resolution, reducing lookup time by 65% and achieving 87% precision on labeled ticket sets.",
      tech: ["Python", "LangChain", "FAISS", "RAG", "OpenAI API"],
      location: "Los Angeles, CA",
      period: "Jul 2025 – Aug 2025",
      category: "ai",
      highlights: ["65% reduction in lookup time", "87% precision rate", "RAG implementation"]
    },
    {
      title: "Secure Decentralized Audit System for EHR",
      description: "Developed a blockchain-based audit log with Merkle trees ensuring tamper-evidence and non-repudiation. Integrated RBAC + asymmetric cryptography into a Flask web UI.",
      tech: ["Python", "Flask", "Blockchain", "Cryptography", "RBAC"],
      location: "Los Angeles, CA",
      period: "Mar 2025 – Apr 2025",
      category: "security",
      highlights: ["100% session security improvement", "Tamper-proof audit logs", "Role-based access control"]
    },
    {
      title: "Genetic Disorder Prediction",
      description: "Engineered a classifier on DNA microarray data (7,070 features), reaching 94.7% accuracy. Applied dimensionality reduction + stratified CV on 1,000+ samples.",
      tech: ["Python", "PyTorch", "ML Pipeline"],
      location: "Bengaluru, India",
      period: "Jan 2024 – May 2024",
      category: "machine-learning",
      highlights: ["94.7% accuracy", "7,070 gene features", "15% misclassification reduction"]
    },
    {
      title: "Stock Market Prediction",
      description: "Developed a financial time-series forecasting model using Random Forests on S&P 500 data with engineered indicators and walk-forward validation.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      location: "Los Angeles, CA",
      period: "2024",
      category: "machine-learning",
      highlights: ["S&P 500 data analysis", "Feature engineering", "Walk-forward validation"]
    },
    {
      title: "Weather Prediction System",
      description: "Forecasted daily weather using regression models with temporal feature extraction, achieving 92% prediction accuracy on historical datasets.",
      tech: ["Python", "Scikit-learn", "Matplotlib"],
      location: "Los Angeles, CA",
      period: "2024",
      category: "machine-learning",
      highlights: ["92% accuracy", "Temporal features", "Historical data analysis"]
    },
    {
      title: "Maternal Database Management System",
      description: "Built a web-based system to manage immunization schedules and maternal healthcare data for 2,000+ patients with real-time reminders and updates.",
      tech: ["MySQL", "PHP", "HTML", "React"],
      location: "Bengaluru, India",
      period: "2023",
      category: "fullstack",
      highlights: ["2,000+ patients", "Real-time reminders", "Healthcare data management"]
    }
  ];

  // Experience data
  const experiences = [
    {
      company: "Suki.ai",
      role: "Software Engineering Intern",
      location: "Redwood City, CA",
      period: "Jun 2025 – Aug 2025",
      achievements: [
        "Designed and developed SimEHR, a simulated EMR platform replicating Epic/Cerner APIs, enabling 100% internal testing coverage",
        "Implemented React/TypeScript CRUD for FHIR resources, improving scenario setup time by 3x",
        "Built Go microservices for API routing and data workflows, supporting 10+ EMR integration scenarios",
        "Automated containerized test environments, cutting manual QA effort by 80%",
        "Co-developed automated REST API tests and CI workflows, reducing integration defects by 30%"
      ],
      tech: ["React", "TypeScript", "Go", "Docker", "Kubernetes", "GitHub Actions"]
    },
    {
      company: "Varcons Technologies Pvt Ltd",
      role: "Software Engineering Intern – NLP Systems",
      location: "Bengaluru, India", 
      period: "Aug 2023 – Oct 2023",
      achievements: [
        "Built an ETL pipeline in Python to clean/normalize COVID-19 Twitter data, improving NLP workflow efficiency by 30%",
        "Refactored sentiment analysis modules for modular experimentation and reproducibility",
        "Fine-tuned a BERT-based classifier achieving 89% validation accuracy on domain-specific data"
      ],
      tech: ["Python", "BERT", "Hugging Face", "ETL", "NLP"]
    }
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Filter projects by category
  const filterProjects = (category) => setActiveTab(category);
  
  // Set active section for smooth scrolling and highlighting
  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  // Typing effect for hero section
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, fullText]);
  
  // Dark mode toggle effect
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Get project categories with counts
  const getProjectCategories = () => {
    const categories = {
      'all': projects.length,
      'ai': projects.filter(p => p.category === 'ai').length,
      'machine-learning': projects.filter(p => p.category === 'machine-learning').length,
      'security': projects.filter(p => p.category === 'security').length,
      'fullstack': projects.filter(p => p.category === 'fullstack').length
    };
    return categories;
  };

  const projectCounts = getProjectCategories();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-purple-50 text-slate-700'} transition-colors duration-300`} style={{fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
      {/* Enhanced Navigation with scroll effect */}
      <nav className={`${darkMode ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold transition-all duration-300 gradient-text-purple`}>
              Siddhi Galada
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['about', 'education', 'skills', 'projects', 'experience', 'leadership', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`hover:text-purple-500 capitalize transition-colors duration-200 relative ${
                    activeSection === section
                      ? (darkMode ? 'text-purple-400 font-semibold' : 'font-semibold text-purple-600')
                      : (darkMode ? 'text-slate-300' : 'text-slate-600')
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full`} style={{background: colors.gradient}}></span>
                  )}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-amber-300' : 'bg-slate-200 text-slate-700'} transition-all duration-300 hover:scale-110`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full ${darkMode ? 'bg-slate-700 text-amber-300' : 'bg-slate-200 text-slate-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-200'} transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              >
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 mt-2 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-lg animate-fadeIn`}>
              {['about', 'education', 'skills', 'projects', 'experience', 'leadership', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`block w-full text-left px-4 py-2 capitalize hover:bg-opacity-50 ${
                    activeSection === section 
                      ? (darkMode ? 'bg-slate-700 text-emerald-400' : 'bg-slate-100') 
                      : ''
                  }`}
                  style={{color: activeSection === section && !darkMode ? '#1e3a8a' : undefined}}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Enhanced Hero Section */}
        <section id="about" className={`py-16 md:py-24 ${darkMode ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' : 'bg-gradient-to-br from-purple-50 via-white to-purple-100'} transition-colors duration-300 relative overflow-hidden`}>
          {/* Subtle background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: colors.primary}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl" style={{backgroundColor: colors.secondary}}></div>
          </div>

          {/* Minimal floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: '3px',
                  height: '3px',
                  backgroundColor: colors.accent,
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float ${Math.random() * 15 + 15}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.2
                }}
              />
            ))}
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className={`text-5xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-700'} animate-fadeIn`}>
                  Siddhi Galada
                </h2>
                <p className={`text-xl mb-4 h-7 gradient-text-purple font-semibold`}>
                  {typedText}
                  <span className={`inline-block w-1 ml-1 h-6 ${typingComplete ? 'animate-blink' : ''}`} style={{background: colors.gradient}}></span>
                </p>

                {/* Professional description */}
                <div className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-8 max-w-4xl mx-auto text-lg leading-relaxed`}>
                  <p className="mb-4">
                    I thrive on bridging the gap between cutting-edge research and practical, real-world systems.
                    Whether it's simulating EMR workflows to make healthcare AI more reliable or experimenting with generative models
                    for creative problem-solving, I enjoy pushing projects from idea to production with a focus on scalability and impact.
                    My work blends a strong foundation in computer science with hands-on engineering, letting me adapt quickly across
                    domains like blockchain, cloud-native systems, and machine learning.
                  </p>

                  <p>
                    Outside of building systems, I'm deeply curious about how technology shapes the world around us.
                    I enjoy exploring topics like data ethics, healthcare innovation, and the future of human–AI collaboration,
                    and I often translate those interests into side projects that test new ideas.
                    I also love connecting with other developers, whether through hackathons, study groups, or open-source contributions,
                    because I believe the best solutions come from shared creativity and collaboration.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/Galada_Siddhi_Resume.pdf"
                    download
                    className="flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    style={{background: colors.gradient}}
                  >
                    <DownloadCloud className="w-5 h-5" />
                    Download Resume
                  </a>
                  <a
                    href="https://github.com/SiddhiGalada44"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105`}
                    style={{background: colors.gradient}}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/siddhi-galada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{background: colors.gradient}}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:galada@usc.edu"
                    className="p-3 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{background: colors.gradient}}
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300 relative overflow-hidden`}>
          {/* Animated wave decoration with purple theme */}
          <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
            <div className={`h-full`}
              style={{
                background: colors.gradient,
                width: '200%',
                animation: 'wave 8s linear infinite'
              }}
            ></div>
          </div>

          <div className="max-w-5xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-700'} animate-fadeIn`}>Education</h2>
            <div className="space-y-8">
              <div 
                className={`${darkMode ? 'bg-slate-700 border-slate-600 hover:shadow-emerald-900/10' : 'bg-slate-50 border-slate-200 hover:shadow-xl'} p-8 rounded-xl shadow-sm border transition-all duration-500 transform hover:translate-y-[-8px] hover:scale-[1.02]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>University of Southern California</h3>
                    <p className={`text-xl mb-2`} style={{color: colors.primary}}>Master of Science in Computer Science</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>Focus: Machine Learning & Software Engineering</span>
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 flex flex-col items-end ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Aug 2024 – May 2026 (Expected)</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Los Angeles, CA</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div 
                className={`${darkMode ? 'bg-slate-700 border-slate-600 hover:shadow-emerald-900/10' : 'bg-slate-50 border-slate-200 hover:shadow-xl'} p-8 rounded-xl shadow-sm border transition-all duration-500 transform hover:translate-y-[-8px] hover:scale-[1.02]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>Sir MVIT</h3>
                    <p className={`text-xl mb-2`} style={{color: colors.primary}}>Bachelor of Engineering in Computer Science</p>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>CGPA: 9.09/10</span>
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 flex flex-col items-end ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Dec 2020 – Jul 2024</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Skills Section */}
        <section id="skills" className={`py-16 ${darkMode ? 'bg-slate-900' : 'bg-purple-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-700'}`}>Core Technologies</h2>
              <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
                Proficient in modern technologies and frameworks that power scalable, efficient solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(techStack).map(([category, skills], categoryIndex) => (
                <div
                  key={category}
                  className={`${darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-purple-200/50'} backdrop-blur-sm p-8 rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group relative overflow-hidden`}
                  style={{
                    boxShadow: darkMode ? undefined : '0 8px 32px rgba(124, 58, 237, 0.1)',
                    animationDelay: `${categoryIndex * 200}ms`
                  }}
                >
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Header */}
                  <div className="relative z-10 mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`} style={{background: darkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}}>
                      {category === 'Languages' && <Code className={`w-8 h-8`} style={{color: colors.primary}} />}
                      {category === 'Frameworks & Libraries' && <Box className={`w-8 h-8`} style={{color: colors.primary}} />}
                      {category === 'Databases & Tools' && <Database className={`w-8 h-8`} style={{color: colors.primary}} />}
                      {category === 'Cloud & DevOps' && <Server className={`w-8 h-8`} style={{color: colors.primary}} />}
                    </div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-700'} mb-2`}>{category}</h3>
                    <div className={`w-12 h-1 rounded-full`} style={{background: colors.gradient}}></div>
                  </div>
                  
                  {/* Skills Grid */}
                  <div className="relative z-10 space-y-4">
                    {skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`relative flex items-center p-4 rounded-lg ${darkMode ? 'bg-slate-700/30 hover:bg-slate-700/50' : 'bg-slate-50 hover:bg-slate-100'} transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg group/item cursor-pointer overflow-hidden`}
                        style={{
                          animationDelay: `${(categoryIndex * 200) + (index * 100)}ms`
                        }}
                      >
                        {/* Animated background on hover */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover/item:opacity-10 transition-opacity duration-300"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                            transform: 'translateX(-100%)',
                            animation: hoveredSkill === skill.name ? 'shimmer 1.5s infinite' : 'none'
                          }}
                        ></div>

                        {/* Skill Icon */}
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-4 group-hover/item:scale-110 group-hover/item:rotate-12 transition-all duration-300 relative"
                          style={{backgroundColor: darkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.15)'}}
                        >
                          <div style={{color: colors.primary}} className="group-hover/item:animate-pulse">
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <div className="flex-grow relative z-10">
                          <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-700'} group-hover/item:${darkMode ? 'text-white' : 'text-slate-800'} transition-colors duration-300`}>
                            {skill.name}
                          </span>
                          {/* Progress bar */}
                          <div className={`mt-2 h-1 ${darkMode ? 'bg-slate-600' : 'bg-slate-200'} rounded-full overflow-hidden`}>
                            <div
                              className="h-full rounded-full transition-all duration-1000 ease-out"
                              style={{
                                background: colors.gradient,
                                width: hoveredSkill === skill.name ? '100%' : '0%'
                              }}
                            ></div>
                          </div>
                        </div>

                        {/* Proficiency Indicator with pulse */}
                        <div className="flex-shrink-0 relative">
                          <div className={`w-3 h-3 rounded-full group-hover/item:scale-125 transition-all duration-300`} style={{backgroundColor: colors.primary}}></div>
                          {hoveredSkill === skill.name && (
                            <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping" style={{backgroundColor: colors.primary, opacity: 0.4}}></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section id="projects" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-700'}`}>Featured Projects</h2>
            
            {/* Enhanced Filter Tabs */}
            <div className="flex flex-wrap justify-center mb-12 gap-3">
              {[
                { key: 'all', label: 'All Projects', icon: <Code className="w-4 h-4" /> },
                { key: 'ai', label: 'AI/ML', icon: <Brain className="w-4 h-4" /> },
                { key: 'machine-learning', label: 'Machine Learning', icon: <Zap className="w-4 h-4" /> },
                { key: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
                { key: 'fullstack', label: 'Full Stack', icon: <Globe className="w-4 h-4" /> }
              ].map(({ key, label, icon }) => (
                <button 
                  key={key}
                  onClick={() => filterProjects(key)} 
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === key
                      ? 'text-white shadow-lg'
                      : `${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'} hover:shadow-md`
                  }`}
                  style={activeTab === key ? {background: colors.gradient} : {}}
                >
                  {icon}
                  {label}
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeTab === key ? 'bg-white/20' : (darkMode ? 'bg-slate-600' : 'bg-slate-200')
                  }`}>
                    {projectCounts[key]}
                  </span>
                </button>
              ))}
            </div>
            
            {/* Enhanced Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => activeTab === 'all' || p.category === activeTab).map((project, index) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-purple-200/50'
                  } rounded-xl border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] group relative`}
                  style={{
                    boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(124, 58, 237, 0.12)',
                    animation: `scaleIn 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Purple gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: colors.gradient,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }}></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-700'} transition-colors duration-300 line-clamp-2`}>
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className={`flex-shrink-0 ml-2 p-2 rounded-lg ${
                          darkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-100 hover:bg-slate-200'
                        } transition-all duration-200`}
                      >
                        {expandedProject === index ?
                          <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    <div className={`transition-all overflow-hidden ${expandedProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{project.description}</p>
                      
                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Key Highlights:</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className={`text-sm flex items-start ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                              <span style={{color: colors.primary}} className="mr-2">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Location and Period */}
                      <div className={`text-sm mb-4 flex items-center gap-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {project.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.period}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`text-xs px-3 py-1 rounded-full ${
                              darkMode ? 'text-purple-200' : 'text-purple-800'
                            }`}
                            style={{backgroundColor: darkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className={`py-16 ${darkMode ? 'bg-slate-900' : 'bg-purple-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-700'}`}>Professional Experience</h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-purple-200/50'} p-8 rounded-xl border transition-all duration-300 hover:shadow-xl transform hover:scale-[1.01] relative group overflow-hidden`}
                  style={{
                    boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(124, 58, 237, 0.1)'
                  }}
                >
                  {/* Purple gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                    background: `linear-gradient(135deg, ${colors.primary}05 0%, ${colors.secondary}08 100%)`
                  }}></div>

                  <div className="flex flex-col lg:flex-row lg:justify-between mb-6 relative z-10">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>{exp.company}</h3>
                      <p className={`text-xl mb-2`} style={{color: colors.primary}}>{exp.role}</p>
                      <div className={`flex items-center gap-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`pl-4 border-l-2 mb-6 relative z-10`} style={{borderColor: colors.primary}}>
                    <ul className={`space-y-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover/item:animate-pulse`} style={{backgroundColor: colors.primary}}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack for Experience with purple theme */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode ? 'text-purple-200' : 'text-purple-800'
                        }`}
                        style={{backgroundColor: darkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-700'}`}>Leadership & Community</h2>
            
            <div
              className={`${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-purple-200/50'} p-8 rounded-xl border transition-all duration-300 hover:shadow-xl transform hover:translate-x-2`}
              style={{
                boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(124, 58, 237, 0.1)'
              }}
            >
              <div className="flex items-center mb-6">
                <div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-700'}`}>Women Who Code</h3>
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Member since Feb 2020 • Global (Remote)</p>
                </div>
              </div>
              
              <div className={`pl-4 border-l-2`} style={{borderColor: colors.primary}}>
                <ul className={`space-y-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200`} style={{backgroundColor: colors.primary}}></span>
                    Organized networking events for 100+ women in technology, building mentorship pipelines
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200`} style={{backgroundColor: colors.primary}}></span>
                    Increased job placements by 25% through enhanced collaboration opportunities
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200`} style={{backgroundColor: colors.primary}}></span>
                    Provided access to mentorship and professional development resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-16 ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-purple-100 via-purple-50 to-white'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-700'}`}>Let's Connect</h2>
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-12 max-w-2xl mx-auto text-lg`}>
              I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow tech enthusiasts. 
              Feel free to reach out!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:galada@usc.edu"
                className={`${darkMode ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-white hover:bg-purple-50 border-purple-200/50'} p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 group`}
                style={{
                  boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(124, 58, 237, 0.1)'
                }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} style={{background: colors.gradient}}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>Email</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>galada@usc.edu</p>
              </a>

              <a
                href="https://linkedin.com/in/siddhi-galada"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-white hover:bg-purple-50 border-purple-200/50'} p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 group`}
                style={{
                  boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(124, 58, 237, 0.1)'
                }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} style={{background: colors.gradient}}>
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>LinkedIn</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Connect with me</p>
              </a>

              <a
                href="https://github.com/SiddhiGalada44"
                target="_blank"
                rel="noopener noreferrer"
                className={`${darkMode ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-white hover:bg-purple-50 border-purple-200/50'} p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 group`}
                style={{
                  boxShadow: darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(124, 58, 237, 0.1)'
                }}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} style={{background: colors.gradient}}>
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-700'}`}>GitHub</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>View my projects</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 ${darkMode ? 'bg-slate-900 text-slate-300' : 'text-white'} text-center relative overflow-hidden`}
          style={{
            background: darkMode ? undefined : colors.gradient
          }}
        >
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <p className="mb-4 font-medium">&copy; {new Date().getFullYear()} Siddhi Galada. All rights reserved.</p>
            <p className="text-sm opacity-90">Built with React, Tailwind CSS & Love 💜</p>

            {/* Scroll to top button */}
            <button
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className={`mt-6 p-3 rounded-full inline-flex items-center justify-center transform hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg`}
              style={{
                background: darkMode ? 'rgba(51, 65, 85, 1)' : 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(240deg);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
          }
          50% {
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor;
          }
        }

        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes codeTyping {
          0%, 100% {
            width: 30%;
            opacity: 0.3;
          }
          50% {
            width: 80%;
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }

        .dark-mode {
          color-scheme: dark;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Glassmorphism effect */
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        /* Smooth gradient text */
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #1e3a8a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Professional purple gradient text */
        .gradient-text-purple {
          background: linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Purple glow effect */
        .purple-glow {
          box-shadow: 0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(192, 132, 252, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;