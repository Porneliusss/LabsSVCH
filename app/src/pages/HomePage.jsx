import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';
import './../styles/HomePage.css';

const Home = () => {
    return (
      <div>
        <Header />
        <main>
          <section>
            <h1>Учет качества выпускаемой продукции</h1>
            <p>
                Добро пожаловать на главную страницу приложения для учета качества продукции на промышленном предприятии
            </p>
            {/* <p>
                Наше приложение разработано для удобного ведения учета и управления продукцией и её качеством,
                позволяя эффективно <Link to="/management">добавлять</Link>,{' '}
                <Link to="/management">редактировать</Link> и{' '}
                <Link to="/management">удалять данные о продукции</Link>,
                а также просматривать <Link to="/products">информацию</Link> о качестве выпускаемой продукции.
            </p>
            <p>
                Для получения дополнительной информации, пожалуйста, посетите раздел{' '}
            <Link to="/about">"О нас"</Link>.
            </p> */}
            <p>
             <strong>Используйте ссылки в меню сверху для перехода к разделам приложения.</strong>
            </p>
          </section>
        </main>
        <Footer />
      </div>
    );
  };

export default Home;
