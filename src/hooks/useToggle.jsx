import { useState } from "react";

export default function useToggle(on) {
  const [state, setState] = useState(on);
  return [state, () => setState((prev) => !prev)];
}
