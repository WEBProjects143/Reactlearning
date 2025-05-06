import { useState } from "react";
import { TodoInputs } from "./todoInputs";
import { TodoItems } from "./TodoItems";
import "./Todo.css";
import Welcomemsg from "./welcomemsg";

export const Todo = () => {

const [todoItems,setTodoItems]=useState([]);

const handleNewItems=(itemName,ItemDate)=>{
  console.log(`${ItemDate} and ${itemName}`)
  const newitems=[...todoItems,{
    task:itemName,
    date:ItemDate
  }];

  setTodoItems(newitems)
}
const handleDeleteItem=(itemName)=>{
 console.log(`deleted Item:${itemName}`)
 const filterItem=todoItems.filter(item=> 
  // console.log("items" + items)
  item.task !==itemName)
 setTodoItems(filterItem)
}
  return (
    <center className="container ">
      <h1>Todo app</h1>
     
        <div className="container text-center ">
          <TodoInputs handleNewItems={handleNewItems}/>
          {todoItems.length === 0?(<Welcomemsg/>):(
            <TodoItems todoitems={todoItems} handleDeleteItem={handleDeleteItem}/>
          )}
          
        </div>

    </center>
  );
};
