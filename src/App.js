import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [input, setInput] = useState("0");

  const calculation = (input) => {
    let result;

    try {
      let operators = ["+", "-", "*", "/"];
      let operator = null;

      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }

      if (!operator) {
        setInput(parseFloat(input).toString());
      }
      const [operand1, operand2] = input.split(operator).map(parseFloat);
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;

        case "-":
          result = operand1 - operand2;
          break;

        case "*":
          result = operand1 * operand2;
          break;

        case "/":
          result = operand1 / operand2;
          break;

        default:
          throw new Error("Invalid operator");
      }

      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else if (value === "=") {
      calculation(input);
    } else {
      //yha niche maine spread operator use kiya h iski help se mujhe old value bhi milegi or old value store hpreValue me .
      setInput((preValue) => preValue + value);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="calc">
          <h1 id="input">{input}</h1>
          <div>
            <button onClick={() => handleButtonClick("C")}>c</button>
            <button onClick={() => handleButtonClick("<")}>&lt;</button>
            <button onClick={() => handleButtonClick("%")}>%</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
          </div>

          <div>
            <button
              onClick={() => {
                handleButtonClick("7");
              }}
            >
              7
            </button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
          </div>

          <div>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
          </div>

          <div>
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("+")}>+</button>
          </div>

          <div>
            <button onClick={() => handleButtonClick("0")}>0</button>
            <button onClick={() => handleButtonClick("00")}>00</button>
            <button onClick={() => handleButtonClick(".")}>.</button>
            <button onClick={() => handleButtonClick("=")}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
