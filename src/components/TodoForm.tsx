import React, { useState } from "react";
import { ITodoFormProps } from "../interfaces/interfaces";

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
   const [title, setTitle] = useState<string>("");
   const changeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
   };
   const enterInputHandler = (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
         props.setTodo(title);
         setTitle("");
      }
   };
   return (
      <div className="container">
         <div className="row">
            <div className="input-field col s12">
               <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={changeInputHandler}
                  value={title}
                  onKeyPress={enterInputHandler}
               />
               <label htmlFor="first_name">Add product</label>
            </div>
         </div>
      </div>
   );
};
