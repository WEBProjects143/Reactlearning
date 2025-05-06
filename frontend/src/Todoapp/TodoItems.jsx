import TodoItem from "./TodoItem";
export const TodoItems = ({todoitems,handleDeleteItem}) => {
  console.log(todoitems)
  return (
    <>
        {todoitems.map(item=>(
          <TodoItem  todotask={item.task} tododate={item.date} handleDeleteItem={handleDeleteItem} /> 
         ))}
    </>     
  );
};
