import { useState } from "react";
import "./App.css";
import { ButtonArea } from "./components/ButtonArea";
import { Display } from "./components/Display";
const operators = ["+", "-", "*", "/"];

function App() {
  const [str, setStr] = useState("");
  const [lastOperator, setLastOperator] = useState("");

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

    if (operators.includes(value)) {
      setLastOperator(value);
      const lastChar = str.slice(-1);
      if (operators.includes(lastChar)) {
        const withoutLastChar = str.slice(0, -1);
        setStr(withoutLastChar + value);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const operatorPosition = str.lastIndexOf(lastOperator);
        const numberAfter = str.slice(operatorPosition + 1);
        if (numberAfter.includes(".")) {
          return;
        }
      } else {
        if (str.includes(".")) {
          return;
        }
      }
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
