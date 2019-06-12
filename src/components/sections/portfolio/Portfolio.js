import React, {Suspense, lazy} from "react";

import "./style/portfolio.scss";

import useToggle from "../../../hooks/useToggle";

const PortfolioSlider = lazy(() => import("./PortfolioSlider"));

const Portfolio = ({ portfolio }) => {
  const {toggle, turnToggle} = useToggle();

  return (
    <div className="portfolio brick brick-space">  
      <h3 className="title">Portfolio</h3>
      {!toggle && <button className="portfolio__button portfolio__button--fat" onClick={turnToggle}>Load portfolio</button>}
      {toggle && <Suspense fallback={<span>loading</span>}><PortfolioSlider portfolio={portfolio}/></Suspense>}
    </div>    
  );
};

export default Portfolio;
