import { TodoInputs } from "./todoInputs";
import { TodoItems } from "./TodoItems";
import "./Todo.css";

export const Todo = () => {
  return (
    <center className="container ">
      <h1>Todo app</h1>
      <div className="container text-center ">
        <TodoInputs />
        <TodoItems />
      </div>
    </center>
  );
};
