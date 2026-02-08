import React from 'react';
import { FaArrowDown, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {

  const techStack = ['React', 'Node.js', 'TypeScript', 'MongoDB'];

  // Что-то сделать с лицом (попроще)
  const avatarUrl = "https://i.ibb.co/hJ6qZSDF/photo-5208418342518068321-y.jpg";

  // Функции трекинга для Hero
  const trackCVDownload = () => {
    if (window.gtag) {
      window.gtag('event', 'cv_download', {
        method: 'hero_section'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'cv_download');
    }
  };

  const trackGitHubClick = () => {
    if (window.gtag) {
      window.gtag('event', 'github_click', {
        section: 'hero',
        action: 'projects_button'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'github_click');
    }
  };

  const trackContactClick = () => {
    if (window.gtag) {
      window.gtag('event', 'contact_click', {
        section: 'hero',
        action: 'contact_button'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'contact_click');
    }
  };

  const trackPhoneClick = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        section: 'hero',
        phone_number: '+79154747073'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'phone_click');
    }
  };

  const trackEmailClick = () => {
    if (window.gtag) {
      window.gtag('event', 'email_click', {
        section: 'hero',
        email: 'bragina.liz@yandex.ru'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'email_click');
    }
  };

  const scrollToNextSection = (e) => {
    e.preventDefault();
    
    // Трекинг скролла
    if (window.gtag) {
      window.gtag('event', 'scroll_click', {
        section: 'hero',
        direction: 'down'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'scroll_click');
    }
    
    const nextSection = document.querySelector('#experience') || document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Основной контент */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Бейдж доступности */}
          <motion.div 
            className="badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-text">Доступна для работы</span>
          </motion.div>
          
          {/* Заголовок */}
          <h1 className="hero-title">
            <motion.span 
              className="greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Привет, я
            </motion.span>
            <motion.span 
              className="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Елизавета Брагина
            </motion.span>
            <motion.span 
              className="title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Fullstack-разработчик
            </motion.span>
          </h1>

          {/* Описание */}
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Создаю современные веб-приложения с React, Node.js и TypeScript.
            Объединяю красоту дизайна с мощью кода.
          </motion.p>

          {/* Статистика */}
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="stat">
              <span className="stat-number">2.5+</span>
              <span className="stat-label">года опыта</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">проектов</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">результат</span>
            </div>
          </motion.div>

          {/* Контакты */}
          <motion.div 
            className="hero-contacts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="#FF6B8B">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
              </svg>
              <div className="contact-info">
                <span className="contact-label">Телефон</span>
                <a 
                  href="tel:+79154747073" 
                  className="contact-value"
                  onClick={trackPhoneClick}
                >
                  +7 915 474-70-73
                </a>
              </div>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="#FF6B8B">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div className="contact-info">
                <span className="contact-label">Email</span>
                <a 
                  href="mailto:bragina.liz@yandex.ru" 
                  className="contact-value"
                  onClick={trackEmailClick}
                >
                  bragina.liz@yandex.ru
                </a>
              </div>
            </div>
          </motion.div>

          {/* Кнопки */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={trackGitHubClick}
            >
              <FaGithub />
              Мои проекты
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={trackContactClick}
            >
              Связаться со мной
            </motion.a>
          </motion.div>

          {/* Скролл вниз */}
          <motion.a 
            href="#experience"
            className="scroll-down"
            onClick={scrollToNextSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 5, 0] }}
            transition={{ delay: 1, y: { duration: 2, repeat: Infinity } }}
          >
            <FaArrowDown />
            <span>Листайте вниз</span>
          </motion.a>
        </motion.div>

        {/* Аватар с технологиями */}
        <motion.div 
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="avatar-container">
            <div className="avatar-wrapper">
              {/* Аватар */}
              <div className="avatar-frame">
                <img 
                  src={avatarUrl} 
                  alt="Елизавета Брагина"
                  className="avatar-image"
                  loading="eager"
                  fetchpriority="high"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF6B8B'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  className="tech-badge"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;