import React from 'react';
import './../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer_info">
        <p>{new Date().getFullYear()} © Учет качества продукции</p>
      </div>
      <div className="footer_contact-info">
                <h3>Контакты</h3>
                <p>Телефон: +375(00)000-00-00</p>
                <p>Email: example@mail.com</p>
                <p>Адрес: Минск, ул. Мира, 1</p>
        </div>
    </footer>
  );
};

export default Footer;
