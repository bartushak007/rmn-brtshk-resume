import React from "react";
import Image from "../../shared/image";
import "./style/authorInfo.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
const contacts = [
  [faMapMarkerAlt, "Ukraine Kyiv/Lviv"],
  [faMobileAlt, "+380970296659"],
  [faEnvelope, "rmnbrtshk@gmail.com"]
];
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {
//   faFacebook,
//   faLinkedin,
//   faGithub,
//   faSkype,
// } from "@fortawesome/free-brands-svg-icons"
// const icons = { faFacebook, faLinkedin, faGithub, faSkype }

const AuthorInfo = () => {
  const listIcons = ([icon, text]) => (
    <div className="info__contacts-elem" key={text + "" + icon}>
      <span className="info__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      {text}
    </div>
  );

  return (
    <div className="info brick">
      <div className="info__header">
        <Image
          className="info__user-pic"
          src="images/author.png"
          alt="user picture"
        />
        <h2 className="title title--small">
          Roman Bartushak <br /> Front-end Developer
        </h2>
      </div>
      <div className="retreat text">
        <div>
          <h3 className="title title--small">About me</h3>
          <p>
            Goal-oriented and highly motivated Web Developer looking for new
            opportunities in FrontEnd. Aim to constant self-improvement. Have good
            practical skills in creating adaptive and user-friendly layout.
            Actively improving JS programming skills at the moment. I don’t have
            any bad habits.
          </p>
        </div>
        <div className="retreat__top">{contacts.map(listIcons)}</div>
      </div>
    </div>
  );
};

export default AuthorInfo;
