import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./css/fontawesome.css";
import Providers from "@/components/layout/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";

const robotos = Roboto({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | ĐẠI NGUYÊN HOLDING",
    default: "ĐẠI NGUYÊN HOLDING - Tiên phong đầu tư bất động sản tại Việt Nam",
  },
  description:
    "Công ty TNHH Đầu tư và Dịch vụ ĐẠI NGUYÊN HOLDING là đơn vị tiên phong trong lĩnh vực đầu tư bất động sản tại Việt Nam, cung cấp giải pháp toàn diện từ phát triển dự án, quản lý vận hành đến dịch vụ tư vấn tài chính.",
  keywords: [
    "ĐẠI NGUYÊN HOLDING",
    "đầu tư bất động sản",
    "dịch vụ bất động sản",
    "tư vấn bất động sản",
    "phát triển dự án",
    "quản lý vận hành",
    "đầu tư Việt Nam",
    "bất động sản cao cấp",
    "Đại Nguyên Group",
  ],
  authors: [{ name: "ĐẠI NGUYÊN HOLDING" }],
  creator: "ĐẠI NGUYÊN HOLDING",
  publisher: "ĐẠI NGUYÊN HOLDING",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dainguyenholding.vn"),
  alternates: {
    languages: {
      "vi-VN": "/vi-VN",
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: [
      { url: "/images/logo/favicon.ico" },
      { url: "/images/logo/favicon.ico", type: "image/x-icon", sizes: "32x32" },
      { url: "/images/logo/favicon.ico", type: "image/x-icon", sizes: "16x16" },
    ],
    apple: [
      { url: "/images/logo/favicon.ico" },
      {
        url: "/images/logo/favicon.ico",
        sizes: "180x180",
        type: "image/x-icon",
      },
    ],
    shortcut: { url: "/images/logo/favicon.ico" },
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/images/logo/favicon.ico",
      },
      {
        rel: "mask-icon",
        url: "/images/logo/favicon.ico",
        color: "#FFD875",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "ĐẠI NGUYÊN HOLDING - Tiên phong đầu tư bất động sản tại Việt Nam",
    description:
      "ĐẠI NGUYÊN HOLDING dẫn đầu trong đầu tư và cung cấp dịch vụ bất động sản tại Việt Nam với hệ sinh thái giải pháp cho nhà đầu tư, đối tác và khách hàng.",
    url: "https://dainguyenholding.vn",
    siteName: "ĐẠI NGUYÊN HOLDING",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "https://dainguyenholding.vn/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ĐẠI NGUYÊN HOLDING - Tiên phong đầu tư bất động sản tại Việt Nam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ĐẠI NGUYÊN HOLDING - Tiên phong đầu tư bất động sản tại Việt Nam",
    description:
      "Công ty TNHH Đầu tư và Dịch vụ ĐẠI NGUYÊN HOLDING cung cấp giải pháp toàn diện cho đầu tư và phát triển bất động sản trên khắp Việt Nam.",
    images: ["https://dainguyenholding.vn/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={robotos.className}>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
