import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            {/* Company Info */}
            <div className="mb-4 col-md-6">
              <div className="footer-box">
                <h5 className="footer-title">Đại Nguyên Holding</h5>
                <ul className="footer-info">
                  <li>
                    <span className="label">Công ty:</span>
                    <p>CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING</p>
                  </li>
                  <li>
                    <span className="label">Mã số thuế:</span>
                    <p>0319304274</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Address Info */}
            <div className="mb-4 col-md-6">
              <div className="footer-box">
                <h5 className="footer-title">Địa chỉ</h5>
                <ul className="footer-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Số 09, đường Nguyễn Thị Nhung, KĐT Vạn Phúc, Phường Hiệp Bình, TP. HCM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              Copyright © 2025 <span className="highlight">Đại Nguyên Holding</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
