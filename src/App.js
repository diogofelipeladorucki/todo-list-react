import "./App.css";
import Do from "./components/Do.js";
import Doing from "./components/Doing.js";
import Done from "./components/Done.js";

function App() {
  return (
    <div className="app">
      <div className="do">
        <Do />
      </div>
      <div className="doing">
        <Doing />
      </div>
      <div className="done">
        <Done />
      </div>
    </div>
  );
}

export default App;
