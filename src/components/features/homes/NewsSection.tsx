"use client";

import { motion } from "framer-motion";
import React from "react";

interface NewsItem {
  id: number;
  image: string;
  alt: string;
  url: string;
  category: string;
  price: string;
  title: string;
  details: Array<{ label: string; value: string }>;
}

const NewsSection = () => {
  const newsList: NewsItem[] = [
    {
      id: 7,
      image:
        "https://images2.thanhnien.vn/thumb_w/640/528068263637045248/2026/5/9/sg1-17783385859131004592895.png",
      alt: "Bắc Sài Gòn - Đánh thức vùng đất tiềm năng",
      url: "https://thanhnien.vn/bac-sai-gon-danh-thuc-vung-dat-tiem-nang-khoi-dau-hanh-trinh-chinh-phuc-moi-185260509220039706.htm",
      category: "Dự án mới",
      price: "Khu đô thị",
      title: "Bắc Sài Gòn - Đánh thức vùng đất tiềm năng, khởi đầu hành trình chinh phục mới",
      details: [
        { label: "Địa điểm", value: "Phước Hòa, Bắc TP.HCM" },
        { label: "Chủ đầu tư", value: "Phương Trường An Group" },
        { label: "Loại hình", value: "Khu đô thị" },
        { label: "Tính chất", value: "Đô thị vệ tinh" },
        { label: "Trạng thái", value: "Sắp ra mắt" },
      ],
    },
    {
      id: 8,
      image:
        "https://cdn.tienphong.vn/images/eab8b646a89980b0d6c6a8534eb7e3855f3fa965c9e766177ad90a8f4d6eb7054dba0f564c02e09b404a4153d013f64b329cc458c26300a02ae48c395bb06a61c95d83e73c20fb80217f76f6efd4ef581f8607e14296cac73dfc0ab2172320fedd3b4686644cc590c6e2a6fd5ed8f554512cd87e57fc009e9122403a7e2eceb8fe428f03ad3edd9ac962e97c52291dc4a3d029edaae801f3db040a8a35173aa3/abaejg257b3zyesxyv-p9b-dvo1u3fll3iu9agbzwk90pvmwadn4udo7ygbux9anwxwabgm2eu0oqot0odsnei-nszclycywv14zdxl30ndt5-ow1j6w3gq5.jpg.avif",
      alt: "Tái cấu trúc đô thị Bắc TPHCM",
      url: "https://tienphong.vn/tai-cau-do-thi-bac-tphcm-cu-hich-ty-do-tu-von-dau-tu-cong-post1841324.tpo",
      category: "Quy hoạch",
      price: "Tỷ đô",
      title: "Tái cấu trúc đô thị Bắc TPHCM: 'Cú hích' tỷ đô từ vốn đầu tư công",
      details: [
        { label: "Địa điểm", value: "Bắc TP.HCM (Bắc Bình Dương)" },
        { label: "Định hướng", value: "Đông Nam Bộ đến 2030" },
        { label: "Mục tiêu", value: "Đô thị công nghiệp" },
        { label: "Nguồn vốn", value: "Đầu tư công" },
        { label: "Kỳ vọng", value: "Tái cấu trúc không gian" },
      ],
    },
    {
      id: 1,
      image:
        "https://i1-vnexpress.vnecdn.net/2025/11/30/2890752822393989801-1764472255-3671-1764472674.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=uPRZmXS4TK3agN15Adn5Pg",
      alt: "Đồng Nai sắp đấu giá lô đất vàng",
      url: "https://vnexpress.net/dong-nai-sap-dau-gia-lo-dat-vang-voi-gia-khoi-diem-5-000-ty-dong-4987910.html",
      category: "Đấu giá đất",
      price: "5.000 tỷ đồng",
      title: "Đồng Nai sắp đấu giá lô đất vàng với giá khởi điểm 5.000 tỷ đồng",
      details: [
        { label: "Địa điểm", value: "Đồng Nai" },
        { label: "Giá khởi điểm", value: "5.000 tỷ đồng" },
        { label: "Loại hình", value: "Đất vàng" },
        { label: "Hình thức", value: "Đấu giá" },
        { label: "Trạng thái", value: "Sắp diễn ra" },
      ],
    },
    {
      id: 2,
      image:
        "https://i1-vnexpress.vnecdn.net/2025/06/30/5g9a1574-1-jpeg-1751244060-282-5891-1507-1751264612.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=daD0x8XLW0H-EiJ8Y008kQ",
      alt: "Bình Dương khởi công dự án",
      url: "https://vnexpress.net/binh-duong-khoi-cong-hai-du-an-hon-1-2-ty-usd-truoc-them-sap-nhap-4907878.html",
      category: "Dự án mới",
      price: "1,2 tỷ USD",
      title: "Bình Dương khởi công hai dự án hơn 1,2 tỷ USD trước thềm sáp nhập",
      details: [
        { label: "Địa điểm", value: "Bình Dương" },
        { label: "Tổng vốn", value: "1,2 tỷ USD" },
        { label: "Số dự án", value: "2 dự án" },
        { label: "Trạng thái", value: "Khởi công" },
        { label: "Thời điểm", value: "Trước sáp nhập" },
      ],
    },
    {
      id: 3,
      image:
        "https://i1-vnexpress.vnecdn.net/2025/06/24/anh-2-JPG-7065-1750735055.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=9wxftfjsgvJ0Z96G2nuKew",
      alt: "Quy hoạch khu công nghiệp",
      url: "https://vnexpress.net/binh-duong-quy-hoach-khu-cong-nghiep-hon-750-ha-tai-phu-giao-4905498.html",
      category: "Quy hoạch",
      price: "750 ha",
      title: "Bình Dương quy hoạch khu công nghiệp hơn 750 ha tại Phú Giáo",
      details: [
        { label: "Địa điểm", value: "Phú Giáo, Bình Dương" },
        { label: "Diện tích", value: "Hơn 750 ha" },
        { label: "Loại hình", value: "Khu công nghiệp" },
        { label: "Trạng thái", value: "Đang quy hoạch" },
        { label: "Giai đoạn", value: "Phê duyệt" },
      ],
    },
    {
      id: 4,
      image:
        "https://i1-vnexpress.vnecdn.net/2025/04/01/1bds-bd-1743480996-3580-1743481048.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=I5K7J_pjQJUWWSt5-EGWAQ",
      alt: "Giá căn hộ Bình Dương",
      url: "https://vnexpress.net/gia-can-ho-so-cap-o-binh-duong-tang-manh-4867944.html",
      category: "Thị trường",
      price: "Tăng mạnh",
      title: "Giá căn hộ sơ cấp ở Bình Dương tăng mạnh",
      details: [
        { label: "Địa điểm", value: "Bình Dương" },
        { label: "Loại hình", value: "Căn hộ sơ cấp" },
        { label: "Xu hướng", value: "Tăng mạnh" },
        { label: "Phân khúc", value: "Thị trường sơ cấp" },
        { label: "Thời điểm", value: "2025" },
      ],
    },
    {
      id: 5,
      image:
        "https://i1-vnexpress.vnecdn.net/2025/06/24/DJI-0203-JPG-6851-1750736790.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=8GDgxCNkK_ZbAG1hQF27fQ",
      alt: "Long An tìm nhà đầu tư",
      url: "https://vnexpress.net/long-an-tim-nha-dau-tu-hai-du-an-hon-1-3-ty-usd-4905509.html",
      category: "Kêu gọi đầu tư",
      price: "1,3 tỷ USD",
      title: "Long An tìm nhà đầu tư hai dự án hơn 1,3 tỷ USD",
      details: [
        { label: "Địa điểm", value: "Long An" },
        { label: "Tổng vốn", value: "Hơn 1,3 tỷ USD" },
        { label: "Số dự án", value: "2 dự án" },
        { label: "Trạng thái", value: "Đang kêu gọi" },
        { label: "Đối tượng", value: "Nhà đầu tư" },
      ],
    },
    {
      id: 6,
      image:
        "https://i1-vnexpress.vnecdn.net/2025/08/01/Screenshot-2025-08-01-at-10-05-1974-2814-1754017715.png?w=680&h=0&q=100&dpr=1&fit=crop&s=MAsUj1pIbZ-67b5q4TZC7w",
      alt: "Tổ hợp đô thị du lịch Tây Ninh",
      url: "https://vnexpress.net/suoi-tien-de-xuat-lam-to-hop-do-thi-du-lich-1-200-ha-tai-tay-ninh-4921438.html",
      category: "Dự án du lịch",
      price: "1.200 ha",
      title: "Suối Tiên đề xuất làm tổ hợp đô thị du lịch 1.200 ha tại Tây Ninh",
      details: [
        { label: "Địa điểm", value: "Tây Ninh" },
        { label: "Diện tích", value: "1.200 ha" },
        { label: "Loại hình", value: "Đô thị du lịch" },
        { label: "Chủ đầu tư", value: "Suối Tiên" },
        { label: "Trạng thái", value: "Đề xuất" },
      ],
    },
  ];

  return (
    <div className="properties section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="section-heading text-center"
            >
              <h6>| Tin tức</h6>
              <h2>Tin Tức Bất Động Sản Mới Nhất</h2>
            </motion.div>
          </div>
        </div>
        <div className="row">
          {newsList.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-4 col-md-6"
            >
              <div className="item">
                <div>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    <img src={news.image} alt={news.alt} />
                  </a>
                  <span className="category">{news.category}</span>
                  <h6>{news.price}</h6>
                  <h4>
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      {news.title}
                    </a>
                  </h4>
                  <ul>
                    {news.details.map((detail, index) => (
                      <li key={index}>
                        {detail.label}: <span>{detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="main-button">
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    Đọc thêm
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
