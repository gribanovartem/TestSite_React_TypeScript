export interface ITodoFormProps {
   setTodo(title: string): void;
}

export interface ITodos {
   title: string;
   id: number;
   completed: boolean;
}

export interface ITodoListProps {
   todoList: ITodos[];
   onToogle(id: number): void;
   onRemove(id: number): void;
}

export interface IPosts {
   _id: number;
   url: string;
   text: string;
   likes: number;
   title: string;
}