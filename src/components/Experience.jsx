import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Fullstack-разработчик",
      company: "Проектная деятельность",
      period: "Апрель 2025 — сейчас (11 месяцев)",
      description: "Разработка бэкенда для платформы обмена навыками «SkillSwap» на NestJS",
      highlights: [
        "Архитектура и инфраструктура: Инициативация проекта NestJS, настройка CI/CD",
        "Система аутентификации: JWT, Passport.js, Guards для защиты эндпоинтов",
        "Модуль пользователей: CRUD-операции, сложный поиск с пагинацией",
        "Система заявок: WebSocket для уведомлений в реальном времени",
        "Тестирование: e2e и unit-тесты с покрытием >70%"
      ],
      tags: ["NestJS", "TypeORM", "PostgreSQL", "WebSocket", "Jest", "Docker"]
    },
    {
      role: "Frontend-разработчик",
      company: "Яндекс",
      period: "Март 2024 — Июнь 2025 (1 год 4 месяца)",
      description: "Разработка интерфейсов на React и Vue.js",
      highlights: [
        "Разработка и поддержка компонентов на React/Vue.js",
        "Верстка адаптивных интерфейсов по макетам Figma",
        "Оптимизация производительности существующих компонентов",
        "Рефакторинг legacy-кода, исправление багов",
        "Написание unit-тестов на Jest и React Testing Library"
      ],
      tags: ["React", "Vue.js", "TypeScript", "Jest", "Webpack", "Figma"]
    },
    {
      role: "Организатор мероприятий, игропрактик",
      company: "НИУ ВШЭ, Мастерская предпринимательства",
      period: "Июнь 2022 — Июль 2024 (2 года 2 месяца)",
      description: "Организация мероприятий и внедрение игровых механизмов",
      highlights: [
        "Организация 10+ мероприятий для студентов и предпринимателей",
        "Разработка игровых механизмов для улучшения взаимодействия в команде",
        "Повышение вовлечённости участников на 25%"
      ],
      tags: ["Организация", "Коммуникация", "Координация", "Презентация"]
    }
  ];

  const stats = [
    { number: "3.5+", label: "ЛЕТ ОПЫТА" },
    { number: "10+", label: "ЗАВЕРШЕННЫХ ПРОЕКТОВ" },
    { number: "2", label: "СФЕРЫ КОМПЕТЕНЦИЙ" },
    { number: "100%", label: "ДОВОЛЬНЫХ КЛИЕНТОВ" }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="content-wrapper">
        <div className="experience-header">
         
          <h2 className="experience-title">Опыт и Образование</h2>
          <p className="experience-subtitle">
            Мой профессиональный путь в разработке и смежных областях
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-timeline-dot"></div>
              <div className="experience-item-content">
                <div className="experience-header-row">
                  <div className="experience-role">
                    <h3 className="experience-role-title">{exp.role}</h3>
                    <div className="experience-company">{exp.company}</div>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                
                <div className="experience-description">
                  <p>{exp.description}</p>
                </div>
                
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="experience-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-stats">
          {stats.map((stat, index) => (
            <div key={index} className="experience-stat-item">
              <span className="experience-stat-number">{stat.number}</span>
              <span className="experience-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;