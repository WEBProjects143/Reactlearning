import { useContext } from "react";
import { TodoContext } from "./store/TodoContextStore";

const TodoItem = ({todotask,tododate,handleDeleteItem}) => {
  const {deleteItem}=useContext(TodoContext)
  return (
    <div className="row mt-4 todo-row" key={todotask}>
      <div className="col-6 inputs">{todotask}</div>
      <div className="col-4 inputs">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger T-btn" onClick={()=>deleteItem(todotask)}>
          Delete
        </button>
      </div>  
    </div>
  );
};
export default TodoItem;
