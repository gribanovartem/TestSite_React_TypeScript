import React, { useState, MouseEvent, useEffect } from "react";
import { AddForm } from "../components/AddForm";
import { Card } from "../components/Card";
import { IPosts } from "../interfaces/interfaces";
export const BlogPage: React.FC = () => {
   const [isModal, changeModal] = useState<boolean>(false);
   const [posts, changePosts] = useState<Array<IPosts>>([]);

   const changeModalHandler = (e: React.MouseEvent<HTMLSpanElement>):void => {
      changeModal(!isModal);
   }
   const closeModalHandler = (e: React.MouseEvent<HTMLSpanElement>):void => {
      changeModal(false);
   }
   
   useEffect(()=>{
      fetch(
         // "https://todoblognodejs.herokuapp.com/posts",
         "http://localhost:8003/posts",
         {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json'
            },
         }
      )
      .then(response => {
         if(response.ok) {
            return response.json();
         }
         else {
            console.log('error');
         }
      })
      .then(data => {
         changePosts(data)
      })
      
   }, []);

   return (
      <div className="row">
         <AddForm modal={isModal} closeModalHandler={closeModalHandler}/>
         <div className="col s3 m4">
         <span className='btn-floating btn-large waves-effect waves-light light-blue darken-3' onClick={changeModalHandler}><i className="material-icons addButton">add</i></span>
            {/* <div className="card">
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
               <div></div>
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
            </div> */}
            {posts.map((item) => {
               return <Card post = {item} key={item._id}/>
            })}
         </div>
      </div>
   );
};
