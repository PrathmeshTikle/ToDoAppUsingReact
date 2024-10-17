import { TitleName } from "./components/TitleName";
import { AddToDo } from "./components/AddToDo";
import { ShowToDo } from "./components/ShowToDo";
import { ShowToDo1 } from "./components/ShowToDo1";

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
        </div>
        </div>
      </center>
    </>
  );
}

export default App;
