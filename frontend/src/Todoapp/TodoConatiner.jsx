
import { TodoInputs } from "./todoInputs";
import { TodoItems } from "./TodoItems";
import "./Todo.css";
import Welcomemsg from "./welcomemsg";

import { TodoItemReducerProvider } from "./store/TodoContextStore";

export const Todo = () => {


// const addNewItems=(itemName,ItemDate)=>{
//   console.log(`${ItemDate} and ${itemName}`)
//   const newitems=[...todoItems,{
//     task:itemName,
//     date:ItemDate
//   }];

//   setTodoItems(newitems)
// }


// const deleteItem=(itemName)=>{
// //  console.log(`deleted Item:${itemName}`)
// //  const filterItem=todoItems.filter(item=> 
// //   // console.log("items" + items)
// //   item.task !==itemName)
// // //  setTodoItems(filterItem)
// }
  return (
    <center className="container ">
      <h1>Todo app</h1>
      <TodoItemReducerProvider>
          <div className="container text-center ">
            <TodoInputs />
            <Welcomemsg/>
            <TodoItems/>
          </div>
      </TodoItemReducerProvider>

    </center>
  );
};
