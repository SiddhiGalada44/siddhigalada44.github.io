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
  ChevronUp,
  ChevronDown,
  DownloadCloud,
  MapPin,
  Calendar,
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
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const fullText = 'MS in Computer Science @ USC';

  // Modern color scheme with personality
  const colors = {
    primary: '#6366f1', // indigo-500
    secondary: '#8b5cf6', // violet-500
    accent: '#ec4899', // pink-500
    teal: '#14b8a6', // teal-500
    light: '#faf5ff', // fuchsia-50
    dark: '#4c1d95', // violet-900
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
    gradientAlt: 'linear-gradient(135deg, #14b8a6 0%, #6366f1 100%)'
  };

  // Enhanced tech stack with creative design - Updated from resume
  const techStack = {
    "Languages": [
      { name: "Python", icon: <Code className="w-6 h-6" />, color: "#3776ab" },
      { name: "Java", icon: <FileCode className="w-6 h-6" />, color: "#f89820" },
      { name: "JavaScript", icon: <FileCode className="w-6 h-6" />, color: "#f7df1e" },
      { name: "TypeScript", icon: <FileCode className="w-6 h-6" />, color: "#3178c6" },
      { name: "Go", icon: <FileCode className="w-6 h-6" />, color: "#00add8" },
      { name: "SQL", icon: <Database className="w-6 h-6" />, color: "#336791" },
      { name: "C++", icon: <Code className="w-6 h-6" />, color: "#00599C" },
      { name: "C", icon: <Code className="w-6 h-6" />, color: "#A8B9CC" }
    ],
    "Frameworks & Libraries": [
      { name: "React", icon: <Box className="w-6 h-6" />, color: "#61dafb" },
      { name: "Node.js", icon: <Server className="w-6 h-6" />, color: "#339933" },
      { name: "Express", icon: <Server className="w-6 h-6" />, color: "#000000" },
      { name: "Flask", icon: <Server className="w-6 h-6" />, color: "#000000" },
      { name: "PyTorch", icon: <Brain className="w-6 h-6" />, color: "#ee4c2c" },
      { name: "TensorFlow", icon: <Brain className="w-6 h-6" />, color: "#FF6F00" },
      { name: "scikit-learn", icon: <Brain className="w-6 h-6" />, color: "#F7931E" },
      { name: "Pandas", icon: <Database className="w-6 h-6" />, color: "#150458" },
      { name: "NumPy", icon: <Code className="w-6 h-6" />, color: "#013243" },
      { name: "LangChain", icon: <Code className="w-6 h-6" />, color: "#1C3C3C" },
      { name: "FAISS", icon: <Brain className="w-6 h-6" />, color: "#0467DF" }
    ],
    "Databases & Tools": [
      { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, color: "#336791" },
      { name: "MongoDB", icon: <Database className="w-6 h-6" />, color: "#47A248" },
      { name: "DynamoDB", icon: <Database className="w-6 h-6" />, color: "#4053D6" },
      { name: "MySQL", icon: <Database className="w-6 h-6" />, color: "#4479A1" },
      { name: "Git", icon: <Terminal className="w-6 h-6" />, color: "#F05032" },
      { name: "FHIR", icon: <FileCode className="w-6 h-6" />, color: "#FF6B6B" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <Globe className="w-6 h-6" />, color: "#ff9900" },
      { name: "Docker", icon: <Box className="w-6 h-6" />, color: "#2496ed" },
      { name: "Kubernetes", icon: <Server className="w-6 h-6" />, color: "#326ce5" },
      { name: "GitHub Actions", icon: <Terminal className="w-6 h-6" />, color: "#2088ff" },
      { name: "CI/CD", icon: <Terminal className="w-6 h-6" />, color: "#2088ff" }
    ]
  };

  // Enhanced projects data - Updated from resume and GitHub
  const projects = [
    {
      title: "Real-Time Stock Portfolio Management Platform",
      description: "Developed a full-stack MERN application featuring a simulated EMR leveraging EpicCerner APIs, enabling 100% internal testing coverage and achieving a 3x improvement in scenario setup time. Designed CRUD interfaces and Python FTS pipeline for 200,000+ records, implementing REST/WebSocket APIs.",
      tech: ["React", "Node.js", "Express", "MongoDB", "WebSocket", "Python", "FHIR", "Epic/Cerner APIs"],
      location: "Redwood City, CA",
      period: "Mar 2025 – Aug 2025",
      category: "fullstack",
      highlights: ["100% internal testing coverage", "3x faster scenario setup", "200,000+ records processed", "REST/WebSocket APIs"],
      github: "https://github.com/SiddhiGalada44/stock-portfolio-app"
    },
    {
      title: "GitWise — AI-Powered Repository Explorer",
      description: "Built a 100% local, privacy-focused AI code assistant using React, TypeScript, and Ollama. Features natural language codebase queries, smart file browsing with syntax highlighting, code generation, repository insights, and multi-step deep analysis. Runs entirely on user's machine with no cloud dependencies.",
      tech: ["React 19", "TypeScript", "Node.js", "Express", "Vite", "Ollama", "Qwen 2.5 Coder", "Docker"],
      location: "Los Angeles, CA",
      period: "Nov 2025",
      category: "ai",
      highlights: ["100% local & private", "AI chat for codebases", "Pattern-based code generation", "Repository comparison & insights"],
      github: "https://github.com/SiddhiGalada44/gitwise"
    },
    {
      title: "Ticket Helper — LLM-Powered Support Assistant",
      description: "Python, LangChain, FAISS, RAG. Trained/deployed a FAISS-backed RAG chatbot using LangChain API for ticket resolution. Optimized semantic retrieval pipelines to 87% precision on labeled support ticket sets, integrated a serverless Flask API and system-level caching pipeline, slashing lookup time from 600 s to ensure sub-second (~90 ms) latency at 85% accuracy and adding unit tests to ensure production-level reliability for deployment.",
      tech: ["Python", "LangChain", "FAISS", "RAG", "Flask", "OpenAI API"],
      location: "Los Angeles, CA",
      period: "Jul 2025 – Aug 2025",
      category: "ai",
      highlights: ["87% precision rate", "Sub-second latency (90ms)", "Production-ready deployment", "600s → 90ms optimization"],
      github: "https://github.com/SiddhiGalada44/Ticket-Helper"
    },
    {
      title: "Secure Decentralised EHR Audit Log",
      description: "Designed a connected backend EHR aggregation service to fetch from multiple FHIR/WebSocket APIs, achieving clean code load and cutting workflow runtime latency by 3.0x. Built Go microservices for 20+ routing and data flow logic, containerised test setups with Docker/Compose for concurrent deployment, reducing setup time complexity to 80% and built a cross-verification framework, boosted API Tester Docker Compose for unit testing and debugging.",
      tech: ["Python", "Flask", "Blockchain", "Merkle Trees", "RSA Cryptography", "RBAC"],
      location: "Los Angeles, CA",
      period: "Mar 2025 – Apr 2025",
      category: "security",
      highlights: ["3x runtime improvement", "80% setup time reduction", "Docker containerization", "Blockchain-based tamper-proof logs"],
      github: "https://github.com/SiddhiGalada44/Secure-Decentralised-EHR-Audit-Log"
    },
    {
      title: "Genetic Disorder Prediction",
      description: "Engineered a proof-of-concept classifier on 7,070-feature DNA microarray data, reaching 94.7% accuracy. Applied dimensionality reduction + stratified CV on 1,000+ samples, cutting misclassification by 15%.",
      tech: ["Python", "PyTorch", "scikit-learn", "Pandas"],
      location: "Bengaluru, India",
      period: "Jan 2024 – May 2024",
      category: "machine-learning",
      highlights: ["94.7% accuracy", "7,070 gene features analyzed", "15% misclassification reduction", "1,000+ sample dataset"],
      github: "https://github.com/SiddhiGalada44/Genetic-Disorder"
    },
    {
      title: "Weather Prediction System",
      description: "Forecasted daily weather using regression models with temporal feature extraction, achieving 92% prediction accuracy on historical datasets.",
      tech: ["Python", "scikit-learn", "Matplotlib", "Pandas"],
      location: "Los Angeles, CA",
      period: "Nov 2024",
      category: "machine-learning",
      highlights: ["92% prediction accuracy", "Temporal feature engineering", "Regression modeling"],
      github: "https://github.com/SiddhiGalada44/WeatherPrediction"
    },
    {
      title: "Olympic Medal Prediction",
      description: "Built a machine learning model to predict Olympic medals won by countries using historical data. Implemented Linear Regression on features including previous medals, number of athletes, year, and athlete demographics for multi-country forecasting.",
      tech: ["Python", "scikit-learn", "Pandas", "Linear Regression"],
      location: "Los Angeles, CA",
      period: "Nov 2024",
      category: "machine-learning",
      highlights: ["Country-level predictions", "Historical data analysis", "Feature engineering with demographics"],
      github: "https://github.com/SiddhiGalada44/predicting-medals-for-olympics"
    },
    {
      title: "COVID-19 Sentiment Analysis",
      description: "Analyzed sentiment in COVID-19 related social media data using NLP techniques. Processed Twitter data to determine emotional tone and public opinion during the pandemic using text classification models.",
      tech: ["Python", "NLP", "BERT", "Jupyter Notebook"],
      location: "Bengaluru, India",
      period: "Aug 2023 – Oct 2023",
      category: "ai",
      highlights: ["Social media sentiment analysis", "COVID-19 data processing", "Text classification"],
      github: "https://github.com/SiddhiGalada44/Sentiment-analysis"
    },
    {
      title: "Shopon E-commerce Website",
      description: "Designed and developed a full-featured e-commerce website using React. Created a modern shopping platform with product catalog, shopping cart, and responsive UI design showcasing frontend development skills.",
      tech: ["React", "JavaScript", "CSS", "HTML"],
      location: "Los Angeles, CA",
      period: "May 2025",
      category: "fullstack",
      highlights: ["E-commerce platform", "React components", "Responsive design"],
      github: "https://github.com/SiddhiGalada44/Shopon-website"
    }
  ];

  // Experience data - Updated from resume
  const experiences = [
    {
      company: "Suki.ai",
      role: "Software Engineering Intern",
      location: "Redwood City, CA",
      period: "Mar 2025 – Aug 2025",
      achievements: [
        "Developed a simulated EMR leveraging Epic/Cerner APIs, enabling 100% internal testing coverage and 3x improvement in scenario setup time",
        "Designed CRUD interfaces and Python FTS pipeline for 200,000+ records, implementing REST/WebSocket APIs",
        "Designed a connected backend EHR aggregation service to fetch from multiple FHIR/WebSocket APIs, achieving clean code load and cutting workflow runtime latency by 3.0x",
        "Built Go microservices for 20+ routing and data flow logic, containerized test setups with Docker/Compose for concurrent deployment, reducing setup time complexity by 80%",
        "Engineered RESTful API with TypeScript & Express to integrate Gizmo's Client 2.5 Oracle code generator and built file analysis, tailoring database schema code scripts, reducing setup time complexity by 89%",
        "Built a cross-verification framework, boosted API Tester Docker Compose for unit testing and debugging"
      ],
      tech: ["React", "TypeScript", "Go", "Python", "Docker", "Kubernetes", "FHIR", "Epic/Cerner APIs", "WebSocket", "Express"]
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
    <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`} style={{fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"}}>
      {/* Enhanced Navigation with scroll effect */}
      <nav className={`${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md ${scrollY > 50 ? 'shadow-lg' : ''} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'py-3' : 'py-5'} border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-black transition-all duration-300 gradient-text-vibrant`}>
              SG
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
        {/* Modern Hero Section with Unique Design */}
        <section id="about" className={`min-h-screen flex items-center ${darkMode ? 'bg-slate-900' : 'bg-slate-50'} transition-colors duration-300 relative overflow-hidden`}>
          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
                 style={{background: colors.gradient, animationDuration: '4s'}}></div>
            <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl animate-pulse"
                 style={{background: colors.gradientAlt, animationDuration: '6s', animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse"
                 style={{background: colors.gradient, animationDuration: '5s', animationDelay: '2s'}}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-slate-800 text-indigo-400' : 'bg-white text-indigo-600'} border ${darkMode ? 'border-slate-700' : 'border-indigo-200'}`}>
                    Available for opportunities
                  </div>
                  <h1 className={`text-6xl md:text-7xl font-black ${darkMode ? 'text-white' : 'text-slate-900'} leading-tight`}>
                    Hey, I'm <br/>
                    <span className="gradient-text-vibrant">Siddhi</span>
                  </h1>
                  <div className={`text-2xl md:text-3xl font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {typedText}
                    <span className={`inline-block w-1 ml-1 h-7 ${typingComplete ? 'animate-blink' : ''} bg-gradient-to-r from-indigo-500 to-pink-500`}></span>
                  </div>
                </div>

                <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed max-w-xl`}>
                  Building scalable systems at the intersection of AI, healthcare, and cloud infrastructure.
                  Former intern at <span className="font-semibold" style={{color: colors.primary}}>Suki.ai</span>,
                  passionate about turning research into production-ready solutions.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="/Galada_Siddhi_Resume.pdf"
                    download
                    className="group relative px-8 py-4 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{background: colors.gradient}}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <DownloadCloud className="w-5 h-5" />
                      Get Resume
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {e.preventDefault(); handleSectionClick('contact');}}
                    className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-white text-slate-900 hover:bg-slate-100'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                  >
                    Let's Talk
                  </a>
                </div>

                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/SiddhiGalada44" target="_blank" rel="noopener noreferrer"
                     className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-700'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com/in/siddhi-galada" target="_blank" rel="noopener noreferrer"
                     className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-700'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:galada@usc.edu"
                     className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-slate-50 text-slate-700'} border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Column - Stats/Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} border backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                  <div className="text-4xl font-black mb-2" style={{background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>9+</div>
                  <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Projects Built</div>
                </div>
                <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} border backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                  <div className="text-4xl font-black mb-2" style={{background: colors.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>3.69</div>
                  <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>GPA @ USC</div>
                </div>
                <div className={`col-span-2 p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} border backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                  <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Current focus</div>
                  <div className="flex flex-wrap gap-2">
                    {["LLMs & RAG", "Distributed Systems", "Go/TypeScript"].map((skill, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-slate-700 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`col-span-2 p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} border backdrop-blur-sm`}>
                  <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Quick highlights</div>
                  <div className="space-y-2 text-sm">
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <Star className="w-4 h-4" style={{color: colors.accent}} />
                      Built SimEHR at Suki.ai
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <Star className="w-4 h-4" style={{color: colors.accent}} />
                      89% setup time reduction
                    </div>
                    <div className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      <Star className="w-4 h-4" style={{color: colors.accent}} />
                      200K+ records processed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300 relative overflow-hidden`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <span className="gradient-text-vibrant">Education</span>
              </h2>
            </div>
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
        <section id="skills" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Tech <span className="gradient-text-vibrant">Stack</span>
              </h2>
              <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
                Tools and technologies I use to bring ideas to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              {Object.entries(techStack).map(([category, skills], categoryIndex) => (
                <div
                  key={category}
                  className={`${darkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-white border-purple-200/50'} backdrop-blur-sm p-8 rounded-2xl border shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] group relative overflow-hidden h-full flex flex-col`}
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
                  <div className="relative z-10 space-y-4 flex-grow">
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
        <section id="projects" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Featured <span className="gradient-text-vibrant">Work</span>
              </h2>
              <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto`}>
                Real-world projects that solve problems and push boundaries
              </p>
            </div>
            
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

                    <div className={`transition-all overflow-hidden ${expandedProject === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                      <div className="flex flex-wrap gap-2 mb-4">
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

                      {/* Project Links */}
                      {project.github && (
                        <div className="flex gap-3 pt-3 border-t" style={{borderColor: darkMode ? 'rgba(124, 58, 237, 0.2)' : 'rgba(124, 58, 237, 0.1)'}}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105`}
                            style={{background: colors.gradient}}
                          >
                            <Github className="w-4 h-4" />
                            View on GitHub
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-slate-600 hover:bg-slate-500 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'} transition-all duration-300 hover:shadow-lg hover:scale-105`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Experience Section */}
        <section id="experience" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <span className="gradient-text-vibrant">Experience</span>
              </h2>
            </div>

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
        <section id="leadership" className={`py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-5xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Leadership & <span className="gradient-text-vibrant">Community</span>
              </h2>
            </div>
            
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
        <section id="contact" className={`py-20 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'} transition-colors duration-300 relative overflow-hidden`}>
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl"
                 style={{background: colors.gradient}}></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-16">
              <h2 className={`text-5xl md:text-6xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Let's <span className="gradient-text-vibrant">Connect</span>
              </h2>
              <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto text-lg`}>
                Open to new opportunities and collaborations. Let's build something great together.
              </p>
            </div>
            
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
        <footer className={`py-12 ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-white border-t border-slate-200'} text-center relative`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                <p className="font-semibold gradient-text-vibrant text-lg mb-1">Siddhi Galada</p>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/SiddhiGalada44" target="_blank" rel="noopener noreferrer"
                   className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/siddhi-galada" target="_blank" rel="noopener noreferrer"
                   className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:galada@usc.edu"
                   className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Scroll to top button */}
              <button
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'}`}
                aria-label="Scroll to top"
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>

            <div className={`mt-6 pt-6 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
              <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                Designed & built with passion using React & Tailwind CSS
              </p>
            </div>
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

        /* Vibrant gradient text */
        .gradient-text-vibrant {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
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