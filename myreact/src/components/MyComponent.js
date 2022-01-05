import { useEffect, useState } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `Cliked ${count} Times`;
  }, [count]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }); 

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>

      <p>
        <button type="button" onClick={addClick}>
          Click Me
        </button>
      </p>
    </div>
  );
}
