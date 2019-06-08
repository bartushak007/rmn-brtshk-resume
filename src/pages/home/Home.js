import React from 'react';
import AuthorInfo from '../../components/blocks/authorInfo';
import Skills from '../../components/blocks/skills';
import Follow from '../../components/blocks/follow';
import Likes from '../../components/blocks/likes';


import './style/home.scss'

const Home = () => {
  return (
    <div className="home container-wide">      
      <AuthorInfo/>
      <Skills />
      <Follow/>
      <Likes/>
      <div className="brick blanc">123</div>
    </div>
  );
}

export default Home;
