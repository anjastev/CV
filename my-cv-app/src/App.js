import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.project-item, .skills-grid');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  return (
    <Router>
    <div className="App">
      
      <header className="navbar">
        <div className="logo">👩‍💻 Anja's Portfolio</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">За Мене</a></li>
            <li><a href="#projects">Проекти</a></li>
            <li><a href="#contact">Контакт</a></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
      </header>

      
      <section className="banner">
        <h1 className="banner-title">Добредојде во мојот свет!</h1>
        <p className="banner-subtitle"></p>
        <Link to="/aboutme" className="btn-banner">Запознај Ме</Link>
      </section>
       
      <Routes>
          <Route path="/aboutme" element={< AboutMe />} />
        </Routes>
     
      <section id="about" className="about-section">
        <h2>За Мене</h2>
       
        <div className="info-grid">
          <div className="info-item"><strong>Име и презиме:</strong> 👤 Ања Стевковска</div>
          <div className="info-item"><strong>Адреса:</strong> 📍 ул. 10 бр. 11, Јурумлери, Скопје</div>
          <div className="info-item"><strong>Телефон:</strong> 📞 070371005</div>
          <div className="info-item"><strong>Е-пошта:</strong> 📧 Stevkovskaanja@gmail.com</div>
          <div className="info-item"><strong>Пол:</strong> 👩 женски</div>
          <div className="info-item"><strong>Датум на раѓање:</strong> 🎂 11/07/2003</div>
          <div className="info-item"><strong>Националност:</strong> 🇲🇰 Македонка</div>
        </div>
      </section>
       
    <section className="work-application">
  <h2 className="section-title">🎯 Работно Место за Кое Аплицирам</h2>
  <p><strong>Позиција:</strong> Практикант</p>
</section>

<section className="work-experience">
  <h2 className="section-title">💼 Работно Искуство</h2>
  <div className="experience-item">
    <p className="date-range">20/06/2022 – Сега</p>
    <p><strong>Freelancer на UpWork</strong></p>
    <ul>
      <li>👩‍💻 Изработка на веб страници со HTML, CSS, JavaScript</li>
      <li>🎨 UX/UI дизајн на веб и мобилни апликации</li>
    </ul>
  </div>
</section>

