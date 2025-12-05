"use client";

import React, { useState } from "react";

type TabType = "datnen" | "nhapho" | "chungcu";

const TabContents = () => {
  const [activeTab, setActiveTab] = useState<TabType>("datnen");

  const tabs = [
    { id: "datnen" as TabType, label: "Đất nền" },
    { id: "nhapho" as TabType, label: "Nhà phố" },
    { id: "chungcu" as TabType, label: "Chung cư" },
  ];

  return (
    <div className="tabs-content">
      <div className="row">
        <div className="nav-wrapper">
          <ul className="nav nav-tabs" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="tab-content">
          <div
            className={`tab-pane fade ${activeTab === "datnen" ? "show active" : ""}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-lg-3">
                <div className="info-table">
                  <ul>
                    <li>
                      Diện tích <span>100 - 200 m2</span>
                    </li>
                    <li>
                      Vị trí <span>Mặt tiền đường</span>
                    </li>
                    <li>
                      Pháp lý <span>Sổ hồng riêng</span>
                    </li>
                    <li>
                      Tiện ích <span>Đầy đủ</span>
                    </li>
                    <li>
                      Thanh toán <span>Linh hoạt</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://bdstngroup.vn/upload/filemanager/files/ha-tang-dat-nen-duc-phat-3.jpg"
                  alt="Đất nền"
                />
              </div>
              <div className="col-lg-3">
                <h4>Thông tin chi tiết đất nền</h4>
                <p>
                  Đất nền là loại hình bất động sản phổ biến, phù hợp cho cả đầu
                  tư và xây dựng. Đất nền thường có vị trí đẹp, mặt tiền đường,
                  tiềm năng phát triển cao.
                  <br />
                  <br />
                  Khi đầu tư đất nền, cần chú ý đến pháp lý minh bạch, sổ hồng
                  riêng, quy hoạch rõ ràng. Đây là kênh đầu tư an toàn với khả
                  năng sinh lời bền vững trong dài hạn.
                </p>
                <div className="icon-button">
                  <a href="/contact">
                    <i className="fa fa-calendar" /> Đặt lịch tham quan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === "nhapho" ? "show active" : ""}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-lg-3">
                <div className="info-table">
                  <ul>
                    <li>
                      Diện tích <span>150 - 250 m2</span>
                    </li>
                    <li>
                      Số tầng <span>3 - 4 tầng</span>
                    </li>
                    <li>
                      Số phòng ngủ <span>4 - 5 phòng</span>
                    </li>
                    <li>
                      Chỗ để xe <span>Có</span>
                    </li>
                    <li>
                      Thanh toán <span>Ngân hàng</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="https://i.pinimg.com/736x/db/c4/a3/dbc4a390da22b15831f266c12a762298.jpg"
                  alt="Nhà phố"
                />
              </div>
              <div className="col-lg-3">
                <h4>Thông tin chi tiết nhà phố</h4>
                <p>
                  Nhà phố là loại hình bất động sản được nhiều gia đình ưa
                  chuộng với không gian sống rộng rãi, thiết kế hiện đại. Thường
                  có nhiều tầng, phù hợp cho gia đình đa thế hệ.
                  <br />
                  <br />
                  Nhà phố thường tọa lạc tại vị trí đẹp, gần các tiện ích công
                  cộng như trường học, bệnh viện, chợ. Pháp lý đầy đủ, sổ hồng
                  riêng, có thể ở ngay hoặc cho thuê sinh lời.
                </p>
                <div className="icon-button">
                  <a href="property-details.html">
                    <i className="fa fa-calendar" /> Đặt lịch tham quan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${activeTab === "chungcu" ? "show active" : ""}`}
            role="tabpanel"
          >
            <div className="row">
              <div className="col-lg-3">
                <div className="info-table">
                  <ul>
                    <li>
                      Diện tích <span>60 - 120 m2</span>
                    </li>
                    <li>
                      Tầng <span>Từ tầng 5 trở lên</span>
                    </li>
                    <li>
                      Số phòng ngủ <span>2 - 3 phòng</span>
                    </li>
                    <li>
                      Chỗ để xe <span>Bao gồm</span>
                    </li>
                    <li>
                      Thanh toán <span>Trả góp</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="https://i.pinimg.com/736x/93/92/5d/93925dcf730a3e72786891952a457dc6.jpg" alt="Chung cư" />
              </div>
              <div className="col-lg-3">
                <h4>Thông tin chi tiết chung cư</h4>
                <p>
                  Chung cư là giải pháp nhà ở hiện đại, phù hợp cho các gia đình
                  trẻ và người độc thân. Không gian sống tiện nghi, view đẹp với
                  hệ thống tiện ích đầy đủ như hồ bơi, phòng gym, khu vui chơi.
                  <br />
                  <br />
                  Chung cư thường tọa lạc tại vị trí thuận tiện, gần trung tâm,
                  trường học và bệnh viện. Pháp lý đầy đủ, dễ dàng vay ngân hàng
                  với lãi suất ưu đãi, thanh toán linh hoạt.
                </p>
                <div className="icon-button">
                  <a href="property-details.html">
                    <i className="fa fa-calendar" /> Đặt lịch tham quan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContents;
