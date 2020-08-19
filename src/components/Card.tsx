import React, { useState } from "react";
import { IPosts } from "../interfaces/interfaces";
import { Preloader } from "./Preloader";

export const Card: React.FC<{ post: IPosts }> = (props) => {
   const [isImgLoad, changeImgLoad] = useState<boolean>(false);
   const [isImgLoadError, setImgError] = useState<boolean>(false);
   const [url, changeUrl] = useState<string>(props.post.url);
   const imgLoaded = (): void => {
      changeImgLoad(!isImgLoad);
   };
   const setErrorImg = () => {
      setImgError(true);
      changeUrl('https://dubsism.files.wordpress.com/2017/12/image-not-found.png');
   }
   return (
      <>
         <div className={isImgLoad ? "card" : "card display-none"}>
            <div className="card-image">
               <div className="card-wrapper">
                  <img
                     src={url}
                     alt={props.post.title}
                     onLoad={imgLoaded}
                     onError={setErrorImg}
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
         <div className={isImgLoad || isImgLoadError ?  "preloader display-none" : "preloader"}>
            <Preloader />
         </div>
      </>
   );
};
