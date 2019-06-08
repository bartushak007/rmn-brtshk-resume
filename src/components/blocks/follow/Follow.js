import React from "react";

import { capitalizeFirst } from '../../../helpers'

import "./style/follow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Follow = () => {
  const icons = { faFacebook, faLinkedin, faGithub, faInstagram };
  const links = [
    { name: "facebook", link: "" },
    { name: "linkedin", link: "" },
    { name: "instagram", link: "" },
    { name: "github", link: "" }
  ];

  
  const Icon = (icon, name) =>
    icon ? <FontAwesomeIcon icon={icon} /> : name.charAt(0).toUpperCase();

  const renderSocialLink = ({ link, name }) => {
    const icon = icons["fa" + capitalizeFirst(name)];

    return (
      <div className="follow__link-box">
        <a className="follow__link" key={name} href={link} rel="noopener noreferrer" target="_blank">
          {Icon(icon, name)}          
        </a>
        <h3 className="title title--smaller">{capitalizeFirst(name)}</h3>
      </div>
    );
  };

  return (
    <div className="follow brick brick-space">
      <h3 className="title title--small">Follow me</h3>
      <div className="follow__links">
        {links.map(renderSocialLink)}
      </div>
    </div>
  );
};

export default Follow;
