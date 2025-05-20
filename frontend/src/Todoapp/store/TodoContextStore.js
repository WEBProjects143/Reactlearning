import {createContext} from 'react';
export const TodoContext= createContext({
    todoItems:[],
    addNewItems:()=>{},
    deleteItem:()=>{},

})//Providing context store for all the comoponent in react