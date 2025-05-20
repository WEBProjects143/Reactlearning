import { useContext } from "react";
import { TodoContext } from "./store/TodoContextStore";
const Welcomemsg=()=>{
    const {todoItems}=useContext(TodoContext) // To access context store 
    return (todoItems.length===0 && <p>Enjoy your day</p>);
}
export default Welcomemsg