import React from "react";
import AuthorInfo from "../../components/blocks/authorInfo";
import Skills from "../../components/blocks/skills";
import Follow from "../../components/blocks/follow";
import Likes from "../../components/blocks/likes";
import Education from "../../components/blocks/education";
import Resume from "../../components/blocks/resume";

import "./style/home.scss";

const Home = ({home: {skills, tools, likes, education, follow}}) => {
  return (
    <div className="home container-wide">
      <AuthorInfo />
      <Skills skills={skills} className="mySkills" />
      <Follow follow={follow}/>
      <Likes likes={likes}/>
      <Skills skills={tools} className="tools" wild={true} />
      <Education education={education}/>
      <Resume />
      <div className="brick blanc">123</div>
    </div>
  );
};

export default Home;
