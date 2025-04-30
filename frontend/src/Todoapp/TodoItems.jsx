export const TodoItems = () => {
  return (
    <div className="row mt-4 todo-row">
      <div className="col-6 inputs">Buy milk</div>
      <div className="col-4 inputs">1/05/2025</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger T-btn">
          Delete
        </button>
      </div>
    </div>
  );
};
