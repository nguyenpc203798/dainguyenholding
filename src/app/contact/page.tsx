"use client";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/features/HeroSection";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <MainLayout>
      <HeroSection breadcrumb="Liên hệ" />

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
              className="col-lg-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}

                className="section-heading"
              >
                <h6>| Liên hệ</h6>
                <h2>Kết nối với Đại Nguyên Holding</h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Nếu bạn quan tâm đến các dự án bất động sản của Đại Nguyên Holding
                hoặc cần thêm thông tin tư vấn, vui lòng liên hệ với chúng tôi qua
                các kênh bên dưới hoặc gửi yêu cầu trực tiếp bằng biểu mẫu liên hệ.
                Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ một cách nhanh chóng và
                tận tâm.
              </motion.p>
              <div className="row">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="col-lg-12"
                >
                  <div className="item phone">
                    <img
                      src="/images/icons/phone-icon.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h6>
                      0779 075 168
                      <br />
                      <span>Hotline tư vấn</span>
                    </h6>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  className="col-lg-12"
                >
                  <div className="item email">
                    <img
                      src="/images/icons/email-icon.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h6>
                      dainguyenholding@gmail.com
                      <br />
                      <span>Email liên hệ</span>
                    </h6>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6"
            >
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Họ và tên</label>
                      <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Nhập họ và tên..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Nhập email..."
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Tiêu đề</label>
                      <input
                        type="subject"
                        name="subject"
                        id="subject"
                        placeholder="Nhập tiêu đề liên hệ..."
                        autoComplete="on"
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="message">Nội dung</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Nhập nội dung cần tư vấn..."
                        defaultValue={""}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="orange-button"
                      >
                        Gửi liên hệ
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-12"
            >
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4689.055793588901!2d106.71256211129604!3d10.841771457939002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175287a668248a9%3A0xd83115a810be7d02!2zMDkgTmd1eeG7hW4gVGjhu4sgTmh1bmcsIEhp4buHcCBCw6xuaCBQaMaw4bubYywgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1764544380159!5m2!1svi!2s"
                  width="100%"
                  height="500px"
                  frameBorder={0}
                  style={{
                    border: 0,
                    borderRadius: 25,
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)"
                  }}
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </MainLayout>
  );
}
