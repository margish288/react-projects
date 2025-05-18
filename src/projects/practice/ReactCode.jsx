import { useState } from "react";
import useHook from "../../hooks/useHover";
import usePrevious from "../../hooks/usePrevious";
import useToggle from "../../hooks/useToggle";
import useDebounce from "../../hooks/useDebounce";

const App = () => {
  const [state, setState] = useState(0);
  const [ref1, isHovered1] = useHook();
  const previous1 = usePrevious(state);
  const [on, toggle] = useToggle(false);
  const debouncedValue = useDebounce(state, 1000);

  const update = () => setState((prev) => prev + 1);

  return (
    <div>
      <h1>useHover</h1>
      <div ref={ref1} className={`block ${isHovered1 ? "hover" : ""}`}></div>
      <br />
      <h1>usePrevious</h1>
      <div>
        current : {state}, Previous: {previous1}
      </div>
      <button onClick={update}>Update</button>

      <br />

      <h1>useToggle</h1>
      <div>toggle is {on ? "On" : "Off"}</div>
      <button onClick={toggle}>toggle</button>

      <br />

      <div>Debounced Value : {debouncedValue}</div>
    </div>
  );
};

export default App;
