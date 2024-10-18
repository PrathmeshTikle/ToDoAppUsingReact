import { TitleName } from "./components/TitleName";
import { AddToDo } from "./components/AddToDo";
import { ShowToDo } from "./components/ShowToDo";
import { ShowToDo1 } from "./components/ShowToDo1";
import { ShowToDo2 } from "./components/ShowToDo2";

function App() {
  return (
    <>
      <center>
        <TitleName></TitleName>
        <div className="container text-align heading">
        <AddToDo></AddToDo>
        <div className="item-container">
        <ShowToDo></ShowToDo>
        <ShowToDo1></ShowToDo1>
        <ShowToDo2 toDoName={"Morning Walk"} date={new Date()}></ShowToDo2>
        </div>
        </div>
      </center>
    </>
  );
}

export default App;
