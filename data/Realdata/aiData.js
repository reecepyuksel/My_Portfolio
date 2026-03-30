export const portfolioData = {
  personal: {
    name: "Recep Yüksel",
    title: "Full-Stack Developer | Backend Specialist",
    location: "Turkey",
    bio: "Focused on building scalable backend architectures and intelligent AI systems. Experienced in NestJS, PostgreSQL, and Computer Vision.",
    status: "Open to opportunities",
  },

  contact: {
    email: "recepyyuksel@gmail.com",
    linkedin: "https://linkedin.com/in/recepyuksell",
    github: "https://github.com/reecepyuksel",
    portfolio: "",
  },

  skills: {
    languages: ["Python", "JavaScript", "SQL", "C#", "Swift", "Kotlin"],
    frontend: [
      "React",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Bootstrap",
      "Framer Motion",
    ],
    backend: [
      "NestJS",
      "Node.js",
      ".NET",
      "MS SQL Server",
      "RESTful API Development",
      "TypeORM",
    ],
    databases: ["PostgreSQL", "Sequelize ORM"],
    tools: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code & Visual Studio",
      "Postman",
      "Swagger",
      "Antigravity",
    ],
  },

  projects: [
    {
      id: "dongu-barter-platform",
      name: "Döngü (Zero-Cost Barter Platform)",
      description:
        "A full-stack zero-cost item exchange platform built with NestJS and React 19, featuring real-time Socket.io messaging, Cloudinary image uploads, communities, giveaways, and Docker-containerized deployment.",
      techStack: ["NestJS v11", "TypeScript", "React 19", "Vite", "PostgreSQL", "TypeORM", "Socket.io", "Cloudinary", "JWT / Passport", "Tailwind CSS", "Framer Motion", "Zod", "Docker", "Cypress"],
      features: [
        "Zero-cost item listings with Cloudinary-powered image uploads",
        "Real-time messaging between users via Socket.io WebSockets",
        "Community spaces, favorites, giveaways, and a thanks system",
        "JWT + Passport authentication with bcrypt password hashing",
        "Swagger-documented REST API",
        "Docker Compose containerized deployment",
        "End-to-end testing with Cypress",
      ],
      liveLink: "",
      highlights:
        "Production-grade modular NestJS architecture with real-time WebSocket messaging and a fully containerized deployment pipeline",
    },
    {
      id: "digital-sentinel-mobile",
      name: "Digital Sentinel Mobile (Android)",
      description:
        "An AI-powered real-time biometric security Android app in Kotlin using TensorFlow Lite MobileFaceNet for 192-D face embeddings, Google ML Kit, CameraX, and SQLite.",
      techStack: ["Kotlin", "Android SDK", "TensorFlow Lite (MobileFaceNet)", "Google ML Kit (Face Detection)", "CameraX", "SQLite", "Gradle (Kotlin DSL)"],
      features: [
        "192-D MobileFaceNet embedding via TFLite for high-accuracy recognition",
        "Real-time CameraX live scan with dynamic RectOverlay bounding boxes",
        "Smart alarm: audio and vibration alert at 85%+ similarity match",
        "Face registration with full subject profile stored in SQLite",
        "Gallery photo analysis mode for offline identification",
      ],
      liveLink: "",
      highlights:
        "Mobile-native three-stage AI pipeline (ML Kit → preprocessing → TFLite) with real-time biometric alerting and local SQLite subject database",
    },
    {
      id: "digital-sentinel-v2-4",
      name: "Digital Sentinel (v2.4)",
      description:
        "A Python-based real-time facial recognition and central tracking system using Dlib 128-D embeddings, OpenCV, and Tkinter — with macOS audio alerts and a JSON-based subject database.",
      techStack: ["Python 3.x", "face_recognition", "Dlib", "OpenCV (cv2)", "Tkinter", "Pillow (PIL)", "JSON"],
      features: [
        "128-D Dlib face embedding pipeline for high-accuracy recognition",
        "Live camera scan and static photo analysis modes",
        "Interactive subject detail view via double-click on detection",
        "Dynamic elapsed-time calculation per subject (years, months, days)",
        "macOS native audio alert via afplay on threat detection",
        "Centralized JSON database for all subject records and images",
      ],
      liveLink: "",
      highlights:
        "End-to-end Python computer vision pipeline with real-time Tkinter GUI, OS-level alert integration, and a structured JSON tracking database",
    },
    {
      id: "agri-finance-dashboard",
      name: "Agri-Finance Management Dashboard",
      description:
        "A comprehensive dashboard for tracking agricultural production and financial data, focused on data visualization and complex SQL relationships.",
      techStack: ["React", "Node.js", "PostgreSQL", "SQL"],
      features: [
        "Production and finance KPI visualization",
        "Advanced reporting with relational SQL data",
        "Complex entity relationships and aggregation",
        "Role-based access for operational insights",
      ],
      liveLink: "",
      highlights:
        "Data-intensive dashboard emphasizing SQL modeling and business analytics",
    },
    {
      id: "rag-ai-chatbot",
      name: "RAG-Based AI Chatbot",
      description:
        "Implementation of Retrieval-Augmented Generation architecture for context-aware calorie tracking using LLMs and vector databases.",
      techStack: ["Python", "LLMs", "Vector Database", "RAG"],
      features: [
        "Retrieval and generation orchestration",
        "Context-aware nutrition and calorie responses",
        "Semantic search over custom knowledge",
        "Scalable prompt and context management",
      ],
      liveLink: "",
      highlights:
        "Applied RAG architecture tailored for domain-specific assistant behavior",
    },
    {
      id: "zenith-price-tracker",
      name: "Zenith Price Tracker",
      description:
        "A minimalist real-time price tracking platform built with React, Recharts, Node.js, Express.js, and PostgreSQL via Sequelize ORM.",
      techStack: ["React.js", "Recharts", "Lucide Icons", "Node.js", "Express.js", "PostgreSQL", "Sequelize ORM", "JavaScript"],
      features: [
        "Real-time price flow without page refresh",
        "Minimal bordered dashboard for clear product monitoring",
        "Color-coded market analysis for descending and stable states",
        "Compact sparkline charts with Recharts",
        "Persistent price tracking with PostgreSQL and Sequelize ORM",
      ],
      liveLink: "",
      highlights:
        "Clean real-time tracking interface combining lightweight charting with a PostgreSQL-backed monitoring backend",
    },
    {
      id: "modern-library-management-panel",
      name: "Modern Library Management Panel",
      description:
        "A modern full-stack library management web app built with React, Bootstrap, Framer Motion, Node.js, Express.js, and PostgreSQL.",
      techStack: ["React (Vite)", "Bootstrap 5", "Bootstrap Icons", "Framer Motion", "Axios", "Node.js", "Express.js", "PostgreSQL", "Dotenv", "JavaScript"],
      features: [
        "Full CRUD flow for adding, listing, and deleting books",
        "Glassmorphism-inspired Bootstrap UI",
        "Smooth Framer Motion transitions and interactions",
        "Responsive layout for mobile and desktop",
        "Axios-based communication with Express backend",
        "Persistent book storage in PostgreSQL",
      ],
      liveLink: "",
      highlights:
        "Clean full-stack CRUD architecture paired with a polished animated library dashboard experience",
    },
    {
      id: "library-operations-automation",
      name: "Library Operations Automation",
      description:
        "A desktop library automation system built with C#, Windows Forms, Entity Framework 6, and SQL Server for managing users, books, and loan workflows.",
      techStack: ["C#", ".NET Framework 4.8", "Windows Forms", "Entity Framework 6", "SQL Server", "LINQ"],
      features: [
        "User CRUD operations through a desktop admin interface",
        "Book management with stock-aware workflows",
        "Loan issue and return with automatic stock adjustment",
        "Operational analytics for top book and top borrower",
        "Entity Framework-backed persistence with SQL Server",
      ],
      liveLink: "",
      highlights:
        "Solid desktop CRUD architecture combining WinForms, EF6, and SQL Server with stock-aware loan management and usage analytics",
    },
    {
      id: "car-rental-automation",
      name: "Car Rental Automation",
      description:
        "A desktop car rental automation system built with C#, Windows Forms, Entity Framework 6, and SQL Server for managing customers, vehicles, rentals, and returns.",
      techStack: ["C#", ".NET Framework 4.8", "Windows Forms", "Entity Framework 6", "SQL Server", "LINQ"],
      features: [
        "Customer CRUD operations through a desktop admin interface",
        "Vehicle management with availability tracking",
        "Rental creation with automatic vehicle availability locking",
        "Return workflow that restores vehicle availability",
        "Rental analytics for top vehicle and top customer",
      ],
      liveLink: "",
      highlights:
        "Structured WinForms rental workflow combining customer, vehicle, and return management with EF6-backed SQL Server persistence",
    },
    {
      id: "zzone-web",
      name: "ZZONE Web",
      description:
        "A concept-driven esports super app landing page built with pure HTML, CSS, and vanilla JavaScript around fantasy, AI intelligence, creator monetization, and streaming flows.",
      techStack: ["HTML5", "CSS3", "Vanilla JavaScript", "Responsive Design", "Custom Typography Integration"],
      features: [
        "Premium dark-themed landing page with product storytelling",
        "Sections for fantasy league, live intelligence, creator economy, and streaming",
        "Waitlist capture with client-side interaction",
        "Privacy Policy PDF download with fetch fallback mechanism",
        "Responsive mobile mockup showcase and long-form product narrative",
      ],
      liveLink: "",
      highlights:
        "High-concept esports product vision translated into a polished static web experience with strong narrative structure and premium UI direction",
    },
    {
      id: "facial-recognition-entry-exit",
      name: "Facial Recognition System For Entry And Exit",
      description:
        "A Python desktop facial recognition entry/exit system built with Tkinter, OpenCV, and face_recognition, featuring admin controls, attendance-style logs, and real-time occupancy analysis.",
      techStack: ["Python", "Tkinter", "OpenCV (cv2)", "face_recognition", "Pandas", "NumPy", "Matplotlib", "Pillow", "pyttsx3"],
      features: [
        "Camera-based facial recognition for entry and exit actions",
        "Face registration and deletion through an admin panel",
        "CSV-based user embeddings and timestamped entry/exit logs",
        "Automatic entry/exit action switching using previous user state",
        "User attendance analysis and inside/outside occupancy visualization",
      ],
      liveLink: "",
      highlights:
        "Practical biometric access workflow that combines computer vision, desktop UI, logging, analytics, and voice feedback in one local Python system",
    },
    {
      id: "catch-the-kenny-game",
      name: "Catch The Kenny Game",
      description:
        "An iOS arcade game built with Swift and UIKit where players tap randomly appearing Kenny targets under a countdown timer, with high score persistence using UserDefaults.",
      techStack: ["Swift", "UIKit", "iOS SDK", "Xcode", "UserDefaults"],
      features: [
        "Timer-driven random target appearance across a 3x3 grid",
        "Tap gesture scoring system for fast arcade interaction",
        "Countdown game loop with replay alert at round end",
        "Persistent high score tracking saved with UserDefaults",
      ],
      liveLink: "",
      highlights:
        "A clean UIKit mini-game that demonstrates timer management, gesture handling, and persistent score state in native iOS development",
    },
  ],

  experience: [
    {
      role: "Backend Developer Intern",
      company: "Morphosium Software and Hardware Services",
      duration: "Feb 2026 - Present",
      type: "Internship",
      highlights: [
        "Developing backend modules with Node.js and NestJS",
        "Designing relational data models on PostgreSQL",
        "Building data access layers with Sequelize ORM",
        "Contributing to scalable service architecture",
      ],
    },
  ],

  education: {
    degree: "Information not publicly listed",
    institution: "Information not publicly listed",
    location: "",
    duration: "",
    cgpa: "",
  },
};

