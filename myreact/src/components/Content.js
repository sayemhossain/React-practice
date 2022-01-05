import HoverCounter from "./HoverCounter";
import Counter from "./Counter";
import ThemeContext from "../context/themeContext";
import { useContext } from "react";

export default function Content() {
  const context = useContext(ThemeContext);
  const { theme, switchTheme } = context;
  return (
    <div>
      <h1>This is a content</h1>
      <Counter>
        {(counter, incrementCount) => {
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />;
        }}
      </Counter>
    </div>
  );
}
