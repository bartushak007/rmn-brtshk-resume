import React from "react";

import "./style/skills.scss";

const Skills = () => {
const skills = {
    "React JS": ["80%", '#ff00ff'],
    "Html": ["78%", "#3399ff"],
    "CSS": ["78%", "#3399ff"],
    "Async JS": ["50%", "#66ff33"],
    "Redux": ["19%", "#cc66ff"],
    "Vanilla JS": ["99%", "#00cc99"],    
    "BEM": ["50%", "#66ff33"],
    "GIT": ["19%", "#cc66ff"],
    "AJAX": ["99%", "#00cc99"]
  };

  const iconsList = ([key, [percent, color]]) => (
    <div className="skills__container" key={key}>
      <h3 className="title title--smaller">{key}</h3>
      <div className="skills__skill">
        <div className="skills__percent" style={{'width': percent, 'background': color }}>
          {percent}
        </div>
      </div>
    </div>
  );

  return (
    <div className="skills brick retreat">
      <h3 className="title title--small">My skills</h3>
      <div className="skills__inner">
      {Object.entries(skills).map(iconsList)}
      </div>
      
    </div>
  );
};

export default Skills;
