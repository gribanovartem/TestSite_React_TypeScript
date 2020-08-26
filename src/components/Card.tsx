import React, { useState } from "react";
import { IPosts } from "../interfaces/interfaces";
import { Preloader } from "./Preloader";

export const Card: React.FC<{ post: IPosts, changePostLikes: Function }> = (props) => {
   const [isImgLoad, changeImgLoad] = useState<boolean>(false);
   const [isImgLoadError, setImgError] = useState<boolean>(false);
   const [url, changeUrl] = useState<string>(props.post.url);
   const [isLikeOn, changeLike] = useState<boolean>(false);
   const [sessionLikes, changeSessionLikes] = useState<number>(props.post.likes);

   const imgLoaded = (): void => {
      changeImgLoad(!isImgLoad);
   };
   const setErrorImg = () => {
      setImgError(true);
      changeUrl('https://dubsism.files.wordpress.com/2017/12/image-not-found.png');
   }
   const changeLikesHandler = () => {
      changeLike(!isLikeOn);
      if(isLikeOn) {
         changeSessionLikes(sessionLikes-1);
         props.changePostLikes(props.post._id, sessionLikes);
      } else {
         changeSessionLikes(sessionLikes+1);
         props.changePostLikes(props.post._id, sessionLikes);
      }
      console.log(props.post)
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
