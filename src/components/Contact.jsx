import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  // Трекинг контактов
  const trackSocialClick = (platform) => {
    if (window.gtag) {
      window.gtag('event', 'social_click', {
        platform: platform
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'social_click', {
        platform: platform
      });
    }
  };

  const trackFormSubmit = () => {
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        form_name: 'contact_form',
        form_location: 'contact_section'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'contact_form_submit');
    }
  };

  const trackCallClick = () => {
    if (window.gtag) {
      window.gtag('event', 'phone_click', {
        section: 'contact_cta',
        action: 'call_now'
      });
    }
    if (window.ym) {
      window.ym(12345678, 'reachGoal', 'call_now_click');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Отслеживаем отправку формы
    trackFormSubmit();
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
        </svg>
      ),
      title: 'Телефон',
      value: '+7 915 474-70-73',
      link: 'tel:+79154747073',
      color: '#FF6B8B',
      delay: 0.1
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Email',
      value: 'bragina.liz@yandex.ru',
      link: 'mailto:bragina.liz@yandex.ru',
      color: '#4ECDC4',
      delay: 0.2
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Локация',
      value: 'Москва, Россия',
      link: 'https://yandex.ru/maps/213/moscow/',
      color: '#45B7D1',
      delay: 0.3
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ),
      title: 'Доступность',
      value: 'Готова к новым проектам',
      link: '#contact',
      color: '#FFB347',
      delay: 0.4
    }
  ];

  const socialLinks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      url: 'https://github.com/braginaliz',
      color: '#333'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: '#0077B5'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.7.064-1.233-.46-1.91-.902-1.068-.703-1.672-1.139-2.71-1.825-1.202-.78-.422-1.21.312-1.91.215-.204 3.843-3.52 3.915-3.822.008-.03.017-.14-.054-.198s-.173-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      label: 'Telegram',
      url: 'https://t.me/breadful_baby_s',
      color: '#0088cc'
    }
  ];

  const availability = [
    {
      type: 'Формат работы',
      options: ['На месте', 'Удаленно', 'Гибрид']
    },
    {
      type: 'Занятость',
      options: ['Полная', 'Частичная', 'Проектная']
    },
    {
      type: 'Время в пути',
      options: ['До 1 часа']
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="content-wrapper">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title contact-title">
            Давайте создадим что-то{' '}
            <span className="gradient-text">вместе</span>
          </h2>
          
          <p className="contact-subtitle">
            Готова воплотить ваши идеи в код. От открытых проектов до сложных корпоративных решений.
          </p>
        </motion.div>

        <div className="contact-main">
          {/* Левая колонка - Контактная инфо */}
          <motion.div 
            className="contact-info-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="contact-info-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3>Свяжитесь со мной</h3>
                <p>Отвечу в течение 24 часов</p>
              </div>

              <div className="contact-details-grid">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: item.color + '15'
                    }}
                    onMouseEnter={() => setIsHovering(index)}
                    onMouseLeave={() => setIsHovering(null)}
                  >
                    <div 
                      className="detail-icon-wrapper"
                      style={{ 
                        backgroundColor: isHovering === index ? item.color : item.color + '20'
                      }}
                    >
                      <div 
                        className="detail-icon"
                        style={{ color: isHovering === index ? 'white' : item.color }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div className="detail-content">
                      <span className="detail-title">{item.title}</span>
                      <span className="detail-value">{item.value}</span>
                    </div>
                    <div className="detail-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-section">
                <h4>Мои соцсети</h4>
                <p>Подписывайтесь для обновлений</p>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        backgroundColor: '#FF6B8B'
                      }}
                      onClick={() => trackSocialClick(social.label)}
                    >
                      <div className="social-icon-wrapper">
                        {social.icon}
                      </div>
                      <span className="social-label">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Блок доступности */}
            <motion.div 
              className="availability-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="availability-header">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF6B8B">
                  <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
                </svg>
                <h4>Условия работы</h4>
              </div>
              <div className="availability-grid">
                {availability.map((item, index) => (
                  <div key={index} className="availability-item">
                    <span className="availability-type">{item.type}</span>
                    <div className="availability-tags">
                      {item.options.map((option, i) => (
                        <span key={i} className="availability-tag">{option}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Форма */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="form-container">
              <div className="form-header">
                <h3>
                  <span className="form-title-main">Напишите мне</span>
                  <span className="form-title-sub">Расскажите о вашем проекте</span>
                </h3>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    className="success-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="success-animation">
                      <motion.div
                        className="success-circle"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                      </motion.div>
                    </div>
                    <h4>Сообщение отправлено!</h4>
                    <p>Свяжусь с вами в ближайшее время</p>
                    <motion.button
                      className="back-btn"
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Написать еще
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-group floating-label">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="name">Ваше имя *</label>
                      <div className="form-line"></div>
                    </div>

                    <div className="form-group floating-label">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                      />
                      <label htmlFor="email">Email *</label>
                      <div className="form-line"></div>
                    </div>

                    <div className="form-group floating-label">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder=" "
                      />
                      <label htmlFor="message">Сообщение *</label>
                      <div className="form-line"></div>
                    </div>

                    <motion.button
                      type="submit"
                      className="submit-btn"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 30px rgba(255, 107, 139, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="btn-content">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                        <span className="btn-text">Отправить сообщение</span>
                      </span>
                    </motion.button>

                    <div className="form-footer">
                      <p className="form-note">
                        Отвечаю на все сообщения лично
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* CTA блок */}
            <motion.div 
              className="cta-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="cta-content">
                <h4>Быстрый старт?</h4>
                <p>Предпочитаете звонок или встречу?</p>
                <a 
                  href="tel:+79154747073" 
                  className="cta-btn"
                  onClick={trackCallClick}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                  </svg>
                  Позвонить сейчас
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;