import { useState, useEffect } from "react";

const useSlider = (length, delay = 5000, doSlide = true, startSlide = 0) => {
  const [currentSlide, setCurrentSlide] = useState(startSlide);
  const [goRight, setGoRight] = useState(true);
  const [beforeStart, setBeforeStart] = useState(true);

  useEffect(() => {
    if (beforeStart) {
      setCurrentSlide(currentSlide + 1);
      setBeforeStart(false);
    }
    if (doSlide) {
      const interval = setInterval(() => {
        if (goRight) {
          currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);
          if (currentSlide === length - 1) {
            setGoRight(!goRight);
            setCurrentSlide(length - 2);
          }
        } else {
          currentSlide && setCurrentSlide(currentSlide - 1);
          if (currentSlide === 0) {
            setGoRight(!goRight);
            setCurrentSlide(1);
          }
        }
      }, delay);

      return () => clearInterval(interval);
    }
  }, [currentSlide, beforeStart, length, delay, doSlide, goRight]);

  const nextSlide = () =>
    currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);

  const prevSlide = () => currentSlide && setCurrentSlide(currentSlide - 1);

  const setSlide = id => setCurrentSlide(id);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength: length
  };
};

export default useSlider;
