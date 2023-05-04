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
    if (value === "C") {
      const afterDelete = str.slice(0, -1);
      setStr(afterDelete);
      return;
    }
    if (value === "=") {
      const total = eval(str);
      return setStr(total);
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
