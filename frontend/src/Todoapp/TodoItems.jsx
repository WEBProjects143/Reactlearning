import { useContext } from "react";
import { TodoContext } from "./store/TodoContextStore";
import TodoItem from "./TodoItem";
export const TodoItems = () => {
  const {todoItems,deleteItem}=useContext(TodoContext)
  return (
    <>
          {todoItems.map(item=>(
          <TodoItem  todotask={item.task} tododate={item.date} handleDeleteItem={deleteItem} /> 
         ))}
    </>     
  );
};
