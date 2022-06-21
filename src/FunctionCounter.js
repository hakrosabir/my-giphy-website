import React, { useState } from "react";

const FunctionCounter = () => {
  const [count, setCount] = useState({ number: 5 });

  return (
    <div>
      <h1> Counter Using UseState Hook in React </h1>
      <br />
      <hr />

      <h2> Counter Status:{count.number} </h2>
      <button onClick={() => setCount({ number: count.number + 1 })}>
        Increase Counter
      </button>

      <button onClick={() => setCount({ number: count.number - 1 })}>
        {" "}
        Decrease Counter{" "}
      </button>
    </div>
  );
};

export default FunctionCounter;
