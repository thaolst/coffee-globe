// Page-level editorial content for the Coffee Atlas long-form page (VI + EN).
window.CoffeePage = window.CoffeePage || {};
window.CoffeePage.PAGE = {
  vi: {
    site: "Coffee Globe",
    tagline: "Hồ sơ cà phê thế giới",
    langLabel: "VI",
    nav: [
      { id: "overview", label: "Giới thiệu" },
      { id: "species", label: "Giống" },
      { id: "map", label: "Bản đồ" },
      { id: "process", label: "Từ hạt đến ly" },
      { id: "brewing", label: "Cách pha" },
      { id: "tasting", label: "Hương vị" },
      { id: "history", label: "Lịch sử" },
      { id: "vietnam", label: "Việt Nam" },
      { id: "health", label: "Sức khỏe" },
      { id: "economy", label: "Kinh tế" },
      { id: "glossary", label: "Thuật ngữ" },
      { id: "sources", label: "Nguồn" }
    ],
    search: {
      placeholder: "Tìm trong trang: robusta, phin, caffeine…",
      empty: "Không tìm thấy. Thử: arabica, pour-over, độ cao, giá cà phê.",
      count: n => `${n} kết quả`,
      hint: "Nhấn / để tìm"
    },
    hero: {
      title: "Cà phê",
      subtitle: "Một hạt giống từ rừng núi Ethiopia, hai loài cây, bảy mươi quốc gia và hơn hai tỉ ly mỗi ngày.",
      byline: "Coffee Globe · Cập nhật mùa 2024-2025",
      heroCaption: "Quả cà phê chín trên cành, bên trong mỗi quả thường có hai hạt úp mặt vào nhau.",
      heroSlot: "Kéo ảnh cành cà phê chín vào đây"
    },
    infobox: {
      title: "Nhìn nhanh",
      rows: [
        ["Tên khoa học", "Coffea arabica · Coffea canephora"],
        ["Họ", "Rubiaceae (họ Thiến thảo)"],
        ["Nguồn gốc", "Cao nguyên Ethiopia"],
        ["Hai loài thương mại", "Arabica ~57% · Robusta ~43%"],
        ["Sản lượng thế giới", "174,4 triệu bao (60 kg/bao)"],
        ["Nước trồng nhiều nhất", "Brazil (37% thế giới)"],
        ["Nước Robusta số 1", "Việt Nam (>95% là Robusta)"],
        ["Số nước trồng", "Khoảng 70, trong vành đai quanh xích đạo"],
        ["Caffeine mỗi ly 240 ml", "80-120 mg (cà phê pha)"]
      ],
      note: "Số liệu sản lượng: USDA & ICO, mùa 2024-2025.",
      slot: "Ảnh hạt cà phê rang"
    },
    sections: {
            overview: {
        n: "01",
        title: "Một trang web, cả thế giới cà phê",
        lede: "Có một thức uống bạn cầm trên tay gần như mỗi ngày mà ít khi dừng lại hỏi: nó từ đâu tới, và vì sao nó có vị này mà không phải vị khác? Trang này kể hành trình đó - từ quả mọng đỏ trên cây, qua bàn tay người trồng, người rang, đến tách cà phê đang bốc khói trước mặt bạn.",
        paras: [
          "Mọi chuyện bắt đầu từ hai loài cây. Arabica dịu dàng, thanh thoát, chỉ ưa cao nguyên mát lành; Robusta mạnh mẽ, đắng đậm, bám rễ khoẻ nơi đồng bằng nóng ẩm. Chúng khác nhau từ hình hài hạt đến cá tính trong ly - và chính khác biệt ấy làm nên vị cà phê bạn yêu thích.",
          "Cùng một hạt, mỗi cách pha lại kể một câu chuyện riêng: khi thì đậm đặc, dồn dập như espresso Ý; khi thì chậm rãi, trong veo như phin Việt Nam. Tám cách pha quen thuộc nhất đang chờ bạn ở mục “Cách pha”.",
          "Còn Việt Nam - nơi bạn đang đọc những dòng này - có một chương đặc biệt trong câu chuyện: quê hương của Robusta, của phin và cà phê sữa đá, nước sản xuất cà phê lớn thứ hai thế giới."
        ],
        facts: [
          ["20", "nước trên bản đồ - bấm để xem từng nước"],
          ["2 loài", "Arabica & Robusta nuôi cả thế giới"],
          ["8", "cách pha, từ Espresso đến phin"],
          ["2 tỉ+", "ly cà phê được uống mỗi ngày"]
        ],
        pull: "Cà phê là loại nông sản hiếm hoi mà chất lượng được quyết định ở cả năm nơi: vườn, sân phơi, nhà rang, cối xay và cuối cùng là bàn tay bạn."
      },
species: {
        n: "02",
        title: "Hai loài cây chia nhau cả thế giới",
        lede: "Có hơn một trăm loài Coffea, nhưng chỉ hai loài nuôi cả ngành cà phê. Chúng khác nhau ở hình hạt, độ cao, lượng caffeine, và ở toàn bộ tính cách trong ly.",
        note: "Ngoài ra còn Liberica và Excelsa (Việt Nam gọi là cà phê mít), chỉ khoảng 1-2% sản lượng thế giới, đang được quan tâm trở lại vì chịu nóng tốt.",
        slotA: "Ảnh hạt Arabica",
        slotB: "Ảnh hạt Robusta"
      },
      map: {
        n: "03",
        title: "Ai đang trồng cà phê cho cả thế giới?",
        lede: "Hai mươi nước trồng nhiều nhất, trên một bản đồ. Bấm vào vùng của một nước, hoặc vào chấm sản lượng, để xem hồ sơ.",
        hint: "Bấm vào nước trên bản đồ",
        legendTitle: "Giống trồng chủ yếu",
        rankTitle: "Xếp hạng sản lượng",
        rankSub: "Triệu bao 60 kg, mùa 2024-2025 (USDA)."
      },
      process: {
        n: "04",
        title: "Từ hạt đến ly",
        lede: "Bảy bước, mỗi bước đều có thể làm hỏng hoặc làm nên một ly cà phê ngon.",
        steps: [
          ["Thu hoạch", "Hái chọn từng quả chín bằng tay (chất lượng cao) hoặc hái tuốt cả cành, có nơi dùng máy. Một cây cho khoảng 2,5-5 kg quả mỗi vụ, đủ cho chừng nửa kilogam cà phê rang."],
          ["Sơ chế", "Tách hạt khỏi thịt quả. Chế biến ướt cho ly sạch, chua thanh; chế biến khô (natural) phơi cả quả, cho vị ngọt và hương trái chín; honey nằm giữa hai lối."],
          ["Phơi & bảo quản", "Hạ độ ẩm hạt xuống khoảng 10-12% trên sân phơi hoặc giàn lưới. Phơi vội thì hạt nứt, phơi chậm thì lên men lỗi."],
          ["Xay vỏ & phân loại", "Bóc lớp vỏ trấu, phân loại theo cỡ hạt, tỉ trọng và màu. Người ta loại bỏ hạt lỗi ở đây, một hạt lên men xấu đủ làm hỏng cả ấm."],
          ["Xuất khẩu", "Đóng bao 60 kg hoặc túi chống ẩm, đi tàu. Từ lúc này cà phê là một loại hàng hóa có giá niêm yết trên sàn New York và London."],
          ["Rang", "8-14 phút ở 190-230°C. Rang nhạt giữ axit và hương hoa quả; rang đậm đẩy vị về socola, khói và đắng. Đây là bước biến đổi lớn nhất."],
          ["Xay & pha", "Cỡ xay phải khớp với thời gian nước tiếp xúc: mịn cho espresso 25 giây, thô cho French press 4 phút. Cà phê xay sẵn mất phần lớn hương thơm trong 15 phút."]
        ],
        slot: "Ảnh sân phơi cà phê"
      },
      brewing: {
        n: "05",
        title: "Cách pha: cùng một hạt, mười ly khác nhau",
        lede: "Muốn pha ngon, chỉ cần nắm ba yếu tố: bột xay mịn hay thô, lượng nước so với lượng cà phê, và thời gian nước tiếp xúc với bột. Mỗi cách pha chỉ là một cách khác nhau để cân bằng ba yếu tố đó.",
        cols: ["Tỉ lệ", "Cỡ xay", "Thời gian"],
        methods: [
          ["Espresso", "Ý", "1 : 2", "Rất mịn", "25-30 giây", "Nước nóng bị ép qua bánh bột dưới áp suất 9 bar. Cho ra 25-30 ml đặc sánh với lớp crema, nền của cappuccino, latte, americano."],
          ["Phin Việt Nam", "Việt Nam", "1 : 6", "Trung bình - thô", "4-6 phút", "Nước nhỏ giọt chậm qua phin nhôm hoặc inox. Robusta rang đậm cho ly đặc, đắng sâu; thêm sữa đặc và đá thành cà phê sữa đá."],
          ["Pour-over", "Nhật · Mỹ", "1 : 16", "Trung bình", "2,5-3,5 phút", "Rót nước theo vòng tròn qua giấy lọc. Ly trong, tách bạch từng lớp hương, cách pha ưa thích của cà phê đặc sản."],
          ["French press", "Pháp", "1 : 15", "Thô", "4 phút", "Ngâm toàn phần rồi ép lưới kim loại. Giữ lại dầu và hạt mịn nên ly dày, tròn, ít sắc nét."],
          ["Moka pot", "Ý", "1 : 10", "Mịn - trung bình", "3-4 phút", "Áp suất hơi nước đẩy nước lên qua bột. Đậm gần espresso nhưng không có crema thật."],
          ["Cold brew", "Nhật · Mỹ", "1 : 8", "Thô", "12-18 giờ", "Ngâm nước lạnh rất lâu. Ít axit hơn hẳn, ngọt và mượt, giữ được vài ngày trong tủ lạnh."],
          ["Cà phê Thổ Nhĩ Kỳ", "Thổ Nhĩ Kỳ", "1 : 10", "Mịn như bột", "3-4 phút", "Đun bột cùng nước trong ấm cezve, rót cả bã vào tách. Đặc, thơm, uống chậm, di sản UNESCO."],
          ["AeroPress", "Mỹ", "1 : 14", "Trung bình - mịn", "1-2 phút", "Ngâm ngắn rồi ép bằng tay qua giấy lọc. Linh hoạt nhất, dễ lặp lại, gọn để mang đi."]
        ],
        slot: "Ảnh phin cà phê hoặc bộ pour-over"
      },
      tasting: {
        n: "06",
        title: "Nếm cà phê như người thẩm định",
        lede: "Giới chuyên môn dùng phương pháp cupping: cùng một tỉ lệ, cùng nhiệt độ, nếm mù. Bạn không cần bàn cupping, chỉ cần biết mình đang tìm gì.",
        axes: [
          ["Hương", "Mùi bột khô và mùi khi gặp nước nóng, thường là nơi hiện ra hoa, gia vị, trái cây."],
          ["Độ chua", "Cảm giác sáng, giòn nơi hai bên lưỡi. Chua ngon giống chanh hoặc táo, không phải chua giấm."],
          ["Độ ngọt", "Đến từ quả chín và rang đúng. Ngọt là dấu hiệu rõ nhất của hạt hái đúng lúc."],
          ["Body", "Độ dày trong miệng: từ mỏng như trà đến sánh như sữa. Robusta và French press thường dày hơn."],
          ["Hậu vị", "Những gì còn lại sau khi nuốt. Càng dài, càng sạch, càng đáng giá."]
        ],
        wheel: [
          ["Hoa quả", ["dâu", "việt quất", "chanh vàng", "cam", "táo", "nho khô"]],
          ["Ngọt & rang", ["socola sữa", "cacao đen", "caramel", "mật mía", "hạt dẻ", "bánh nướng"]],
          ["Gia vị & thảo mộc", ["quế", "đinh hương", "thuốc lá", "gỗ tuyết tùng", "cỏ tươi"]],
          ["Vị lỗi cần biết", ["đất ẩm", "cao su", "lên men quá", "cháy khét", "chua giấm"]]
        ],
        howto: [
          "Xay ngay trước khi pha; mùi thơm mất nhanh nhất trong 15 phút đầu.",
          "Nếm ba lần: nóng, ấm, và gần nguội. Vị ngọt và lỗi chỉ hiện rõ khi nguội.",
          "Nếm hai ly cạnh nhau. So sánh dễ hơn miêu tả."
        ]
      },
      history: {
        n: "07",
        title: "Hành trình của hạt cà phê",
        lede: "Một loại quả mà dê ăn trước cả người. Từng bị coi là thứ của ma quỷ, bị cấm, bị giữ độc quyền, bị đánh cắp giống đem đi vòng quanh thế giới, để rồi thành thức uống được uống nhiều nhất hành tinh sau nước lọc."
      },
      vietnam: {
        n: "08",
        title: "Việt Nam: thứ hai thế giới, số một về Robusta",
        lede: "Từ vài cây thử nghiệm quanh nhà thờ miền Bắc năm 1857 đến 29 triệu bao mỗi năm, một trong những bước nhảy nhanh nhất trong lịch sử nông nghiệp thế giới.",
        paras: [
          "Đất đỏ bazan Tây Nguyên, mùa khô rõ rệt và độ cao 500-800 m là tổ hợp gần như hoàn hảo cho Robusta. Ba tỉnh Đắk Lắk, Lâm Đồng và Đắk Nông trồng phần lớn cà phê cả nước, phần nhiều trên các nông hộ chỉ vài hecta.",
          "Trong nhiều thập kỷ, cà phê Việt Nam được biết đến vì số lượng và giá rẻ. Điều đó đang đổi. Một thế hệ thợ rang và nông dân mới đầu tư vào hái chọn quả chín, sơ chế honey và natural, lên men có kiểm soát, chứng minh rằng Robusta không chỉ nhiều mà còn có thể rất ngon. Cùng lúc, Arabica ở Cầu Đất và Sơn La đang tìm được vị trí riêng.",
          "Bên trong nước, cà phê là văn hóa trước khi là hàng hóa: phin nhỏ giọt trên ly sữa đặc, cà phê trứng Hà Nội, cà phê muối Huế, cà phê dừa Sài Gòn. Không nơi nào khác trên thế giới uống Robusta nhiều và uống một cách tự tin như vậy."
        ],
        stats: [
          ["29 triệu bao", "mùa 2024-2025"],
          ["~17%", "cà phê toàn cầu"],
          [">95%", "sản lượng là Robusta"],
          ["gần 100×", "so với sản lượng 1986"]
        ],
        regions: [
          ["Đắk Lắk", "500-700 m", "Vùng Robusta lớn nhất nước; Buôn Ma Thuột là thủ phủ cà phê."],
          ["Lâm Đồng", "800-1.650 m", "Cả Robusta và Arabica; Cầu Đất là vùng Arabica nổi tiếng nhất."],
          ["Đắk Nông - Gia Lai", "500-800 m", "Robusta trên đất bazan, phần lớn là nông hộ nhỏ."],
          ["Sơn La - Điện Biên", "1.000-1.300 m", "Arabica miền núi phía Bắc, sơ chế ướt, đang lên nhanh."]
        ],
        slot: "Ảnh nông trại hoặc quán cà phê Việt Nam"
      },
      health: {
        n: "09",
        title: "Caffeine và cơ thể bạn",
        lede: "Cà phê là nguồn caffeine phổ biến nhất của loài người. Điều nó làm với cơ thể khá rõ ràng, và phụ thuộc nhiều vào liều lượng và giờ uống.",
        points: [
          ["Cách nó làm bạn tỉnh", "Caffeine không tạo ra năng lượng. Nó chỉ chặn adenosine, chất báo hiệu buồn ngủ tích tụ trong ngày. Khi caffeine hết tác dụng, số adenosine đó vẫn còn, nên bạn cảm thấy sụt hẳn."],
          ["Bao lâu thì hết", "Nửa đời sinh học của caffeine khoảng 5 giờ. Ly cà phê 3 giờ chiều vẫn còn một nửa lượng caffeine trong người lúc 8 giờ tối, lý do phổ biến nhất của giấc ngủ nông."],
          ["Bao nhiêu là hợp lý", "Các cơ quan an toàn thực phẩm xem tới khoảng 400 mg mỗi ngày (3-4 ly pha) là an toàn với người lớn khỏe mạnh; phụ nữ mang thai thường được khuyên giữ dưới 200 mg."],
          ["Điểm cộng và điểm trừ", "Uống vừa phải gắn với sự tỉnh táo, hiệu suất bền hơn và một số lợi ích chuyển hóa trong các nghiên cứu dài hạn. Quá liều thì tim nhanh, bồn chồn, đau dạ dày, mất ngủ."]
        ],
        caffeineTitle: "Caffeine trong một khẩu phần thông thường",
        caffeine: [
          ["Espresso (30 ml)", 63, "mg"],
          ["Cà phê pha (240 ml)", 95, "mg"],
          ["Phin Robusta (100 ml)", 140, "mg"],
          ["Cold brew (240 ml)", 150, "mg"],
          ["Trà đen (240 ml)", 47, "mg"],
          ["Nước tăng lực (250 ml)", 80, "mg"]
        ],
        note: "Con số là giá trị điển hình; cùng một cách pha có thể chênh nhau gấp đôi tùy hạt, cỡ xay và tỉ lệ. Đây là thông tin tham khảo, không phải tư vấn y tế."
      },
      economy: {
        n: "10",
        title: "Ai được bao nhiêu trong ly cà phê",
        lede: "Cà phê là một trong những nông sản được giao dịch nhiều nhất thế giới. Giá bạn trả và giá người trồng nhận gần như không liên quan đến nhau.",
        paras: [
          "Cà phê chưa rang được mua bán trên hai sàn: Arabica ở New York (hợp đồng “C”), Robusta ở London. Giá dao động theo thời tiết Brazil, tỉ giá, chi phí vận tải biển và cả đầu cơ, nông dân nhận giá của một thị trường mà họ không có tiếng nói.",
          "Trong một ly cà phê pha ở quán thành phố, phần tiền về tay người trồng thường chỉ là một phần rất nhỏ. Phần lớn giá trị nằm ở khâu rang, thương hiệu, mặt bằng và nhân công phục vụ. Đó là lý do các phong trào direct trade, fair trade và mua theo lô cố gắng dịch chuyển vài điểm phần trăm ấy về phía đầu chuỗi.",
          "Rủi ro lớn nhất của thập kỷ tới không phải giá mà là khí hậu. Arabica cần khoảng 18-22°C; nhiệt độ tăng đẩy vùng trồng lên cao hơn, trong khi núi thì không cao thêm. Nhiều nghiên cứu cho rằng đến 2050 diện tích phù hợp cho Arabica có thể giảm khoảng một nửa, và đó là lúc Robusta chịu nhiệt, cùng những loài bị lãng quên như Liberica, trở nên quan trọng."
        ],
        chainTitle: "Giá trị đi đâu (ước tính điển hình cho một ly ở quán)",
        chain: [
          ["Người trồng", 8],
          ["Sơ chế & xuất khẩu", 10],
          ["Vận chuyển & nhập khẩu", 7],
          ["Nhà rang", 15],
          ["Quán: mặt bằng, nhân sự, thuế, lợi nhuận", 60]
        ],
        chainNote: "Tỉ lệ minh họa, thay đổi rất nhiều theo thị trường và chuỗi cung ứng.",
        slot: "Ảnh bao cà phê hoặc cảng xuất khẩu"
      },
      glossary: {
        n: "11",
        title: "Thuật ngữ",
        lede: "Những từ bạn sẽ gặp trên bao cà phê và trong thực đơn. Các từ được gạch chân trong bài đều dẫn về đây."
      },
      sources: { n: "12", title: "Nguồn tham khảo" }
    },
    terms: [
      ["Arabica", "Loài Coffea arabica: hạt dài, rãnh cong, trồng ở độ cao, ít caffeine, vị chua thanh và thơm. Khoảng 57% cà phê thế giới."],
      ["Robusta", "Loài Coffea canephora: hạt tròn, rãnh thẳng, chịu nhiệt và bệnh, caffeine gần gấp đôi Arabica, vị đậm và đắng."],
      ["Cherry", "Quả cà phê. Chín từ xanh sang đỏ thẫm, bên trong thường có hai hạt."],
      ["Bao 60 kg", "Đơn vị chuẩn của ngành cà phê. Mọi số liệu sản lượng thế giới đều tính bằng bao 60 kg cà phê nhân."],
      ["Chế biến ướt", "Bóc thịt quả và lên men trong nước trước khi phơi. Cho ly sạch, chua thanh, rõ nét."],
      ["Natural", "Phơi cả quả dưới nắng rồi mới xay vỏ. Cho vị ngọt đậm và hương trái chín, đôi khi lên men."],
      ["Honey", "Bóc vỏ nhưng giữ lại lớp nhớt khi phơi. Nằm giữa chế biến ướt và natural."],
      ["Crema", "Lớp bọt vàng nâu trên mặt espresso, do khí CO₂ trong hạt mới rang bị nhũ hóa dưới áp suất."],
      ["Cupping", "Quy trình thẩm định chuẩn hóa: nếm mù nhiều mẫu cùng tỉ lệ và nhiệt độ để cho điểm."],
      ["Body", "Cảm giác dày, đầy trong miệng, từ mỏng như trà đến sánh như sữa."],
      ["Độ cao", "Chiều cao so với mực nước biển của vườn cà phê. Càng cao, quả chín càng chậm, thường càng ngọt và thơm."],
      ["Specialty", "Cà phê được hội đồng thẩm định cho từ 80 điểm trở lên trên thang 100, truy xuất được nguồn gốc."],
      ["Hợp đồng C", "Hợp đồng tương lai của Arabica trên sàn New York, mốc giá tham chiếu cho phần lớn giao dịch Arabica thế giới."]
    ],
    footer: {
      about: "Coffee Globe là một trang thông tin: cà phê là gì, trồng ở đâu, pha thế nào và giá trị đi về đâu.",
      sourcesH: "Về số liệu",
      note: "Sản lượng theo ước tính USDA và ICO mùa 2024-2025. Tỉ lệ giống, mô tả hương vị, lượng caffeine và phân chia giá trị là giá trị tham khảo phổ biến trong ngành, không phải kết quả đo lường. Bản đồ chỉ mang tính minh họa.",
      copy: "© 2026 Coffee Globe. Nội dung để tham khảo, không dùng cho mục đích mua bán hay tư vấn y tế."
    },
    ui: { top: "Về đầu trang", contents: "Nội dung", close: "Đóng", seeOnMap: "Xem trên bản đồ", chapter: "Chương" }
  },

  en: {
    site: "Coffee Globe",
    tagline: "A world profile of coffee",
    langLabel: "EN",
    nav: [
      { id: "overview", label: "About" },
      { id: "species", label: "Species" },
      { id: "map", label: "Map" },
      { id: "process", label: "Bean to cup" },
      { id: "brewing", label: "Brewing" },
      { id: "tasting", label: "Flavor" },
      { id: "history", label: "History" },
      { id: "vietnam", label: "Vietnam" },
      { id: "health", label: "Health" },
      { id: "economy", label: "Economics" },
      { id: "glossary", label: "Glossary" },
      { id: "sources", label: "Sources" }
    ],
    search: {
      placeholder: "Search the page: robusta, phin, caffeine…",
      empty: "Nothing found. Try: arabica, pour-over, altitude, coffee price.",
      count: n => `${n} results`,
      hint: "Press / to search"
    },
    hero: {
      title: "Coffee",
      subtitle: "One seed from the forests of Ethiopia, two species, seventy countries and more than two billion cups a day.",
      byline: "Coffee Globe · Updated for the 2024-2025 season",
      heroCaption: "Ripe coffee cherries on the branch, most hold two seeds pressed flat against each other.",
      heroSlot: "Drop a photo of ripe coffee cherries"
    },
    infobox: {
      title: "At a glance",
      rows: [
        ["Scientific name", "Coffea arabica · Coffea canephora"],
        ["Family", "Rubiaceae"],
        ["Origin", "Ethiopian highlands"],
        ["Commercial species", "Arabica ~57% · Robusta ~43%"],
        ["World production", "174.4 million bags (60 kg each)"],
        ["Largest grower", "Brazil (37% of the world)"],
        ["Top Robusta grower", "Vietnam (>95% Robusta)"],
        ["Growing countries", "About 70, in a belt around the equator"],
        ["Caffeine per 240 ml", "80-120 mg (brewed coffee)"]
      ],
      note: "Production data: USDA & ICO, 2024-2025 season.",
      slot: "Photo of roasted beans"
    },
    sections: {
            overview: {
        n: "01",
        title: "One website, the whole coffee world",
        lede: "A drink you hold almost every day, yet rarely stop to ask: where did it come from, and why does it taste this way and not another? This page tells that journey - from a red cherry on the tree, through the farmer's and roaster's hands, to the steaming cup in front of you.",
        paras: [
          "It all begins with two plants. Arabica - gentle and refined, at home only in cool highlands; Robusta - bold and bitter, thriving in hot lowlands. They differ from the shape of their beans to the character in the cup - and that difference shapes the coffee you love.",
          "The same bean, brewed differently, tells a different story: intense and hurried like an Italian espresso, or slow and clear like a Vietnamese phin. Eight familiar methods await you in the “Brewing” section.",
          "And Vietnam - where you are reading this - holds a special chapter in the story: homeland of Robusta, of the phin and iced milk coffee, and the world's second-largest coffee producer."
        ],
        facts: [
          ["20", "countries on the map - click each one"],
          ["2 species", "Arabica & Robusta feed the world"],
          ["8", "brew methods, from espresso to phin"],
          ["2B+", "cups of coffee drunk every day"]
        ],
        pull: "Coffee is one of the rare crops whose quality is decided in five places: the farm, the drying yard, the roastery, the grinder, and finally your own hands."
      },
species: {
        n: "02",
        title: "Two species share the whole world",
        lede: "There are over a hundred Coffea species, but two carry the industry. They differ in bean shape, altitude and caffeine, and in their entire personality in the cup.",
        note: "Liberica and Excelsa also exist, only about 1-2% of world production, now drawing fresh interest for their heat tolerance.",
        slotA: "Photo of Arabica beans",
        slotB: "Photo of Robusta beans"
      },
      map: {
        n: "03",
        title: "Who grows the world's coffee?",
        lede: "The twenty biggest growers on one map. Click a country's territory, or its production dot, for a profile.",
        hint: "Click a country on the map",
        legendTitle: "Mainly grown",
        rankTitle: "Production ranking",
        rankSub: "Millions of 60 kg bags, 2024-2025 season (USDA)."
      },
      process: {
        n: "04",
        title: "From seed to cup",
        lede: "Seven steps, each able to make or ruin the cup.",
        steps: [
          ["Harvest", "Selective hand picking of ripe cherries (highest quality), stripping whole branches, or machine harvesting. One tree yields 2.5-5 kg of cherries a season, about half a kilo of roasted coffee."],
          ["Processing", "Separating seed from fruit. Washed processing gives a clean, bright cup; natural drying of the whole cherry gives sweetness and ripe fruit; honey sits between the two."],
          ["Drying & storage", "Bringing moisture down to about 10-12% on patios or raised beds. Dry too fast and beans crack; too slow and ferment faults set in."],
          ["Milling & sorting", "Hulling the parchment, then grading by size, density and colour. Defects are removed here, a single bad ferment can spoil a whole brew."],
          ["Export", "Packed in 60 kg bags or barrier liners and shipped. From here coffee is a commodity priced on the New York and London exchanges."],
          ["Roasting", "8-14 minutes at 190-230°C. Light roasts keep acidity and fruit; dark roasts push towards chocolate, smoke and bitterness. The biggest transformation of all."],
          ["Grinding & brewing", "Grind size must match contact time: fine for a 25-second espresso, coarse for a 4-minute French press. Pre-ground coffee loses most of its aroma within 15 minutes."]
        ],
        slot: "Photo of coffee drying beds"
      },
      brewing: {
        n: "05",
        title: "Brewing: one bean, ten different cups",
        lede: "Three things shape every cup: how finely the beans are ground, how much water you use, and how long the water touches the grounds. Each brewing method is just a different balance of those three.",
        cols: ["Ratio", "Grind", "Time"],
        methods: [
          ["Espresso", "Italy", "1 : 2", "Very fine", "25-30 sec", "Hot water forced through a compacted puck at 9 bar. Yields 25-30 ml of syrupy coffee under a layer of crema, the base of cappuccino, latte and americano."],
          ["Vietnamese phin", "Vietnam", "1 : 6", "Medium-coarse", "4-6 min", "Water drips slowly through an aluminium or steel filter. Dark-roast Robusta gives a thick, deeply bitter cup; with condensed milk and ice it becomes cà phê sữa đá."],
          ["Pour-over", "Japan · USA", "1 : 16", "Medium", "2.5-3.5 min", "Water poured in circles through a paper filter. Clean and layered, the specialty world's favourite."],
          ["French press", "France", "1 : 15", "Coarse", "4 min", "Full immersion, then a metal mesh plunge. Oils and fines stay in, so the cup is heavy and round rather than sharp."],
          ["Moka pot", "Italy", "1 : 10", "Fine-medium", "3-4 min", "Steam pressure pushes water up through the grounds. Nearly espresso-strong, but without true crema."],
          ["Cold brew", "Japan · USA", "1 : 8", "Coarse", "12-18 hours", "A very long cold steep. Markedly lower acidity, sweet and smooth, keeps for days refrigerated."],
          ["Turkish coffee", "Türkiye", "1 : 10", "Powder-fine", "3-4 min", "Grounds simmered in a cezve and poured, sediment and all. Thick, aromatic, sipped slowly, a UNESCO heritage practice."],
          ["AeroPress", "USA", "1 : 14", "Medium-fine", "1-2 min", "A short steep, then hand pressure through paper. The most forgiving and repeatable method, and the most portable."]
        ],
        slot: "Photo of a phin or pour-over setup"
      },
      tasting: {
        n: "06",
        title: "Tasting coffee like a grader",
        lede: "Professionals use cupping: same ratio, same temperature, tasted blind. You don't need a cupping table, you just need to know what you're looking for.",
        axes: [
          ["Aroma", "The smell of dry grounds and of the crust when hot water hits, where flowers, spice and fruit usually appear."],
          ["Acidity", "The bright, crisp sensation along the sides of the tongue. Good acidity tastes of lemon or apple, never vinegar."],
          ["Sweetness", "Comes from ripe cherries and a well-judged roast. The clearest sign the fruit was picked at the right moment."],
          ["Body", "Weight in the mouth, from tea-thin to milk-thick. Robusta and French press tend heavier."],
          ["Finish", "What remains after you swallow. The longer and cleaner, the better the coffee."]
        ],
        wheel: [
          ["Fruit", ["strawberry", "blueberry", "lemon", "orange", "apple", "raisin"]],
          ["Sweet & roasty", ["milk chocolate", "dark cocoa", "caramel", "molasses", "hazelnut", "baked bread"]],
          ["Spice & herbal", ["cinnamon", "clove", "tobacco", "cedar", "fresh grass"]],
          ["Faults worth knowing", ["damp earth", "rubber", "over-ferment", "burnt", "vinegary"]]
        ],
        howto: [
          "Grind immediately before brewing; most aroma is gone within 15 minutes.",
          "Taste three times: hot, warm, nearly cold. Sweetness and faults only show as it cools.",
          "Taste two cups side by side. Comparing is far easier than describing."
        ]
      },
      history: {
        n: "07",
        title: "The journey of the coffee bean",
        lede: "A fruit that goats ate before people did. Once called the work of the devil, banned, hoarded, its seeds smuggled across oceans, until it became the most widely drunk beverage on Earth after water."
      },
      vietnam: {
        n: "08",
        title: "Vietnam: second in the world, first in Robusta",
        lede: "From a few experimental plants beside northern churches in 1857 to 29 million bags a year, one of the fastest leaps in world agricultural history.",
        paras: [
          "The red basalt soil of the Central Highlands, a sharply defined dry season and altitudes of 500-800 m make an almost perfect combination for Robusta. Đắk Lắk, Lâm Đồng and Đắk Nông grow most of the country's coffee, largely on smallholdings of a few hectares.",
          "For decades Vietnamese coffee was known for volume and low prices. That is changing. A new generation of farmers and roasters is investing in selective picking, honey and natural processing and controlled fermentation, proving that Robusta can be not only plentiful but very good. Meanwhile Arabica from Cầu Đất and Sơn La is finding its own place.",
          "At home, coffee is culture before it is a commodity: a phin dripping onto condensed milk, egg coffee in Hanoi, salt coffee in Huế, coconut coffee in Saigon. Nowhere else drinks Robusta so much, or so confidently."
        ],
        stats: [
          ["29 million bags", "2024-2025 season"],
          ["~17%", "of global coffee"],
          [">95%", "of output is Robusta"],
          ["~100×", "the 1986 figure"]
        ],
        regions: [
          ["Đắk Lắk", "500-700 m", "The country's largest Robusta region; Buôn Ma Thuột is its coffee capital."],
          ["Lâm Đồng", "800-1,650 m", "Both Robusta and Arabica; Cầu Đất is the best known Arabica area."],
          ["Đắk Nông - Gia Lai", "500-800 m", "Robusta on basalt soil, mostly smallholder farms."],
          ["Sơn La - Điện Biên", "1,000-1,300 m", "Northern mountain Arabica, washed processing, rising fast."]
        ],
        slot: "Photo of a Vietnamese farm or café"
      },
      health: {
        n: "09",
        title: "Caffeine and your body",
        lede: "Coffee is humanity's most common source of caffeine. What it does is reasonably well understood, and depends heavily on dose and timing.",
        points: [
          ["How it wakes you", "Caffeine creates no energy. It blocks adenosine, the sleepiness signal that builds up through the day. When the caffeine wears off, that adenosine is still waiting, hence the crash."],
          ["How long it lasts", "Caffeine's half-life is about five hours. A 3pm coffee still has half its caffeine in you at 8pm, the most common cause of shallow sleep."],
          ["How much is reasonable", "Food-safety agencies consider up to about 400 mg a day (3-4 brewed cups) safe for healthy adults; pregnancy guidance is usually under 200 mg."],
          ["Upsides and downsides", "Moderate intake is associated with alertness, better sustained performance and some metabolic benefits in long-term studies. Too much brings a racing heart, jitters, stomach upset and lost sleep."]
        ],
        caffeineTitle: "Caffeine in a typical serving",
        caffeine: [
          ["Espresso (30 ml)", 63, "mg"],
          ["Brewed coffee (240 ml)", 95, "mg"],
          ["Robusta phin (100 ml)", 140, "mg"],
          ["Cold brew (240 ml)", 150, "mg"],
          ["Black tea (240 ml)", 47, "mg"],
          ["Energy drink (250 ml)", 80, "mg"]
        ],
        note: "Typical values; the same method can vary twofold with bean, grind and ratio. Reference information, not medical advice."
      },
      economy: {
        n: "10",
        title: "Who gets what in a cup of coffee",
        lede: "Coffee is among the most traded agricultural commodities on Earth. The price you pay and the price the farmer receives are almost unrelated.",
        paras: [
          "Green coffee trades on two exchanges: Arabica in New York (the “C” contract) and Robusta in London. Prices swing on Brazilian weather, currencies, freight costs and speculation, growers take the price of a market in which they have no voice.",
          "In a brewed coffee sold in a city café, the grower's share is usually a very small slice. Most of the value sits in roasting, brand, rent and service labour. That is what direct trade, fair trade and lot-based buying try to shift by a few percentage points.",
          "The biggest risk of the coming decade is not price but climate. Arabica wants roughly 18-22°C; warming pushes suitable land uphill, and mountains do not grow taller. Several studies suggest suitable Arabica area could halve by 2050, which is when heat-tolerant Robusta, and forgotten species like Liberica, start to matter."
        ],
        chainTitle: "Where the money goes (typical estimate for a café cup)",
        chain: [
          ["Grower", 8],
          ["Processing & export", 10],
          ["Freight & import", 7],
          ["Roaster", 15],
          ["Café: rent, staff, tax, profit", 60]
        ],
        chainNote: "Illustrative shares; they vary enormously by market and supply chain.",
        slot: "Photo of coffee sacks or an export port"
      },
      glossary: {
        n: "11",
        title: "Glossary",
        lede: "The words you'll meet on a bag and on a menu. Every underlined term in this page links here."
      },
      sources: { n: "12", title: "Sources" }
    },
    terms: [
      ["Arabica", "Coffea arabica: long bean with a curved crease, grown high, lower caffeine, bright and aromatic. About 57% of world coffee."],
      ["Robusta", "Coffea canephora: rounder bean with a straight crease, heat- and disease-tolerant, nearly double the caffeine, bold and bitter."],
      ["Cherry", "The coffee fruit. Ripens from green to deep red and usually holds two seeds."],
      ["60 kg bag", "The industry's standard unit. All world production figures are counted in 60 kg bags of green coffee."],
      ["Washed", "Pulp removed and the seed fermented in water before drying. Gives a clean, bright, well-defined cup."],
      ["Natural", "The whole cherry sun-dried before hulling. Gives heavy sweetness and ripe, sometimes fermented fruit."],
      ["Honey", "Skin removed but sticky mucilage left on during drying. Sits between washed and natural."],
      ["Crema", "The amber foam on an espresso, CO₂ from fresh beans emulsified under pressure."],
      ["Cupping", "The standardised grading ritual: several samples tasted blind at identical ratio and temperature, then scored."],
      ["Body", "The weight and fullness of the coffee in the mouth, from tea-thin to milk-thick."],
      ["Altitude", "Height above sea level of the farm. Higher means slower ripening, usually more sweetness and aroma."],
      ["Specialty", "Coffee scored 80 or above out of 100 by trained graders, with traceable origin."],
      ["C contract", "The New York Arabica futures contract, the reference price for most Arabica trade in the world."]
    ],
    footer: {
      about: "Coffee Globe is an information page: what coffee is, where it grows, how it is brewed and where the value goes.",
      sourcesH: "About the data",
      note: "Production figures follow USDA and ICO estimates for the 2024-2025 season. Species shares, flavour notes, caffeine levels and value splits are common industry reference values, not measurements. The map is illustrative only.",
      copy: "© 2026 Coffee Globe. Reference content only, not for trading or medical advice."
    },
    ui: { top: "Back to top", contents: "Contents", close: "Close", seeOnMap: "See on the map", chapter: "Chapter" }
  }
};

window.CoffeePage.ISO = {
  brazil: "076", vietnam: "704", colombia: "170", indonesia: "360", ethiopia: "231",
  uganda: "800", india: "356", honduras: "340", peru: "604", mexico: "484",
  guatemala: "320", nicaragua: "558", china: "156", costa_rica: "188", tanzania: "834",
  png: "598", ecuador: "218", kenya: "404", el_salvador: "222", rwanda: "646"
};
