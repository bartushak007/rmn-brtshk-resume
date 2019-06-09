import React from "react";
import AuthorInfo from "../../components/blocks/authorInfo";
import Skills from "../../components/blocks/skills";
import Follow from "../../components/blocks/follow";
import Likes from "../../components/blocks/likes";
import Education from "../../components/blocks/education";
import Resume from "../../components/blocks/resume";
import Portfolio from "../../components/sections/portfolio";

import "./style/home.scss";

const Home = ({home: {skills, tools, likes, education, follow, portfolio}}) => {
  return (
    <div className="home container-wide">
      <AuthorInfo />
      <Skills skills={skills} className="mySkills" />
      <Follow follow={follow}/>
      <Likes likes={likes}/>
      <Skills skills={tools} className="tools" wild={true} />
      <Education education={education}/>
      <Resume />
      <Portfolio portfolio={portfolio}/>
    </div>
  );
};

export default Home;
