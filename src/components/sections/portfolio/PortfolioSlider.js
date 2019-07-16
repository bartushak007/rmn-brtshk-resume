import React, { useState, useEffect } from "react";

import Slider from "../../blocks/slider";
import useSlider from "../../../hooks/useSlider";

const PortfolioSlider = ({ portfolio }) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength
  } = useSlider(portfolio.length);
  const [touchStart, setTouchStart] = useState(null);
  const [difference, setDifference] = useState(null);

  useEffect(() => {
    if (difference && difference > 50) {
      nextSlide();
    } else if (difference && difference < -50) {
      prevSlide();
    }
    setDifference(null);
  }, [difference, nextSlide, prevSlide]);

  return (
    <>
      <div
        className="slider__container"
        onTouchStart={e => setTouchStart(e.changedTouches[0].clientX)}
        onTouchEnd={e =>
          setDifference(touchStart - e.changedTouches[0].clientX)
        }
      >
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
      <div className="portfolio__button-contaioner">
        <button className="portfolio__button" onClick={prevSlide}>
          prev
        </button>
        <button className="portfolio__button" onClick={nextSlide}>
          next
        </button>
      </div>
      <div className="portfolio__description">
        <h3 className="title title--small">{portfolio[currentSlide].title}</h3>
        <a
          className="portfolio__link"
          rel="noopener noreferrer"
          href={portfolio[currentSlide].link}
          target="_blank"
        >
          Link to gh-pages
        </a>
        <div>
          {portfolio[currentSlide].steck.map((elem, i) => (
            <span className="portfolio__skill" key={i}>
              {elem}
            </span>
          ))}
          <br />
        </div>
      </div>
    </>
  );
};

export default PortfolioSlider;
