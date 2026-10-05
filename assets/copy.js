const copy = {
  en: {
    pageTitle: "Trung Tin Bui — AI Engineer",
    download: "Download CV",
    switchToLight: "Switch to light theme",
    switchToDark: "Switch to dark theme",
    backToTop: "Back to top",
    tocIntro: "Intro",
    tocExperience: "Experience",
    tocProjects: "Projects",
    tocDemos: "Demos",
    tocCapabilities: "Skills",
    tocContact: "Contact",
    location: "Ho Chi Minh City · Vietnam",
    hero: "I turn difficult AI research into systems people can actually use.",
    explore: "Explore selected work",
    introLead: "My work sits where language, vision, and production infrastructure meet.",
    introBody: "I build retrieval systems, AI agents, document intelligence, and computer vision pipelines — then make them reliable enough for real operations.",
    years: "years building AI systems",
    throughput: "higher inference throughput",
    ocr: "handwriting OCR accuracy",
    experienceIndex: "Experience / 2021—Now",
    experience: "Systems shipped,<br>not just studied.",
    loginexDate: "2026—Now",
    loginexRole: "AI Engineer",
    loginexPoint1: "Engineering a license-plate OCR pipeline that turns vehicle imagery into structured plate data for operational workflows.",
    loginexPoint2: "Building an enterprise RAG system with RBAC and ABAC so retrieval respects user roles, resource attributes, and business context.",
    viactRole: "Gen AI Engineer",
    viactPoint1: "Architected and shipped Slack and Jira agents with long-term memory and human approval, cutting task creation time by about 70%.",
    viactPoint2: "Designed end-to-end natural-language CCTV retrieval, enterprise RAG, WhisperX transcription, and handwriting OCR reaching about 90% accuracy on complex forms.",
    viactPoint3: "Productionized live RTSP and vision workloads on Ray Serve; quantization and vLLM reduced GPU memory by about 60% while tripling throughput.",
    grantDate: "Sep—Oct 2025",
    grantRole: "Research Software Engineer",
    grantPoint1: "Built a research discovery engine that indexed large academic corpora and combined vector retrieval with RAG for complex scientific questions.",
    grantPoint2: "Benchmarked semantic retrieval against keyword baselines and documented quality and maintainability trade-offs for a distributed product team.",
    fptRole: "AI Engineer Intern",
    fptPoint1: "Converted enterprise requirements into an internal RAG assistant that made staff knowledge faster to retrieve.",
    fptPoint2: "Prototyped AI workflows with business stakeholders and iterated on answer quality from operational feedback.",
    ivsDate: "Jul 2023—Aug 2024",
    ivsRole: "AI Engineer Intern",
    ivsPoint1: "Prepared large Vietnamese medical datasets for model training and evaluation.",
    ivsPoint2: "Fine-tuned Vistral, PhoGPT, Llama 2, and SeaLLM with LoRA/QLoRA for a specialized medical assistant.",
    ivsPoint3: "Trained and evaluated a BERT classifier that achieved 83% accuracy across 23 medical classes.",
    brainDate: "Aug 2021—Feb 2025",
    brainRole: "Research Assistant · Teaching Assistant",
    brainPoint1: "Applied U-Net, ResNet-50, VGG-16/19, CNN, and YOLOv5 to medical image segmentation and classification, reaching 97% accuracy on skin-disease classification.",
    brainPoint2: "Analyzed brain MRI images for Alzheimer’s classification and built a LangChain/Elasticsearch mental-health RAG system.",
    brainPoint3: "Mentored more than 50 biomedical engineering students in practical AI for Healthcare.",
    projectsIndex: "Selected projects / Public work",
    projects: "Research with<br>a working interface.",
    llamaTitle: "Efficient Medical LLM Fine-Tuning",
    llamaText: "Optimized LLaMa2-7B medical question answering with QLoRA for resource-constrained training. The resulting model achieved a BERTScore F1 of 0.841, close to Gemini at 0.849 and GPT at 0.855, with a smaller model and faster fine-tuning.",
    gasTitle: "Gas Store Operations ERP",
    gasText: "Shipped a three-client operations system: FastAPI and PostgreSQL, a React admin/staff web app, and an offline-first Expo Android client. Implemented dual-mode JWT auth, backend RBAC, idempotent SQLite outbox sync, order-level debt, inventory, cylinder audits, voice notes, Docker Compose, and CI quality gates.",
    mentalTitle: "Mental Health RAG",
    mentalText: "Created a full-stack mental-health knowledge experience using React, LangChain, FastAPI, and Elasticsearch for retrieval-backed conversations.",
    hicardTitle: "HI-CARD",
    hicardText: "Developed a biomedical engineering capstone that connected a Python backend and companion information interface around a practical healthcare use case.",
    vhcorText: "Co-authored a comprehensive Vietnamese healthcare corpus for medical department recognition, presented at the 2023 International Conference on Health Science and Technology.",
    demosIndex: "Product demos / Explainers",
    demos: "Watch the<br>systems work.",
    docmindTitle: "DocMind Ingest",
    docmindText: "MonkeyOCR plugged into RAGFlow as a parser for scanned and handwritten site documents, built for a stated throughput of 1,000+ documents a day.",
    leadscoutTitle: "LeadScout Outreach",
    leadscoutText: "Crawls target URLs, summarizes the news, surfaces the companies worth contacting, and drafts the cold-outreach email for each one.",
    reporterTitle: "SiteSense Reporter",
    reporterText: "An agent that retrieves the day's site data, writes the daily site report, and schedules itself to run again every day.",
    autopilotTitle: "SiteSense Autopilot",
    autopilotText: "Turns one hazard description into a labeled dataset with SAM 3 on Ray, pauses for human review, then trains, evaluates, and retrains on its own.",
    paperLink: "Paper ↗",
    demoLink: "Demo ↗",
    sourceLink: "Source ↗",
    capabilities: "What I build with",
    capAi: "Applied AI",
    capVision: "Vision",
    capSystems: "Systems",
    capInfra: "Infrastructure",
    contactLabel: "Have a hard AI problem?",
    contactTitle: "Let’s make it<br>work in the world.",
    footer: "Designed around language, vision, and motion."
  },
  vi: {
    pageTitle: "Bùi Trung Tín — Kỹ sư AI",
    download: "Tải CV",
    switchToLight: "Chuyển sang giao diện sáng",
    switchToDark: "Chuyển sang giao diện tối",
    backToTop: "Về đầu trang",
    tocIntro: "Giới thiệu",
    tocExperience: "Kinh nghiệm",
    tocProjects: "Dự án",
    tocDemos: "Demo",
    tocCapabilities: "Kỹ năng",
    tocContact: "Liên hệ",
    location: "Thành phố Hồ Chí Minh · Việt Nam",
    hero: "Tôi biến nghiên cứu AI phức tạp thành hệ thống mà con người thực sự sử dụng được.",
    explore: "Xem những công việc tiêu biểu",
    introLead: "Công việc của tôi nằm tại giao điểm của ngôn ngữ, thị giác máy tính và hạ tầng sản phẩm.",
    introBody: "Tôi xây hệ thống truy xuất, AI agent, xử lý tài liệu và pipeline computer vision — rồi làm chúng đủ ổn định để vận hành trong thực tế.",
    years: "năm xây dựng hệ thống AI",
    throughput: "thông lượng suy luận",
    ocr: "độ chính xác OCR chữ viết tay",
    experienceIndex: "Kinh nghiệm / 2021—Nay",
    experience: "Hệ thống đã vận hành,<br>không chỉ nghiên cứu.",
    loginexDate: "2026—Nay",
    loginexRole: "Kỹ sư AI",
    loginexPoint1: "Xây pipeline OCR biển số xe, chuyển hình ảnh phương tiện thành dữ liệu biển số có cấu trúc cho workflow vận hành.",
    loginexPoint2: "Phát triển hệ thống RAG doanh nghiệp với RBAC và ABAC để kết quả truy xuất tuân theo vai trò, thuộc tính tài nguyên và ngữ cảnh nghiệp vụ.",
    viactRole: "Kỹ sư Gen AI",
    viactPoint1: "Kiến trúc và đưa vào vận hành hệ sinh thái Slack/Jira agent có bộ nhớ dài hạn cùng bước duyệt của con người, giảm khoảng 70% thời gian tạo công việc.",
    viactPoint2: "Thiết kế end-to-end hệ thống truy xuất CCTV bằng ngôn ngữ tự nhiên, RAG doanh nghiệp, phiên âm WhisperX và OCR chữ viết tay đạt khoảng 90% trên biểu mẫu phức tạp.",
    viactPoint3: "Productionize luồng RTSP và vision workload trên Ray Serve; lượng tử hóa và vLLM giảm khoảng 60% bộ nhớ GPU, đồng thời tăng thông lượng gấp 3 lần.",
    grantDate: "09—10/2025",
    grantRole: "Kỹ sư phần mềm nghiên cứu",
    grantPoint1: "Xây công cụ khám phá nghiên cứu, lập chỉ mục kho học thuật lớn và kết hợp truy hồi vector với RAG cho câu hỏi khoa học phức tạp.",
    grantPoint2: "Benchmark truy hồi ngữ nghĩa với baseline từ khóa và ghi lại trade-off về chất lượng, khả năng bảo trì cho đội sản phẩm phân tán.",
    fptRole: "Thực tập sinh Kỹ sư AI",
    fptPoint1: "Chuyển yêu cầu doanh nghiệp thành trợ lý RAG nội bộ giúp nhân viên truy xuất tri thức nhanh hơn.",
    fptPoint2: "Prototype workflow AI cùng stakeholder nghiệp vụ và cải thiện chất lượng câu trả lời từ phản hồi vận hành.",
    ivsDate: "07/2023—08/2024",
    ivsRole: "Thực tập sinh Kỹ sư AI",
    ivsPoint1: "Chuẩn bị tập văn bản y khoa tiếng Việt quy mô lớn phục vụ huấn luyện và đánh giá mô hình.",
    ivsPoint2: "Fine-tune Vistral, PhoGPT, Llama 2 và SeaLLM bằng LoRA/QLoRA cho trợ lý y khoa chuyên biệt.",
    ivsPoint3: "Huấn luyện và đánh giá mô hình BERT đạt 83% accuracy trên 23 lớp y khoa.",
    brainDate: "08/2021—02/2025",
    brainRole: "Trợ lý Nghiên cứu · Trợ giảng",
    brainPoint1: "Áp dụng U-Net, ResNet-50, VGG-16/19, CNN và YOLOv5 cho phân đoạn và phân loại ảnh y khoa, đạt 97% accuracy trong phân loại bệnh da.",
    brainPoint2: "Phân tích ảnh MRI não cho bài toán Alzheimer và xây hệ thống RAG sức khỏe tinh thần bằng LangChain/Elasticsearch.",
    brainPoint3: "Hướng dẫn hơn 50 sinh viên Kỹ thuật Y sinh trong các bài thực hành AI for Healthcare.",
    projectsIndex: "Dự án chọn lọc / Sản phẩm công khai",
    projects: "Nghiên cứu đi cùng<br>giao diện hoạt động.",
    llamaTitle: "Tối ưu Fine-tuning LLM Y khoa",
    llamaText: "Tối ưu LLaMa2-7B cho hỏi đáp y khoa bằng QLoRA trong điều kiện hạn chế tài nguyên. Mô hình đạt BERTScore F1 0,841, gần Gemini 0,849 và GPT 0,855, với kích thước nhỏ hơn và thời gian fine-tune nhanh hơn.",
    gasTitle: "ERP Vận hành Cửa hàng Gas",
    gasText: "Phát triển hệ thống vận hành ba client: FastAPI/PostgreSQL, web React cho admin và nhân viên, cùng Expo Android offline-first. Triển khai JWT hai chế độ, backend RBAC, SQLite outbox sync idempotent, công nợ theo đơn, kho, kiểm kê vỏ, ghi chú thoại, Docker Compose và CI.",
    mentalTitle: "RAG hỗ trợ sức khỏe tinh thần",
    mentalText: "Xây trải nghiệm full-stack dùng React, LangChain, FastAPI và Elasticsearch để hội thoại dựa trên tri thức truy xuất.",
    hicardTitle: "HI-CARD",
    hicardText: "Phát triển đồ án kỹ thuật y sinh kết nối backend Python và giao diện thông tin đồng hành cho một bài toán chăm sóc sức khỏe thực tế.",
    vhcorText: "Đồng tác giả bộ ngữ liệu chăm sóc sức khỏe tiếng Việt phục vụ nhận diện chuyên khoa, trình bày tại International Conference on Health Science and Technology 2023.",
    demosIndex: "Demo sản phẩm / Video giải thích",
    demos: "Xem hệ thống<br>vận hành.",
    docmindTitle: "DocMind Ingest",
    docmindText: "Tích hợp MonkeyOCR vào RAGFlow làm parser cho tài liệu công trường dạng scan và viết tay, với năng suất công bố 1.000+ tài liệu mỗi ngày.",
    leadscoutTitle: "LeadScout Outreach",
    leadscoutText: "Crawl danh sách URL mục tiêu, tóm tắt tin tức, tìm ra công ty đáng liên hệ và soạn email tiếp cận cho từng đầu mối.",
    reporterTitle: "SiteSense Reporter",
    reporterText: "Agent truy xuất dữ liệu công trường trong ngày, viết báo cáo site hằng ngày và tự lên lịch chạy lại mỗi ngày.",
    autopilotTitle: "SiteSense Autopilot",
    autopilotText: "Biến một mô tả mối nguy thành bộ dữ liệu đã gán nhãn bằng SAM 3 trên Ray, dừng lại để người duyệt, rồi tự huấn luyện, đánh giá và huấn luyện lại.",
    paperLink: "Bài báo ↗",
    demoLink: "Demo ↗",
    sourceLink: "Mã nguồn ↗",
    capabilities: "Năng lực triển khai",
    capAi: "AI ứng dụng",
    capVision: "Thị giác máy tính",
    capSystems: "Hệ thống",
    capInfra: "Hạ tầng",
    contactLabel: "Bạn có một bài toán AI khó?",
    contactTitle: "Hãy đưa nó vào<br>vận hành thực tế.",
    footer: "Thiết kế quanh ngôn ngữ, thị giác và chuyển động."
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const downloadLink = document.querySelector("#download-cv");
const themeButton = document.querySelector("#theme-toggle");
const backToTop = document.querySelector("#back-to-top");
const tocLinks = [...document.querySelectorAll("#toc a")];
const tocSections = tocLinks.map((link) => document.querySelector(link.getAttribute("href")));
const colorScheme = window.matchMedia("(prefers-color-scheme: light)");

/** Applies translated interface copy and its matching downloadable résumé. */
function setLanguage(language) {
  const selectedCopy = copy[language] || copy.en;
  document.documentElement.lang = language;
  document.title = selectedCopy.pageTitle;

  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = selectedCopy[element.dataset.copy];
    if (value) element.innerHTML = value;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const suffix = language === "vi" ? "VI" : "EN";
  downloadLink.href = `cv/Bui-Trung-Tin-${suffix}.pdf`;
  downloadLink.setAttribute("download", `Bui-Trung-Tin-${suffix}.pdf`);
  backToTop.setAttribute("aria-label", selectedCopy.backToTop);
  backToTop.setAttribute("title", selectedCopy.backToTop);
  updateThemeLabel(language);
  localStorage.setItem("portfolio-language", language);
}

/** Updates the toggle label so its action is clear in the selected language. */
function updateThemeLabel(language = document.documentElement.lang) {
  const theme = document.documentElement.dataset.theme || "dark";
  const selectedCopy = copy[language] || copy.en;
  themeButton.setAttribute("aria-label", theme === "dark" ? selectedCopy.switchToLight : selectedCopy.switchToDark);
  themeButton.setAttribute("title", themeButton.getAttribute("aria-label"));
}

/** Applies a persisted or system-selected color theme across CSS and canvas. */
function setTheme(theme, persist = true) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", String(theme === "light"));
  document.querySelector('meta[name="theme-color"]').content = theme === "light" ? "#f1fff8" : "#03181a";
  updateThemeLabel();
  if (persist) localStorage.setItem("portfolio-theme", theme);
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: { theme } }));
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

