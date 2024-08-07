import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [stringText, setStringText] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  function handleChangeText(event) {
    setStringText(event.target.value);
  }

  function handleChangeNumber(event) {
    setNumberValue(event.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Plus</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>

      <input
        type="text"
        value={stringText}
        onChange={handleChangeText}
        placeholder="textValue"
      />
      <input
        type="number"
        value={numberValue}
        onChange={handleChangeNumber}
        placeholder="number"
      />
      <button onClick={() => alert(stringText + " " + numberValue)}>
        Click me!
      </button>
    </div>
  );
}

export default Counter;
