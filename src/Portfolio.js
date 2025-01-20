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
    "Python": <Code className="w-5 h-5" />,
    "Java": <FileCode className="w-5 h-5" />,
    "JavaScript": <FileCode className="w-5 h-5" />,
    "TypeScript": <FileCode className="w-5 h-5" />,
    "MongoDB": <Database className="w-5 h-5" />,
    "PostgreSQL": <Database className="w-5 h-5" />,
    "DynamoDB": <Database className="w-5 h-5" />,
    "MySQL": <Database className="w-5 h-5" />,
    "Linux": <Terminal className="w-5 h-5" />,
    "Docker": <Box className="w-5 h-5" />,
    "Node.js": <Server className="w-5 h-5" />,
    "Flutter": <Smartphone className="w-5 h-5" />,
    "Android Studio": <Laptop className="w-5 h-5" />
  };

  const projects = [
    {
      title: "Weather Prediction",
      description: "Developed a predictive weather model with 92% accuracy using Random Forest and LSTM algorithms. Serves 5,000+ monthly users with interactive dashboards.",
      tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      location: "Los Angeles, CA",
      category: "machine-learning"
    },
    {
      title: "Genetic Disorder Prediction",
      description: "Built a classification model achieving 94.7% accuracy for genetic disorder prediction using DNA microarray data from 7,070 genes.",
      tech: ["Python", "PyTorch", "Feature Engineering"],
      location: "Bengaluru, India",
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
    "Technologies": ["Linux", "MATLAB", "Flutter", "Android Studio", "Node.js"]
  };

  const filterProjects = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Siddhi Galada</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#resume" className="hover:text-blue-600">Resume</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col items-center">
          <div className="mb-8 w-48 h-48 rounded-full overflow-hidden">
             <img 
                src="profile.jpeg" 
                alt="Siddhi Galada"
                className="w-full h-full object-cover"
            />
          </div>
            <h1 className="text-4xl font-bold mb-4">Siddhi Galada</h1>
            <p className="text-xl text-gray-600 mb-4">MS in Computer Science @ USC</p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl text-center">
              Passionate software engineer and machine learning enthusiast, currently pursuing my Master's degree at USC. 
              Experienced in building scalable applications and implementing ML solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/SiddhiGalada44" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Github className="w-6 h-6 hover:text-blue-600" />
              </a>
              <a href="https://linkedin.com/in/siddhi-galada" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-6 h-6 hover:text-blue-600" />
              </a>
              <a href="mailto:galada@usc.edu" className="transform hover:scale-110 transition-transform duration-200">
                <Mail className="w-6 h-6 hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Resume</h2>
                  <button 
  onClick={(e) => {
    try {
      // Prevent default button behavior
      e.preventDefault();
      
      // Use the exact path for this GitHub Pages repository
      const resumeUrl = `https://siddhigalada44.github.io/public/Siddhi_Galada_Resume.pdf`;
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Siddhi_Galada_Resume.pdf';
      
      // Ensure the link is not displayed
      link.style.display = 'none';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Optional: Log for debugging
      console.log('Attempting to download resume from:', resumeUrl);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Unable to download resume. Please try again.');
    }
  }}
  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
>
  <Download className="w-5 h-5" />
  Download Resume
</button>
//             <button 
//     onClick={() => {
//       // Create a link element
//       const link = document.createElement('a');
      
//       // Path to your resume file in the public folder
//       // link.href = 'public/Siddhi_Galada_Resume.pdf';
//       link.setAttribute('download', 'public/Siddhi_Galada_Resume.pdf');

//       // Ensure the link is not displayed
//       link.style.display = 'none';
      
//       // Append to body, click, and remove
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }}
//   className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
// >
//               <Download className="w-5 h-5" />
//               Download Resume
//             </button>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">University of Southern California</h4>
                      <p className="text-lg">Master of Science in Computer Science</p>
                    </div>
                    <p className="text-gray-600">Aug 2024 – May 2026 (Expected)</p>
                  </div>
                  <p className="text-gray-600 mt-2">Los Angeles, CA</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold">Sir MVIT</h4>
                      <p className="text-lg">Bachelor of Engineering in Computer Science and Engineering</p>
                    </div>
                    <p className="text-gray-600">Dec 2020 – Jul 2024</p>
                  </div>
                  <p className="text-gray-600 mt-2">Bangalore, India</p>
                </div>
              </div>
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
                    <p className="text-lg">Machine Learning Intern</p>
                  </div>
                  <p className="text-gray-600">Aug 2023 – Oct 2023</p>
                </div>
                <p className="text-gray-600 mb-4">Bengaluru, India</p>
                <ul className="space-y-2 list-disc list-inside text-gray-600">
                  <li>Designed an advanced Preprocessor class, reducing preprocessing time by 30%</li>
                  <li>Analyzed sentiment distribution and visualized insights using word clouds</li>
                  <li>Built and trained a BERT-based classifier achieving 97% training accuracy</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                Leadership & Community
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-semibold">Women Who Code</h4>
                    <p className="text-lg">Member</p>
                  </div>
                  <p className="text-gray-600">Since Feb 2020</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-600 mt-4">
                  <li>Facilitated networking events connecting over 100 women in technology</li>
                  <li>Established a follow-up system leading to 25% increase in job placements</li>
                  <li>Enhanced collaboration opportunities and provided access to mentorship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          
          <div className="flex justify-center mb-8 space-x-4">
            <button 
              onClick={() => filterProjects('all')}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => filterProjects('machine-learning')}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'machine-learning' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Machine Learning
            </button>
            <button 
              onClick={() => filterProjects('mobile')}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                activeTab === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Mobile Development
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter(project => activeTab === 'all' || project.category === activeTab)
              .map((project, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div 
                      className="relative cursor-pointer"
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    >
                      <p className={`text-gray-600 mb-4 ${expandedProject === index ? '' : 'line-clamp-3'}`}>
                        {project.description}
                      </p>
                      {expandedProject !== index && (
                        <div className="absolute bottom-0 right-0 bg-gradient-to-l from-white pl-6">
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        </div>
                      )}
                      {expandedProject === index && (
                        <ChevronUp className="w-5 h-5 text-blue-600 ml-auto" />
                      )}
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-500">{project.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200 transition-colors duration-300"
                        >
                          {techIcons[tech] || <Code className="w-4 h-4" />}
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

      <section id="skills" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, index) => (
                  <span 
                    key={index} 
                    className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors duration-300"
                  >
                    {techIcons[skill] || <Code className="w-5 h-5" />}
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/SiddhiGalada44" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/siddhi-galada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a 
              href="mailto:galada@usc.edu"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
