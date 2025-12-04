"use client";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/features/HeroSection";
import { Projects } from "@/data/project";
import "./projects.css";

export default function Project() {
  return (
    <MainLayout>
      <HeroSection breadcrumb="Dự án" />

      {/* Projects Section */}
      <div className="projects-section">
        
        <div className="container">
          {/* Projects Grid */}
          <div className="row">
            <div className="col-lg-12">
              <div className="projects-grid">
                {Projects.map((project) => (
                  <div key={project.id} className="glass-card project-card">
                    {/* Project Image */}
                    <div className="project-image">
                      <img src={project.thumbnail} alt={project.title} />
                      <div className="project-overlay">
                        <a href={`/project/${project.id}`} className="view-btn">
                          Xem chi tiết
                          <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      
                      <div className="project-meta">
                        <div className="meta-item">
                          <i className="fa fa-map-marker"></i>
                          <span>{project.location}</span>
                        </div>
                        <div className="meta-item">
                          <i className="fa fa-th-large"></i>
                          <span>{project.acreage}</span>
                        </div>
                      </div>

                      <div className="project-details">
                        <div className="detail-item">
                          <label>Chủ đầu tư:</label>
                          <span>{project.investors}</span>
                        </div>
                        <div className="detail-item">
                          <label>Năm:</label>
                          <span>{project.year}</span>
                        </div>
                      </div>

                      <a href={`/project/${project.id}`} className="project-link">
                        Tìm hiểu thêm
                        <i className="fa fa-chevron-right"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-lg-12">
              <div className="glass-card cta-box">
                <h2>Bạn quan tâm đến các dự án của chúng tôi?</h2>
                <p>Liên hệ với đội ngũ tư vấn viên chuyên nghiệp của Đại Nguyên Holding để nhận tư vấn miễn phí</p>
                <div className="cta-buttons">
                  <a href="/contact" className="btn-primary">
                    <i className="fa fa-envelope"></i> Gửi yêu cầu tư vấn
                  </a>
                  <a href="tel:0779075168" className="btn-secondary">
                    <i className="fa fa-phone"></i> 0779 075 168
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
