import { TodoInputs } from "./todoInputs";
import { TodoItems } from "./TodoItems";
import "./Todo.css";

export const Todo = () => {
  const todoitems=[{
 task:"Read book",
 date:"01/04/2025"
  },
  {
    task:"eat meal",
    date:"01/04/2025"
  }
]
  return (
    <center className="container ">
      <h1>Todo app</h1>
      <div className="container text-center ">
        <TodoInputs />
        <TodoItems todoitems={todoitems}/>
      </div>
    </center>
  );
};
