import React from 'react';
import './App.css'; 

const App = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>📄 CV на Ања Стевковска</h1>
                <p>🎨 UX/UI Designer | 💻 Web Developer | 📍 Скопје, Северна Македонија</p>
            </div>

            

            <section className="personal-info">
                <h2 className="section-title">🏠 Лични Информации</h2>
                <div className="info-grid">
                    <div className="info-item"><strong>Адреса:</strong> ул. 10 бр. 11, Јурумлери, Скопје</div>
                    <div className="info-item"><strong>Телефон:</strong> 📞 070371005</div>
                    <div className="info-item"><strong>Е-пошта:</strong> 📧 Stevkovskaanja111@gmail.com</div>
                    <div className="info-item"><strong>Пол:</strong> 👩 женски</div>
                    <div className="info-item"><strong>Датум на раѓање:</strong> 🎂 11/07/2003</div>
                    <div className="info-item"><strong>Националност:</strong> 🇲🇰 Македонка</div>
                </div>
            </section>

            <section>
                <h2 className="section-title">🎯 Работно Место за Кое Аплицирам</h2>
                <p><strong>Позиција:</strong> Практикант</p>
            </section>

            <section>
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

            <section>
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
            </section>

            <section>
                <h2 className="section-title">💻 Компјутерски Вештини</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>👨‍💻 Програмирање:</h3>
                        <ul>
                            <li>💾 C++</li>
                            <li>☕ Java</li>
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

            <section>
                <h2 className="section-title">🌟 Клучни Проекти</h2>
                <div className="project-item">
                    <h3>TravelPlannerApp</h3>
                    <p>Веб апликација за планирање на патувања, развиена како дел од проект во прва година на факултетот.</p>
                </div>
                <div className="project-item">
                    <h3>Planner App</h3>
                    <p>Веб апликација со HTML, CSS, JavaScript, React за управување со задачи и активности.</p>
                </div>
                <div className="project-item">
                    <h3>Hotel Reservation App - CheckInn</h3>
                    <p>Веб апликација во React и Java за резервација</p>
                </div>
            </section>

            <section>
                <h2 className="section-title">🏅 Сертификати и Награди</h2>
                <ul>
                    <li>Сертификат за завршен курс по UX/UI Дизајн </li>
                    <li>Сертификат за завршен курс по Дигитален Маркетинг </li>
                </ul>
            </section>

            <section>
                <h2 className="section-title">🔗 Дополнителни Информации</h2>
                <ul className="links">
                    <li>🌐 <a href="https://www.behance.net/anjastevkovska">Портфолио на Behance</a></li>
                    <li>💻 <a href="https://github.com/anjastev">Профил на GitHub</a></li>
                </ul>
            </section>
        </div>
    );
};

export default App;
