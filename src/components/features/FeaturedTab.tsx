"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

const FeaturedTab = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(
    "collapseOne",
  );

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="col-lg-5">
      <div className="section-heading">
        <h6>| Dự án nổi bật</h6>
        <h2>Khu đô thị bắc Sài Gòn</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 180 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="accordion"
        id="accordionExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${openAccordion === "collapseOne" ? "active" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion("collapseOne")}
            >
              Vị trí dự án
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${openAccordion === "collapseOne" ? "show" : ""}`}
          >
            <div className="accordion-body">
              Tọa lạc ngay nút giao cao tốc <strong>TP.HCM – Chơn Thành</strong>{" "}
              và mặt tiền <strong>ĐT741</strong>,{" "}
              <strong>Khu đô thị Bắc Sài Gòn</strong> sở hữu lợi thế kết nối
              vượt trội. Nằm giữa trung tâm các cụm khu công nghiệp lớn, dự án
              không chỉ thuận tiện an cư mà còn mở ra cơ hội đầu tư đón đầu làn
              sóng dịch chuyển công nghiệp, nơi dòng tiền và giá trị bất động
              sản liên tục gia tăng.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${openAccordion === "collapseTwo" ? "active" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion("collapseTwo")}
            >
              Tiện ích xung quanh
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${openAccordion === "collapseTwo" ? "show" : ""}`}
          >
            <div className="accordion-body">
              Dự án sở hữu nhiều tiện ích như{" "}
              <strong>Hồ bơi, công viên cây xanh, khu vui chơi trẻ em</strong>{" "}
              và các tiểu cảnh độc đáo, đồng thời gần{" "}
              <strong>
                chợ đêm, siêu thị, trường học, bệnh viện, mini golf và đặc biệt
                là đường đua Go-Kart
              </strong>{" "}
              và khu dân cư đông đúc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${openAccordion === "collapseThree" ? "active" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion("collapseThree")}
            >
              Pháp lý
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${openAccordion === "collapseThree" ? "show" : ""}`}
          >
            <div className="accordion-body">
              <strong>Khu đô thị bắc Sài Gòn</strong> có pháp lý minh bạch với{" "}
              <strong>chủ trương đầu tư</strong> đầy đủ,{" "}
              <strong>quy hoạch chi tiết 1/500</strong> và{" "}
              <strong>sổ hồng riêng từng lô</strong>, đảm bảo an tâm khi sang
              tên và sở hữu lâu dài.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedTab;
