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
         <div className={isModal ? 'darkBackground active' : 'darkBackground'}></div>
         <div className="col s3 m4">
         <span className='btn-floating btn-large waves-effect waves-light light-blue darken-3' onClick={changeModalHandler}><i className="material-icons addButton">add</i></span>
            {posts.map((item) => {
               return <Card post = {item} key={item._id}/>
            })}
         </div>
      </div>
   );
};
