import React from "react";

import Slider from "../../blocks/slider";
import useSlider from "../../../hooks/useSlider";

import "./style/portfolio.scss";

const Portfolio = ({ portfolio }) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength
  } = useSlider(portfolio.length);

  return (
    <div className="portfolio brick brick-space">
      <h3 className="title">Portfolio</h3>
      <div className="slider__container">
        <Slider
          {...{
            currentSlide,
            nextSlide,
            prevSlide,
            setSlide,
            sliderLength,
            items: portfolio
          }}
        />
      </div>
      <div className="portfolio__description">
        <h3 className="title title--small">{portfolio[currentSlide].title}</h3>
        <div>
          {portfolio[currentSlide].steck.map((elem, i) => (
            <span className="portfolio__skill" key={i}>
              {elem}
            </span>
          ))}
          <br />
        </div>
        <a className="portfolio__link" rel="noopener noreferrer" href={portfolio[currentSlide].link} target="_blank"> Link to gh-pages</a>
      </div>
    </div>
  );
};

export default Portfolio;
