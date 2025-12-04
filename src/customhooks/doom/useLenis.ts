import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface UseLenisOptions {
  lerp?: number;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  smoothWheel?: boolean;
  syncTouch?: boolean;
}

/**
 * Custom hook để khởi tạo và quản lý Lenis smooth scrolling
 * @param options Các tùy chọn cho Lenis
 * @returns Instance của Lenis
 */
export function useLenis(options: UseLenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Khởi tạo Lenis với các thông số mặc định và tùy chỉnh
    const lenis = new Lenis({
      lerp: options.lerp ?? 0.08, // Giá trị lerp thấp = cuộn mượt hơn, nhưng chậm hơn
      wheelMultiplier: options.wheelMultiplier ?? 1.3, // Tăng tốc độ cuộn bằng chuột
      touchMultiplier: options.touchMultiplier ?? 1.3, // Hệ số nhân cho touch
      smoothWheel:
        options.smoothWheel !== undefined ? options.smoothWheel : true, // Bật tính năng cuộn mượt
      syncTouch: options.syncTouch !== undefined ? options.syncTouch : true, // Đồng bộ touch
    });
    // Lưu instance vào ref
    lenisRef.current = lenis;

    // Tạo animation loop để liên tục cập nhật Lenis (an toàn khi instance bị destroy)
    function raf(time: number) {
      const inst = lenisRef.current;
      if (inst) inst.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    // Bắt đầu animation loop
    rafId.current = requestAnimationFrame(raf);

    // Cleanup khi unmount
    return () => {
      // Hủy animation frame trước
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }

      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [
    options.lerp,
    options.wheelMultiplier,
    options.touchMultiplier,
    options.smoothWheel,
    options.syncTouch,
  ]);

  // Trả về ref object để consumer có thể đọc `.current` khi instance sẵn sàng
  return lenisRef;
}

export default useLenis;
