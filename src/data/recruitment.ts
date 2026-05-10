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
    title: "Chuyên viên tư vấn",
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
    isNew: false,
    deadline: "24/01/2026",
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
    title: "Trưởng Phòng Kinh Doanh (TPKD)",
    salary: "15 - 50 triệu",
    location: "Hồ Chí Minh, Bình Dương",
    locations: [
      {
        city: "Hồ Chí Minh",
        address: "Số 09 Nguyễn Thị Nhung, Khu đô thị Vạn Phúc, Phường Hiệp Bình Phước, Thủ Đức"
      },
      {
        city: "Bình Dương",
        address: "Dĩ An"
      }
    ],
    experience: "Từ 2 năm ở vị trí TPKD",
    isNew: true,
    deadline: "30/01/2026",
    ageRange: "25 - 40 tuổi",
    education: "Cao đẳng trở lên",
    workingHours: "Thứ 2 - Thứ 7 (08:00 - 17:00)",
    gender: "Không yêu cầu",
  
    requirements: [
      {
        title: "Yêu cầu ứng viên",
        items: [
          "Trình độ tối thiểu: Cao đẳng trở lên",
          "Kinh nghiệm tối thiểu 2 năm trở lên tại vị trí Trưởng phòng Kinh doanh (ưu tiên ngành BĐS)",
          "Kinh nghiệm thị trường nhà phố/đất nền Bình Dương là lợi thế",
          "Kỹ năng giao tiếp, thuyết phục và chốt khách tốt",
          "Kỹ năng giải quyết vấn đề và ra quyết định",
          "Kỹ năng tuyển dụng, quản lý, đào tạo và thúc đẩy đội ngũ nhân sự",
          "Khả năng phân công, giám sát và quản trị đội nhóm",
          "Chịu được áp lực công việc cao"
        ]
      },
      {
        title: "Yêu cầu khác",
        items: [
          "Năng động, sáng tạo, nhiệt huyết trong công việc",
          "Có tư duy chiến lược, định hướng kinh doanh",
          "Tinh thần cầu tiến, gắn bó lâu dài cùng Công ty",
          "Đam mê Bất động sản, thích kinh doanh và khát vọng thu nhập cao"
        ]
      }
    ],
  
    benefits: [
      {
        title: "Quyền lợi ứng viên",
        items: [
          "Lương cơ bản: 15 - 25 triệu/tháng, tăng lũy tiến theo hiệu quả công việc",
          "Hoa hồng TPKD: Lên đến 30 triệu/sản phẩm",
          "Hoa hồng Sale (team): 40 - 70 triệu/sản phẩm",
          "Thưởng nóng cá nhân và đội nhóm bằng hiện kim/hiện vật",
          "Hỗ trợ chi phí bán hàng và marketing 20 - 30 triệu/tháng",
          "Ưu tiên ứng viên có đội nhóm sẵn từ 2 - 5 nhân viên",
          "Cơ hội thăng tiến lên vị trí Giám đốc Kinh doanh sau 6 tháng (nếu đạt KPI)",
          "Thưởng hiệu suất, lương tháng 13, thưởng Lễ – Tết, du lịch hằng năm",
          "Tham gia các khóa đào tạo chuyên sâu từ các chuyên gia Bất động sản – Tài chính",
          "Môi trường trẻ trung, năng động, chuyên nghiệp và nhiều cơ hội phát triển",
          "Lộ trình thăng tiến rõ ràng, chế độ BHXH đầy đủ",
          "Team building hàng quý trong và ngoài nước"
        ]
      }
    ],
  
    specialties: ["Bất động sản", "Quản lý đội nhóm", "Kinh doanh", "Chiến lược thị trường"],
  
    jobDescription: [
      "Xây dựng kế hoạch, chiến lược và mục tiêu kinh doanh cho phòng Kinh doanh",
      "Khai thác thêm các nguồn khách hàng có nhu cầu sản phẩm Bất động sản của Công ty",
      "Giám sát, hỗ trợ và đánh giá hiệu quả hoạt động của đội ngũ kinh doanh",
      "Báo cáo doanh thu, hiệu quả bán hàng hàng tuần/tháng cho Ban Giám đốc",
      "Xây dựng và duy trì mối quan hệ khách hàng bền vững nhằm gia tăng doanh thu",
      "Hỗ trợ nhân viên trong quá trình tư vấn và chốt hợp đồng với khách hàng",
      "Quan sát, đánh giá thị trường & đối thủ để đề xuất chiến lược cạnh tranh",
      "Liên hệ tiếp cận khách hàng mới, cập nhật tình hình thị trường & sản phẩm mới",
      "Phối hợp với bộ phận Marketing trong hoạt động triển khai chiến dịch bán hàng",
      "Các nhiệm vụ khác theo yêu cầu của Ban Giám đốc",
      "Sản phẩm Công ty: Nhà phố, đất nền các tỉnh (Bình Dương, Bình Phước, Đồng Nai…), đa dạng diện tích, giá tốt và pháp lý rõ ràng"
    ],
  
    subsidies: ["Hỗ trợ marketing", "Chi phí bán hàng", "Công cụ làm việc"],
    
    generalBenefits: [
      "Lương tháng 13",
      "Du lịch hằng năm",
      "Team building",
      "Thưởng doanh số",
      "Khám sức khỏe định kỳ"
    ]
  },
  {
    id: 3,
    title: "Kế Toán Nội Bộ (Ưu Tiên Nhận Việc Ngay)",
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
    deadline: "30/01/2026",
    ageRange: "25 - 32 tuổi",
    education: "Cao Đẳng trở lên",
    gender: "Nữ",
    workingHours: "Thứ 2 - Thứ 7 (08:00 - 17:30, nghỉ trưa 1 tiếng rưỡi)",
    requirements: [
      {
        title: "Yêu cầu ứng viên",
        items: [
          "Nữ, độ tuổi từ 25 - 32",
          "Tốt nghiệp Cao đẳng trở lên chuyên ngành Kế toán, Tài chính, Kiểm toán",
          "Tối thiểu 01 năm kinh nghiệm tại vị trí Kế toán nội bộ hoặc kế toán tổng hợp",
          "Thành thạo Excel, Word và ưu tiên biết sử dụng phần mềm kế toán (Misa, Fast, Bravo)",
          "Cẩn thận, trung thực, trách nhiệm cao trong công việc",
          "Có khả năng tổng hợp số liệu, lập báo cáo tài chính nội bộ",
          "Kỹ năng giao tiếp tốt, khả năng làm việc độc lập",
          "Ưu tiên ứng viên có thể nhận việc ngay"
        ]
      }
    ],
    benefits: [
      {
        title: "Quyền lợi ứng viên",
        items: [
          "Mức lương: 9 - 12 triệu (thoả thuận theo năng lực)",
          "Thưởng theo doanh số Công ty: Từ 1.000.000/sản phẩm",
          "Thưởng Lễ, Tết, lương tháng 13",
          "Môi trường làm việc chuyên nghiệp, hiện đại, đầy đủ trang thiết bị",
          "Được đào tạo thêm nghiệp vụ nâng cao",
          "Tham gia du lịch hằng năm, team building định kỳ",
          "Chính sách phúc lợi đầy đủ: BHXH, BHYT, BHTN theo quy định"
        ]
      }
    ],
    specialties: ["Kế toán nội bộ", "Tài chính", "Kế toán tổng hợp"],
    jobDescription: [
      "Theo dõi thu chi nội bộ và lập phiếu thu/chi",
      "Theo dõi công nợ khách hàng, nhà cung cấp, tài sản cố định",
      "Thực hiện hạch toán nội bộ và đối chiếu số liệu với sổ sách",
      "Lập các báo cáo doanh thu – chi phí – dòng tiền theo tuần/tháng",
      "Soạn thảo hợp đồng, chứng từ kế toán",
      "Quản lý, lưu trữ hồ sơ kế toán, chứng từ",
      "Phối hợp với các phòng ban để đảm bảo luồng thông tin chính xác",
      "Thực hiện các công việc theo yêu cầu của Kế toán trưởng/Ban giám đốc"
    ],
    subsidies: ["Phụ cấp cơm trưa", "Phụ cấp gửi xe", "Phụ cấp trách nhiệm"],
    generalBenefits: ["Team building", "Du lịch", "Thưởng tháng 13", "Khám sức khỏe định kỳ"]
  }
];
