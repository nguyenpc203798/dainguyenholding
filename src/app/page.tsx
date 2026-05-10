"use client";
import MainLayout from "@/components/layout/MainLayout";
import FeaturedTab from "@components/features/FeaturedTab";
import Slider from "@components/features/homes/Slider";
import Counter from "@components/features/Counter";
import TabContents from "@components/features/TabContents";
import NewsSection from "@components/features/homes/NewsSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainLayout>
      <Slider />
      <div className="featured section">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-4"
            >
              <div className="left-image">
                <img
                  className="top"
                  src="https://khudothibacsaigon.com/wp-content/uploads/2026/04/8caa56fc5f9bdec5878a.jpg"
                  alt=""
                />
                <a href="property-details.html">
                  <img
                    src="/images/icons/featured-icon.png"
                    alt=""
                    style={{ maxWidth: 60, padding: 0 }}
                  />
                </a>
              </div>
            </motion.div>
            <FeaturedTab />
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-3"
            >
              <div className="info-table">
                <ul>
                  <li>
                    <img
                      src="/images/icons/info-icon-01.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h4>
                      49.1 ha
                      <br />
                      <span>Tổng diện tích</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="/images/icons/info-icon-02.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h4>
                      Hợp đồng
                      <br />
                      <span>Hợp đồng rõ ràng</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="/images/icons/info-icon-03.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h4>
                      Thanh toán
                      <br />
                      <span>Thanh toán an toàn</span>
                    </h4>
                  </li>
                  <li>
                    <img
                      src="/images/icons/info-icon-04.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h4>
                      An toàn
                      <br />
                      <span>Sổ hồng sẵn</span>
                    </h4>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="video section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Video Dự Án</h6>
                <h2>KHU ĐÔ THỊ BẮC SÀI GÒN</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                <img
                  src="https://premedia.vneconomy.vn/files/uploads/2026/05/05/82ac7fe529684437b2023dea263f5c14-87386.jpg?w=1200"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=H1qGBEoHF58"
                  target="_blank"
                >
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <Counter
                      end={49}
                      duration={2}
                      delay={0}
                      text={
                        <>
                          Héc ta
                          <br />
                          Quy mô dự án
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4">
                    <Counter
                      end={1}
                      duration={2}
                      delay={0.2}
                      text={
                        <>
                          Tỉ
                          <br />
                          Giá mỗi nền
                        </>
                      }
                    />
                  </div>
                  <div className="col-lg-4">
                    <Counter
                      end={3}
                      duration={2}
                      delay={0.4}
                      text={
                        <>
                          Giai đoạn
                          <br />
                          Mở bán
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section best-deal">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section-heading">
                <h6>| Sản phẩm</h6>
                <h2>Sản phẩm nổi bật!</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <TabContents />
            </div>
          </div>
        </div>
      </div>
      <NewsSection />
      <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Liên hệ</h6>
                <h2>
                  Kết nối với <br /> Đại Nguyên Holding
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4689.055793588901!2d106.71256211129604!3d10.841771457939002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175287a668248a9%3A0xd83115a810be7d02!2zMDkgTmd1eeG7hW4gVGjhu4sgTmh1bmcsIEhp4buHcCBCw6xuaCBQaMaw4bubYywgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAsIFZp4buHdCBOYW0!5e1!3m2!1svi!2s!4v1764544380159!5m2!1svi!2s"
                  width="100%"
                  height="500px"
                  frameBorder={0}
                  style={{
                    border: 0,
                    borderRadius: 10,
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
                  }}
                  allowFullScreen={true}
                />
              </div>
              <div className="row">
                <div className="col-xxl-5">
                  <div className="item phone">
                    <img
                      src="/images/icons/phone-icon.png"
                      alt=""
                      style={{ maxWidth: 52 }}
                    />
                    <h6>
                      0779 075 168
                      <br />
                      <span>Số điện thoại</span>
                    </h6>
                  </div>
                </div>
                <div className="col-xxl-7">
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
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="name">Họ và tên</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nhập họ tên của bạn..."
                        autoComplete="on"
                        required={true}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Nhập địa chỉ email..."
                        required={true}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label htmlFor="subject">Chủ đề</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Nhập chủ đề..."
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
                        placeholder="Nhập nội dung liên hệ..."
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
                        Gửi thông tin
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
