'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/features/HeroSection';
import { Jobs } from '@/data/recruitment';
import './style.css';

export default function Recruitment() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  const calculateDaysLeft = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const daysLeft = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  return (
    <MainLayout>
      <HeroSection breadcrumb="Tuyển dụng" />

      <section className="recruitment-section">
        <div className="container">

          {/* Job List */}
          <div className="job-listings">
            {Jobs.map((job) => (
              <div key={job.id} className="job-card">
                {/* Job Header */}
                <div className="job-header">
                  <div className="job-title-section">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <h3 className="job-title">{job.title}</h3>
                      {job.isNew && <span className="badge-new">New</span>}
                    </div>
                    <div className="job-badges">
                      <span className="badge badge-salary"><i className="fa fa-money"></i> {job.salary}</span>
                      <span className="badge badge-location"><i className="fa fa-map-marker"></i> {job.location}</span>
                      <span className="badge badge-experience"><i className="fa fa-briefcase"></i> {job.experience}</span>
                    </div>
                  </div>

                  <button
                    className="expand-btn"
                    onClick={() => toggleExpand(job.id)}
                    title={expandedJob === job.id ? 'Ẩn' : 'Hiển thị'}
                  >
                    <i className={`fa fa-chevron-${expandedJob === job.id ? 'up' : 'down'}`}></i>
                  </button>
                </div>

                {/* Job Quick Info */}
                <div className="job-quick-info">
                  {job.applicants && (
                    <div className="info-item">
                      <i className="fa fa-users"></i>
                      <span>{job.applicants} người đã ứng tuyển</span>
                    </div>
                  )}
                  {job.deadline && (
                    <div className="info-item">
                      <i className="fa fa-calendar"></i>
                      <span>Hạn: {job.deadline} (Còn {calculateDaysLeft(job.deadline)} ngày)</span>
                    </div>
                  )}
                  <div className="info-item">
                    <i className="fa fa-clock-o"></i>
                    <span>{job.ageRange}</span>
                  </div>
                </div>

                {/* Job Details - Expandable */}
                {expandedJob === job.id && (
                  <div className="job-details">
                    {/* Specialties */}
                    <div className="detail-section">
                      <h4>Chuyên môn</h4>
                      <div className="specialty-tags">
                        {job.specialties.map((specialty, idx) => (
                          <span key={idx} className="specialty-tag">{specialty}</span>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    {job.requirements.map((req, idx) => (
                      <div key={idx} className="detail-section">
                        <h4>{req.title}</h4>
                        <ul className="detail-list">
                          {req.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Job Description */}
                    <div className="detail-section">
                      <h4>Mô tả công việc</h4>
                      <ul className="detail-list">
                        {job.jobDescription.map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    {job.benefits.map((benefit, idx) => (
                      <div key={idx} className="detail-section">
                        <h4>{benefit.title}</h4>
                        <ul className="detail-list">
                          {benefit.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Subsidies */}
                    {job.subsidies && job.subsidies.length > 0 && (
                      <div className="detail-section">
                        <h4>Phụ cấp</h4>
                        <div className="subsidy-list">
                          {job.subsidies.map((subsidy, idx) => (
                            <div key={idx} className="subsidy-item">
                              <i className="fa fa-check"></i> {subsidy}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* General Benefits */}
                    {job.generalBenefits && job.generalBenefits.length > 0 && (
                      <div className="detail-section">
                        <h4>Quyền lợi chung</h4>
                        <div className="benefits-list">
                          {job.generalBenefits.map((benefit, idx) => (
                            <div key={idx} className="benefit-item">
                              <i className="fa fa-star"></i> {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Work Locations */}
                    <div className="detail-section">
                      <h4>Địa điểm làm việc</h4>
                      <div className="locations-list">
                        {job.locations.map((loc, idx) => (
                          <div key={idx} className="location-item">
                            <strong>{loc.city}:</strong> {loc.address}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="detail-section">
                      <h4>Thời gian làm việc</h4>
                      <p className="working-hours">{job.workingHours}</p>
                    </div>

                    {/* Apply Button */}
                    <div className="apply-section">
                      <button className="btn-apply-primary">
                        <i className="fa fa-send"></i> Ứng tuyển ngay
                      </button>
                      <button className="btn-apply-secondary">
                        <i className="fa fa-bookmark"></i> Lưu tin
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="why-join-section">
        <div className="container">
          <div className="section-header">
            <h2>Tại Sao Chọn Đại Nguyên Holding</h2>
            <p>Khám phá cơ hội phát triển sự nghiệp và những quyền lợi tuyệt vời</p>
          </div>

          <div className="benefits-grid">
            {[
              {
                icon: 'fa-heart',
                title: 'Môi Trường Làm Việc Tích Cực',
                description: 'Đội ngũ chuyên nghiệp, hợp tác chặt chẽ và luôn sẵn sàng hỗ trợ lẫn nhau'
              },
              {
                icon: 'fa-graduation-cap',
                title: 'Đào Tạo & Phát Triển',
                description: 'Cơ hội học tập liên tục, nâng cao kỹ năng và chứng chỉ chuyên ngành'
              },
              {
                icon: 'fa-money-bill',
                title: 'Lương Thưởng Cạnh Tranh',
                description: 'Mức lương hấp dẫn, thưởng hiệu suất và các phúc lợi đa dạng'
              },
              {
                icon: 'fa-arrow-up',
                title: 'Cơ Hội Thăng Tiến',
                description: 'Con đường sự nghiệp rõ ràng và cơ hội thăng chức nhanh chóng'
              },
              {
                icon: 'fa-balance-scale',
                title: 'Cân Bằng Công Việc',
                description: 'Chính sách linh hoạt, hỗ trợ sức khỏe và chăm sóc gia đình'
              },
              {
                icon: 'fa-users',
                title: 'Cộng Đồng Công Ty',
                description: 'Các hoạt động team building, sự kiện gặp mặt thường xuyên'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">
                  <i className={`fa ${benefit.icon}`}></i>
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
