import { useEffect, useRef } from "react";

export default function useEffectOnce(cb) {
  const ref = useRef(cb);

  useEffect(() => ref.current(), []);
}
