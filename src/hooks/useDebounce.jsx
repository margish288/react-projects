import { useEffect, useState } from "react";

export default function useDebounce(value, timer) {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setState(value);
    }, timer);

    return () => {
      clearTimeout(timeId);
    };
  }, [value, timer]);

  return state;
}
