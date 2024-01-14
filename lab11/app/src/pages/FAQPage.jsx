import React from 'react';
import { Accordion } from 'react-bootstrap';
import styles from './../styles/FAQPage.css';

const FAQPage = () => {
  return (
    <div className={`${styles.container} container-faq`}>      
    <h1 className={`${styles.faqh1} faqh1`}>Часто задаваемые вопросы</h1>
    <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Как осуществляется контроль качества продукции на предприятии?</Accordion.Header>
          <Accordion.Body>
            Контроль качества продукции на нашем предприятии осуществляется путем проведения систематических проверок и тестирования продукции на каждом этапе производства. Мы используем специализированные инструменты и методики, чтобы обеспечить высокое качество нашей продукции.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Какие стандарты качества применяются на предприятии?</Accordion.Header>
          <Accordion.Body>
            Мы придерживаемся международных стандартов качества, таких как ISO 9001, чтобы гарантировать соответствие нашей продукции высоким стандартам качества. Помимо этого, мы разрабатываем собственные внутренние стандарты, соответствующие специфике производства и потребностям клиентов.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Какие меры принимаются в случае обнаружения продукции низкого качества?</Accordion.Header> 
          <Accordion.Body>
            При обнаружении продукции, не соответствующей нашим стандартам качества, мы немедленно принимаем меры: проводим анализ возможных причин, отзываем продукцию, проводим ремонт или замену продукции, и разрабатываем планы предотвращения подобных инцидентов в будущем.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQPage;
