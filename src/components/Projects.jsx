import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaStar, 
  FaCode, 
  FaServer, 
  FaMobile,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaImage,
  FaPlayCircle
} from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Stellar Burger',
      description: 'Космическая бургерная с конструктором заказов',
      longDescription: 'Fullstack проект интернет-магазина бургеров с конструктором заказов, системой авторизации и лентой заказов в реальном времени. Приложение использует React, Redux, TypeScript и WebSocket для обновления заказов.',
      features: [
        'Конструктор бургеров с drag-and-drop интерфейсом',
        'Система авторизации с JWT токенами',
        'Лента заказов в реальном времени через WebSocket',
        'Личный кабинет пользователя с историей заказов',
        'Админ-панель для управления заказами',
        'Интеграция с сервером через REST API'
      ],
      technologies: ['React', 'TypeScript', 'Redux Toolkit', 'WebSocket', 'Jest', 'Cypress', 'Node.js', 'Express'],
      github: 'https://github.com',
      demo: 'https://stellar-burger-demo.com',
      status: 'Завершен',
      category: 'fullstack',
      color: '#FF6B8B',
      images: [
        'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80',
        'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=80',
        'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=1200&q=80'
      ],
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Mesto',
      description: 'Социальная сеть для обмена фотографиями',
      longDescription: 'Полноценное веб-приложение с авторизацией, загрузкой фотографий, лайками и комментариями. Проект включает валидацию форм, интеграцию с REST API и деплой на сервер.',
      features: [
        'Авторизация и регистрация пользователей',
        'Загрузка и редактирование фотографий с превью',
        'Система лайков и комментариев в реальном времени',
        'Валидация всех форм с кастомными сообщениями',
        'Адаптивный дизайн с мобильной версией',
        'Оптимизация загрузки изображений'
      ],
      technologies: ['React', 'JavaScript', 'REST API', 'CSS3', 'Webpack', 'Babel', 'ES6+'],
      github: 'https://github.com',
      demo: 'https://mesto-project-demo.com',
      status: 'Завершен',
      category: 'fullstack',
      color: '#4ECDC4',
      images: [
        'https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=1200&q=80',
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80'
      ]
    },
    {
      id: 3,
      title: 'Оно тебе надо',
      description: 'Лендинг аукционного дома с анимациями',
      longDescription: 'Адаптивный одностраничный сайт для аукционного дома с использованием современных технологий верстки. Проект включает сложные анимации и параллакс эффекты.',
      features: [
        'Адаптивная верстка с mobile-first подходом',
        'Сложные CSS-анимации и переходы',
        'Параллакс эффекты при скролле',
        'Интерактивные элементы с hover-эффектами',
        'Семантическая разметка для SEO',
        'Оптимизация изображений и шрифтов'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Sass', 'BEM'],
      github: 'https://github.com/braginaliz/ono-tebe-nado.git',
      demo: 'https://auction-house-demo.com',
      status: 'Завершен',
      category: 'frontend',
      color: '#45B7D1',
      images: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80'
      ]
    },
    {
      id: 4,
      title: 'WEB-ларёк',
      description: 'Интернет-магазин для веб-разработчиков',
      longDescription: 'MVP архитектура интернет-магазина с каталогом товаров, корзиной и оформлением заказа. Проект реализован с использованием TypeScript и паттерна MVC.',
      features: [
        'Каталог товаров с фильтрацией и сортировкой',
        'Корзина покупок с localStorage',
        'Оформление заказа в 2 шага с валидацией',
        'Поиск товаров с автодополнением',
        'Архитектура MVC/MVVM с TypeScript',
        'Модульная структура проекта'
      ],
      technologies: ['TypeScript', 'MVC', 'REST API', 'HTML5', 'CSS3', 'Webpack', 'Jest'],
      github: 'https://github.com',
      demo: 'https://web-market-demo.com',
      status: 'Завершен',
      category: 'frontend',
      color: '#96CEB4',
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80'
      ]
    },
    {
      id: 5,
      title: 'SkillSwap Platform',
      description: 'Платформа для обмена навыками',
      longDescription: 'Fullstack приложение для обмена навыками между пользователями с системой заявок, чатом и WebSocket уведомлениями. Бэкенд на NestJS с PostgreSQL, фронтенд на React.',
      features: [
        'JWT аутентификация с Access/Refresh токенами',
        'Система заявок на обмен навыками',
        'WebSocket чат в реальном времени',
        'Уведомления и оповещения',
        'CRUD операции с валидацией',
        'Поиск с пагинацией и фильтрацией'
      ],
      technologies: ['NestJS', 'TypeORM', 'PostgreSQL', 'WebSocket', 'React', 'Docker', 'Redis'],
      github: 'https://github.com',
      demo: 'https://skillswap-demo.com',
      status: 'В разработке',
      category: 'fullstack',
      color: '#FFB347',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80'
      ]
    },
    {
      id: 6,
      title: 'Travel Planner App',
      description: 'Мобильное приложение для планирования путешествий',
      longDescription: 'Кроссплатформенное приложение на React Native для планирования маршрутов, бронирования отелей и отслеживания расходов в путешествиях.',
      features: [
        'Интерактивная карта с маршрутами и POI',
        'Интеграция с сервисами бронирования',
        'Трекер расходов с категориями',
        'Оффлайн режим с синхронизацией',
        'Push-уведомления и напоминания',
        'Мультиязычная поддержка'
      ],
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Redux', 'TypeScript', 'Expo'],
      github: 'https://github.com',
      demo: 'https://travelapp-demo.com',
      status: 'Завершен',
      category: 'mobile',
      color: '#6A5ACD',
      images: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
        'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1200&q=80'
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  // SVG иконки для иконок категорий вынести нафиг
  const CategoryIcon = ({ category, color }) => {
    const svgIcons = {
      fullstack: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      frontend: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2">
          <path d="M12 18l-6-6 6-6v12zM18 6v12"/>
        </svg>
      ),
      mobile: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12" y2="18"/>
        </svg>
      )
    };
    
    return svgIcons[category] || svgIcons.fullstack;
  };

  return (
    <section id="projects" className="section">
      <div className="content-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Мои Проекты
        </motion.h2>

        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          От идеи до реализации — каждый проект это история решения реальных задач
        </motion.p>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Все проекты
          </button>
          <button
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            Fullstack
          </button>
          <button
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 18l-6-6 6-6v12zM18 6v12"/>
            </svg>
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12" y2="18"/>
            </svg>
            Mobile
          </button>
        </div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => openProjectModal(project)}
                style={{ '--project-color': project.color }}
              >
                <div 
                  className="project-header"
                  style={{ backgroundColor: `${project.color}20` }}
                >
                  <div className="project-status">{project.status}</div>
                  <div 
                    className="project-icon"
                    style={{ color: project.color, borderColor: project.color }}
                  >
                    <CategoryIcon category={project.category} color={project.color} />
                  </div>
                  {project.images && project.images.length > 0 && (
                    <div className="project-image-count">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                      </svg>
                      {project.images.length}
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
                <div className="project-footer">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Код
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
                    </svg>
                    Демо
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="github-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="stat-card">
            <svg className="stat-icon" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-pink)">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <div className="stat-number">20+</div>
            <div className="stat-label">Репозиториев</div>
          </div>
          <div className="stat-card">
            <svg className="stat-icon" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-pink)">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div className="stat-number">100+</div>
            <div className="stat-label">Звезд</div>
          </div>
          <div className="stat-card">
            <svg className="stat-icon" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-pink)">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
            <div className="stat-number">15k+</div>
            <div className="stat-label">Строк кода</div>
          </div>
          <div className="stat-card">
            <svg className="stat-icon" width="48" height="48" viewBox="0 0 24 24" fill="var(--primary-pink)">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <div className="stat-number">10+</div>
            <div className="stat-label">Проектов</div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectModal}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeProjectModal}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
              
              <div className="modal-header">
                <div 
                  className="modal-icon"
                  style={{ color: selectedProject.color, borderColor: selectedProject.color }}
                >
                  <CategoryIcon category={selectedProject.category} color={selectedProject.color} />
                </div>
                <div>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <div className="modal-status">{selectedProject.status}</div>
                </div>
              </div>

              <p className="modal-description">{selectedProject.longDescription}</p>

              <div className="project-gallery-section">
                <h3>Галерея проекта</h3>
                <div className="project-gallery">
                  {selectedProject.images.map((img, index) => (
                    <div 
                      key={index}
                      className="gallery-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(index);
                      }}
                    >
                      <img 
                        src={img}
                        alt={`${selectedProject.title} - скриншот ${index + 1}`}
                        className="gallery-image"
                      />
                      <div className="image-overlay">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.video && (
                <div className="video-section">
                  <h3>Видео демо</h3>
                  <div className="video-container">
                    <iframe
                      src={selectedProject.video}
                      title={`${selectedProject.title} demo video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <div className="modal-features">
                <h3>Основные особенности:</h3>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--primary-pink)" style={{ marginRight: '10px', verticalAlign: 'middle' }}>
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-technologies">
                <h3>Технологии:</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Исходный код
                </a>
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6m4-3h6v6m-11 5L21 3"/>
                  </svg>
                  Демо версия
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxOpen && selectedProject && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
            
            <motion.div 
              className="lightbox-content"
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;