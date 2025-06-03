import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes, FaDownload, FaUser, FaCode, FaGraduationCap, FaBriefcase, FaLanguage } from 'react-icons/fa';

const links = [
  { label: 'Profil', to: 'profil', icon: <FaUser /> },
  { label: 'Compétences', to: 'skills', icon: <FaCode /> },
  { label: 'Expérience', to: 'experience', icon: <FaBriefcase /> },
  { label: 'Formation', to: 'education', icon: <FaGraduationCap /> },
  
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
        scrolled 
          ? 'py-2 bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          to="top"
          smooth
          duration={500}
          className="font-bold text-xl cursor-pointer group flex items-center"
        >
          <span className="bg-blue-600 dark:bg-blue-700 text-white w-10 h-10 rounded-lg flex items-center justify-center mr-2 shadow-md group-hover:scale-110 transition-transform duration-300">
            P
          </span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 bg-clip-text text-transparent font-extrabold">
            Mon Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-md flex items-center">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                className={`cursor-pointer px-3 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all duration-200 ${
                  activeSection === link.to 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
                activeClass="active"
                spy
                offset={-80}
                onSetActive={() => setActiveSection(link.to)}
              >
                <span className="text-xs">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center ml-2 gap-2">
            <a 
              href="/cvgedeon.pdf" 
              download 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-1.5"
            >
              <FaDownload size={12} />
              CV
            </a>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden menu-button bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200" 
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full right-2 mt-2 mobile-menu bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col gap-1 p-3 w-60 md:hidden z-50 border-t-4 border-blue-500 dark:border-blue-600 animate-fadeIn">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              className={`cursor-pointer px-4 py-3 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                activeSection === link.to 
                  ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              activeClass="active"
              onClick={() => setOpen(false)}
              spy
              offset={-80}
              onSetActive={() => setActiveSection(link.to)}
            >
              <span className="text-blue-600 dark:text-blue-400">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
          <a 
            href="/cvgedeon.pdf" 
            download 
            className="px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="text-blue-600 dark:text-blue-400"><FaDownload /></span>
            Télécharger CV
          </a>
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Changer le thème</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};


export default Header;