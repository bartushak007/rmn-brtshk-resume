import React from "react";

import "./style/education.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const education = [
  {
    name: "Lviv Polytechnic National University",
    diploma: "Bachelor",
    skill: "Software engineering"
  },
  {
    training: "FrontEnd Development Course",
    company: 'Mate academy, Kyiv'
  },
  {
    training: "HTML5/CSS3/JavaScript Fundamentals",
    company: 'SoftServe IT Academy, Lviv'
  }
];

const Education = () => {
  return (
    <div className="brick brick-space education">
      <div className="education__container">
        {education.map(({ name, diploma, skill, training, company }, i) => (
          <div className="education__point" key={i}>
            <div className="education__icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="education__info">
              {name && (
                <div>
                  <span>University: </span> {name}
                </div>
              )}

              {training && (
                <div>
                  <span>Training Programs: </span> {training}
                </div>
              )}

              {diploma && (
                <div>
                  <span>Diploma: </span> {diploma}
                </div>
              )}

              {skill && (
                <div>
                  <span>Specialization: </span> {skill}
                </div>
              )}

              {company && (
                <div>
                  <span>Company name: </span> {company}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
