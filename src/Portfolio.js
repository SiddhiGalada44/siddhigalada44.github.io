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
  Sun
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = 'MS in Computer Science @ USC';

  // Tech stack icons
  const techIcons = {
    "Python": <Code className="w-5 h-5" />, 
    "Java": <FileCode className="w-5 h-5" />, 
    "JavaScript": <FileCode className="w-5 h-5" />, 
    "TypeScript": <FileCode className="w-5 h-5" />,
    "MongoDB": <Database className="w-5 h-5" />, 
    "PostgreSQL": <Database className="w-5 h-5" />, 
    "DynamoDB": <Database className="w-5 h-5" />, 
    "MySQL": <Database className="w-5 h-5" />,
    "Linux": <Terminal className="w-5 h-5" />, 
    "Node.js": <Server className="w-5 h-5" />, 
    "Flutter": <Smartphone className="w-5 h-5" />
  };

  // Projects data
  const projects = [
    {
      title: "Secure Decentralized Audit System",
      description: "Designed a blockchain-based audit system for EHRs using Flask, cryptography, and role-based access control to ensure tamper-proof data access and logging.",
      tech: ["Python", "Flask", "Blockchain"],
      location: "Los Angeles, CA",
      category: "security"
    },
    {
      title: "Stock Market Prediction",
      description: "Developed a financial time-series forecasting model using Random Forests on S&P 500 data with engineered indicators and walk-forward validation.",
      tech: ["Python", "Pandas", "Scikit-learn"],
      location: "Los Angeles, CA",
      category: "machine-learning"
    },
    {
      title: "Genetic Disorder Prediction",
      description: "Built a PyTorch-based classifier with 94.7% accuracy on DNA microarray data to detect genetic disorders across 7,070 genes.",
      tech: ["Python", "PyTorch"],
      location: "Bengaluru, India",
      category: "machine-learning"
    },
    {
      title: "Weather Prediction System",
      description: "Forecasted daily weather using regression models with temporal feature extraction, achieving 92% prediction accuracy on historical datasets.",
      tech: ["Python", "Scikit-learn", "Matplotlib"],
      location: "Los Angeles, CA",
      category: "machine-learning"
    },
    {
      title: "Maternal Database Management System",
      description: "Built a web-based system to manage immunization schedules and maternal healthcare data for 2,000+ patients with real-time reminders and updates.",
      tech: ["MySQL", "PHP", "HTML", "React"],
      location: "Bengaluru, India",
      category: "fullstack"
    }
  ];

  // Filter projects by category
  const filterProjects = (category) => setActiveTab(category);
  
  // Set active section for smooth scrolling and highlighting
  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close mobile menu after clicking
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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Fixed Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Siddhi Galada</h1>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['about', 'education', 'projects', 'experience', 'leadership', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`hover:text-blue-500 capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? (darkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold') 
                      : (darkMode ? 'text-gray-300' : 'text-gray-600')
                  }`}
                >
                  {section}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
              >
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current mb-1.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 mt-2 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg animate-fadeIn`}>
              {['about', 'education', 'projects', 'experience', 'leadership', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`block w-full text-left px-4 py-2 capitalize ${
                    activeSection === section 
                      ? (darkMode ? 'bg-gray-700 text-blue-400' : 'bg-gray-100 text-blue-600') 
                      : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with Consistent Section Styling */}
      <div className="pt-20">
        {/* Hero Section */}
        <section id="about" className={`py-16 md:py-24 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className={`w-48 h-48 rounded-full overflow-hidden ${darkMode ? 'border-4 border-gray-700' : 'border-4 border-white'} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                  <img src="profile.jpeg" alt="Siddhi Galada" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className={`text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'} animate-fadeIn`}>Siddhi Galada</h2>
                <p className={`text-xl ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4 h-7`}>
                  {typedText}
                  <span className={`inline-block w-1 ml-1 h-6 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} ${typingComplete ? 'animate-blink' : ''}`}></span>
                </p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 max-w-xl transform transition-all duration-700 ease-in-out hover:translate-x-2`}>
                  Passionate software engineer and machine learning enthusiast, currently pursuing my Master's degree at USC. Experienced in building scalable applications and implementing ML solutions.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="/Siddhi_Galada_Resume_SWE.pdf" 
                    download 
                    className={`flex items-center gap-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg transition transform hover:scale-105`}
                  >
                    <DownloadCloud className="w-5 h-5" /> Resume
                  </a>
                  <a 
                    href="https://github.com/SiddhiGalada44" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-2 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-full transition transform hover:scale-110`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/siddhi-galada" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition transform hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:galada@usc.edu" 
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition transform hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Education</h2>
            <div className="space-y-6">
              <div 
                className={`${darkMode ? 'bg-gray-700 border-gray-600 hover:shadow-blue-900/10' : 'bg-gray-50 border-gray-100 hover:shadow-md'} p-6 rounded-lg shadow-sm border transition-all duration-300 transform hover:translate-y-[-4px]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>University of Southern California</h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Master of Science in Computer Science</p>
                  </div>
                  <div className={`mt-2 md:mt-0 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Aug 2024 – May 2026 (Expected)</span>
                    <MapPin className="w-4 h-4 ml-3 mr-1" />
                    <span>Los Angeles, CA</span>
                  </div>
                </div>
              </div>
              
              <div 
                className={`${darkMode ? 'bg-gray-700 border-gray-600 hover:shadow-blue-900/10' : 'bg-gray-50 border-gray-100 hover:shadow-md'} p-6 rounded-lg shadow-sm border transition-all duration-300 transform hover:translate-y-[-4px]`}
              >
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Sir MVIT</h3>
                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bachelor of Engineering in Computer Science</p>
                  </div>
                  <div className={`mt-2 md:mt-0 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Dec 2020 – Jul 2024</span>
                    <MapPin className="w-4 h-4 ml-3 mr-1" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Redesigned with cards */}
        <section id="projects" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Projects</h2>
            
            {/* Filter Tabs - Animated */}
            <div className="flex flex-wrap justify-center mb-10 space-x-2 space-y-2 sm:space-y-0">
              <button 
                onClick={() => filterProjects('all')} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'all' 
                    ? `${darkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white` 
                    : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`
                }`}
              >
                All
              </button>
              <button 
                onClick={() => filterProjects('machine-learning')} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'machine-learning' 
                    ? `${darkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white` 
                    : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`
                }`}
              >
                Machine Learning
              </button>
              <button 
                onClick={() => filterProjects('security')} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'security' 
                    ? `${darkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white` 
                    : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`
                }`}
              >
                Security
              </button>
              <button 
                onClick={() => filterProjects('fullstack')} 
                className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'fullstack' 
                    ? `${darkMode ? 'bg-blue-600' : 'bg-blue-600'} text-white` 
                    : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-white text-gray-700 hover:bg-gray-200'}`
                }`}
              >
                Fullstack
              </button>
            </div>
            
            {/* Project Grid with Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => activeTab === 'all' || p.category === activeTab).map((project, index) => (
                <div 
                  key={index} 
                  className={`${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                  } rounded-lg shadow-md border overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h3>
                      <button 
                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                        className={`${
                          darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                        } rounded-full p-1 transition-colors duration-200`}
                        aria-label={expandedProject === index ? "Collapse details" : "Expand details"}
                      >
                        {expandedProject === index ? 
                          <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    <div className={`transition-all overflow-hidden ${expandedProject === index ? 'max-h-96' : 'max-h-0'}`}>
                      <p className={`my-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{project.description}</p>
                      <p className={`text-sm mb-3 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <MapPin className="w-4 h-4 mr-1" /> {project.location}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className={`flex items-center gap-1 text-xs ${
                              darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
                            } px-2 py-1 rounded`}
                          >
                            {techIcons[tech] || <Code className="w-4 h-4" />} {tech}
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

        {/* Experience Section */}
        <section id="experience" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Professional Experience</h2>
            
            <div 
              className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-100'} p-6 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md transform hover:scale-[1.01]`}
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <div>
                  <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Varcons Technologies Pvt Ltd</h3>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Machine Learning Intern</p>
                </div>
                <div className={`mt-2 md:mt-0 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Aug 2023 – Oct 2023</span>
                  <MapPin className="w-4 h-4 ml-3 mr-1" />
                  <span>Bengaluru, India</span>
                </div>
              </div>
              
              <div className={`pl-4 border-l-2 ${darkMode ? 'border-blue-500' : 'border-blue-200'}`}>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mt-2 mr-2 group-hover:animate-pulse`}></span>
                    Designed an advanced Preprocessor class, reducing preprocessing time by 30%
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mt-2 mr-2 group-hover:animate-pulse`}></span>
                    Analyzed sentiment distribution and visualized insights using word clouds
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mt-2 mr-2 group-hover:animate-pulse`}></span>
                    Built and trained a BERT-based classifier achieving 97% training accuracy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4">
            <h2 className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Leadership & Community</h2>
            
            <div 
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} p-6 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-lg transform hover:translate-x-1`}
            >
              <div className="flex items-center mb-4">
                <Award className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'} mr-2`} />
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Women Who Code</h3>
              </div>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Member since Feb 2020</p>
              
              <div className={`pl-4 border-l-2 ${darkMode ? 'border-blue-500' : 'border-blue-200'}`}>
                <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mt-2 mr-2 group-hover:scale-150 transition-transform duration-200`}></span>
                    Facilitated networking events connecting over 100 women in technology.
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mt-2 mr-2 group-hover:scale-150 transition-transform duration-200`}></span>
                    Established a follow-up system leading to 25% increase in job placements.
                  </li>
                  <li className="flex items-start group">
                    <span className={`inline-block w-2 h-2 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} mt-2 mr-2 group-hover:scale-150 transition-transform duration-200`}></span>
                    Enhanced collaboration opportunities and provided access to mentorship.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-16 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-blue-50'} transition-colors duration-300`}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Get in Touch</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-lg mx-auto`}>
              Feel free to reach out for collaboration opportunities or just to say hello!
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
              <a 
                href="mailto:galada@usc.edu" 
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition transform hover:scale-105"
              >
                <Mail className="w-5 h-5" /> Email
              </a>
              <a 
                href="https://linkedin.com/in/siddhi-galada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
              <a 
                href="https://github.com/SiddhiGalada44" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition transform hover:scale-105"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer with Animation */}
        <footer className={`py-6 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-800 text-white'} text-center`}>
          <div className="max-w-6xl mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Siddhi Galada. All rights reserved.</p>
            
            {/* Add animated scroll to top button */}
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className={`mt-4 p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-700 hover:bg-gray-600'} inline-flex items-center justify-center transform hover:translate-y-[-4px] transition-all duration-300`}
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </footer>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
      `}</style>
    </div>
  );
};

export default Portfolio;
