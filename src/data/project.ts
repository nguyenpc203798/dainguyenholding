export type ProjectOverview = {
  title: string;
  ten: string;
  vitri: string;
  chudautu: string;
  donviphattrien: string;
  tongdientich: string;
  loaihinh: string;
  quymoxd: string;
  dientichnha: string;
  tienich: string;
  csht: string;
  phaply: string;
  quymo: string;
  thoigian: string;
  images?: string[];
};

export type ProjectSection = {
  title: string;
  content: string[];
  images?: string[];
};

export type Project = {
  id: number;
  title: string;
  acreage: string;
  year: string;
  investors: string;
  thumbnail: string;
  location: string;
  sections: {
    introduction: ProjectSection;
    overview: ProjectOverview;
    location: ProjectSection;
    amenities: ProjectSection;
    floorPlan: ProjectSection;
    legal: ProjectSection;
    contact: ProjectSection;
  };
};

export const Projects: Project[] = [
  {
    id: 1,
    title: "KHU ĐÔ THỊ CAO CẤP BẮC SÀI GÒN",
    acreage: "41,9 ha",
    year: "Đang cập nhật",
    investors:
      "Công Ty Cổ Phần Đầu Tư & Phát Triển Bất Động Sản Phương Trường An",
    thumbnail:
      "https://premedia.vneconomy.vn/files/uploads/2026/05/05/82ac7fe529684437b2023dea263f5c14-87386.jpg?w=1200",
    location: "Phú Giáo, Hồ Chí Minh",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          "Khu đô thị Bắc Sài Gòn là dự án được quy hoạch đồng bộ với hệ thống tiện ích hiện đại, mang đến không gian sống tiện nghi và năng động cho cư dân.",
          "Sở hữu vị trí kết nối thuận lợi cùng hạ tầng phát triển, dự án không chỉ đáp ứng nhu cầu an cư mà còn mở ra cơ hội đầu tư tiềm năng trong khu vực đang tăng trưởng mạnh.",
        ],
        images: [
          "https://premedia.vneconomy.vn/files/uploads/2026/05/05/82ac7fe529684437b2023dea263f5c14-87386.jpg?w=1200",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Khu đô thị Bắc Sài Gòn",
        vitri: "Mặt tiền đường ĐT741, Phú Giáo, Hồ Chí Minh",
        chudautu:
          "Công Ty Cổ Phần Đầu Tư & Phát Triển Bất Động Sản Phương Trường An",
        donviphattrien: "CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING",
        tongdientich: "Khoảng 419.809,1 m2 (tương đương 41,9 ha)",
        loaihinh: "Đất nền nhà phố, biệt thự và shophouse",
        quymoxd: "2.760 sản phẩm, đã có sổ riêng từng nền",
        dientichnha: "Diện tích linh hoạt từ 70 m2 - 120 m2",
        tienich:
          "Hồ bơi, đại công viên trung tâm, Night Market, quán cafe, khu trò chơi trẻ em, mini golf, đường đua Go-Kart.",
        csht: "Hạ tầng giao thông và tiện ích nội khu được quy hoạch đồng bộ.",
        phaply: "Đã có sổ riêng từng nền.",
        quymo:
          "Quy mô khoảng 41,9 ha, cung ứng 2.760 sản phẩm đa dạng đáp ứng nhu cầu an cư và đầu tư.",
        thoigian: "Đang cập nhật",
        images: [
          "https://khudothibacsaigon.com/wp-content/uploads/2026/04/8caa56fc5f9bdec5878a.jpg",
        ],
      },
      location: {
        title: "VỊ TRÍ CHIẾN LƯỢC",
        content: [
          "Khu đô thị Bắc Sài Gòn tọa lạc ngay nút giao cao tốc TP.HCM - Chơn Thành và mặt tiền đường ĐT741.",
          "Dự án sở hữu lợi thế kết nối vượt trội, đóng vai trò cửa ngõ giao thương và tâm điểm tăng trưởng mới phía Bắc Sài Gòn.",
          "Nằm giữa trung tâm các cụm khu công nghiệp lớn, dự án vừa thuận tiện an cư vừa mở ra cơ hội đầu tư đón đầu làn sóng dịch chuyển công nghiệp.",
          "Khu vực có tiềm năng gia tăng giá trị bất động sản nhờ dòng tiền và nhu cầu thực liên tục tăng.",
        ],
        images: [
          "https://khudothibacsaigon.com/wp-content/uploads/2026/04/SO-DO-VI-TRI-01-2048x1886.jpg",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH NỘI & NGOẠI KHU",
        content: [
          "Tiện ích nội khu hiện đại gồm hồ bơi thư giãn, đại công viên trung tâm, Night Market, quán cafe phong cách và khu liên hoàn trò chơi trẻ em.",
          "Dự án tích hợp mini golf và đặc biệt là đường đua Go-Kart, mang đến trải nghiệm giải trí mới lạ cho cư dân.",
          "Không chỉ phục vụ nhu cầu an cư, khu đô thị còn kiến tạo cộng đồng sống văn minh, năng động và tiện nghi mỗi ngày.",
          "Tiện ích ngoại khu kết nối thuận tiện: KCN Tân Bình (2 - 3 km), KCN VSIP II - VSIP III (10 - 12 km), KCN Mỹ Phước 3 (15 - 20 km).",
          "Dễ dàng tiếp cận các tiện ích thiết yếu như Trường THCS Phước Vĩnh (3 km), Chợ Phước Hòa (8 - 10 km), Bệnh viện đa khoa Phú Giáo (8 - 10 km).",
        ],
        images: [
          "https://khudothibacsaigon.com/wp-content/uploads/2026/04/1553588379051767714.jpg",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG",
        content: [
          "Dự án được quy hoạch trên quỹ đất khoảng 419.809,1 m2 (41,9 ha), cung ứng 2.760 sản phẩm gồm đất nền nhà phố, biệt thự và shophouse.",
          "Diện tích mỗi lô từ 70 m2 - 120 m2, phù hợp đa dạng nhu cầu an cư và đầu tư.",
          "Cơ cấu sử dụng đất gồm: đất ở khoảng 49,95% (~209.685,5 m2), đất giao thông khoảng 32,71% (~137.315,3 m2), đất hạ tầng kỹ thuật khoảng 5% (~20.950,2 m2).",
          "Phần diện tích còn lại dành cho trường học và hệ thống tiện ích nội khu, đảm bảo hạ tầng đồng bộ và giá trị phát triển bền vững.",
        ],
        images: [
          "https://khudothibacsaigon.com/wp-content/uploads/2026/04/SO-DO-CHON-CAN-2.png",
        ],
      },
      legal: {
        title: "PHÁP LÝ",
        content: [
          "Dự án đã có sổ riêng từng nền, tạo sự minh bạch và an tâm cho khách hàng khi sở hữu.",
          "Quy hoạch tổng thể rõ ràng, phát triển theo định hướng đô thị đồng bộ và bền vững.",
        ],
        images: [
          "https://khudothibacsaigon.com/wp-content/uploads/2026/04/SO-DO-PHAN-LO-01-2048x1463.jpg",
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Đăng ký nhận tư vấn để được cung cấp thông tin chi tiết về sản phẩm, chính sách bán hàng và tiến độ dự án Khu đô thị Bắc Sài Gòn.",
          "Hotline: 0779 075 168",
          "Email: dainguyenholding@gmail.com",
        ],
      },
    },
  },
  {
    id: 2,
    title: "ĐẠI QUANG MINH TOWNHOUSE",
    acreage: "9.680 m2",
    year: "2025",
    investors: "Đại Quang Minh",
    thumbnail:
      "https://bdstngroup.vn/thumbs/910x640x1/upload/news/unnamed-1746690660.jpg",
    location: "Bình Dương",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          "Với thiết kế của một khu dân cư hiện đại, Đại Quang Minh kiến tạo một không gian sống tiện nghi và thoải mái, lý tưởng cho các gia đình trẻ và những nhà đầu tư đang tìm kiếm cơ hội sinh lời tiềm năng. Dự án sở hữu lợi thế vị trí đắc địa khi cận kề các khu công nghiệp lớn, cùng hệ thống giao thông kết nối thuận tiện đến các tuyến đường huyết mạch.",
          "Không chỉ mang trong mình tiềm năng gia tăng giá trị vượt trội nhờ sự phát triển năng động của thành phố Thuận An, Đại Quang Minh còn đảm bảo một cuộc sống an cư bền vững với hạ tầng hoàn thiện và chuỗi tiện ích nội khu đa dạng, hứa hẹn mang đến một môi trường sống lý tưởng cho cộng đồng cư dân.",
          'Đại Quang Minh Townhouse đã chính thức giới thiệu ra thị trường 75 căn nhà phố thương mại cao cấp. Nhờ sở hữu vị trí đắc địa, thiết kế sang trọng và tiềm năng tăng trưởng giá trị hấp dẫn, dự án nhanh chóng vươn lên thành "tâm điểm", thu hút đông đảo khách hàng là nhà đầu tư và người mua để ở giữa xu hướng dịch chuyển mạnh mẽ của thị trường bất động sản TP.HCM về phía Đông và sự hình thành các trung tâm mới.',
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/SO-DO-PHAN-LO_page-0001-2048x1463.jpg",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Đại Quang Minh TownHouse",
        vitri: "Phường Thuận Giao, TP. Thuận An, tỉnh Bình Dương",
        chudautu:
          "Công ty cổ phần Đầu tư Thương mại Bất động sản Đại Quang Minh",
        donviphattrien: "Công Ty TNHH Đầu tư và Dịch Vụ ĐẠI NGUYÊN HOLDING",
        tongdientich: "9.680 m2",
        loaihinh: "Nhà phố liên kế thương mại cao cấp",
        quymoxd: "75 căn nhà phố - 1 trệt 2 lầu",
        dientichnha:
          "Diện tích đất từ 61,1 – 86 m2, căn góc 101,1 – 106,3 m2. Bố trí 1 phòng khách, 1 phòng bếp, 4 phòng ngủ, garage và sân thượng.",
        tienich:
          "Công viên cây xanh, phố đi bộ, hồ bơi, spa, trường học, bệnh viện quốc tế, sân golf, quảng trường, khu ẩm thực,…",
        csht: "Đường nhựa 12 - 24 m, vỉa hè cây xanh",
        phaply: "Quy hoạch 1/500, sổ hồng đất - trích lục ra sổ nhà",
        quymo:
          "Tổng 75 sản phẩm nhà phố xây dựng 1 trệt 2 lầu, mặt tiền đường trước nhà rộng 10 – 14 m",
        thoigian: "Khởi công xây dựng năm 2025",
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/z6580720824414_1e2b300e2a2f74e9e938e49ac0462edd.jpg",
        ],
      },
      location: {
        title: "VỊ TRÍ DỰ ÁN",
        content: [
          "Đại Quang Minh tọa lạc tại phường Thuận Giao, thành phố Thuận An, tỉnh Bình Dương – trung tâm lõi đô thị sầm uất của khu vực.",
          "Dự án nằm gần hai trục huyết mạch Đại lộ Bình Dương và đường Thủ Khoa Huân, kết nối trực tiếp tới TP. Hồ Chí Minh.",
          "Kề cận Quốc lộ 13 – tuyến giao thương trọng điểm miền Nam, mang đến lợi thế liên kết vùng nhanh chóng.",
          "Xung quanh là cộng đồng cư dân đông đúc, giàu có cùng hạ tầng thương mại – dịch vụ phát triển mạnh.",
          "Vị trí chiến lược giúp cư dân dễ dàng tiếp cận các khu công nghiệp VSIP, Việt Hương và chuỗi tiện ích cao cấp.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/dce5aad083a831f668b9(1).jpg",
          "https://bdstngroup.vn/upload/filemanager/files/CONG%20VIEN.jpg",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH",
        content: [
          "Phố đi bộ nội khu kết hợp chuỗi shophouse “Shop below - Home above” chuẩn quốc tế.",
          "Công viên cây xanh và quảng trường trung tâm tổ chức sự kiện ngoài trời.",
          "Hồ bơi, spa, khu gym & wellness kết nối trực tiếp với khu dân cư.",
          "Liền kề trường học, bệnh viện quốc tế, sân golf, khu ẩm thực cao cấp.",
          "Tiện ích ngoại khu đa dạng: Aeon Mall, BV Columbia, KCN VSIP, KCN Việt Hương,…",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/z6580635457428_5d8018f9c0e4842733d82bcc96083b69.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/z6580646985423_f49aaf468a8bd3bdf7cf2ebf7d613297.jpg",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG",
        content: [
          "Quy mô 75 căn nhà phố thương mại xây dựng 1 trệt 2 lầu, mặt tiền rộng thoáng.",
          "Diện tích đất từ 61,1 – 86 m2, căn góc 101,1 – 106,3 m2; bố trí linh hoạt cho kinh doanh và ở.",
          "Thiết kế tối ưu công năng với phòng khách, bếp, 4 phòng ngủ, garage và sân thượng.",
          "Đường nội khu trải nhựa 12 – 24 m, vỉa hè cây xanh tạo cảnh quan thông thoáng.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/z6580649174099_0142795945056b1644208d0a5d432d80.jpg",
        ],
      },
      legal: {
        title: "PHÁP LÝ",
        content: [
          "Dự án được cấp chủ trương đầu tư đầy đủ, đảm bảo cơ sở pháp lý triển khai.",
          "Quy hoạch chi tiết 1/500 đã phê duyệt, minh bạch từng hạng mục công trình.",
          "Sổ hồng đất sẵn sàng sang tên công chứng ngay, đảm bảo quyền sở hữu cho khách hàng.",
          "Hợp đồng mua bán tuân thủ quy định pháp luật, công chứng minh bạch.",
          "Cam kết pháp lý rõ ràng, đảm bảo an tâm trong quá trình đầu tư và an cư.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/CONG%20VIEN.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/14-jpg.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/TUYEN%20PHO_RGB_color(1).jpg",
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Địa chỉ văn phòng: Số 09, đường Nguyễn Thị Nhung, KĐT Vạn Phúc, Phường Hiệp Bình, TP. HCM",
          "Điện thoại: 0779 075 168 - Hỗ trợ 24/7",
          "Email: dainguyenholding@gmail.com - Hỗ trợ tư vấn nhanh chóng",
          "Website: www.dainguyenholding.com",
          "Giờ làm việc: Thứ 2 - Thứ 7, 8:00 - 18:00 (Nghỉ Chủ Nhật)",
          "Tư vấn miễn phí: Đội ngũ tư vấn viên chuyên nghiệp sẵn sàng giải đáp mọi thắc mắc",
        ],
      },
    },
  },
  {
    id: 3,
    title: "ĐỨC PHÁT 3 BÀU BÀNG",
    acreage: "30,54 ha",
    year: "Đang cập nhật",
    investors: "Công ty Đức Phát",
    thumbnail:
      "https://bdstngroup.vn/upload/filemanager/files/khu-dan-cu-duc-phat-3.png",
    location: "Bàu Bàng, Bình Dương",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          'Khu Dân Cư Đức Phát 3 sở hữu vị trí "vàng" tại trung tâm Bàu Bàng, khu vực đang chuyển mình mạnh mẽ với hàng loạt công trình giao thông trọng điểm và các khu công nghiệp quy mô lớn.',
          "Dự án Đức Phát 3 - Dream City được định hướng trở thành điểm sáng bất động sản khu vực khi hội tụ lợi thế về vị trí, hạ tầng và tiềm năng gia tăng giá trị bền vững.",
          "Với quy hoạch bài bản, mật độ xây dựng hợp lý và hệ thống tiện ích đa dạng, Đức Phát 3 mang đến môi trường sống trong lành, đồng thời mở ra cơ hội đầu tư hấp dẫn cho khách hàng.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/khu-dan-cu-duc-phat-3.png",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Đức Phát 3 – Dream City",
        vitri:
          "Liền kề Quốc lộ 13, Thị trấn Lai Uyên, huyện Bàu Bàng, tỉnh Bình Dương",
        chudautu: "Công ty Đức Phát",
        donviphattrien: "Công Ty TNHH Đầu Tư Và Dịch Vụ ĐẠI NGUYÊN HOLDING",
        tongdientich: "30,54 ha",
        loaihinh: "Nhà ở liền kề",
        quymoxd: "1.709 nền nhà phố trên tổng diện tích 30,54 ha",
        dientichnha: "Diện tích mỗi lô: 5×15, 5×16, 5×20, 5×30,…",
        tienich:
          "Công viên cây xanh 1,2 ha, trung tâm thương mại dịch vụ, đất y tế, trường học các cấp và chuỗi tiện ích ngoại khu phong phú.",
        csht: "Hệ thống đường nhựa 12 - 24 m, vỉa hè cây xanh, hạ tầng đồng bộ.",
        phaply: "Quy hoạch chi tiết 1/500, pháp lý minh bạch.",
        quymo:
          "Tổng 1.709 sản phẩm đất nền, mật độ xây dựng khoảng 50 - 60%, tầng cao 1 - 3 tầng.",
        thoigian: "Đang cập nhật tiến độ triển khai.",
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/23110021-c7c7b37895a070fe29b1.jpg",
        ],
      },
      location: {
        title: "VỊ TRÍ DỰ ÁN",
        content: [
          "Dự án Đức Phát 3 – Dream City nằm gần mặt tiền Quốc lộ 13, thuộc Thị trấn Lai Uyên, huyện Bàu Bàng, tỉnh Bình Dương.",
          "Vị trí đối diện trung tâm hành chính huyện Bàu Bàng, liền kề Khu công nghiệp Bàu Bàng quy mô hơn 3.200 ha.",
          "Khu vực đang là tâm điểm phát triển công nghiệp – dịch vụ, thu hút lượng lớn chuyên gia và người lao động, tạo nên nhu cầu an cư và đầu tư lớn.",
          "Hệ thống giao thông liên kết vùng đồng bộ giúp kết nối nhanh chóng đến TP. Hồ Chí Minh và các tỉnh lân cận.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/o296-901655.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/vi-tri-khu-dan-cu-duc-phat-3.png",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH",
        content: [
          "Dự án sở hữu công viên cây xanh rộng 1,2 ha, tạo nên không gian sống trong lành và thư giãn cho cư dân.",
          "Nội khu bố trí trung tâm thương mại dịch vụ, khu vui chơi, đất y tế và các tiện ích cộng đồng khác.",
          "Bao quanh dự án là hệ thống tiện ích ngoại khu hoàn chỉnh: chợ nông sản, chợ Lai Uyên, siêu thị, trung tâm thương mại.",
          "Liền kề các cơ sở y tế như trạm y tế Thị trấn Lai Uyên, bệnh viện đa khoa, bệnh viện 512.",
          "Hệ thống giáo dục đa dạng từ mầm non đến THPT: mầm non Lai Uyên, Ánh Dương, TH & THCS Lai Uyên, THPT Lai Uyên, trường trung cấp nghề.",
          "Kết nối nhanh đến các khu công nghiệp Tân Bình, Lai Hưng và cụm KCN Bàu Bàng 2.200 ha, mang lại tiềm năng khai thác cho thuê và kinh doanh.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/tien-ich-khu-dan-cu-duc-phat-3.jpg",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG",
        content: [
          "Khu dân cư Đức Phát 3 được quy hoạch trên diện tích khoảng 30,53 ha với tổng 1.709 nền.",
          "Mặt bằng phân lô theo chuẩn khu đô thị hiện đại, đảm bảo tính kết nối cộng đồng và không gian sống thoáng đãng.",
          "Sản phẩm đa dạng với diện tích từ khoảng 70 - 150 m2, phù hợp nhu cầu ở và đầu tư.",
          "Mật độ xây dựng từ 50 - 60%, tầng cao quy định 1 - 3 tầng, đảm bảo cảnh quan hài hòa.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/so-do-phan-lo-duc-phat-3.jpg",
        ],
      },
      legal: {
        title: "6 LÝ DO NÊN ĐẦU TƯ VÀO DỰ ÁN",
        content: [
          "Vốn đầu tư hợp lý: Giá bán hiện tại đang ở mức cạnh tranh, thấp hơn một số dự án lân cận tới khoảng 10%, tiềm năng tăng giá 15 - 25%/năm.",
          "Hệ thống giao thông liên kết vùng đồng bộ: Hạ tầng hiện hữu kết nối các tuyến đường huyết mạch, thúc đẩy phát triển khu vực.",
          "Hưởng lợi từ quy hoạch phát triển Bàu Bàng: Định hướng thành phố thông minh cùng sự mở rộng khu công nghiệp và hành chính tạo lực đẩy cho giá trị dự án.",
          "Vị thế vàng giữa hàng ngàn tiện ích: Bao quanh là các tiện ích lớn nội – ngoại khu hoàn hảo, đáp ứng đầy đủ nhu cầu sống và làm việc.",
          "Pháp lý an toàn: Sổ hồng riêng từng nền, quy hoạch 1/500 được phê duyệt bởi UBND huyện Bàu Bàng và tỉnh Bình Dương.",
          "Tính thanh khoản cao: Giá bán từ chủ đầu tư hợp lý, cộng với nhu cầu nhà ở thực và lực lượng lao động nhập cư tăng mạnh.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/du-an-duc-phat-3-the-sun-1.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/ha-tang-dat-nen-duc-phat-3.jpg",
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Liên hệ ngay với đơn vị phát triển và phân phối chính thức – Công Ty TNHH Đầu Tư Và Dịch Vụ ĐẠI NGUYÊN HOLDING để nhận tư vấn chi tiết về dự án Đức Phát 3 – Dream City.",
          "Hotline: 0779 075 168",
          "Email: dainguyenholding@gmail.com",
          "Địa chỉ văn phòng: Số 09, đường Nguyễn Thị Nhung, KĐT Vạn Phúc, Phường Hiệp Bình, TP. HCM",
        ],
      },
    },
  },
  {
    id: 4,
    title: "THĂNG LONG HOUSE",
    acreage: "3,03 ha",
    year: "Đang cập nhật",
    investors: "Công ty TNHH Đầu tư Kinh doanh Bất động sản Thăng Long House",
    thumbnail:
      "https://datxanh.homes/wp-content/uploads/2024/12/phoi-canh-mau-nha-thang-long-house.jpg",
    location: "Phường Hội Nghĩa, Tân Uyên, Bình Dương",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          "Thăng Long House là dự án đất nền khu dân cư tại phường Hội Nghĩa, Tân Uyên, Bình Dương, còn được biết đến với tên gọi khu nhà ở Dương Tiến Phát.",
          "Dự án nằm trong khu dân cư hiện hữu sầm uất nhất tại Hội Nghĩa, từ khi ra mắt đến nay đã trở thành tâm điểm được quan tâm bởi nhiều nhà đầu tư cũng như khách hàng mua ở thực.",
          "Cư dân sẽ được tận hưởng không gian sống gần gũi thiên nhiên thông qua các mảng xanh cảnh quan, đồi cỏ, con đường bán nguyệt, cổng trời vô cực và hệ tiện ích nội khu được chăm chút tỉ mỉ.",
        ],
        images: [
          "https://datxanh.homes/wp-content/uploads/2024/12/phoi-canh-mau-nha-thang-long-house.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/249af99b1769aa37f378.jpg",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Khu nhà ở Thăng Long House Tân Hiệp 10",
        vitri: "Phường Hội Nghĩa, Tân Uyên, Bình Dương",
        chudautu:
          "Công ty TNHH Đầu tư Kinh doanh Bất động sản Thăng Long House",
        donviphattrien: "CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING",
        tongdientich: "3,03 ha",
        loaihinh: "Đất nền và nhà phố liền kề",
        quymoxd: "Dự kiến hơn 900 cư dân sinh sống",
        dientichnha:
          "Diện tích sản phẩm từ 61,9 m2 đến 153,3 m2; nhà phố 1 trệt 2 lầu.",
        tienich:
          "Trường mầm non, khu vui chơi trẻ em, công viên cây xanh, tiện ích cảnh quan, vỉa hè cây xanh, hạ tầng hoàn chỉnh.",
        csht: "Hạ tầng bàn giao hoàn thiện, đường, trường, trạm, điện nước đầy đủ.",
        phaply:
          "Pháp lý minh bạch, sổ hồng riêng từng lô, hỗ trợ vay ngân hàng VPBank tới 70%.",
        quymo:
          "Giai đoạn 1: 68 nền đất; giai đoạn 2: 74 căn nhà phố 1 trệt 2 lầu; giai đoạn 3: 44 căn nhà phố 1 trệt 2 lầu.",
        thoigian: "Đang mở bán nhiều giai đoạn, giá từ khoảng 30 triệu/m².",
        images: [
          "https://datxanh.homes/wp-content/uploads/2024/12/view-nhin-khu-cong-vien-du-an-thang-long-house-tan-uyen-binh-duong.jpg",
        ],
      },
      location: {
        title: "VỊ TRÍ DỰ ÁN",
        content: [
          "Dự án sở hữu vị trí kết nối thuận lợi, gần các tuyến giao thông quan trọng như DT747A, Vành đai 4, đại lộ Nam Tân Uyên, đại lộ Uyên Hưng.",
          "Từ Thăng Long House, cư dân dễ dàng tiếp cận các khu công nghiệp lớn như VSIP III, VSIP II, Nam Tân Uyên và hệ thống tiện ích ngoại khu đa dạng.",
          "Toàn bộ dự án được xây dựng trên quỹ đất khoảng hơn 4,1 ha tại phường Hội Nghĩa, Tân Uyên – khu vực chuẩn bị lên thành phố, phù hợp nhiều nhu cầu an cư và đầu tư.",
          "Vị trí gần trung tâm thành phố mới Bình Dương, thuận tiện di chuyển đến các trục giao thông và tiện ích trọng điểm.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/unnamed%20(1).jpg",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH XUNG QUANH",
        content: [
          "Tiện ích nội khu: trường mầm non, khu vui chơi trẻ em, công viên cây xanh, khu cảnh quan, đường dạo ven suối, cổng trời vô cực, con đường bán nguyệt, vườn hoa ánh sáng, phố đèn lồng, khu liên hoàn trẻ em.",
          "Không gian sống an toàn, xanh mát, được chú trọng đầu tư cảnh quan và hạ tầng đồng bộ.",
          "Gần trung tâm thành phố mới và vòng xoay trung tâm thành phố mới Bình Dương, thuận lợi di chuyển.",
          "Liền kề KCN VSIP 3, phù hợp kinh doanh nhà hàng, khách sạn, nhà trọ và các loại hình dịch vụ khác.",
          "Bao quanh là khu dân cư đông đúc, chỉ vài phút đi bộ tới chợ và nhiều tiện ích thương mại, cộng đồng thân thiện và lành mạnh.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/unnamed.jpg",
          "https://bdstngroup.vn/upload/filemanager/files/TLH%20-%20SDPL_G%C4%902.jpg",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG",
        content: [
          "Mặt bằng đa dạng với diện tích từ 61,9 m2 đến 153,3 m2, phù hợp nhiều nhu cầu sử dụng.",
          "Nhà phố thiết kế 1 trệt 2 lầu, tối ưu công năng sử dụng và không gian sống.",
          "Quy hoạch đồng bộ giữa khu nhà ở và mảng xanh, tạo nên tổng thể hài hoà, thông thoáng.",
        ],
      },
      legal: {
        title: "PHÁP LÝ",
        content: [
          "Thăng Long House sở hữu pháp lý minh bạch, là lựa chọn an toàn cho khách hàng.",
          "Dự án đã hoàn thiện đầy đủ các giấy tờ pháp lý quan trọng như chủ trương đầu tư, quy hoạch chi tiết 1/500.",
          "Sổ hồng riêng từng nền, sẵn sàng sang tên công chứng ngay, đảm bảo quyền sở hữu tài sản cho khách hàng.",
          "Quy hoạch 1/500 thể hiện chi tiết từng công trình, hạ tầng kỹ thuật và hạ tầng xã hội, tuân thủ đúng quy định pháp luật.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/thang-long-house-7.jpg",
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Liên hệ với đơn vị phân phối chính thức – CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING để được tư vấn chi tiết về dự án Thăng Long House.",
          "Hotline: 0779 075 168",
          "Email: dainguyenholding@gmail.com",
        ],
      },
    },
  },
  {
    id: 5,
    title: "KHU ĐÔ THỊ HOÀNG NAM - UYÊN HƯNG",
    acreage: "14,98 ha",
    year: "Đang cập nhật",
    investors: "Đang cập nhật",
    thumbnail:
      "https://bdstngroup.vn/upload/filemanager/files/Hoang-Nam-Uyen-Hung-3.webp",
    location: "Phường Uyên Hưng, Tân Uyên, Bình Dương",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          "Khu đô thị thành phố mới Hoàng Nam Uyên Hưng được phát triển theo mô hình khu đô thị hiện đại, đồng bộ tiện ích và hạ tầng.",
          "Dự án sở hữu vị trí đắc địa ngay mặt tiền đường Tố Hữu (DH 412), phường Uyên Hưng, thành phố Tân Uyên, Bình Dương.",
          "Với quy mô gần 15 ha và nhiều phân khu nhà phố, căn hộ, nhà ở xã hội, Hoàng Nam Uyên Hưng hướng đến cộng đồng cư dân văn minh, thịnh vượng.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/Hoang-Nam-Uyen-Hung-3.webp",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Khu đô thị thành phố mới Hoàng Nam Uyên Hưng",
        vitri: "Đường Tố Hữu (DH 412), phường Uyên Hưng, Tân Uyên, Bình Dương",
        chudautu: "Đang cập nhật",
        donviphattrien: "CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING",
        tongdientich: "14,98 ha (3 giai đoạn)",
        loaihinh: "Đất nền, nhà phố, căn hộ, nhà ở xã hội",
        quymoxd:
          "Quy mô 3 giai đoạn với nhiều phân khu nhà phố và tiện ích nội khu.",
        dientichnha:
          "Diện tích đất nền: 61 - 122 m2; diện tích nhà phố: 63 - 72 m2; thiết kế 1 trệt 1 lầu, 1 trệt 2 lầu.",
        tienich:
          "Công viên nội khu, khu thể thao, trung tâm thương mại, trường học nội khu cùng chuỗi tiện ích ngoại khu phong phú.",
        csht: "Hạ tầng hoàn thiện, quy hoạch nội khu đồng bộ, đường nội bộ, vỉa hè, cây xanh đầy đủ.",
        phaply:
          "Sổ hồng riêng từng sản phẩm, sẵn sàng sang tên công chứng ngay, đã được phê duyệt quy hoạch và giấy phép xây dựng.",
        quymo:
          "14,98 ha với nhiều phân khu nhà phố, shophouse và đất nền đa dạng.",
        thoigian:
          "Dự án đã hoàn thiện hạ tầng, tiện ích và đang triển khai các giai đoạn tiếp theo.",
      },
      location: {
        title: "VỊ TRÍ DỰ ÁN",
        content: [
          "Hoàng Nam Uyên Hưng toạ lạc trên mặt tiền đường Tố Hữu (DH 412), phường Uyên Hưng, thành phố Tân Uyên, Bình Dương.",
          "Vị trí kết nối thuận tiện tới các trục giao thông quan trọng như DT 747, DT 746, Vành đai 4, đại lộ Uyên Hưng.",
          "Từ đây, cư dân dễ dàng tiếp cận các trung tâm hành chính, thương mại, giáo dục và y tế của thành phố Tân Uyên và khu vực lân cận.",
          "Lợi thế nằm giữa khu công nghiệp công nghệ cao và trung tâm hành chính, giúp gia tăng tiềm năng khai thác kinh doanh và cho thuê.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/building-daytime-copy-1.jpg",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH NỘI & NGOẠI KHU",
        content: [
          "Tiện ích ngoại khu: trường học các cấp, Công an thành phố Tân Uyên, trung tâm y tế, chợ đêm Tân Uyên, trung tâm hành chính Tân Uyên, KCN Nam Tân Uyên mở rộng, KCN VSIP III, TTHC Bắc Tân Uyên, cầu Bạch Đằng,…",
          "Tiện ích nội khu: công viên xanh rộng lớn, khu thể thao đa năng, trung tâm thương mại nội khu, trường học ngay trong dự án.",
          "Môi trường sống kiểu mẫu mới với không gian xanh, khu sinh hoạt cộng đồng và hệ thống hạ tầng đồng bộ.",
          "Nhà phố được thiết kế hiện đại, thông thoáng, tối ưu ánh sáng tự nhiên và gắn kết không gian xanh quanh nhà.",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG & THIẾT KẾ NHÀ PHỐ",
        content: [
          "Hoàng Nam Uyên Hưng cung cấp đa dạng loại hình đất nền và nhà phố với diện tích từ 61 - 122 m2 cho đất nền và 63 - 72 m2 cho nhà phố.",
          "Thiết kế nhà phố gồm 1 trệt 1 lầu hoặc 1 trệt 2 lầu, công năng đầy đủ: phòng khách, bếp, 2 phòng ngủ, 2 nhà vệ sinh, phòng thờ, ban công.",
          "Không gian sống được thiết kế hài hoà giữa hiện đại và thiên nhiên, chú trọng ánh sáng tự nhiên và mảng xanh.",
          "Quy hoạch nội khu đồng bộ với các dãy nhà phố, shophouse, đường nội bộ và tiện ích xen kẽ.",
        ],
      },
      legal: {
        title: "PHÁP LÝ & CHÍNH SÁCH",
        content: [
          "Hoàng Nam Uyên Hưng sở hữu pháp lý hoàn chỉnh với sổ hồng riêng từng sản phẩm, sẵn sàng xây dựng và sang tên công chứng ngay.",
          "Dự án đã được phê duyệt quy hoạch, giấy phép xây dựng, PCCC và các thủ tục pháp lý liên quan.",
          "Chủ đầu tư và nhà phát triển uy tín, đảm bảo tiến độ và chất lượng dự án.",
          "Ngân hàng hỗ trợ vay vốn lên đến khoảng 70% giá trị sản phẩm, phương thức thanh toán linh hoạt theo tiến độ.",
          'Hoàng Nam Uyên Hưng nổi bật với 5 "điểm sáng": giá tốt, an cư lý tưởng, tiềm năng đầu tư, niềm tin pháp lý và tương lai phát triển cộng đồng văn minh.',
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Liên hệ ngay với nhà phát triển, phân phối chính thức CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING để được tư vấn về Khu đô thị Hoàng Nam Uyên Hưng.",
          "Hotline: 0779 075 168",
          "Email: dainguyenholding@gmail.com",
        ],
      },
    },
  },
  {
    id: 6,
    title: "PHƯỚC ĐIỀN CITIZEN",
    acreage: "1,3 ha",
    year: "Đang cập nhật",
    investors: "Công ty TNHH MTV SX - TM - DV và Xây dựng Hữu Trường",
    thumbnail:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfYxPi6cSUEIMBxHJaEBBPtNpA28Z8RtQ7P7At0mmY6Y2RiQ7qfiC_9t-_fCJEfhtwBbhNvnabLrsa0Zbu5isOdFWsG61iH_A55PSUk8G6ZZewjXnOT8Bgg5KVcIKUoxvxIAb5BY0lTf6TtBzkRU1C2Qzk?key=r6g9zeHL5P7Iba7HwxOjBg",
    location: "Phường Tân Phước Khánh, TP. Tân Uyên, Bình Dương",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          "Phước Điền Citizen là khu dân cư hiện đại tọa lạc tại phường Tân Phước Khánh, TP. Tân Uyên, Bình Dương, quy mô 95 căn nhà phố liền kề.",
          "Dự án mang đến không gian sống đẳng cấp, hài hòa giữa kiến trúc hiện đại và thiên nhiên xanh mát, hướng đến cộng đồng cư dân văn minh, an cư lâu dài.",
          "Vị trí chiến lược ngay trung tâm Tân Uyên giúp Phước Điền Citizen kết nối nhanh chóng tới trung tâm thương mại, trường học, bệnh viện và các khu công nghiệp lớn.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/o332-193004.jpg",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Khu Dân Cư Compound Phước Điền Citizen",
        vitri: "Phường Tân Phước Khánh, TP. Tân Uyên, Bình Dương",
        chudautu: "Công ty TNHH MTV SX - TM - DV và Xây dựng Hữu Trường",
        donviphattrien: "CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING",
        tongdientich: "1,3 ha",
        loaihinh: "Nhà phố cao cấp trong khu compound",
        quymoxd: "95 căn nhà phố liền kề",
        dientichnha:
          "Diện tích sản phẩm từ 60 - 120 m2; quy cách xây dựng 1 trệt 1 lầu, 1 trệt 2 lầu theo mẫu.",
        tienich:
          "Công viên nội khu, trường học, trạm y tế, khu trung tâm thương mại, các tiện ích cảnh quan và hạ tầng hoàn chỉnh.",
        csht: "Hạ tầng hoàn thiện, đường nội bộ rộng, hệ thống điện nước, trường trạm đầy đủ.",
        phaply:
          "Pháp lý hoàn thiện, đã có đầy đủ giấy phép xây dựng, chấp thuận đầu tư và quy hoạch chi tiết 1/500.",
        quymo:
          "Tổng 95 sản phẩm nhà phố trong khu compound, mật độ xây dựng hợp lý, không gian sống thoáng đãng.",
        thoigian: "Dự án đã hoàn thiện, sẵn sàng bàn giao cho cư dân vào ở.",
      },
      location: {
        title: "VỊ TRÍ DỰ ÁN",
        content: [
          "Phước Điền Citizen nằm tại phường Tân Phước Khánh, TP. Tân Uyên – khu vực phát triển mạnh mẽ về công nghiệp và dịch vụ.",
          "Dự án nằm gần các KCN lớn như VSIP II, Sóng Thần 3, Nam Tân Uyên, tạo lợi thế về nhu cầu an cư của chuyên gia và người lao động.",
          "Hạ tầng giao thông khu vực ngày càng hoàn thiện với các tuyến DT746, DT747, Mỹ Phước - Tân Vạn, kết nối nhanh tới Thủ Dầu Một, Dĩ An và TP. Hồ Chí Minh.",
          "Vị trí này giúp Phước Điền Citizen sở hữu tiềm năng gia tăng giá trị và tính thanh khoản cao trong tương lai.",
        ],
        images: [
          "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdkigVN_m_08_KtrF0O4ZMpOKeIANx-t1zoTZW0jMfhN5UNapzQhQZa6Y4S_noCDHkTymHAPVRzWnPehPcoX6rYXqOGEsLc2-VWqAkoChtUYgqAojphwUe2lXhx1OV0KbcZtoa5ZNQv8lMge0q0R4qFTl0?key=r6g9zeHL5P7Iba7HwxOjBg",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH NỘI & NGOẠI KHU",
        content: [
          "Tiện ích ngoại khu: chỉ trong khoảng 10 phút di chuyển, cư dân có thể tiếp cận khu vui chơi, trường học, bệnh viện, trung tâm thương mại và các khu dịch vụ giải trí.",
          "Dự án gần khu du lịch câu cá Bảo Hồ Năm, tạo không gian thư giãn, vui chơi cuối tuần cho gia đình.",
          "Tiện ích nội khu: trường học, trạm y tế, khu trung tâm thương mại, công viên cây xanh đáp ứng nhu cầu sinh hoạt, thư giãn của cư dân.",
          "Khuôn viên được trang bị hệ thống camera an ninh 24/24, đảm bảo an toàn cho cư dân.",
          "Đường nội khu thiết kế kiểu bàn cờ, rộng rãi, thông thoáng, thuận lợi lưu thông.",
        ],
        images: [
          "https://lh7-rt.googleusercontent.com/docsz/AD_4nXfYxPi6cSUEIMBxHJaEBBPtNpA28Z8RtQ7P7At0mmY6Y2RiQ7qfiC_9t-_fCJEfhtwBbhNvnabLrsa0Zbu5isOdFWsG61iH_A55PSUk8G6ZZewjXnOT8Bgg5KVcIKUoxvxIAb5BY0lTf6TtBzkRU1C2Qzk?key=r6g9zeHL5P7Iba7HwxOjBg",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG",
        content: [
          "Dự án được quy hoạch trên diện tích 1,3 ha với tổng 95 sản phẩm nhà phố diện tích từ 60 - 75 m2 mỗi căn.",
          "Mặt bằng phân lô khoa học, tối ưu công năng sử dụng và phù hợp nhiều nhu cầu an cư, đầu tư.",
          "Chủ đầu tư chú trọng bàn giao hạ tầng hoàn chỉnh, đảm bảo môi trường sống đồng bộ, hiện đại cho cư dân.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/08135511-mat-bang-tong-the-phuocdiencitizen.jpg",
        ],
      },
      legal: {
        title: "PHÁP LÝ & TIẾN ĐỘ",
        content: [
          "Phước Điền Citizen có pháp lý hoàn thiện với đầy đủ giấy phép xây dựng, chấp thuận đầu tư và quy hoạch chi tiết 1/500.",
          "Mỗi sản phẩm tại dự án đều có sổ hồng riêng, sẵn sàng sang tên công chứng ngay, đảm bảo quyền lợi chủ sở hữu.",
          "Dự án đã hoàn thành toàn bộ hạ tầng và nhà phố liền kề, cư dân có thể dọn vào ở ngay.",
          "Tiến độ thi công đảm bảo, chất lượng xây dựng vượt trội, tạo niềm tin vững chắc cho khách hàng và nhà đầu tư.",
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Liên hệ với đơn vị phát triển, phân phối chính thức CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING để nhận tư vấn chi tiết về Phước Điền Citizen.",
          "Hotline: 0779 075 168",
          "Email: dainguyenholding@gmail.com",
        ],
      },
    },
  },
  {
    id: 7,
    title: "AN RESIDENCE - PHÂN KHU THUẬN AREA",
    acreage: "23.811 m2",
    year: "Đang cập nhật",
    investors: "Công ty TNHH Đầu tư và Phát triển Lê Phong",
    thumbnail:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXemkB3ejEBqVjcFcQVVgd4uWDRYiy5OdZUf8D71jaAJUCZLGpdgRtZpOhC61f5Cuh8nz-7eP2XZg_LvXYilvbFVhSpuO_FWmqFCJd5UVqwYh31uhRJu_WtY97VHKwyQKMHOhl6LyXUyKJFejUJ1EzEk_RJg?key=r6g9zeHL5P7Iba7HwxOjBg",
    location: "P. Thuận Giao, TP. Thuận An, Bình Dương",
    sections: {
      introduction: {
        title: "GIỚI THIỆU",
        content: [
          "Khu dân cư – thương mại An Residence là dự án đất nền, nhà phố tại thành phố Thuận An, Bình Dương do Công ty TNHH Đầu tư và Phát triển Lê Phong làm chủ đầu tư.",
          "Với quy mô 156 lô, trong đó có 20 căn nhà phố, diện tích trung bình từ 67 – 126 m2, dự án được đánh giá cao về tiềm năng sinh lời và chất lượng không gian sống.",
          "Thuận Area là phân khu thuộc dự án An Residence, được phát triển như một khu compound hiện đại, đáp ứng đồng thời nhu cầu an cư và đầu tư.",
        ],
      },
      overview: {
        title: "TỔNG QUAN DỰ ÁN",
        ten: "Khu dân cư compound An Residence",
        vitri:
          "Đường Thuận An Hòa, phường Thuận Giao, TP. Thuận An, Bình Dương",
        chudautu: "Công ty TNHH Đầu tư và Phát triển Lê Phong",
        donviphattrien: "CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING",
        tongdientich: "23.811 m2",
        loaihinh: "Đất nền và nhà phố thương mại",
        quymoxd:
          "Tổng khoảng 200 sản phẩm, trong đó phân khu Thuận Area gồm 71 lô đất nền và 14 căn nhà phố.",
        dientichnha:
          "Diện tích sản phẩm từ 67 - 136 m2; nhà phố tối ưu công năng, phù hợp an cư và kinh doanh.",
        tienich:
          "Thừa hưởng đầy đủ tiện ích trung tâm TP. Thuận An: trung tâm thương mại, siêu thị, trường học, bệnh viện, công viên…",
        csht: "Hạ tầng hoàn thiện với đường rộng, hệ thống điện âm, hạ tầng an ninh hiện đại.",
        phaply:
          "Pháp lý hoàn chỉnh, đã có sổ hồng riêng cho các sản phẩm tại phân khu Thuận Area.",
        quymo:
          "Phân khu Thuận Area: 71 lô đất nền và 14 căn nhà phố, diện tích 67,5 - 136 m2.",
        thoigian:
          "Đang triển khai kinh doanh, tiềm năng tăng giá cao theo tiến trình phát triển của Thuận An.",
        images: [
          "https://lh7-rt.googleusercontent.com/docsz/AD_4nXemkB3ejEBqVjcFcQVVgd4uWDRYiy5OdZUf8D71jaAJUCZLGpdgRtZpOhC61f5Cuh8nz-7eP2XZg_LvXYilvbFVhSpuO_FWmqFCJd5UVqwYh31uhRJu_WtY97VHKwyQKMHOhl6LyXUyKJFejUJ1EzEk_RJg?key=r6g9zeHL5P7Iba7HwxOjBg",
        ],
      },
      location: {
        title: "VỊ TRÍ DỰ ÁN",
        content: [
          "Thuận Area thuộc dự án An Residence nằm trên đường Thuận An Hòa, phường Thuận Giao, trung tâm TP. Thuận An, tỉnh Bình Dương.",
          "Vị trí đắc địa giúp kết nối thuận tiện với Quốc lộ 13, ĐT 743 và cao tốc Mỹ Phước – Tân Vạn, tạo lợi thế lớn về giao thông.",
          "Dự án gần các khu công nghiệp lớn như VSIP 1 và KCN Việt Hương, thu hút cộng đồng chuyên gia, kỹ sư và người lao động có thu nhập ổn định.",
          "Vị trí chiến lược mang lại tiềm năng phát triển kinh tế, thương mại và gia tăng giá trị bất động sản trong dài hạn.",
        ],
      },
      amenities: {
        title: "TIỆN ÍCH",
        content: [
          "Thuận Area thừa hưởng hệ thống tiện ích ngoại khu phong phú tại trung tâm TP. Thuận An: Aeon Mall Bình Dương, Lotte Mart cùng nhiều trung tâm thương mại, siêu thị lớn.",
          "Gần hệ thống trường học các cấp, bệnh viện uy tín như Bệnh viện Quốc tế Columbia, Becamex, đáp ứng nhu cầu giáo dục và chăm sóc sức khỏe.",
          "Khu vực có nhiều công viên, khu vui chơi giải trí, nhà hàng, tạo không gian vui chơi – giải trí tiện nghi cho cư dân.",
          "Nhờ vị trí trung tâm, cư dân Thuận Area dễ dàng tiếp cận các tiện ích xung quanh: 5 phút đến VSIP 1, 7 phút đến Aeon Mall, 10 phút đến sân Golf Sông Bé, 15 phút đến BV Becamex và 30 phút đến TP.HCM.",
          "Sự kết hợp giữa tiện ích sống và lợi thế vị trí giúp Thuận Area trở thành nơi an cư lý tưởng và kênh đầu tư tiềm năng.",
        ],
        images: [
          "https://conaland.vn/upload/elfinder/SO%20DO%20TIEN%20ICH.jpg",
        ],
      },
      floorPlan: {
        title: "MẶT BẰNG",
        content: [
          "Phân khu Thuận Area được quy hoạch đồng bộ với 71 lô đất nền và 14 căn nhà phố.",
          "Diện tích sản phẩm đa dạng từ 67,5 - 136 m2, phù hợp nhiều nhu cầu sử dụng và đầu tư.",
          "Quy hoạch mặt bằng hướng tới không gian sống tiện nghi, thông thoáng, gắn kết cộng đồng.",
          "Hệ thống đường nội bộ, cây xanh và hạ tầng kỹ thuật được bố trí khoa học, đảm bảo mỹ quan và công năng sử dụng.",
        ],
      },
      legal: {
        title: "PHÁP LÝ & TIỀM NĂNG PHÁT TRIỂN",
        content: [
          "Thuận Area sở hữu pháp lý minh bạch, đã có sổ hồng riêng cho từng nền, đảm bảo quyền lợi sở hữu lâu dài cho khách hàng.",
          "Dự án đã hoàn thiện đầy đủ thủ tục pháp lý và giấy phép xây dựng, tạo sự an tâm tuyệt đối cho người mua.",
          "Hạ tầng hoàn thiện, an ninh hiện đại, nhu cầu nhà ở cao nhờ Thuận An là trung tâm công nghiệp – dịch vụ của Bình Dương.",
          "Tính thanh khoản tốt nhờ vị trí chiến lược, gần các khu kinh tế trọng điểm và trục giao thông chính.",
          "An Residence nói chung và Thuận Area nói riêng là lựa chọn hấp dẫn cho cả khách hàng ở thực lẫn nhà đầu tư tìm kiếm kênh đầu tư bền vững.",
        ],
        images: [
          "https://bdstngroup.vn/upload/filemanager/files/mau-nha-pho-3-tang_1view-2048x1152.jpg",
        ],
      },
      contact: {
        title: "LIÊN HỆ",
        content: [
          "Liên hệ với nhà phát triển, phân phối chính thức CÔNG TY TNHH ĐẦU TƯ VÀ DỊCH VỤ ĐẠI NGUYÊN HOLDING để nhận tư vấn chi tiết về An Residence - Thuận Area.",
          "Hotline: 0779 075 168",
          "Email: dainguyenholding@gmail.com",
        ],
      },
    },
  },
];
