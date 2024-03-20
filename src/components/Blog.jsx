import React from 'react';
import '../index.css'; // Импорт стилей
import blogData from '../mockData/blogData'; // Импорт данных для Blog
import mainImage from '../assets/img/Rectangle 1.svg'; // Импорт основного изображения блога
import minorImage1 from '../assets/img/Rectangle 2.svg'; // Импорт дополнительных изображений блога
import minorImage2 from '../assets/img/Rectangle 3.svg';
import minorImage3 from '../assets/img/Rectangle 4.svg';
import minorImage4 from '../assets/img/Rectangle 5.svg';

const Blog = () => {
  const { mainArticle, minorArticles } = blogData;

  return (
    <section className="blog">
      <div className="header_blog">
        <h1>Многое Происходит,<br/>Мы Ведем об Этом Блог.</h1>
      </div>
      <div className="all_art">
        <div className="left_art">
          <img src={mainImage} alt={mainArticle.headline} />
          <div className="description_art_main">
            <div className="description__art_up">
              <p className="date">{mainArticle.date}</p>
              <p className="head_main_art">{mainArticle.headline}</p>
            </div>
            <a href={mainArticle.fullArticleUrl} className="read_art_main">Читать полную статью</a>
          </div>
        </div>
        <div className="right_art">
          {minorArticles.map((article, index) => (
            <div className="one_minor_art" key={index}>
              <img src={index === 0 ? minorImage1 : index === 1 ? minorImage2 : index === 2 ? minorImage3 : minorImage4} alt={article.headline} />
              <div className="description_art">
                <p className="date">{article.date}</p>
                <p className="head_minor_art">{article.headline}</p>
                <a href={article.fullArticleUrl} className="read_art">Читать полную статью</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
