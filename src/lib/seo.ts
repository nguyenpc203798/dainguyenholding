import { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  twitterImage?: string;
  canonical?: string;
  noIndex?: boolean;
}

/**
 * Tạo metadata chuẩn SEO cho các trang Next.js
 * @param seoProps - Thông tin SEO cho trang
 * @returns Metadata object cho Next.js
 */
export function generateSeoMetadata({
  title,
  description,
  keywords = [],
  ogImage = "https://dainguyenholding.vn/images/og-image.jpg",
  ogImageAlt = "ĐẠI NGUYÊN HOLDING",
  ogImageWidth = 1200,
  ogImageHeight = 630,
  twitterImage = "https://dainguyenholding.vn/images/twitter-image.jpg",
  canonical = "",
  noIndex = false,
}: SeoProps): Metadata {
  // Tạo title với template
  const fullTitle = `${title} | ĐẠI NGUYÊN HOLDING`;

  // Chuẩn hóa canonical: nếu là path thì convert thành absolute URL
  const SITE_BASE = "https://dainguyenholding.vn";
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_BASE}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
    : "";

  // Xây dựng metadata object
  const metadata: Metadata = {
    title: title,
    description: description,
    keywords: [
      ...keywords,
      "ĐẠI NGUYÊN HOLDING",
      "đầu tư bất động sản",
      "dịch vụ bất động sản",
      "tư vấn tài chính",
      "bất động sản Việt Nam",
    ],
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl || SITE_BASE,
      siteName: "ĐẠI NGUYÊN HOLDING",
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [twitterImage],
    },
  };

  // Thêm canonical URL nếu được cung cấp (đã chuẩn hóa thành absolute)
  if (canonicalUrl) {
    metadata.alternates = {
      canonical: canonicalUrl,
    };
  }

  return metadata;
}
