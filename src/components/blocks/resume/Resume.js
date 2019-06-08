import React from "react";
import { resolvePath } from "../../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const resumePath = resolvePath('resume/RomanBartushak.pdf')
  return (
    <div className="resume brick brick-space">
      <h3 className="title title-smaller">My CV</h3>
      <div className="title title-smaller">
        <div><a href={resumePath} download> <FontAwesomeIcon icon={faFileDownload}/> download </a></div>
        <div><a href={resumePath} target="_blanck">  <FontAwesomeIcon icon={faFilePdf}/> open </a></div>      
      </div>
    </div>
  );
};

export default Resume;
