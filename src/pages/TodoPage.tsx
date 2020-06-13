import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodos } from "../interfaces/interfaces";

export const TodoPage: React.FC = () => {
   const [todoList, updateTodo] = useState<ITodos[]>([]);
   const setTodo = (title: string): void => {
      const newTodo = {
         title: title,
         id: Date.now(),
         completed: false,
      };
      updateTodo((prev) => [newTodo, ...prev]);
   };
   useEffect(()=>{
      const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodos[]
      updateTodo(localTodos)
   }, [])
   useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todoList))
   }, [todoList])
   const toogleHandler = (id: number) => {
      updateTodo(
         todoList.map((todo) => {
            if (todo.id === id) {
               todo.completed = !todo.completed;
            }
            return todo;
         })
      );
   };
   const removeHandler = (id: number) => {
      updateTodo((prev) => prev.filter((todo) => todo.id !== id));
   };
   return (
      <>
         <h1>Список дел</h1>
         <TodoForm setTodo={setTodo} />
         <TodoList
            todoList={todoList}
            onToogle={toogleHandler}
            onRemove={removeHandler}
         />
      </>
   );
};
