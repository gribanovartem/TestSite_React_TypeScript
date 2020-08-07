import React, { useState } from "react";
import { IPosts } from "../interfaces/interfaces";
import { Preloader } from "./Preloader";

export const Card: React.FC<{ post: IPosts }> = (props) => {
   const [isImgLoad, changeImgLoad] = useState<boolean>(false);
   const imgLoaded = (): void => {
      changeImgLoad(!isImgLoad);
   };
   return (
      <>
         <div className={isImgLoad ? 'card' : 'card display-none'}>
            <div className="card-image">
               <div className="card-wrapper">
                  <img
                     src={props.post.url}
                     alt={props.post.title}
                     onLoad={imgLoaded}
                  />
               </div>
               <span className="card-title">{props.post.title}</span>
            </div>
            <div className="card-content">
               <p>{props.post.text}</p>
               <div className="likeIcon">
                  <i className="material-icons">favorite_border</i>
                  <i className="likeCount">{props.post.likes}</i>
               </div>
            </div>
         </div>
         <div className={!isImgLoad ? 'preloader' : 'preloader display-none'}>
            <Preloader />
         </div>
      </>
   );
};
