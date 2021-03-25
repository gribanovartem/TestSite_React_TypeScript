import React, { useState } from "react";
import { IPosts } from "../interfaces/interfaces";
import { Preloader } from "./Preloader";

export const Card: React.FC<{ post: IPosts, changePostLikes: Function, isLiked: boolean }> = (props) => {
   const [isImgLoad, changeImgLoad] = useState<boolean>(false);
   const [isImgLoadError, setImgError] = useState<boolean>(false);
   const [url, changeUrl] = useState<string>(props.post.url);
   const [isLikeOn, changeLike] = useState<boolean>(props.isLiked);
   const [sessionLikes, changeSessionLikes] = useState<number>(props.post.likes);

   const imgLoaded = (): void => {
      changeImgLoad(!isImgLoad);
   };
   const setErrorImg = () => {
      setImgError(true);
      changeUrl('https://dubsism.files.wordpress.com/2017/12/image-not-found.png');
   }
   const changeLikesHandler = () => {
      localStorage.setItem(props.post._id.toString(), 'true')
      changeLike(!isLikeOn);
      if( isLikeOn) {
         changeSessionLikes(sessionLikes-1);
         props.changePostLikes(props.post._id, sessionLikes-1);
         localStorage.removeItem(props.post._id.toString())
      } else {
         changeSessionLikes(sessionLikes+1);
         props.changePostLikes(props.post._id, sessionLikes+1);
      }
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
               <div className="card-text">
                  <h5>Ingredients:</h5>
                  <p>{props.post.ingredients.replaceAll("<br>", '\n')}</p>
                  <h5>Directions:</h5>
                  <p>{props.post.directions.replaceAll("<br>", '\n')}</p>
               </div>
               <div className="likeIcon">
                  <i className="material-icons" onClick={changeLikesHandler}>{isLikeOn ? 'favorite' : 'favorite_border'}</i>
                  <i className="likeCount">{sessionLikes}</i>
               </div>
            </div>
         </div>
         <div className={isImgLoad || isImgLoadError ?  "preloader display-none" : "preloader"}>
            <Preloader />
         </div>
      </>
   );
};
