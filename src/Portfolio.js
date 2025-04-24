import React, { useState } from 'react';
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
  Users
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  const techIcons = {
    "Python": <Code className="w-5 h-5" />, "Java": <FileCode className="w-5 h-5" />, "JavaScript": <FileCode className="w-5 h-5" />, "TypeScript": <FileCode className="w-5 h-5" />,
    "MongoDB": <Database className="w-5 h-5" />, "PostgreSQL": <Database className="w-5 h-5" />, "DynamoDB": <Database className="w-5 h-5" />, "MySQL": <Database className="w-5 h-5" />,
    "Linux": <Terminal className="w-5 h-5" />, "Docker": <Box className="w-5 h-5" />, "Node.js": <Server className="w-5 h-5" />, "Flutter": <Smartphone className="w-5 h-5" />
  };

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

  const filterProjects = (category) => setActiveTab(category);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Siddhi Galada</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#education" className="hover:text-blue-600">Education</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#leadership" className="hover:text-blue-600">Leadership</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="py-20 bg-white">
  <div className="text-center mb-6">
    <a href="/Siddhi_Galada_Resume_SWE.pdf" download className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16V4H4zm4 10l4 4 4-4m-4-4v8" /></svg>
      Download Resume
    </a>
  </div>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6">
      <img src="profile.jpeg" alt="Siddhi Galada" className="w-full h-full object-cover" />
    </div>
    <h2 className="text-4xl font-bold mb-2">Siddhi Galada</h2>
    <p className="text-lg text-gray-600 mb-4">MS in Computer Science @ USC</p>
    <p className="text-gray-700 max-w-2xl mx-auto">
      Passionate software engineer and machine learning enthusiast, currently pursuing my Master's degree at USC. Experienced in building scalable applications and implementing ML solutions.
    </p>
    <div className="flex justify-center space-x-4 mt-6">
      <a href="https://github.com/SiddhiGalada44" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6 hover:text-blue-600" />
      </a>
      <a href="https://linkedin.com/in/siddhi-galada" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 hover:text-blue-600" />
      </a>
      <a href="mailto:galada@usc.edu">
        <Mail className="w-6 h-6 hover:text-blue-600" />
      </a>
    </div>
  </div>
</section>

<section id="education" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <h3 className="text-xl font-semibold">University of Southern California</h3>
      <p>Master of Science in Computer Science</p>
      <p className="text-sm text-gray-600">Aug 2024 – May 2026 (Expected) | Los Angeles, CA</p>
    </div>
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold">Sir MVIT</h3>
      <p>Bachelor of Engineering in Computer Science and Engineering</p>
      <p className="text-sm text-gray-600">Dec 2020 – Jul 2024 | Bengaluru, India</p>
    </div>
  </div>
</section>

<section id="leadership" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Leadership & Community</h2>
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold">Women Who Code</h3>
      <p>Member since Feb 2020</p>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        <li>Facilitated networking events connecting over 100 women in technology.</li>
        <li>Established a follow-up system leading to 25% increase in job placements.</li>
        <li>Enhanced collaboration opportunities and provided access to mentorship.</li>
      </ul>
    </div>
  </div>
</section>

<section id="contact" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
    <div className="flex justify-center space-x-6">
      <a href="mailto:galada@usc.edu" className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
        <Mail className="w-5 h-5" /> Email
      </a>
      <a href="https://linkedin.com/in/siddhi-galada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        <Linkedin className="w-5 h-5" /> LinkedIn
      </a>
      <a href="https://github.com/SiddhiGalada44" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
        <Github className="w-5 h-5" /> GitHub
      </a>
    </div>
  </div>
</section>

<section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="flex justify-center mb-8 space-x-4">
            <button onClick={() => filterProjects('all')} className={`px-4 py-2 rounded-lg ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>All</button>
            <button onClick={() => filterProjects('machine-learning')} className={`px-4 py-2 rounded-lg ${activeTab === 'machine-learning' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Machine Learning</button>
            <button onClick={() => filterProjects('security')} className={`px-4 py-2 rounded-lg ${activeTab === 'security' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Security</button>
            <button onClick={() => filterProjects('fullstack')} className={`px-4 py-2 rounded-lg ${activeTab === 'fullstack' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Fullstack</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => activeTab === 'all' || p.category === activeTab).map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-bold mb-2 cursor-pointer" onClick={() => setExpandedProject(expandedProject === index ? null : index)}>
                  {project.title}
                </h3>
                {expandedProject === index && (
                  <>
                    <p className="text-gray-700 mb-2">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {techIcons[tech] || <Code className="w-4 h-4" />} {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                <div className="text-right mt-2">
                  {expandedProject === index ? <ChevronUp className="w-4 h-4 inline-block" /> : <ChevronDown className="w-4 h-4 inline-block" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">Varcons Technologies Pvt Ltd</h3>
                <p className="text-lg">Machine Learning Intern</p>
                <p className="text-gray-600">Bengaluru, India</p>
              </div>
              <p className="text-gray-600">Aug 2023 – Oct 2023</p>
            </div>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>Designed an advanced Preprocessor class, reducing preprocessing time by 30%</li>
              <li>Analyzed sentiment distribution and visualized insights using word clouds</li>
              <li>Built and trained a BERT-based classifier achieving 97% training accuracy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
