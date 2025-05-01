import TodoItem from "./TodoItem";
export const TodoItems = ({todoitems}) => {
  console.log(todoitems)
  return (
    <>
        {todoitems.map(item=>(
          <TodoItem  todotask={item.task} tododate={item.date}/> 
         ))}
    </>     
  );
};
