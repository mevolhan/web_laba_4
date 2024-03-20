import React from 'react';
import '../index.css'; // Импорт стилей
import bigButtonData from '../mockData/bigButtonData'; // Импорт данных для BigButton

const BigButton = () => {
  const { zaprosText, registrText, buttonText } = bigButtonData;

  return (
    <section className="big_button">
      <div className="rectangle">
        <div className="big_button_text">
          <div className="big_button_text_left">
            <p className="big_button_zapros">{zaprosText}</p>
            <h3 className="big_button_registr">{registrText}</h3>
          </div>
          <button className="big_button_black">{buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default BigButton;
