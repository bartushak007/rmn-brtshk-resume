import React from "react";

import Slider from "../../blocks/slider";
import useSlider from "../../../hooks/useSlider";

import "./style/portfolio.scss";

const slides = [
  {
    src: "images/sections/portfolio/photo-gallery.png",
    title: "Photo gallery",
    steck: ["React", "redux", "scss"],
    link: ""
  },
  {
    src: "images/sections/portfolio/bouncy.png",
    title: "Bouncy",
    steck: ["React", "redux", "scss"],
    link: ""
  },
  {
    src: "images/sections/portfolio/cellsTaskJs6Vanilla.png",
    title: "Easy Game",
    steck: ["React", "redux", "scss"],
    link: "#"
  },
  {
    src: "images/sections/portfolio/multi-step-form-vanilla-js.png",
    title: "Bouncy",
    steck: ["React", "redux", "scss"],
    link: ""
  },
  {
    src: "images/sections/portfolio/bicycle-github.png",
    title: "Bouncy",
    steck: ["React", "redux", "scss"],
    link: ""
  }
];

const Portfolio = ({ portfolio }) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength
  } = useSlider(slides.length);

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
            items: slides
          }}
        />
      </div>
      <div className="portfolio__description">
        <h3 className="title title--small">{slides[currentSlide].title}</h3>
        <div>
          {slides[currentSlide].steck.map((elem, i) => (
            <span className="portfolio__skill" key={i}>
              {elem}
            </span>
          ))}
          <br />
        </div>
        <a className="portfolio__link" href={slides[currentSlide].link}> Link to gh-pages</a>
      </div>
    </div>
  );
};

export default Portfolio;
