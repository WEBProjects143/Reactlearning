export const TodoInputs = () => {
  return (
    <div class="row todo-row">
      <div class="col-6">
        <input
          type="text"
          placeholder="Enter Task"
          className="border border-primary"
        />
      </div>
      <div class="col-4">
        <input type="date" className="border border-primary" />
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-primary">
          Add
        </button>
      </div>
    </div>
  );
};
