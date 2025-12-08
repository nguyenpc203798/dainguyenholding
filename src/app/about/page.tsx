"use client";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/features/HeroSection";
import { motion } from "framer-motion";
import "./style.css";

export default function About() {
  return (
    <MainLayout>
      <HeroSection breadcrumb="Về chúng tôi" />
      <div className="section">
        <div className="container about">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            className="content-left"
          >
            <div className="col-lg-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
                className="section-heading mb-5"
              >
                <h6>| Giới thiệu</h6>
                <h2>Về Đại Nguyên Holding</h2>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Công ty TNHH Đầu tư và Dịch vụ Đại Nguyên Holding là một trong những đơn vị tiên phong trong lĩnh vực đầu tư bất động sản tại Việt Nam. Với mục tiêu xây dựng và phát triển các dự án bất động sản chất lượng cao, mang lại giá trị bền vững cho khách hàng, đối tác và cộng đồng, Đại Nguyên Holding đã khẳng định được vị thế vững mạnh trên thị trường bất động sản.

              Với đội ngũ lãnh đạo giàu kinh nghiệm và đội ngũ nhân viên năng động, sáng tạo, Đại Nguyên Holding chuyên đầu tư và phát triển các dự án bất động sản dân cư, thương mại, văn phòng, khu nghỉ dưỡng, cũng như các dự án hạ tầng kỹ thuật. Chúng tôi luôn chú trọng đến việc tạo ra những sản phẩm bất động sản có giá trị thực tiễn, đồng thời đảm bảo tiến độ thi công và chất lượng công trình vượt trội.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="image-right"
          >
            <img
              src="https://i.pinimg.com/736x/ef/e8/ef/efe8efb0bf9d554aff9660e0713a8108.jpg"
              alt="About"
            />
          </motion.div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="vision-section">
        <div className="vision-background"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="section-heading text-center mb-5"
              >
                <h6>| TẦM NHÌN & SỨ MỆNH</h6>
                <h2>Tầm nhìn và sứ mệnh của Đại Nguyên Holding</h2>
              </motion.div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-column flex-md-row gap-5 col-lg-8 offset-lg-2">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="glass-card"
              >
                <p>
                  Tầm nhìn của Đại Nguyên Holding là trở thành một trong những công ty hàng đầu trong lĩnh vực đầu tư và phát triển bất động sản tại Việt Nam. Chúng tôi hướng đến việc phát triển các dự án bất động sản có tính bền vững, mang lại lợi ích lâu dài cho khách hàng, đồng thời góp phần nâng cao giá trị cộng đồng và tạo dựng những không gian sống và làm việc đẳng cấp, hiện đại.
                </p>
                <p style={{ marginTop: '20px' }}>
                  Đại Nguyên Holding mong muốn xây dựng một môi trường sống và làm việc lý tưởng, nơi mà mọi cư dân và doanh nghiệp có thể tận hưởng cuộc sống đầy đủ và thành công. Chúng tôi cam kết phát triển những dự án bất động sản không chỉ đẹp về hình thức mà còn hoàn hảo về chất lượng, tiện ích và môi trường sống.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="glass-card"
              >
                <p>
                  Sứ mệnh của Đại Nguyên Holding là mang lại giá trị bền vững và tạo ra những sản phẩm bất động sản chất lượng, đáp ứng nhu cầu đa dạng của khách hàng trong và ngoài nước. Chúng tôi không chỉ đầu tư vào các dự án có tiềm năng cao mà còn chú trọng đến việc xây dựng các mối quan hệ lâu dài với khách hàng, đối tác và các nhà đầu tư, nhằm tạo ra sự hài lòng và lợi ích tối đa cho mọi bên liên quan.
                </p>
                <p style={{ marginTop: '20px' }}>
                  Với chiến lược phát triển dài hạn, Đại Nguyên Holding cam kết không ngừng nâng cao chất lượng sản phẩm, cải tiến dịch vụ và đổi mới công nghệ, mang lại những giá trị đột phá trong từng dự án. Chúng tôi tin tưởng rằng sự tận tâm, sáng tạo và uy tín sẽ là nền tảng vững chắc giúp Đại Nguyên Holding tiếp tục phát triển mạnh mẽ và chiếm lĩnh thị trường bất động sản trong tương lai.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className="commitment-section">
        <div className="commitment-background"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="section-heading text-center mb-5"
              >
                <h6>| CAM KẾT</h6>
                <h2>Cam kết của Đại Nguyên Holding</h2>
              </motion.div>
            </div>
          </div>
          <div className="row">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-4"
            >
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fa fa-star"></i>
                </div>
                <h4>Chất lượng vượt trội</h4>
                <p>
                  Các dự án do Đại Nguyên Holding phát triển luôn đảm bảo chất lượng cao, được thi công và quản lý bởi đội ngũ chuyên nghiệp.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-4"
            >
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fa fa-clock"></i>
                </div>
                <h4>Tiến độ đảm bảo</h4>
                <p>
                  Chúng tôi cam kết thực hiện đúng tiến độ dự án và mang đến sản phẩm đúng hẹn cho khách hàng.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="col-lg-4"
            >
              <div className="commitment-card">
                <div className="commitment-icon">
                  <i className="fa fa-leaf"></i>
                </div>
                <h4>Môi trường sống lý tưởng</h4>
                <p>
                  Đại Nguyên Holding tập trung phát triển các dự án tạo ra không gian sống và làm việc thoải mái, tiện nghi, thân thiện với môi trường.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
