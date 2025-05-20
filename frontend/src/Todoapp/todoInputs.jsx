import { useRef,useContext} from "react";
import { TodoContext } from "./store/TodoContextStore";

export const TodoInputs = () => {
  // const [task,setTask]=useState(null)
  // const [date,setDate]=useState(null)

const itemNames=useRef();
const itemDates=useRef();
const {addNewItems}=useContext(TodoContext)


  // const handleTask=(e)=>{
  //   const task=e.target.value
  //   console.log(task)
  //   setTask(task)

  // }
  // const handleDate=(e)=>{
  //   const data=e.target.value
  //   console.log(data)
  //   setDate(data)

  // }
  const handleAddbutton=(e)=>{
    e.preventDefault();
    const itemNameValue=itemNames.current.value
    const itemDateValue=itemDates.current.value
    addNewItems(itemNameValue,itemDateValue)
    // setDate("");
    // setTask("");
    itemDates.current.value="";
    itemNames.current.value="";

  }
  return (
      <form onSubmit={handleAddbutton}>
        <div class="row todo-row">
            <div class="col-6">
              <input
                type="text"
                placeholder="Enter Task"
                ref={itemNames}
                className="border border-primary"
                // onChange={handleTask}
              />
            </div>
            <div class="col-4">
              <input type="date" 
              className="border border-primary" 
              ref={itemDates}
              />
            </div>
            <div class="col-2">
              <button type="submit" class="btn btn-primary" >
                Add
              </button>
            </div>
        </div>
      </form>
  );
};
