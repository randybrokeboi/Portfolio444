import {useCallback, useEffect, useState} from "react";
import throttle from "lodash.throttle";
export default function useMousePosition(){
  const [mousePosition, setMousePosition] = useState({x: 0, y:0});

  const updateMousePosition = useCallback(throttle((e) => {
    setMousePosition({x: e.clientX, y: e.clientY})
  }, 22), []);
  useEffect( () => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])
  return mousePosition
}