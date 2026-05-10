import type { NextConfig } from "next";
const path = require("path");
const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datxanh.homes",
      },
      {
        protocol: "https",
        hostname: "masterisehomes.com",
      },
      {
        protocol: "https",
        hostname: "premedia.vneconomy.vn",
      },
      {
        protocol: "https",
        hostname: "khudothibacsaigon.com",
      },
    ],
    // Tăng timeout cho image optimization
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Cấu hình để xử lý CSS của Bootstrap
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }
  //   return config;
  // },
  // cấu hình Turbopack
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"], // biến SVG thành React component
        as: "*.js", // output dạng JS
      },
    },

    resolveAlias: {
      "@assets": path.join(__dirname, "src/assets"),
      "@components": path.join(__dirname, "src/components"),
      "@lib": path.join(__dirname, "src/lib"),
      "@data": path.join(__dirname, "src/data"),
      "@store": path.join(__dirname, "src/store"),
      "@types": path.join(__dirname, "src/types"),
      "@customhooks": path.join(__dirname, "src/customhooks"),
      "@purefunction": path.join(__dirname, "src/purefunction"),
      underscore: "lodash",
    },

    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
};

export default nextConfig;
