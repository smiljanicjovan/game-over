// Core
import { useEffect } from "react";

export function useOutsideCansler(
  ref: React.RefObject<HTMLElement>,
  setShowItems: Function
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowItems(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
