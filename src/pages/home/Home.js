import React from 'react';
import AuthorInfo from '../../components/blocks/authorInfo';
import Skills from '../../components/blocks/skills';
import Follow from '../../components/blocks/follow';
import Likes from '../../components/blocks/likes';
import Education from '../../components/blocks/education';
import Resume from '../../components/blocks/resume';

import './style/home.scss';

const skills = {
  title: "My Skills",
  data: {
    "React JS": ["80%", "heavy-rain"],
    Html: ["78%", "mountain-rock"],
    CSS: ["78%", "plum-plate"],
    "Async JS": ["50%", "heavy-rain"],
    Redux: ["19%", "plum-plate"],
    "Vanilla JS": ["99%", "plum-plate"],
    BEM: ["50%", "mountain-rock"],
    GIT: ["19%", "heavy-rain"],
    AJAX: ["99%", "strong-bliss"]
  }
};

const tools = {
  title: "tools",
  data: {
    photoshop: ["60%"],
    illustrator: ["38%"],
    'Adobe Illustrator': ["38%"],
    'sublime text': ["78%"],
    'visual studio code': ["50%"]  
  }
};

const Home = () => {
  return (
    <div className="home container-wide">      
      <AuthorInfo/>
      <Skills skills={skills} className="mySkills"/>
      <Follow/>
      <Likes/>
      <Skills skills={tools} className="tools" wild={true}/>
      <Education/>
      <Resume/>
      <div className="brick blanc">123</div>
    </div>
  );
}

export default Home;
