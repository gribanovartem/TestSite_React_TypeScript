import React, { useState } from "react";

export const AddForm: React.FC<{
   modal: boolean;
   closeModalHandler: Function;
   addNewPost: Function;
}> = (props) => {
   const modalClassName: string = "col s3 m4 addForm";
   const newModalClassName = props.modal
      ? modalClassName + " modalShow"
      : modalClassName + " modalHide";

   const [title, changeTitle] = useState<string>("");
   const [url, changeUrl] = useState<string>("");
   const [directions, changeDirections] = useState<string>("");
   const [ingredients, changeIngredients] = useState<string>("");

   const clearAllInputField = ():void => {
      changeTitle('');
      changeUrl('');
      changeDirections('');
      changeIngredients('');
   }
   
   const changeTitleHandler = (
      e: React.ChangeEvent<HTMLInputElement>
   ): void => {
      changeTitle(e.target.value);
   };
   const changeUrlHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      changeUrl(e.target.value);
   };
   const changeDirectionsHandler = (
      e: React.ChangeEvent<HTMLTextAreaElement>
   ): void => {
      changeDirections(e.target.value);
   };
   const changeIngredientsHandler = (
      e: React.ChangeEvent<HTMLTextAreaElement>
   ): void => {
      changeIngredients(e.target.value);
      console.log(ingredients)
   };

   return (
      <form className={newModalClassName}>
         <div className="close-container">
            <i
               className="material-icons close"
               onClick={() => props.closeModalHandler()}
            >
               close
            </i>
         </div>
         <div className="row">
            <div className="input-field col s12">
               <input
                  id="Title"
                  value={title}
                  type="text"
                  className="validate"
                  onChange={changeTitleHandler}
               />
               <label htmlFor="Title">Recipe name</label>
            </div>
            <div className="input-field col s12">
               <input
                  id="URL"
                  value={url}
                  type="text"
                  className="validate"
                  onChange={changeUrlHandler}
               />
               <label htmlFor="URL">URL</label>
            </div>
            <div className="input-field col s12">
               <textarea
                  id="ingredients"
                  value={ingredients}
                  className="materialize-textarea"
                  onChange={changeIngredientsHandler}
                  rows={5}
               ></textarea>
               <label htmlFor="ingredients">Ingredients</label>
            </div>
            <div className="input-field col s12">
               <textarea
                  id="directions"
                  value={directions}
                  className="materialize-textarea"
                  onChange={changeDirectionsHandler}
                  rows={5}
               ></textarea>
               <label htmlFor="directions">Directions</label>
            </div>
         </div>
         <div className="modalButtons">
            <span
               className="waves-effect yellow darken-3 btn"
               onClick={clearAllInputField}
            >
               Очистить
            </span>
            <span
               className="waves-effect red lighten-1 btn"
               onClick={() => props.closeModalHandler()}
            >
               Отмена
            </span>
            <span
               className="waves-effect light-blue darken-3 btn"
               onClick={() => props.addNewPost(title, url, directions.replace(/\n/g, '<br>'), ingredients.replace(/\n/g, '<br>'))}
            >
               Добавить
            </span>
         </div>
      </form>
   );
};
