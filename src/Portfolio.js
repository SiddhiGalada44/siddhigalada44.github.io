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
  const fullText = 'MS in Computer Science @ USC';

  // Enhanced tech stack with more details
  const techStack = {
    "Languages": {
      "Python": { icon: <Code className="w-5 h-5" />, level: 95 },
      "Java": { icon: <FileCode className="w-5 h-5" />, level: 90 },
      "JavaScript": { icon: <FileCode className="w-5 h-5" />, level: 85 },
      "TypeScript": { icon: <FileCode className="w-5 h-5" />, level: 85 },
      "Go": { icon: <FileCode className="w-5 h-5" />, level: 80 },
      "SQL": { icon: <Database className="w-5 h-5" />, level: 85 }
    },
    "Frameworks": {
      "React": { icon: <Box className="w-5 h-5" />, level: 90 },
      "Node.js": { icon: <Server className="w-5 h-5" />, level: 85 },
      "Flask": { icon: <Server className="w-5 h-5" />, level: 90 },
      "PyTorch": { icon: <Brain className="w-5 h-5" />, level: 85 }
    },
    "Cloud & DevOps": {
      "AWS": { icon: <Globe className="w-5 h-5" />, level: 80 },
      "Docker": { icon: <Box className="w-5 h-5" />, level: 85 },
      "Kubernetes": { icon: <Server className="w-5 h-5" />, level: 75 }
    }
  };

  // Enhanced projects data
  const projects = [
    {
      title: "Ticket Helper — LLM-Powered Support Assistant",
      description: "Built a Retrieval-Augmented Generation chatbot using FAISS and LangChain for ticket resolution, reducing lookup time by 65% and achieving 87% precision on labeled ticket sets.",
      tech: ["Python", "LangChain", "FAISS", "RAG", "OpenAI API"],
      location: "Los Angeles, CA",
      period: "Jul 2025 – Aug 2025",
      category: "ai",
      highlights: ["65% reduction in lookup time", "87% precision rate", "RAG implementation"],
      github: "#"
    },
    {
      title: "Secure Decentralized Audit System for EHR",
      description: "Developed a blockchain-based audit log with Merkle trees ensuring tamper-evidence and non-repudiation. Integrated RBAC + asymmetric cryptography into a Flask web UI.",
      tech: ["Python", "Flask", "Blockchain", "Cryptography", "RBAC"],
      location: "Los Angeles, CA",
      period: "Mar 2025 – Apr 2025",
      category: "security",
      highlights: ["100% session security improvement", "Tamper-proof audit logs", "Role-based access control"],
      github: "#"
    },
    {
      title: "Genetic Disorder Prediction",
      description: "Engineered a classifier on DNA microarray data (7,070 features), reaching 94.7% accuracy. Applied dimensionality reduction + stratified CV on 1,000+ samples.",
      tech: ["Python", "PyTorch", "ML Pipeline"],
      location: "Bengaluru, India",
      period: "Jan 2024 – May 2024",
      category: "machine-learning",
      highlights: ["94.7% accuracy", "7,070 gene features", "15% misclassification reduction"],
      github: "#"
    },
    {
      title: "Stock Market Prediction",
      description: "Developed a financial time-series forecasting model using Random Forests on S&P 500 data with engineered indicators and walk-forward validation.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      location: "Los Angeles, CA",
      period: "Current",
      category: "machine-learning",
      highlights: ["S&P 500 data analysis", "Feature engineering", "Walk-forward validation"],
      github: "#"
    },
    {
      title: "Weather Prediction System",
      description: "Forecasted daily weather using regression models with temporal feature extraction, achieving 92% prediction accuracy on historical datasets.",
      tech: ["Python", "Scikit-learn", "Matplotlib"],
      location: "Los Angeles, CA",
      period: "2024",
      category: "machine-learning",
      highlights: ["92% accuracy", "Temporal features", "Historical data analysis"],
      github: "#"
    },
    {
      title: "Maternal Database Management System",
      description: "Built a web-based system to manage immunization schedules and maternal healthcare data for 2,000+ patients with real-time reminders and updates.",
      tech: ["MySQL", "PHP", "HTML", "React"],
      location: "Bengaluru, India",
      period: "2023",
      category: "fullstack",
      highlights: ["2,000+ patients", "Real-time reminders", "Healthcare data management"],
      github: "#"
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
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      {/* Enhanced Navigation with scroll effect */}
      <nav className={`${darkMode ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'py-2' : 'py-4'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-emerald-400' : 'text-navy-700'} transition-all duration-300`} style={{color: darkMode ? '#10b981' : '#1e3a8a'}}>
              Siddhi Galada
            </h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['about', 'education', 'skills', 'projects', 'experience', 'leadership', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`hover:text-emerald-500 capitalize transition-colors duration-200 relative ${
                    activeSection === section 
                      ? (darkMode ? 'text-emerald-400 font-semibold' : 'font-semibold') 
                      : (darkMode ? 'text-slate-300' : 'text-slate-600')
                  }`}
                  style={{color: activeSection === section && !darkMode ? '#1e3a8a' : undefined}}
                >
                  {section}
                  {activeSection === section && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}></span>
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
        <section id="about" className={`py-16 md:py-24 ${darkMode ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100'} transition-colors duration-300 relative overflow-hidden`}>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#10b981'}}></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl animate-pulse delay-1000" style={{backgroundColor: '#1e3a8a'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className={`w-48 h-48 rounded-full overflow-hidden ${darkMode ? 'border-4 border-slate-600' : 'border-4 border-white'} shadow-2xl transform hover:scale-105 transition-all duration-500 relative`}>
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold" style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #10b981 100%)'}}>
                    SG
                  </div>
                  <div className="absolute inset-0" style={{background: 'linear-gradient(to top, rgba(16, 185, 129, 0.2) 0%, transparent 100%)'}}></div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className={`text-5xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-800'} animate-fadeIn`}>
                  Siddhi Galada
                </h2>
                <p className={`text-xl mb-4 h-7`} style={{color: darkMode ? '#10b981' : '#1e3a8a'}}>
                  {typedText}
                  <span className={`inline-block w-1 ml-1 h-6 ${typingComplete ? 'animate-blink' : ''}`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}></span>
                </p>
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-6 max-w-xl text-lg leading-relaxed`}>
                  Passionate software engineer and machine learning enthusiast, currently pursuing my Master's degree at USC. 
                  Experienced in building scalable applications, implementing ML solutions, and creating innovative healthcare technology.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="/Galada_Siddhi_Resume.pdf"
                    download 
                    className="flex items-center gap-2 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    style={{background: 'linear-gradient(135deg, #1e3a8a 0%, #10b981 100%)'}}
                  >
                    <DownloadCloud className="w-5 h-5" /> Download Resume
                  </a>
                  <a 
                    href="https://github.com/SiddhiGalada44" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-800 hover:bg-slate-700'} text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/siddhi-galada" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    style={{backgroundColor: '#0a66c2'}}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="mailto:galada@usc.edu" 
                    className="p-3 text-white rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    style={{backgroundColor: '#dc2626'}}
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-16 ${darkMode ? 'bg-slate-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Education</h2>
            <div className="space-y-8">
              <div 
                className={`${darkMode ? 'bg-slate-700 border-slate-600 hover:shadow-emerald-900/10' : 'bg-slate-50 border-slate-200 hover:shadow-xl'} p-8 rounded-xl shadow-sm border transition-all duration-500 transform hover:translate-y-[-8px] hover:scale-[1.02]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>University of Southern California</h3>
                    <p className={`text-xl mb-2`} style={{color: darkMode ? '#10b981' : '#1e3a8a'}}>Master of Science in Computer Science</p>
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
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Sir MVIT</h3>
                    <p className={`text-xl mb-2`} style={{color: darkMode ? '#10b981' : '#1e3a8a'}}>Bachelor of Engineering in Computer Science</p>
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

        {/* Enhanced Skills Section */}
        <section id="skills" className={`py-16 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(techStack).map(([category, skills]) => (
                <div 
                  key={category}
                  className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6 rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl transform hover:scale-105`}
                >
                  <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-800'} text-center`}>{category}</h3>
                  <div className="space-y-4">
                    {Object.entries(skills).map(([skill, data]) => (
                      <div key={skill} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span style={{color: darkMode ? '#10b981' : '#1e3a8a'}}>{data.icon}</span>
                            <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{skill}</span>
                          </div>
                          <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{data.level}%</span>
                        </div>
                        <div className={`h-2 ${darkMode ? 'bg-slate-700' : 'bg-slate-200'} rounded-full overflow-hidden`}>
                          <div 
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${data.level}%`,
                              background: 'linear-gradient(90deg, #1e3a8a 0%, #10b981 100%)'
                            }}
                          ></div>
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
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Featured Projects</h2>
            
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
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeTab === key 
                      ? 'text-white shadow-lg' 
                      : `${darkMode ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'} hover:shadow-md`
                  }`}
                  style={activeTab === key ? {background: 'linear-gradient(135deg, #1e3a8a 0%, #10b981 100%)'} : {}}
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
                    darkMode ? 'bg-slate-700 border-slate-600' : 'bg-white border-slate-200'
                  } rounded-xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] group`}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'} transition-colors duration-300 line-clamp-2`} style={{color: 'inherit'}}>
                        {project.title}
                      </h3>
                      <div className="flex gap-2 flex-shrink-0 ml-2">
                        {project.github && (
                          <a 
                            href={project.github}
                            className={`p-2 rounded-lg ${darkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-100 hover:bg-slate-200'} transition-colors duration-200`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        <button 
                          onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                          className={`p-2 rounded-lg ${
                            darkMode ? 'bg-slate-600 hover:bg-slate-500' : 'bg-slate-100 hover:bg-slate-200'
                          } transition-all duration-200`}
                        >
                          {expandedProject === index ? 
                            <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className={`transition-all overflow-hidden ${expandedProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className={`mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{project.description}</p>
                      
                      {/* Highlights */}
                      <div className="mb-4">
                        <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Key Highlights:</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className={`text-sm flex items-start ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                              <span style={{color: darkMode ? '#10b981' : '#1e3a8a'}} className="mr-2">•</span>
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
                              darkMode ? 'text-emerald-200' : 'text-slate-800'
                            }`}
                            style={{backgroundColor: darkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(30, 58, 138, 0.1)'}}
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
        <section id="experience" className={`py-16 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Professional Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-8 rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl transform hover:scale-[1.01]`}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>{exp.company}</h3>
                      <p className={`text-xl mb-2`} style={{color: darkMode ? '#10b981' : '#1e3a8a'}}>{exp.role}</p>
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
                  
                  <div className={`pl-4 border-l-2 mb-6`} style={{borderColor: darkMode ? '#10b981' : '#1e3a8a'}}>
                    <ul className={`space-y-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start group">
                          <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:animate-pulse`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack for Experience */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
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
            <h2 className={`text-4xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Leadership & Community</h2>
            
            <div 
              className={`${darkMode ? 'bg-slate-700 border-slate-600' : 'bg-slate-50 border-slate-200'} p-8 rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl transform hover:translate-x-2`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full mr-4`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}>
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>Women Who Code</h3>
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Member since Feb 2020 • Global (Remote)</p>
                </div>
              </div>
              
              <div className={`pl-4 border-l-2`} style={{borderColor: darkMode ? '#10b981' : '#1e3a8a'}}>
                <ul className={`space-y-3 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}></span>
                    Organized networking events for 100+ women in technology, building mentorship pipelines
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}></span>
                    Increased job placements by 25% through enhanced collaboration opportunities
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-200`} style={{backgroundColor: darkMode ? '#10b981' : '#1e3a8a'}}></span>
                    Provided access to mentorship and professional development resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-16 ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-white to-slate-50'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className={`text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Let's Connect</h2>
            <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} mb-12 max-w-2xl mx-auto text-lg`}>
              I'm always interested in discussing new opportunities, innovative projects, or just connecting with fellow tech enthusiasts. 
              Feel free to reach out!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a 
                href="mailto:galada@usc.edu" 
                className={`${darkMode ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-white hover:bg-slate-50 border-slate-200'} p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} style={{backgroundColor: '#dc2626'}}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>Email</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>galada@usc.edu</p>
              </a>
              
              <a 
                href="https://linkedin.com/in/siddhi-galada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${darkMode ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-white hover:bg-slate-50 border-slate-200'} p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} style={{backgroundColor: '#0a66c2'}}>
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>LinkedIn</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Connect with me</p>
              </a>
              
              <a 
                href="https://github.com/SiddhiGalada44" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${darkMode ? 'bg-slate-700 hover:bg-slate-600 border-slate-600' : 'bg-white hover:bg-slate-50 border-slate-200'} p-6 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} style={{backgroundColor: darkMode ? '#374151' : '#1f2937'}}>
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>GitHub</h3>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>View my projects</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-slate-800 text-white'} text-center`}>
          <div className="max-w-6xl mx-auto px-4">
            <p className="mb-4">&copy; {new Date().getFullYear()} Siddhi Galada. All rights reserved.</p>
            <p className="text-sm opacity-75">Built with React & Tailwind CSS</p>
            
            {/* Scroll to top button */}
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className={`mt-6 p-3 rounded-full ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-700 hover:bg-slate-600'} inline-flex items-center justify-center transform hover:translate-y-[-4px] transition-all duration-300 hover:shadow-lg`}
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
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
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
      `}</style>
    </div>
  );
};

export default Portfolio;