import { MutableRefObject, RefObject, useEffect } from "react";

/**
 * Hook lắng nghe click ngoài vùng ref, sẽ gọi callback khi click ngoài.
 * @param ref React ref object (ví dụ: useRef)
 * @param callback Hàm callback khi click ngoài
 * @param enabled Có lắng nghe hay không (tuỳ chọn, mặc định true)
 */
// Overloads to support single ref or array of refs, both RefObject and MutableRefObject
function useClickOutside<T extends HTMLElement = HTMLElement>(
  refOrRefs: MutableRefObject<T | null> | Array<MutableRefObject<T | null>>,
  callback: (event: MouseEvent) => void,
  enabled: boolean = true,
): void {
  useEffect(() => {
    if (!enabled) return;
    function handleClick(event: MouseEvent) {
      const refs = (
        Array.isArray(refOrRefs) ? refOrRefs : [refOrRefs]
      ) as Array<MutableRefObject<T | null>>;
      const target = event.target as Node;
      // Ignore clicks inside globally ignored containers (e.g., error fallback)
      if (
        target instanceof Element &&
        (target.closest('[data-outside-ignore="true"]') ||
          target.closest(".error-alert"))
      ) {
        return;
      }
      const clickedInsideSomeRef = refs.some(
        (r) => r.current && r.current.contains(target),
      );
      if (!clickedInsideSomeRef) callback(event);
    }
    document.addEventListener("click", handleClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refOrRefs, callback, enabled]);
}

export default useClickOutside;