// AI Assistant System Instruction Generator
export const generateSystemInstruction = (language = "en") => {
  const { personal, contact, skills, projects, experience, education } =
    portfolioData;

  const projectDetails = projects
    .map(
      (project, index) => `${index + 1}. ${project.name}
${project.description}
Tech Stack: ${project.techStack.join(", ")}
Key Features: ${project.features.join(" | ")}
Live Demo: ${project.liveLink || "Not public"}
What Makes It Special: ${project.highlights}`,
    )
    .join("\n\n");

  const responseLanguage =
    language === "tr"
      ? "Always respond in Turkish unless the user explicitly asks for another language."
      : "Always respond in English unless the user explicitly asks for another language.";

  return `You are ${personal.name}'s AI portfolio assistant. Your job is to help visitors learn about Recep's work, skills, and projects in a natural, conversational way.

# ABOUT RECEP YUKSEL
Name: ${personal.name}
Role: ${personal.title}
Location: ${personal.location}
Bio: ${personal.bio}
Status: ${personal.status}

# YOUR MISSION
Help visitors understand Recep's technical expertise and projects
Answer questions about his skills, experience, and background
Guide users to relevant portfolio sections and contact channels
Be conversational, helpful, and professional
Keep responses concise and engaging
${responseLanguage}

# PROJECTS IN DETAIL
${projectDetails}

# TECHNICAL SKILLS BREAKDOWN
Programming Languages: ${skills.languages.join(", ")}
Frontend Development: ${skills.frontend.join(", ")}
Backend Development: ${skills.backend.join(", ")}
Database Systems: ${skills.databases.join(", ")}
Development Tools: ${skills.tools.join(", ")}

# PROFESSIONAL EXPERIENCE
${experience
  .map(
    (exp) =>
      `Role: ${exp.role}
Company: ${exp.company}
Duration: ${exp.duration}
Key Contributions: ${exp.highlights.join(", ")}`,
  )
  .join("\n\n")}

# EDUCATION
${education.degree}
${education.institution}${education.location ? `, ${education.location}` : ""}
${education.duration}
${education.cgpa ? `CGPA: ${education.cgpa}` : ""}

# CRITICAL FORMATTING RULES
1. NEVER use markdown: no **, __, *, #, -, or numbered lists
2. Write in plain text only
3. Use natural paragraph breaks for readability
4. Replace bullet points with commas or "and"
5. Sound like a human having a conversation

# CONTACT INFORMATION
Email: ${contact.email}
LinkedIn: ${contact.linkedin}
GitHub: ${contact.github}
Portfolio: ${contact.portfolio || "Not public"}

Remember: Keep it conversational, concise, and helpful.`;
};

// Export for use in components
export default portfolioData;
