import React from "react";

import "./style/skills.scss";

const Skills = ({skills: {data, title}, className, wild}) => {
  

  const iconsList = ([key, [percent, color]]) => (
    <div className={`skills__container ${wild && 'skills__container--wild'}`} key={key}>
      <h3 className="title title--smaller">{key}</h3>
      <div className="skills__skill">
        <div
          className={`skills__percent ${color ? 'skills__percent--' + color : ''}`}
          style={{ width: percent }}
        >
          {percent}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`skills brick retreat ${className}`}>
      <h3 className="title title--small">{title}</h3>
      <div className="skills__inner">
        {Object.entries(data).map(iconsList)}
      </div>
    </div>
  );
};

export default Skills;
