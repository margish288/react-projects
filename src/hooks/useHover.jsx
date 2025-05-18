import { useEffect, useRef, useState } from "react";

export default function useHook() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const hoverIn = () => setIsHovered(() => true);
    const hoverOut = () => setIsHovered(() => false);

    if (ref.current) {
      ref.current.addEventListener("mouseenter", hoverIn);
      ref.current.addEventListener("mouseleave", hoverOut);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", hoverIn);
        ref.current.removeEventListener("mouseleave", hoverOut);
      }
    };
  }, [ref.current]);

  return [ref, isHovered];
}
