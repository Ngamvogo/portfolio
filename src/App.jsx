import './index.css';
import Header from './components/Header';
import Section from './components/Section';
import {
  personalInfo, skills, education, certifications,
  experiences, tools, techs, languages
} from './data';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaLinkedin, FaGithub, FaGraduationCap, FaCode, FaLanguage, FaBriefcase, FaYoutube } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 transition-colors duration-300 text-gray-800 dark:text-gray-100">
      <Header />
      <main className="pt-20 sm:pt-24 pb-16 px-2 sm:px-4 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-600 rounded-full blur-md opacity-20 transform scale-110"></div>
              <img 
                src="/GEDEON.png" 
                alt="Profile" 
                className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl z-10 relative"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2">{personalInfo.name}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{personalInfo.title}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                {certifications.map((cert, i) => (
                  <span key={i} className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    {cert}
                  </span>
                ))}
              </div>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://youtu.be/oMaUp9EUHK4" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md flex items-center gap-2">
                  <FaYoutube /> YouTube
                </a>
                <a href="https://github.com/Ngamvogo?tab=repositories" className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md flex items-center gap-2">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl overflow-hidden mb-8 border border-blue-100 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center">
                  <FaUser className="mr-2" /> Informations
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg">
                      <FaPhone className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-100">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg">
                      <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-lg">
                      <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <span>{personalInfo.address}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Nationalité</span>
                    <span>{personalInfo.nationality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Né le</span>
                    <span>{personalInfo.birth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Statut</span>
                    <span>{personalInfo.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl overflow-hidden mb-8 border border-blue-100 dark:border-gray-700">
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center">
                  <FaLanguage className="mr-2" /> Langues
                </h2>
                <div className="space-y-3">
                  {languages.map((l, i) => (
                    <div
                      key={i}
                      className="bg-blue-50 dark:bg-gray-900 p-3 rounded-xl shadow text-sm flex justify-between items-center"
                    >
                      <span>{l}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <div 
                            key={j} 
                            className={`w-2 h-2 rounded-full ml-1 ${j < 4 ? 'bg-blue-500 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl overflow-hidden border border-blue-100 dark:border-gray-700">
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center">
                  <FaCode className="mr-2" /> Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            <Section id="profil" title="À propos" icon={<FaUser />}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg  md:items-center gap-4 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all">
                <p className="text-lg leading-relaxed mb-4">
                  {personalInfo.title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Développeur passionné avec une solide expérience dans la création d'applications web modernes et performantes. 
                  Spécialisé dans les technologies frontend et backend, je m'efforce de créer des interfaces utilisateur intuitives et accessibles.
                </p>
              </div>
            </Section>

            <Section id="certifications " title="certifications " icon={<FaGraduationCap />}>
              <div className="space-y-6">
                {certifications .map((e, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center gap-4 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-center md:min-w-32">
                      <div className="font-bold">{e}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="skills" title="Compétences" icon={<FaCode />}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((s, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-r from-blue-200 to-blue-200 dark:from-gray-900 dark:to-gray-900 p-4 rounded-xl text-center font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-blue-200 dark:border-gray-700"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </Section>

            <Section id="experience" title="Expérience Professionnelle" icon={<FaBriefcase />}>
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-blue-200 dark:before:bg-blue-900/50">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-0 bg-blue-500 dark:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {i + 1}
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                        <h3 className="font-bold text-xl text-blue-700 dark:text-blue-400">{exp.title}</h3>
                      </div>
                      <ul className="space-y-2 list-none">
                        {exp.tasks.map((t, j) => (
                          <li key={j} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="education" title="Formation" icon={<FaGraduationCap />}>
              <div className="space-y-6">
                {education.map((e, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row md:items-center gap-4 border border-blue-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all"
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-lg text-center md:min-w-32">
                      <div className="font-bold">{e.date}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{e.diploma}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
        <p>© {new Date().getFullYear()} {personalInfo.name} - Tous droits réservés</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-600 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            <FaGithub size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

