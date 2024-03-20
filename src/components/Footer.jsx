import React from 'react';
import '../index.css'; // Импорт стилей
import footerData from '../mockData/footerData'; // Импорт данных для Footer
import GPT3Logo from '../assets/img/GPT-3.svg'; // Импорт логотипа

const Footer = () => {
  const {
    header,
    buttonText,
    address,
    links,
    companyLinks,
    contactInfo,
    copyright,
  } = footerData;

  return (
    <section className="footer">
      <div className="footer__header">
        <h1 className="top__header">{header}</h1>
      </div>
      <div className="footer__middle">
        <button className="early_access_btn">{buttonText}</button>
      </div>
      <div className="footer__bottom">
        <div className="logo">
          <img className="GPT-3_logo" src={GPT3Logo} alt="GPT-3 logo" />
          <p className="address">{address}</p>
        </div>
        <div className="footer__bottom_right">
          <div className="footer__links">
            <p className="bottom__links_header">Ссылки</p>
            <div className="footer__info_links">
              <a className="footer__link" href={links.overony}>Овероны</a>
              <a className="footer__link" href={links.socialMedia}>Соц. сети</a>
              <a className="footer__link" href={links.counters}>Счетчики</a>
              <a className="footer__link" href={links.contacts}>Контакты</a>
            </div>
          </div>
          <div className="footer__company_info">
            <p className="bottom__links_header">Компания</p>
            <div className="footer__company_links">
              <a className="footer__link" href={companyLinks.termsOfUse}>Условия использования</a>
              <a className="footer__link" href={companyLinks.personalData}>Перс. данные</a>
              <a className="footer__link" href={companyLinks.contacts}>Контакты</a>
            </div>
          </div>
          <div className="footer__contact_info">
            <p className="bottom__links_header">Контакты</p>
            <div className="footer__contact_content">
              <p className="footer__link">{contactInfo.address}</p>
              <p className="footer__link">{contactInfo.phoneNumber}</p>
              <p className="footer__link">{contactInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="copyright__info">{copyright}</p>
      </div>
    </section>
  );
};

export default Footer;
