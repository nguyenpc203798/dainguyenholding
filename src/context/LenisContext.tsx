import { createContext, useContext, ReactNode } from "react";
import useLenis from "@/customhooks/doom/useLenis";
import Lenis from "lenis";

interface LenisProviderProps {
  children: ReactNode;
  options?: {
    lerp?: number;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    smoothWheel?: boolean;
  };
}

// Tạo context để lưu trữ ref object chứa instance Lenis
const LenisContext = createContext<React.MutableRefObject<Lenis | null> | null>(
  null,
);

/**
 * Provider để cung cấp instance Lenis cho toàn bộ ứng dụng
 */
export default function LenisProvider({
  children,
  options = {},
}: LenisProviderProps) {
  // Sử dụng hook đã tạo ở trên để khởi tạo và quản lý Lenis
  const lenisRef = useLenis(options);
  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

/**
 * Hook để sử dụng Lenis từ bất kỳ component nào trong ứng dụng
 */
export function useLenisInstance() {
  const context = useContext(LenisContext);

  if (context === undefined || context === null) {
    throw new Error("useLenisInstance must be used within a LenisProvider");
  }

  // Trả về instance (hoặc null nếu chưa khởi tạo)
  return context.current;
}
