export type JobRequirement = {
  title: string;
  items: string[];
};

export type JobBenefit = {
  title: string;
  items: string[];
};

export type JobSpecialty = string;

export type JobLocation = {
  city: string;
  address: string;
};

export type Job = {
  id: number;
  title: string;
  salary: string;
  location: string;
  locations: JobLocation[];
  experience: string;
  isNew?: boolean;
  deadline?: string;
  applicants?: number;
  requirements: JobRequirement[];
  benefits: JobBenefit[];
  specialties: JobSpecialty[];
  jobDescription: string[];
  ageRange: string;
  education: string;
  gender?: string;
  workingHours: string;
  subsidies?: string[];
  generalBenefits?: string[];
};

export const Jobs: Job[] = [
  {
    id: 1,
    title: "Nhân Viên Văn Phòng (Ưu Tiên Sinh Viên Mới Ra Trường)",
    salary: "8.5 - 45 triệu",
    location: "Hồ Chí Minh, Bình Dương",
    locations: [
      {
        city: "Hồ Chí Minh",
        address: "Số 09 Nguyễn Thị Nhung, Khu đô thị Vạn Phúc, Phường Hiệp Bình, Thủ Đức"
      },
      {
        city: "Bình Dương",
        address: "Dĩ An"
      }
    ],
    experience: "Không yêu cầu",
    isNew: true,
    applicants: 245,
    ageRange: "22 - 35 tuổi",
    education: "Cao Đẳng trở lên",
    workingHours: "Thứ 2 - Thứ 7 (từ 08:00 đến 17:00)",
    requirements: [
      {
        title: "Yêu cầu ứng viên",
        items: [
          "Độ tuổi: Từ 22 - 35 tuổi",
          "Có khả năng giao tiếp, thuyết phục, hoạt ngôn, năng động, hướng ngoại là ưu tiên",
          "Có kinh nghiệm bán hàng, tư vấn, telesale/CSKH tiếp thị ở nhiều lĩnh vực là lợi thế",
          "Những bạn mới ra trường nhuyệt huyết, năng động, vui vẻ, đam mê kiếm tiền cũng sẽ là những ứng viên tiềm năng",
          "Yêu thích công việc tư vấn, đàm phán với khách hàng",
          "Ham học hỏi, nhanh nhẹn, cần cù, kiên trì"
        ]
      }
    ],
    benefits: [
      {
        title: "Quyền lợi",
        items: [
          "Lương cứng: Từ 8,5 - 14 triệu/tháng lũy tiến lương theo năng lực",
          "Thưởng hoa hồng: 25 - 45 triệu/sản phẩm",
          "Thưởng nóng hấp dẫn: Hiện vật/hiện kim và Thưởng Quý, Năm",
          "Thưởng đội nhóm, cá nhân, thưởng quý, dự án",
          "Được hỗ trợ chi phí điện thoại để làm việc (100% miễn phí)",
          "Được tham gia các lớp đào tạo kỹ năng mềm, kiến thức chuyên môn",
          "Được cấp phát đồng phục và công cụ làm việc",
          "Được tham gia các hoạt động du lịch trong và ngoài nước",
          "Cơ hội thăng tiến cao lên cấp quản lý",
          "Các hoạt động tập thể: Teambuilding, Sinh nhật, Bóng đá, cầu lông"
        ]
      }
    ],
    specialties: ["Chăm sóc khách hàng", "Bất động sản", "Xây dựng", "Tài chính"],
    jobDescription: [
      "Nhận cuộc gọi từ khách hàng liên hệ đến có nhu cầu về sản phẩm Công ty (Khách hàng Hotline)",
      "Giải quyết những thắc mắc & nhu cầu của Khách hàng về các sản phẩm của Công ty",
      "Telesale, tư vấn khách hàng theo nguồn Data: Công ty cung cấp, Nguồn khách marketing",
      "Chăm sóc, hỗ trợ khách hàng mới và khách hàng cũ",
      "Hỗ trợ viết hóa đơn, hợp đồng khách hàng khi yêu cầu",
      "Thực hiện các công việc khác theo sự phân công của cấp trên",
      "Làm việc tại Văn phòng Công ty, giờ hành chính và Không đi thị trường"
    ],
    subsidies: ["Cước điện thoại", "Thiết bị làm việc", "Điện thoại"],
    generalBenefits: ["Du lịch hàng năm", "Khám sức khỏe định kỳ", "Team building", "Thưởng tháng 13", "Thưởng hiệu quả làm việc", "Phụ cấp thâm niên"]
  },
  {
    id: 2,
    title: "Chuyên Viên Kế Toán Nội Bộ (Nhận Việc Ngay)",
    salary: "9 - 12 triệu",
    location: "Hồ Chí Minh",
    locations: [
      {
        city: "Hồ Chí Minh",
        address: "Số 9 Nguyễn Thị Nhung, Phường Hiệp Bình, Thủ Đức"
      }
    ],
    experience: "1 năm",
    isNew: true,
    deadline: "24/12/2025",
    ageRange: "25 - 32 tuổi",
    education: "Cao Đẳng trở lên",
    gender: "Nữ",
    workingHours: "Thứ 2 - Thứ 7 (từ 08:00 đến 17:30, nghỉ trưa 1 tiếng rưỡi)",
    requirements: [
      {
        title: "Yêu cầu ứng viên",
        items: [
          "Nữ, Độ tuổi từ 25-32 tuổi",
          "Tốt nghiệp từ Cao đẳng chuyên ngành Kế toán, Tài chính, Kiểm toán",
          "Có từ 1 năm kinh nghiệm ở vị trí kế toán nội bộ, tổng hợp",
          "Sử dụng thành thạo tin học văn phòng: Excel, Word",
          "CẨN THẬN, TRUNG THỰC, tự tin và có tinh thần trách nhiệm",
          "Có khả năng làm việc độc lập"
        ]
      }
    ],
    benefits: [
      {
        title: "Quyền lợi",
        items: [
          "Mức lương: 9.000.000 – 12.000.000 (Thỏa thuận theo năng lực)",
          "Thưởng theo doanh số Công ty: Từ 1 triệu đồng/Sản phẩm",
          "Lương tháng 13, thưởng Lễ/Tết, du lịch công ty hằng năm",
          "Được làm việc trong môi trường hiện đại, đầy đủ",
          "Chính sách hỗ trợ nhân sự tốt",
          "Cơ hội thăng tiến và phát triển nghề nghiệp"
        ]
      }
    ],
    specialties: ["Kế toán nội bộ", "Kế toán"],
    jobDescription: [
      "Quản lý quỹ và thanh toán các chi phí nội bộ đảm bảo khâu vận hành",
      "Theo dõi công nợ khách hàng, NCC, chi phí, doanh thu, tài sản cố định và dòng tiền",
      "Thực hiện soạn thảo hợp đồng, phiếu thu và thu tiền khách hàng",
      "Soạn thảo các văn bản pháp lý hỗ trợ xử lý khách hàng (khi cần)",
      "Đề xuất, soạn thảo các chính sách lương, thưởng, phúc lợi cho CBNV",
      "Lưu trữ hồ sơ khách hàng, dự án. Đảm bảo việc lưu trữ chứng từ, sổ sách kế toán",
      "Tổng hợp báo cáo chi phí hàng tuần/tháng cho Ban Giám đốc",
      "Tham mưu cho Ban Giám đốc các vấn đề liên quan đến tài chính, kế toán, dòng tiền"
    ]
  }
];
