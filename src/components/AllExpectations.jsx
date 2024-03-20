import React from 'react';
import '../index.css'; // Импортируем общие стили из index.css
import allExpectationsData from '../mockData/allExpectationsData';
import featureImage from '../assets/img/feature image.svg';

const AllExpectations = () => {
  return (
    <section className="all_expectations">
      <div className="all_expectations_left">
        <img src={featureImage} alt={allExpectationsData.imageAlt} />
      </div>
      <div className="all_expectations_right">
        <p className="all_expectations_text1">{allExpectationsData.text1}</p>
        <h2>{allExpectationsData.header}</h2>
        <p className="all_expectations_text2">{allExpectationsData.text2}</p>
        <a href="#" className="right__cta">{allExpectationsData.ctaText}</a>
      </div>
    </section>
  );
};

export default AllExpectations;