themeButton.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

/** Reveals the return control after the visitor leaves the opening viewport. */
function updateBackToTopVisibility() {
  const isVisible = window.scrollY > window.innerHeight * 0.7;
  backToTop.classList.toggle("is-visible", isVisible);
  backToTop.setAttribute("aria-hidden", String(!isVisible));
  backToTop.setAttribute("tabindex", isVisible ? "0" : "-1");
}

const savedLanguage = localStorage.getItem("portfolio-language");
const browserLanguage = navigator.language.toLowerCase().startsWith("vi") ? "vi" : "en";
const savedTheme = localStorage.getItem("portfolio-theme");
setTheme(savedTheme || (colorScheme.matches ? "light" : "dark"), Boolean(savedTheme));
setLanguage(savedLanguage || browserLanguage);
document.querySelector("#year").textContent = new Date().getFullYear();
/** Highlights the table-of-contents entry for the section currently in view. */
function updateToc() {
  const marker = window.scrollY + window.innerHeight * 0.35;
  let active = tocSections[0];
  tocSections.forEach((section) => {
    if (section && section.offsetTop <= marker) active = section;
  });
  tocLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${active.id}`);
  });
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
window.addEventListener("scroll", updateToc, { passive: true });
updateBackToTopVisibility();
updateToc();

colorScheme.addEventListener("change", (event) => {
  if (!localStorage.getItem("portfolio-theme")) setTheme(event.matches ? "light" : "dark", false);
});
