"use client";
import React from "react";
import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/features/HeroSection";
import { newsItems } from "@/data/news";
import "./detail.css";

export default function NewsDetail() {
  const params = useParams();
  const newsId = parseInt(params.id as string);
  const news = newsItems.find((item) => item.id === newsId);

  if (!news) {
    return (
      <MainLayout>
        <HeroSection breadcrumb="Tin tức" />
        <div className="section" style={{ padding: "100px 0", textAlign: "center" }}>
          <h2>Tin tức không tìm thấy</h2>
        </div>
      </MainLayout>
    );
  }

  // Related news
  const relatedNews = newsItems
    .filter((item) => item.category === news.category && item.id !== news.id)
    .slice(0, 3);

  return (
    <MainLayout>
      <HeroSection breadcrumb="Tin tức" />

      <div className="news-detail-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* News Detail Content */}
              <div className="glass-card news-detail-card">
                {/* Featured Image */}
                <div className="news-detail-image">
                  <img src={news.image} alt={news.title} />
                  <span className="news-detail-category">{news.category}</span>
                </div>

                {/* Meta Information */}
                <div className="news-detail-meta">
                  <div className="meta-item">
                    <i className="fa fa-calendar"></i>
                    <span>{news.date}</span>
                  </div>
                  <div className="meta-divider">|</div>
                  <div className="meta-item">
                    <i className="fa fa-user"></i>
                    <span>{news.author}</span>
                  </div>
                  <div className="meta-divider">|</div>
                  <div className="meta-item">
                    <i className="fa fa-bookmark"></i>
                    <span>{news.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="news-detail-title">{news.title}</h1>

                {/* Content */}
                <div className="news-detail-content">
                  <p>
                    {news.content}
                  </p>

                  <p>
                    Công ty TNHH Đầu tư và Dịch vụ Đại Nguyên Holding tiếp tục khẳng định vị thế của mình trong ngành bất động sản với những cam kết vững chắc về chất lượng, tiến độ và dịch vụ khách hàng. Chúng tôi tin rằng sự tận tâm và chuyên nghiệp là chìa khóa để xây dựng những dự án thành công.
                  </p>

                  <p>
                    Với những kinh nghiệm trong ngành cũng như sự hỗ trợ từ đối tác quốc tế, Đại Nguyên Holding không ngừng phát triển và nâng cao tiêu chuẩn quản lý dự án. Mỗi dự án của chúng tôi là một cam kết về chất lượng, an toàn và sự hài lòng của khách hàng.
                  </p>

                  <p>
                    Chúng tôi rất trân trọng sự tin tưởng và hỗ trợ của các khách hàng, đối tác và cộng đồng. Tiếp tục theo dõi các tin tức mới nhất từ Đại Nguyên Holding để cập nhật những thông tin quan trọng về các dự án và hoạt động của công ty.
                  </p>
                </div>

                {/* Share Buttons */}
                <div className="news-detail-share">
                  <span className="share-label">Chia sẻ:</span>
                  <div className="share-buttons">
                    <a href="#" className="share-btn facebook" title="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="share-btn twitter" title="Twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="share-btn linkedin" title="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="share-btn email" title="Email">
                      <i className="fa fa-envelope"></i>
                    </a>
                  </div>
                </div>

                {/* Author Box */}
                <div className="author-box">
                  <div className="author-avatar">
                    <img src={news.authorImage} alt={news.author} />
                  </div>
                  <div className="author-info">
                    <h4>Về tác giả: {news.author}</h4>
                    <p>
                      {news.author} là thành viên của đội ngũ truyền thông chuyên cập nhật các tin tức mới nhất về dự án, thị trường bất động sản và các sự kiện đặc biệt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Quick Info */}
              <div className="glass-card sidebar-card quick-info">
                <h3>Thông tin nhanh</h3>
                <div className="info-item">
                  <span className="info-label">Danh mục:</span>
                  <span className="info-value">{news.category}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Ngày đăng:</span>
                  <span className="info-value">{news.date}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Tác giả:</span>
                  <span className="info-value">{news.author}</span>
                </div>
              </div>

              {/* Related News */}
              {relatedNews.length > 0 && (
                <div className="glass-card sidebar-card related-news">
                  <h3>Tin tức liên quan</h3>
                  <div className="related-news-list">
                    {relatedNews.map((item) => (
                      <div key={item.id} className="related-news-item">
                        <img src={item.image} alt={item.title} />
                        <div className="related-news-content">
                          <a href={`/news/${item.id}`} className="related-news-title">
                            {item.title.substring(0, 50)}...
                          </a>
                          <span className="related-news-date">{item.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter CTA */}
              <div className="glass-card sidebar-card newsletter-cta">
                <h3>Đăng ký nhận tin</h3>
                <p>Nhận thông tin mới nhất từ Đại Nguyên Holding</p>
                <form>
                  <input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    required
                  />
                  <button type="submit">Đăng ký</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
