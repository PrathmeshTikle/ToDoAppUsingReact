export const ShowToDo2 = ({ toDoName, date }) => {
  return (
    <>
      <div className="items">
        <div className="row">
          <div className="col-4">
            <p>{toDoName}</p>
          </div>
          <div className="col-4">
            <p>{date.toLocaleDateString()}</p>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
