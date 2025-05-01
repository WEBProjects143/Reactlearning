const TodoItem = ({todotask,tododate}) => {
    console.log({todotask,tododate})
  return (
    <div className="row mt-4 todo-row">
      <div className="col-6 inputs">{todotask}</div>
      <div className="col-4 inputs">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger T-btn">
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
