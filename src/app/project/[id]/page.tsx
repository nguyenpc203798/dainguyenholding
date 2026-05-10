"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/features/HeroSection";
import { Projects, ProjectOverview, ProjectSection } from "@/data/project";
import "./detail.css";

const ProjectDetailPage = () => {
  const params = useParams();
  const projectId = parseInt(params?.id as string);
  const project = Projects.find((p) => p.id === projectId);
  const [activeSection, setActiveSection] = useState("introduction");

  if (!project) {
    return (
      <MainLayout>
        <div style={{ padding: "100px 0", textAlign: "center" }}>
          <h1>Dự án không tìm thấy</h1>
        </div>
      </MainLayout>
    );
  }

  const sectionKeys = [
    "introduction",
    "overview",
    "location",
    "amenities",
    "floorPlan",
    "legal",
    "contact",
  ] as const;

  const sectionLabels = {
    introduction: "Giới thiệu",
    overview: "Tổng quan",
    location: "Vị trí",
    amenities: "Tiện ích",
    floorPlan: "Mặt bằng",
    legal: "Pháp lý",
    contact: "Liên hệ",
  };

  const currentSection =
    project.sections[activeSection as keyof typeof project.sections];

  return (
    <MainLayout>
      <HeroSection breadcrumb={project.title} />

      <section className="project-detail-section">
        <div className="container">
          {/* Project Header Info */}
          <div className="project-header-info">
            <div className="row">
              <div className="col-lg-8">
                <div className="project-main-image">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-info-card">
                  <h2 className="project-name">{project.title}</h2>
                  <div className="project-meta-items">
                    <div className="meta-item">
                      <i className="fa fa-map-marker"></i>
                      <div>
                        <label>Vị trí</label>
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <i className="fa fa-cube"></i>
                      <div>
                        <label>Diện tích</label>
                        <span>{project.acreage}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <i className="fa fa-building"></i>
                      <div>
                        <label>Chủ đầu tư</label>
                        <span>{project.investors}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <i className="fa fa-calendar"></i>
                      <div>
                        <label>Năm khởi công</label>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="project-cta-buttons">
                    <a href="tel:0779075168" className="btn-primary">
                      <i className="fa fa-phone"></i> Gọi tư vấn
                    </a>
                    <a href="/contact" className="btn-secondary">
                      <i className="fa fa-envelope"></i> Yêu cầu thông tin
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="section-nav">
            <div className="section-nav-items">
              {sectionKeys.map((key) => (
                <button
                  key={key}
                  className={`section-nav-item ${activeSection === key ? "active" : ""}`}
                  onClick={() => setActiveSection(key)}
                >
                  {sectionLabels[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Section Content */}
          <div className="section-content">
            <h2 className="section-title">{currentSection.title}</h2>

            {/* Overview Section Special Layout */}
            {activeSection === "overview" &&
              currentSection.title === "TỔNG QUAN DỰ ÁN" && (
                <div className="overview-content">
                  <div className="overview-grid">
                    <div className="overview-item">
                      <label>Tên dự án</label>
                      <p>{(currentSection as ProjectOverview).ten}</p>
                    </div>
                    <div className="overview-item">
                      <label>Vị trí</label>
                      <p>{(currentSection as ProjectOverview).vitri}</p>
                    </div>
                    <div className="overview-item">
                      <label>Chủ đầu tư</label>
                      <p>{(currentSection as ProjectOverview).chudautu}</p>
                    </div>
                    <div className="overview-item">
                      <label>Đơn vị phát triển</label>
                      <p>
                        {(currentSection as ProjectOverview).donviphattrien}
                      </p>
                    </div>
                    <div className="overview-item">
                      <label>Tổng diện tích</label>
                      <p>{(currentSection as ProjectOverview).tongdientich}</p>
                    </div>
                    <div className="overview-item">
                      <label>Loại hình</label>
                      <p>{(currentSection as ProjectOverview).loaihinh}</p>
                    </div>
                    <div className="overview-item">
                      <label>Quy mô xây dựng</label>
                      <p>{(currentSection as ProjectOverview).quymoxd}</p>
                    </div>
                    <div className="overview-item">
                      <label>Diện tích nhà</label>
                      <p>{(currentSection as ProjectOverview).dientichnha}</p>
                    </div>
                    <div className="overview-item">
                      <label>Tiện ích</label>
                      <p>{(currentSection as ProjectOverview).tienich}</p>
                    </div>
                    <div className="overview-item">
                      <label>Cơ sở hạ tầng</label>
                      <p>{(currentSection as ProjectOverview).csht}</p>
                    </div>
                    <div className="overview-item">
                      <label>Pháp lý</label>
                      <p>{(currentSection as ProjectOverview).phaply}</p>
                    </div>
                    <div className="overview-item">
                      <label>Quy mô</label>
                      <p>{(currentSection as ProjectOverview).quymo}</p>
                    </div>
                    <div className="overview-item">
                      <label>Thời gian</label>
                      <p>{(currentSection as ProjectOverview).thoigian}</p>
                    </div>
                  </div>
                </div>
              )}

            {/* Regular Content with Images */}
            {activeSection !== "overview" && (
              <>
                <div className="content-text">
                  {(currentSection as ProjectSection).content?.map(
                    (paragraph: string, index: number) => (
                      <p key={index}>{paragraph}</p>
                    ),
                  )}
                </div>

                {(currentSection as ProjectSection).images &&
                  (currentSection as ProjectSection).images &&
                  (currentSection as ProjectSection).images!.length > 0 && (
                    <div
                      className={`image-grid image-grid-${Math.min((currentSection as ProjectSection).images!.length, 3)}`}
                    >
                      {(currentSection as ProjectSection).images!.map(
                        (image: string, index: number) => (
                          <div key={index} className="image-item">
                            <img
                              src={image}
                              alt={`${currentSection.title} - ${index + 1}`}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  )}
              </>
            )}
          </div>

          {/* Related Projects */}
          <div className="related-projects">
            <h2 className="related-title">Dự án liên quan</h2>
            <div className="related-projects-grid">
              {Projects.filter((p) => p.id !== projectId)
                .slice(0, 3)
                .map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    className="glass-card related-project-card"
                  >
                    <div className="related-project-image">
                      <img
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                      />
                      <div className="overlay">
                        <a
                          href={`/project/${relatedProject.id}`}
                          className="view-btn"
                        >
                          Xem chi tiết <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                    <div className="related-project-info">
                      <h3>{relatedProject.title}</h3>
                      <p className="location">
                        <i className="fa fa-map-marker"></i>{" "}
                        {relatedProject.location}
                      </p>
                      <p className="acreage">
                        <i className="fa fa-cube"></i> {relatedProject.acreage}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="project-cta-section">
            <div className="cta-content">
              <h2>Bạn quan tâm dự án này?</h2>
              <p>
                Hãy liên hệ với chúng tôi để nhận được tư vấn chi tiết và hỗ trợ
                tốt nhất
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn-primary">
                  <i className="fa fa-envelope-o"></i> Liên hệ ngay
                </a>
                <a href="tel:0779075168" className="btn-secondary">
                  <i className="fa fa-phone"></i> Gọi tư vấn miễn phí
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProjectDetailPage;
