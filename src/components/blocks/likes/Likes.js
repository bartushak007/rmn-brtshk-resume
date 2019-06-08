import React from "react";

import "./style/likes.scss";

import Image from '../../shared/image';

const Likes = ({likes}) => {
  return (
    <div className="likes brick retreat">
      <h3 className="title title--small">Likes</h3>
      <div className="likes__container">
      {likes.map(({path, hobby}) => (
        <div className="text-center" key={path}>
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
