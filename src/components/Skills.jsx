import React, { useState, useMemo } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = useMemo(() => ({
    frontend: {
      title: 'Frontend',
      color: '#FF6B8B',
      skills: [
        { name: 'JavaScript', level: 95, years: 3.5 },
        { name: 'TypeScript', level: 90, years: 2 },
        { name: 'React', level: 92, years: 3 },
        { name: 'HTML5', level: 98, years: 4 },
        { name: 'CSS3', level: 95, years: 4 },
        { name: 'Redux', level: 85, years: 2 },
      ]
    },
    backend: {
      title: 'Backend',
      color: '#D43F5A',
      skills: [
        { name: 'Node.js', level: 88, years: 2.5 },
        { name: 'NestJS', level: 85, years: 1 },
        { name: 'PostgreSQL', level: 82, years: 2 },
        { name: 'MongoDB', level: 80, years: 1.5 },
        { name: 'Python', level: 75, years: 1 },
        { name: 'REST API', level: 90, years: 2.5 },
      ]
    },
    tools: {
      title: 'Инструменты',
      color: '#FF8FAB',
      skills: [
        { name: 'Git', level: 92, years: 3 },
        { name: 'Docker', level: 78, years: 1.5 },
        { name: 'AWS', level: 70, years: 1 },
        { name: 'Webpack', level: 85, years: 2 },
        { name: 'Figma', level: 88, years: 2 },
        { name: 'Jest', level: 83, years: 1.5 },
      ]
    },
    soft: {
      title: 'Soft Skills',
      color: '#F8A5C2',
      skills: [
        { name: 'Коммуникация', level: 90, years: 4 },
        { name: 'Командная работа', level: 92, years: 4 },
        { name: 'Scrum/Agile', level: 85, years: 2.5 },
        { name: 'Проектное управление', level: 80, years: 2 },
        { name: 'Решение проблем', level: 88, years: 4 },
        { name: 'Обучение', level: 95, years: 4 },
      ]
    }
  }), []);

  const { allSkills, skillsToShow } = useMemo(() => {
    const allSkillsArray = [];
    
    Object.values(skillCategories).forEach(category => {
      category.skills.forEach(skill => {
        allSkillsArray.push({ 
          ...skill, 
          category: category.title,
          categoryKey: Object.keys(skillCategories).find(key => 
            skillCategories[key] === category
          )
        });
      });
    });
    
    const skillsToShowArray = activeCategory === 'all' 
      ? allSkillsArray 
      : skillCategories[activeCategory]?.skills || [];
    
    return { allSkills: allSkillsArray, skillsToShow: skillsToShowArray };
  }, [activeCategory, skillCategories]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const CategoryIcon = ({ category, color }) => {
    const svgIcons = {
      frontend: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M12 18l-6-6 6-6v12zM18 6v12"/>
        </svg>
      ),
      backend: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      tools: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M15.07 13.88L13 11.94V5h-2v6.94l-2.07 1.94-1.42-1.41L12 8.59l4.49 4.88-1.42 1.41z"/>
          <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM5 19V5h14v14H5z"/>
        </svg>
      ),
      soft: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <circle cx="12" cy="8" r="4"/>
          <path d="M12 14c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/>
        </svg>
      ),
      all: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          <path d="M12 18l-6-6 6-6v12zM18 6v12"/>
        </svg>
      )
    };
    
    return svgIcons[category] || svgIcons.all;
  };

  const SkillIcon = ({ name, color }) => {
    const skillIcons = {
      'JavaScript': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      'TypeScript': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M3 3h18v18H3V3m10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zm-5.73.05c.49 0 .83-.31.97-.72l1.14-3.8h5.44l1.14 3.8c.14.41.48.72.97.72.71 0 1.12-.54.97-1.18L13.04 7.71c-.31-1.02-1.14-1.71-2.23-1.71-1.09 0-1.92.69-2.23 1.71L6.01 16.73c-.15.64.26 1.18.97 1.18z"/>
        </svg>
      ),
      'React': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
          <path d="M12 12c0 0 2-4 6-4 0 0 2 1 2 2 0 0-2 2-2 2 0 0-4-2-6 0zm0 0c0 0-2-4-6-4 0 0-2 1-2 2 0 0 2 2 2 2 0 0 4-2 6 0z"/>
        </svg>
      ),
      'HTML5': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 18l-4.2-1.8.3-1.5 3.9 1.7 3.9-1.7.3 1.5L12 18zm-6.6-5.4L12 15l6.6-2.4.4-1.6-7 2.5-7-2.5.4 1.6zM3 9l1.5 5.6L12 17l7.5-2.4L21 9H3zm1.5-3L12 3l7.5 3H4.5z"/>
        </svg>
      ),
      'CSS3': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M5.8 3l-.8 4 10.8.2.2-4.2H5.8zm14.4 3.6L20 2H4l1 5.4 10.8.2.2-5.6h4.8l-.8 4zm-1.8 9.6l-7.4 2.6-7.4-2.6.4-2.2 7 .2 7-.2.4 2.2zM4.8 7.8L5 10l7 .2 7-.2.2-2.2L12 8 4.8 7.8z"/>
        </svg>
      ),
      'Redux': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M16.6 14.6c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2zm-9.2 0c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2zm9.2-9.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2-2.2 1-2.2 2.2 1 2.2 2.2 2.2zM12 12c0-1.2-1-2.2-2.2-2.2S7.6 10.8 7.6 12s1 2.2 2.2 2.2S12 13.2 12 12z"/>
        </svg>
      ),
      'Node.js': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
        </svg>
      ),
      'NestJS': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
        </svg>
      ),
      'PostgreSQL': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      ),
      'MongoDB': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      ),
      'Python': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'REST API': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      ),
      'Git': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>
        </svg>
      ),
      'Docker': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M7 7h2v2H7zm0 4h2v2H7zm4 0h2v2h-2zm0-4h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2z"/>
        </svg>
      ),
      'AWS': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 8l-4 4 4 4 4-4-4-4z"/>
        </svg>
      ),
      'Webpack': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 7l5 3-5 3-5-3 5-3z"/>
        </svg>
      ),
      'Figma': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      'Jest': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'Коммуникация': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      ),
      'Командная работа': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      'Scrum/Agile': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      'Проектное управление': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 18H7V5h2v1h2V5h4v1h2V5h2v16z"/>
        </svg>
      ),
      'Решение проблем': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      'Обучение': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 14.5L5 13.5v5.28l7 3.94 7-3.94V13.5l-7 4z"/>
        </svg>
      )
    };
    
    return skillIcons[name] || (
      <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    );
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="content-wrapper">
        <div className="skills-header">
          <h2 className="skills-title">Навыки и Технологии</h2>
          <p className="skills-subtitle">
            Мой технологический стек и экспертиза в различных областях разработки
          </p>
        </div>

        <div className="skills-categories-container">
          <div className="category-tabs">
            <button
              className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryClick('all')}
              style={{ '--category-color': '#FF6B8B' }}
            >
              <CategoryIcon category="all" color="currentColor" />
              <span className="tab-text">Все навыки</span>
              <span className="tab-count">{allSkills.length}</span>
            </button>
            
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => handleCategoryClick(key)}
                style={{ '--category-color': category.color }}
              >
                <CategoryIcon category={key} color="currentColor" />
                <span className="tab-text">{category.title}</span>
                <span className="tab-count">{category.skills.length}</span>
              </button>
            ))}
          </div>

          <div className="category-indicator">
            <div className="active-category">
              {activeCategory === 'all' ? 'Все навыки' : skillCategories[activeCategory]?.title}
            </div>
            <div className="skills-count">
              {skillsToShow.length} навыков
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skillsToShow.map((skill, index) => {
            const categoryColor = activeCategory === 'all' 
              ? skillCategories[skill.categoryKey]?.color 
              : skillCategories[activeCategory]?.color;

            return (
              <div
                key={`${skill.name}-${activeCategory}-${index}`}
                className="skill-card"
              >
                <div className="skill-card-inner">
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper">
                      <div 
                        className="skill-icon-bg"
                        style={{ backgroundColor: `${categoryColor}20` }}
                      >
                        <SkillIcon name={skill.name} color={categoryColor} />
                      </div>
                    </div>
                    
                    <div className="skill-main-info">
                      <h3 className="skill-name">{skill.name}</h3>
                      <div className="skill-experience">
                        <span className="experience-text">
                          {skill.years} {skill.years === 1 ? 'год' : skill.years < 5 ? 'года' : 'лет'}
                        </span>
                      </div>
                    </div>
                    
                    <div 
                      className="skill-level-badge"
                      style={{ background: `linear-gradient(45deg, ${categoryColor}, ${categoryColor}DD)` }}
                    >
                      {skill.level}%
                    </div>
                  </div>
                  
                  <div className="skill-progress-container">
                    <div className="skill-progress-background">
                      <div 
                        className="skill-progress-fill"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}BF)`
                        }}
                      />
                    </div>
                    
                    <div className="skill-milestones">
                      {[0, 25, 50, 75, 100].map((milestone) => (
                        <div 
                          key={milestone}
                          className={`skill-milestone ${skill.level >= milestone ? 'active' : ''}`}
                          style={{ 
                            backgroundColor: skill.level >= milestone ? categoryColor : 'white' 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="skill-description">
                    <div className="skill-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div 
                          key={star}
                          className={`skill-star ${star <= Math.ceil(skill.level / 20) ? 'active' : ''}`}
                          style={{ 
                            backgroundColor: star <= Math.ceil(skill.level / 20) 
                              ? categoryColor 
                              : '#e0e0e0' 
                          }}
                        />
                      ))}
                    </div>
                    
                    <div 
                      className="skill-proficiency"
                      style={{ 
                        color: categoryColor,
                        backgroundColor: `${categoryColor}20`
                      }}
                    >
                      {skill.level >= 90 ? 'Эксперт' : 
                       skill.level >= 70 ? 'Продвинутый' : 
                       skill.level >= 50 ? 'Средний' : 'Начинающий'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-summary">
          <div className="summary-stats">
            <div className="summary-stat">
              <div className="stat-number">{allSkills.length}</div>
              <div className="stat-label">Всего навыков</div>
            </div>
            <div className="summary-stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Категории</div>
            </div>
            <div className="summary-stat">
              <div className="stat-number">2.5+</div>
              <div className="stat-label">Лет опыта</div>
            </div>
            <div className="summary-stat">
              <div className="stat-number">
                {Math.round(allSkills.reduce((acc, skill) => acc + skill.level, 0) / allSkills.length)}%
              </div>
              <div className="stat-label">Средний уровень</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;