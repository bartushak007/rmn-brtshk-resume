import React from "react";

import "./style/likes.scss";

import Image from '../../shared/image';
const hobbies = [
  {
    path: 'images/blocks/hobby/powerlifting.png',
    hobby: 'powerlifting'
  },
  {
    path: 'images/blocks/hobby/books.png',
    hobby: 'Reading books'
  },
  {
    path: 'images/blocks/hobby/cup.png',
    hobby: 'Drincing coffe'
  },
  {
    path: 'images/blocks/hobby/hiking.png',
    hobby: 'Hiking'
  },
  {
    path: 'images/blocks/hobby/play.png',
    hobby: 'Playing video games'
  },
  {
    path: 'images/blocks/hobby/rock.png',
    hobby: 'Rock'
  }
]
const Likes = () => {
  return (
    <div className="likes brick retreat">
      <h3 className="title title--small">Likes</h3>
      <div className="likes__container">
      {hobbies.map(({path, hobby}) => (
        <div className="text-center">
          <div className="likes__hobby-box">
          <Image src={path}/>
          </div>
          <h3 className="title title--smaller">{hobby}</h3>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Likes;
