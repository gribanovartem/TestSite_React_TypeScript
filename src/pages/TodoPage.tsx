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
      fetch(
         "https://todoblognodejs.herokuapp.com/todos",
         {
            method: "post",
            headers: {
               "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(newTodo),
         }
      )
         .then((response) => {
            response.json();
         })
         .then((data) => {
            console.log("Request succeeded with JSON response", data);
         });
   };
   useEffect(() => {
      // const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodos[]
      // updateTodo(localTodos)
      fetch(
         "https://todoblognodejs.herokuapp.com/todos",
         // "http://localhost:8003/todos",
         {
            method: "GET",
            headers: {
               'Content-Type': 'application/json'
             },
         }
      )
         .then((response) => {
            console.log(response);
            if (response.ok) {
               return response.json();
            } else {
               console.log("error");
            }
         })
         .then((data) => {
            console.log(data);
            updateTodo(data);
         });
   }, []);
   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todoList));
   }, [todoList]);
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
