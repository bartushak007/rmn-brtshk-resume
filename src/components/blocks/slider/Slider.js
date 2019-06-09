import React from "react";
import Image from "../../shared/image";
import './style/slider.scss';

const Slider = ({ items, currentSlide, setSlide, sliderLength }) => {
  const slideClassName = i =>
    `slider__cell ${currentSlide === i ? "slider__cell--active" : ""}`;

  const removeHole =
    currentSlide === sliderLength - 1
      ? sliderLength - 2
      : currentSlide === 0
      ? 1
      : currentSlide;

  const renderSlide = ({src}, i) => {
    const changeSlide = () => setSlide(i);
    return (
      <div key={i} onClick={changeSlide} className={slideClassName(i)}>
        <div className="slider__cell-inner">
          <Image src={src} />
        </div>
      </div>
    );
  }

  return (
    <div className="slider">
      <div
        className={"slider__area"}
        style={{
          transform: `translateX(calc(${(-100 / 3) * removeHole - -100 / 3}%))`
        }}
      >
        {items.map(renderSlide)}
      </div>
    </div>
  );
};

export default Slider;
