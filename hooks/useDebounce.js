import { useRef } from "react";

export function useDebounce(fn, delay = 300) {
  const timer = useRef();

  return (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fn(...args), delay);
  };
}
