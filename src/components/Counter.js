import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  console.log("render Counter");

  function handlerClick(e) {
    e.stopPropagation();
    setNumber((number) => number + 1);
  }

  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handlerClick}>Add</button>
    </>
  );
}

export default Counter;
