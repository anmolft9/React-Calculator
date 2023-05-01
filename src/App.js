import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="container">
          <Display />
          <ButtonArea />
        </div>
      </div>
    </div>
  );
}

export default App;
