import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLanguage, FaHeart, FaRocket } from 'react-icons/fa';

const About = () => {
  const facts = [
    {
      icon: <FaGraduationCap />,
      title: 'Образование',
      description: 'Три высших образования: юриспруденция, лингвистика и педагогика'
    },
    {
      icon: <FaLanguage />,
      title: 'Лингвистика',
      description: 'Владею английским, немецким и французским языками'
    },
    {
      icon: <FaHeart />,
      title: 'Коммуникация',
      description: '3+ года опыта организации мероприятий и работы с людьми'
    },
    {
      icon: <FaRocket />,
      title: 'Технологии',
      description: 'Переход из гуманитарной сферы в IT через самообучение'
    }
  ];

  const stats = [
    { number: '2+', label: 'года в IT' },
    { number: '10+', label: 'проектов' },
    { number: '2', label: 'сферы компетенций' },
    { number: '100%', label: 'самообучение' }
  ];

  return (
    <section id="about" className="section">
      <div className="content-wrapper">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Обо мне
        </motion.h2>

        <div className="about-container">
          {/* Левая колонка - Обо мне */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="about-header">
              <div className="about-avatar">
                <FaUser className="avatar-icon" />
              </div>
              <div className="about-intro">
                <h3>Елизавета Брагина</h3>
                <p className="about-subtitle">Fullstack-разработчик</p>
              </div>
            </div>

            <div className="about-text">
              <p>
                Fullstack-разработчик с 2+ годами опыта. Мой путь в IT начался с карьеры юриста 
                и организатора командной работы, что научило меня понимать потребности пользователей 
                и эффективно коммуницировать в команде.
              </p>
              <p>
                В 2022 году решила изменить карьеру и погрузилась в программирование. 
                Благодаря самообучению освоила современный стек технологий и теперь создаю 
                полноценные веб-приложения от идеи до деплоя.
              </p>
              <p>
                Опыт в гуманитарной сфере помогает создавать интуитивно понятные интерфейсы 
                и писать чистый, поддерживаемый код. Верю, что лучшие продукты рождаются на стыке 
                технологий и понимания человеческих потребностей.
              </p>
            </div>

            <div className="about-philosophy">
              <h4>Мой подход к разработке:</h4>
              <ul>
                <li>Разбиваю сложные задачи на простые компоненты</li>
                <li>Постоянно изучаю новые технологии</li>
                <li>Ценю командную работу и обратную связь</li>
                <li>Фокусируюсь на решении бизнес-задач</li>
                <li>Стремлюсь создавать полезные продукты</li>
              </ul>
            </div>
          </motion.div>

          {/* Правая колонка - Факты и статистика */}
          <motion.div 
            className="about-facts"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Интересные факты</h3>
            <div className="facts-grid">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="fact-card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="fact-icon">
                    {fact.icon}
                  </div>
                  <h4 className="fact-title">{fact.title}</h4>
                  <p className="fact-description">{fact.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;