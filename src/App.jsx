import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSmileBeam, FaPaperPlane, FaSearch, FaChartLine } from 'react-icons/fa';

// Ленивая загрузка компонентов для производительности 
const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

import './styles/main.css';
import './styles/components/header.css';
import './styles/components/hero.css';
import './styles/components/about.css';
import './styles/components/experience.css';
import './styles/components/skills.css';
import './styles/components/projects.css';
import './styles/components/contact.css';
import './styles/components/footer.css';
import './styles/utilities/responsive.css';
import './styles/utilities/theme.css';

// Компонент для частиц фона
const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particlesArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 5,
    }));
    setParticles(particlesArray);
  }, []);

  return (
    <div className="background-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.x + "%",
            top: p.y + "%",
            width: p.size + "px",
            height: p.size + "px",
            animationDelay: p.delay + "s",
          }}
        />
      ))}
    </div>
  );
};

// Компонент для плавающих фигур
const FloatingShapes = () => {
  const shapes = ["circle", "square"];
  
  return (
    <div className="floating-shapes">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`shape ${shape}`}
          style={{
            left: `${25 + i * 30}%`,
            animationDelay: `${i * 4}s`,
          }}
        />
      ))}
    </div>
  );
};

// App
function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Загрузка данных
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
    // Добавляем стили для сердечка курсора
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B8B' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E") 12 12, auto !important;
      }
      
      a, button, .btn, .project-card, .social-card, .contact-detail-card, .nav-link {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B8B' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E") 12 12, pointer !important;
      }
      
      input, textarea, [contenteditable] {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B8B' d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E") 12 12, text !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark-theme');
  };

  // Функция для конфетти
  const createConfetti = () => {
    const colors = [
      'var(--primary-pink)',
      'var(--secondary-pink)',
      'var(--light-pink)',
      '#FFD700',
      '#4ECDC4',
      '#45B7D1',
      '#FFB347'
    ];
    
    for(let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + "%";
      confetti.style.animationDelay = Math.random() * 2 + "s";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
      
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 2000);
    }
  };

  return (
    <div className={`App ${isDark ? 'dark' : 'light'}`}>
      {/* Экран загрузки */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="loader">
              <div className="loader-spinner"></div>
              <div className="loader-text">Загрузка портфолио...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Фоновые элементы */}
      <BackgroundParticles />
      <FloatingShapes />

      {/* Хедер */}
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      {/* Основной контент */}
      <main className="main-content">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Hero />
          <About /> 
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </motion.div>
      </main>

      {/* Плавающая кнопка для быстрой связи */}
      <motion.a
        href="#contact"
        className="floating-contact-btn"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="pulse-ring"></span>
        <FaPaperPlane style={{ fontSize: '18px' }} />
        <span className="btn-text">Написать мне</span>
      </motion.a>

      {/* Кнопка конфетти */}
      <div className="interactive-elements">
        <button 
          className="interactive-btn confetti-btn"
          onClick={createConfetti}
          aria-label="Запустить конфетти"
        >
          <FaSmileBeam />
        </button>
      </div>

      {/* Футер */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Елизавета Брагина. Все права защищены.</p>
          <p>Сделано с ❤️ и React</p>
        </div>
      </footer>
    </div>
  );
}

export default App;