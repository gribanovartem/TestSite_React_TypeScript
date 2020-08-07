import React from "react";

export const AddForm: React.FC<{modal: boolean, closeModalHandler: Function}> = (props) => {

   const modalClassName:string = 'col s3 m4 addForm'
   const newModalClassName = props.modal ? (modalClassName + ' modalShow') : (modalClassName + ' modalHide')

   return (
      <form className={newModalClassName}>
         <div className="row">
            <div className="input-field col s12">
               <input id="URL" type="text" className="validate" />
               <label htmlFor="URL">URL картинки</label>
            </div>
            <div className="input-field col s12">
               <textarea
                  id="textarea1"
                  className="materialize-textarea"
               ></textarea>
               <label htmlFor="textarea1">Текст статьи</label>
            </div>
         </div>
         <div className="modalButtons">
            <span className="waves-effect red lighten-1 btn" onClick={()=>props.closeModalHandler()}>Отмена</span>
            <span className="waves-effect light-blue darken-3 btn">Добавить</span>
         </div>
      </form>
   );
};
