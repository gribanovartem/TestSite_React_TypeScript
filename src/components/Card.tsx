import React from "react";
import { IPosts } from "../interfaces/interfaces";

export const Card: React.FC<{ post: IPosts }> = (props) => {
   return (
      <div className="card">
         <div className="card-image">
            <img src={props.post.url} alt="a" />
            <span className="card-title">Card Title</span>
         </div>
         <div className="card-content">
            <p>{props.post.text}</p>
            <div className="likeIcon">
               <i className="material-icons">favorite_border</i>
               <i className="likeCount">{props.post.likes}</i>
            </div>
         </div>
      </div>
   );
};
