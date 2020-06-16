import React from "react";
export const BlogPage: React.FC = () => {
   return (
      <div className="row">
         <div className="col s3 m4">
            <div className="card">
               <div className="card-image">
                  <img src="https://avatarko.ru/img/kartinka/16/muzhchina_15289.jpg" alt='a'/>
                  <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">
                  <p>
                     I am a very simple card. I am good at containing small bits
                     of information. I am convenient because I require little
                     markup to use effectively.
                  </p>
                  <div className="likeIcon">
                     <i className="material-icons">favorite_border</i>
                     <i className="likeCount">5</i>
                  </div>
               </div>
            </div>

            <div className="card">
               <div className="card-image">
                  <img src="https://www.prikol.ru/wp-content/uploads/2017/10/kartinki-04102017-001.jpg" alt='a'/>
                  <span className="card-title">Card Title</span>
               </div>
               <div className="card-content">
                  <p>
                     I am a very simple card. I am good at containing small bits
                     of information. I am convenient because I require little
                     markup to use effectively.
                  </p>
                  <div className="likeIcon">
                     <i className="material-icons">favorite_border</i>
                     <i className="likeCount">5</i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
