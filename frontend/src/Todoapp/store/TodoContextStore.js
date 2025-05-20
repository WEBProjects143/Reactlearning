import { useReducer } from "react";
import {createContext} from 'react';
export const TodoContext= createContext({
    todoItems:[],
    addNewItems:()=>{},
    deleteItem:()=>{},

})//Providing context store for all the comoponent in react

//Reducer function 
const TodoReducer=(state,action)=>{
  let newTodoState=state
  if(action.type ==="NEW_ITEMS"){
      newTodoState=[...state,{
      task:action.payload.task,
      date:action.payload.date
    }]
  }else if(action.type === "DELETE"){
    newTodoState=state.filter((item)=>item.task !== action.payload.task)
  }
  return newTodoState;
}
export const TodoItemReducerProvider=({children})=>{
      const [todoItems,dispatcher]=useReducer(TodoReducer,[])
    // const [todoItems,setTodoItems]=useState([]);
     const addNewItems=(itemName,ItemDate)=>{
      const newTodoItems={
        type:"NEW_ITEMS",
        payload:{
          task:itemName,
          date:ItemDate
        }
      };
      dispatcher(newTodoItems)
    }
    
    const deleteItem=(itemName)=>{
      console.log("deleteItem" + itemName)
      const deleteTodoItem={
        type:"DELETE",
        payload:{
          task:itemName
        }
      }
      dispatcher(deleteTodoItem)
    }
    return(
        <TodoContext.Provider value={{
            todoItems,
            addNewItems,
            deleteItem  
          }}>
            {children}
          </TodoContext.Provider>
    )
}