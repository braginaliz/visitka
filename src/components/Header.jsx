import React, { useState, useEffect } from 'react';
import { FaCode, FaGithub, FaLinkedin, FaTelegram, FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Определение разделов навигации
  const sections = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'Обо мне' },
    { id: 'experience', label: 'Опыт' },
    { id: 'skills', label: 'Навыки' },
    { id: 'projects', label: 'Проекты' },
    { id: 'contact', label: 'Контакты' }
  ];

  // Обработка скролла и определение активного раздела
  useEffect(() => {
    const handleScroll = () => {
      // Проверка скролла
      setIsScrolled(window.scrollY > 50);

      // Определение активного раздела
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Вызов сразу для начального состояния
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Прокрутка к разделу
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Логотип */}
        <a href="#home" className="logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          <FaCode className="logo-icon" />
          <span className="logo-text">Fullstack-разработчик</span>
        </a>

        {/* Навигация */}
        <nav className="nav">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
            >
              {section.label}
              <span className="nav-indicator"></span>
            </a>
          ))}
        </nav>

        {/* Элементы управления */}
        <div className="header-controls">
          {/* Переключение темы */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={isDark ? "Переключить на светлую тему" : "Переключить на темную тему"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          
          {/* Социальные ссылки */}
          <div className="social-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://t.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;