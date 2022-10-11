import logo from "./logo.svg";
import "./App.css";
import WebRouter from "../src/screen/conifg/router";
import Header from "./Utils/Components/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Body">
        <WebRouter />
      </div>
    </div>
  );
}
export default App;
