import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './../styles/HomePage.css';

const Home = () => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      setVisible(true);
   }, []);

    return (
      <div>
        <main>
          <section className={visible ? 'section-visible' : ''}>
            <h1>Учет качества выпускаемой продукции</h1>
            <p>
                Добро пожаловать на главную страницу приложения для учета качества продукции на промышленном предприятии
            </p>
            <p>
                Наше приложение разработано для удобного ведения учета и управления продукцией и её качеством,
                позволяя эффективно <Link to="/management">добавлять</Link>,{' '}
                <Link to="/management">редактировать</Link> и{' '}
            </p>
            <p>
                <Link to="/management">удалять данные о продукции</Link>,
                а также <Link to="/products">просматривать информацию о качестве выпускаемой продукции.</Link>
            </p>
            <p>
                Для получения дополнительной информации, посетите раздел{' '}
                <Link to="/about">"О нас"</Link>.
            </p>
            <p>
             <strong>Используйте ссылки в меню сверху для перехода к разделам приложения.</strong>
            </p>
          </section>
        </main>
      </div>
    );
  };

export default Home;
