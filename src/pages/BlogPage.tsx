import React, { useState, MouseEvent, useEffect } from "react";
import { AddForm } from "../components/AddForm";
import { Card } from "../components/Card";
import { IPosts } from "../interfaces/interfaces";
export const BlogPage: React.FC = () => {
   const [isModal, changeModal] = useState<boolean>(false);
   const [posts, changePosts] = useState<Array<IPosts>>([]);
   

   const changePostLikes = (id: string, likes: number):void => {
      fetch(
         // "https://todoblognodejs.herokuapp.com/posts",
         "http://localhost:8003/posts",
         {
            method: "PUT",
            headers: {
               "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({id: id, likes: likes}),
         }
      ).then((response) => {
         console.log(response.text());
      });
   }

   const changeModalHandler = (e: React.MouseEvent<HTMLSpanElement>): void => {
      changeModal(!isModal);
   };
   const closeModalHandler = (e: React.MouseEvent<HTMLSpanElement>): void => {
      if (isModal) {
         changeModal(false);
      }
   };
   const addNewPost = (title: string, url: string, text: string): void => {
      const newPost = {
         title,
         url,
         text,
         likes: 0
      }
      fetch(
         "https://todoblognodejs.herokuapp.com/posts",
         // "http://localhost:8003/posts",
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(newPost),
         }
      ).then((response) => {
         console.log(response.text());
      });

      changeModal(false);
      window.location.reload();
   };

   useEffect(() => {
      fetch(
         "https://todoblognodejs.herokuapp.com/posts",
         // "http://localhost:8003/posts",
         {
            method: "GET",
            // mode: 'no-cors',
            headers: {
               "Content-Type": "application/json;charset=utf-8",
            },
         }
      )
         .then((response) => {
            if (response.ok) {
               return response.json();
            } else {
               console.log("error");
            }
         })
         .then((data) => {
            changePosts(data);
         });
   }, []);

   return (
      <div className="row">
         <AddForm
            modal={isModal}
            closeModalHandler={closeModalHandler}
            addNewPost={addNewPost}
         />
         <div
            className={isModal ? "darkBackground active" : "darkBackground"}
            onClick={closeModalHandler}
         />
         <div className="col s3 m4">
            <span
               className="btn-floating btn-large waves-effect waves-light light-blue darken-3"
               onClick={changeModalHandler}
            >
               <i className="material-icons addButton">add</i>
            </span>
            {posts.map((item) => {
               return <Card post={item} key={item._id} isLiked={localStorage.getItem(item._id.toString())?true:false} changePostLikes={changePostLikes}/>;
            })}
         </div>
      </div>
   );
};
