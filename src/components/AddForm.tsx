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
   const [text, changeText] = useState<string>("");

   const clearAllInputField = ():void => {
      changeTitle('');
      changeUrl('');
      changeText('');
   }

   const changeTitleHandler = (
      e: React.ChangeEvent<HTMLInputElement>
   ): void => {
      changeTitle(e.target.value);
   };
   const changeUrlHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      changeUrl(e.target.value);
   };
   const changeTextHandler = (
      e: React.ChangeEvent<HTMLTextAreaElement>
   ): void => {
      changeText(e.target.value);
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
               <label htmlFor="Title">Заголовок</label>
            </div>
            <div className="input-field col s12">
               <input
                  id="URL"
                  value={url}
                  type="text"
                  className="validate"
                  onChange={changeUrlHandler}
               />
               <label htmlFor="URL">URL картинки</label>
            </div>
            <div className="input-field col s12">
               <textarea
                  id="text"
                  value={text}
                  className="materialize-textarea"
                  onChange={changeTextHandler}
               ></textarea>
               <label htmlFor="text">Текст статьи</label>
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
               onClick={() => props.addNewPost(title, url, text)}
            >
               Добавить
            </span>
         </div>
      </form>
   );
};
