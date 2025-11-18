import { useState } from "react";

function Child({ onClick }) {
  console.log("Child re-rendered");
  return <button onClick={onClick}>Click Me</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+ Count</button>
      <Child onClick={handleClick} />
    </div>
  );
}
