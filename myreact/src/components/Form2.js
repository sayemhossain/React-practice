import { useEffect, useRef } from "react";

export default function Form2() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>
        <input ref={inputRef} type="text" placeholder="Enter something" />
      </p>
    </div>
  );
}
