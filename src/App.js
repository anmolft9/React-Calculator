import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";

function App() {
  const [str, setStr] = useState("");
  const handleOnClick = (value) => {
    if (value === "AC") {
      setStr("");
      return;
    }
    setStr(str + value);
  };
  // console.log(str);
  return (
    <div className="App">
      <div className="wrap">
        <div className="container">
          <Display str={str} />
          <ButtonArea handleOnClick={handleOnClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
