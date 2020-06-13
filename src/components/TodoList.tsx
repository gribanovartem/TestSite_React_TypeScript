import React from "react";
import { ITodoListProps } from "../interfaces/interfaces";

export const TodoList: React.FC<ITodoListProps> = ({
   todoList,
   onToogle,
   onRemove,
}) => {
   const newTodoList = todoList.map((todo) => {
      const titleClass = todo.completed ? "completed" : "";
      return (
         <ul className="collection" key={todo.id}>
            <li className="collection-item">
               <p className="checkbox">
                  <label>
                     <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToogle(todo.id)}
                     />
                     <span className={titleClass}>{todo.title}</span>
                  </label>
               </p>
               <p className="deleteButton" onClick={() => onRemove(todo.id)}>
                  Удалить
               </p>
            </li>
         </ul>
      );
   });
   const noTodo = <h4>Бро!  Ты пока не добавил никаких дел</h4>

   return <div className="container">{todoList.length===0 ? noTodo : newTodoList}</div>;
};
