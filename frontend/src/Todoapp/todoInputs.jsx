import { useState } from "react";

export const TodoInputs = ({handleNewItems}) => {
  const [task,setTask]=useState(null)
  const [date,setDate]=useState(null)
  const handleTask=(e)=>{
    const task=e.target.value
    console.log(task)
    setTask(task)

  }
  const handleDate=(e)=>{
    const data=e.target.value
    console.log(data)
    setDate(data)

  }
  const handleAddbutton=()=>{
    handleNewItems(task,date)
    setDate("");
    setTask("");

  }
  return (
    <div class="row todo-row">
      <div class="col-6">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          className="border border-primary"
          onChange={handleTask}
        />
      </div>
      <div class="col-4">
        <input type="date" className="border border-primary" value={date} onChange={handleDate}/>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary" onClick={handleAddbutton}>
          Add
        </button>
      </div>
    </div>
  );
};