<section className="education">
  <h2 className="section-title">🎓 Образование и Обука</h2>
  <div className="education-item">
    <p className="date-range">01/09/2018 – 10/06/2022</p>
    <p><strong>Гимназија „Раде Јовчевски – Корчагин“ – Скопје</strong></p>
    <p>Општи предмети: Македонски, Математика, Француски, Англиски</p>
    <p>Стручни предмети: Програмски јазици, Математичка анализа, Линеарна алгебра и аналитичка геометрија, Алгебра</p>
  </div>

  <div className="education-item">
    <p className="date-range">01/10/2022 – Сега</p>
    <p><strong>Факултет за информатички науки и компјутерско инженерство, Скопје</strong></p>
    <p>Смер: Примена на информациски технологии</p>
    <ul>
      <li>Структурно програмирање (програмски јазик С)</li>
      <li>Објектно-ориентирано програмирање (програмски јазик С++)</li>
      <li>Веб дизајн (HTML, CSS)</li>
      <li>Интернет програмирање (JavaScript, ReactNative)</li>
      <li>Дизајн на кориснички интерфејси (jQuery)</li>
      <li>Алгоритми и податочни структури (програмски јазик Java)</li>
      <li>Визуелно програмирање (C#)</li>
    </ul>
  </div>
   
                <h2>🏅 Сертификати </h2>
                <ul>
                    <li>Сертификат за завршен курс по UX/UI Дизајн </li>
                    <li>Сертификат за завршен курс по Дигитален Маркетинг </li>
                </ul>
            

</section>

<section className="skills">
  <h2 className="section-title">💻 Компјутерски Вештини</h2>
  <div className="skills-grid">
    <div className="skill-category">
      <h3>👨‍💻 Програмирање:</h3>
      <ul>
        <li>💾 C++</li>
        <li>☕ Java (Spring Boot)</li>
        <li>🌐 JavaScript</li>
        <li>⚛️ React</li>
        <li>🌟 HTML, CSS</li>
        <li>🎯 C#</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>🎨 Дизајн Алатки:</h3>
      <ul>
        <li>🎨 Figma (UI/UX & Web Design)</li>
        <li>🖼️ Canva</li>
        <li>✏️ Photoshop/Illustrator</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>📈 Маркетинг Алатки:</h3>
      <ul>
        <li>🔍 SEO (Оптимизација на пребарувачи)</li>
        <li>💼 Google Ads</li>
        <li>📊 Google Аналитика</li>
        <li>🏷️ Google Tag Manager</li>
        <li>📱 Social Media Marketing</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>🛠️ Други:</h3>
      <ul>
        <li>📑 MS Office пакетот</li>
        <li>🌐 Активно користење на социјални мрежи и интернет</li>
      </ul>
    </div>
  </div>
</section>
     

<section id="projects" className="projects-section">
  <h2>Клучни Проекти</h2>
  <div className="projects-grid">
    <div className="project-item">
      <h3>✈️ TravelPlannerApp</h3>
      <p>Веб апликација за планирање на патувања, развиена како дел од проект во прва година на факултетот. Апликацијата им овозможува на корисниците да креираат персонализирани планови за патување, да ги следат своите дестинации 🗺️, да поставуваат времиња и маршрути ⏳, и да прегледуваат препораки за хотели 🏨 и активности во избраните локации. TravelPlannerApp е изградена со HTML, CSS и JavaScript, и користи локално складирање за податоците на корисниците.</p>
      <a href="https://webdesignproject.vercel.app/" class="project-button" target="_blank" rel="noopener noreferrer">Погледнете ја апликацијата</a>
    </div>
    <div className="project-item">
      <h3>📅 Обврски365</h3>
      <p>Обврски365 е веб апликација развиена во React, со цел управување со задачи и активности 📅. Корисниците можат да креираат, изменуваат и бришат задачи 🗒️, да поставуваат рокови и приоритети ⏰, и да следат прогрес преку интуитивен интерфејс. Апликацијата исто така вклучува можност за категоризација на задачи и дневни известувања 🔔, со што корисниците можат лесно да останат организирани и продуктивни.</p>
      <a href="https://my-planner-app-eight.vercel.app/" class="project-button" target="_blank" rel="noopener noreferrer">Погледнете ја апликацијата</a>
    </div>
    <div className="project-item">
      <h3>🏨 Hotel Reservation App - CheckInn</h3>
      <p>CheckInn е веб апликација за резервација на хотели, изградена користејќи React за frontend и Java за backend. Апликацијата им овозможува на корисниците да пребаруваат хотели според различни критериуми како локација 📍, цена 💸 и оценка ⭐, да прегледуваат детали за хотелите и да направат резервации. CheckInn исто така поддржува кориснички профили 👤, каде што корисниците можат да го следат статусот на своите резервации и да ги управуваат истите.</p>
      <a href="https://hotel-reservations-pink.vercel.app/" class="project-button" target="_blank" rel="noopener noreferrer">Погледнете ја апликацијата</a>
    </div>
  </div>
</section>



    
      <section id="contact" className="contact-section">
  <h2>Контакт</h2>
  <p>
    Можете да ме контактирате преку     
    <a href="mailto:Stevkovskaanja@gmail.com">
      <i> stevkovskaanja@gmail.com</i>
    </a>
  </p>
  <h3>Дополнителни Информации</h3>
                <ul className="links">
                    <li>🌐 <a href="https://www.behance.net/anjastevkovska">Портфолио на Behance</a></li>
                    <li>💻 <a href="https://github.com/anjastev">Профил на GitHub</a></li>
                </ul>

</section>

    
      <footer className="footer">
        <p>👩‍💻 Изработено од Anja Stevkovska | © 2024</p>
      </footer>
    </div>
     </Router>
  );
};

export default App;
