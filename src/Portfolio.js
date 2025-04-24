import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Database,
  Terminal,
  FileCode,
  Box,
  Laptop,
  Server,
  Smartphone,
  ChevronUp,
  ChevronDown,
  Download,
  GraduationCap,
  Briefcase,
  Users
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedProject, setExpandedProject] = useState(null);

  const techIcons = {
    "Python": <Code className="w-5 h-5" />, "Java": <FileCode className="w-5 h-5" />, "JavaScript": <FileCode className="w-5 h-5" />, "TypeScript": <FileCode className="w-5 h-5" />,
    "MongoDB": <Database className="w-5 h-5" />, "PostgreSQL": <Database className="w-5 h-5" />, "DynamoDB": <Database className="w-5 h-5" />, "MySQL": <Database className="w-5 h-5" />,
    "Linux": <Terminal className="w-5 h-5" />, "Docker": <Box className="w-5 h-5" />, "Node.js": <Server className="w-5 h-5" />, "Flutter": <Smartphone className="w-5 h-5" />,
  };

  const projects = [
    {
      title: "Secure Decentralized Audit System",
      description: "Designed a blockchain-backed audit logging system for EHRs using Flask and RBAC to ensure tamper-evident access trails.",
      tech: ["Python", "Flask", "Blockchain", "Cryptography"],
      location: "Los Angeles, CA",
      category: "fullstack"
    },
    {
      title: "Genetic Disorder Prediction",
      description: "Built a classification model achieving 94.7% accuracy for genetic disorder prediction using DNA microarray data from 7,070 genes.",
      tech: ["Python", "PyTorch", "Feature Engineering"],
      location: "Bengaluru, India",
      category: "machine-learning"
    },
    {
      title: "Stock Market Forecasting",
      description: "Engineered a Random Forest pipeline with financial indicators to predict S&P 500 trends, achieving 57% precision.",
      tech: ["Python", "Pandas", "Scikit-learn", "yfinance"],
      location: "Los Angeles, CA",
      category: "machine-learning"
    },
    {
      title: "Classroom Attendance Tracker",
      description: "Mobile app with secure authentication handling 1,000+ student profiles, improving data accessibility by 40%.",
      tech: ["Java", "Android Studio"],
      location: "Bengaluru, India",
      category: "mobile"
    }
  ];

  const skills = {
    "Languages": ["Python", "Java", "C++", "C", "R", "JavaScript", "TypeScript", "Git", "SQL", "HTML", "CSS", "GO"],
    "Databases": ["MongoDB", "PostgreSQL", "DynamoDB", "MySQL"],
    "Technologies": ["Linux", "MATLAB", "Flutter", "Android Studio", "Node.js", "Flask", "PyTorch"]
  };

  const filterProjects = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ...navigation and about sections stay the same... */}

      <section id="resume" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Resume</h2>
            <a
              href="/Siddhi_Galada_Resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              {/* ...education stays the same... */}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Experience
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold">Varcons Technologies Pvt Ltd</h4>
                    <p className="text-lg">Software Engineering Intern – NLP Systems</p>
                  </div>
                  <p className="text-gray-600">Aug 2023 – Oct 2023</p>
                </div>
                <p className="text-gray-600 mb-4">Bengaluru, India</p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Developed a scalable text preprocessing engine in Python to clean and normalize COVID-19 Twitter data, improving pipeline efficiency by 30%.</li>
                  <li>Modularized sentiment analysis components for maintainable classification and visualization workflows.</li>
                  <li>Fine-tuned a BERT-based classifier using Hugging Face Transformers, achieving 89% validation accuracy.</li>
                  <li>Collaborated with a cross-functional team to enhance model robustness and resolve edge-case data issues.</li>
                </ul>
              </div>
            </div>

            {/* ...leadership section stays the same... */}
          </div>
        </div>
      </section>

      {/* ...rest of portfolio stays the same... */}
    </div>
  );
};

export default Portfolio;
