export const portfolioData = {
  personal: {
    name: "Sadik R. Khan",
    title: "Full Stack Software Developer",
    degree: "B.Tech in Computer Science and Engineering",
    tagline: "Building full-stack applications, responsive web frontends, and backend systems with Java, Spring Boot, Angular, and AWS.",
    location: "Pune, Maharashtra, India",
    phone: "+91 80802 59949",
    phoneClean: "+918080259949",
    email: "sadikrk.official@gmail.com",
    avatar: "./assets/images/sadik-khan.png",
    resumeUrl: "./assets/Sadik_Khan_Resume.pdf",
    availability: "Available for full-time Full Stack & Software Developer roles",
    socials: {
      github: "https://github.com/Sadik-R-Khan",
      linkedin: "https://www.linkedin.com/in/sadik-rafe-khan/",
      leetcode: "https://leetcode.com/u/Khan_Sadik/",
      email: "mailto:sadikrk.official@gmail.com",
    }
  },

  about: {
    paragraphs: [
      "I am a Computer Science & Engineering graduate (2022–2026) from Ajeenkya D. Y. Patil University, Pune, with a 8.32 / 10 CGPA. My core engineering focus centers on backend development, distributed architecture, and cloud deployment.",
      "In addition to my 4-year degree, I completed an intensive 4-month Java Full Stack Development program at Symbiosis Digital Academy, building production-grade services with Spring Boot and reactive client frontends with Angular.",
      "I have hands-on experience designing RESTful APIs backed by MySQL, implementing role-based authentication with JWT, enforcing database concurrency with transactional locking, and deploying containerized applications to AWS (EC2, S3, RDS). I continually strengthen my foundation through algorithmic problem solving on LeetCode and building practical software solutions."
    ],
    highlights: [
      { label: "Degree", value: "B.Tech CSE (4 Years)" },
      { label: "Academics", value: "8.32 / 10 CGPA" },
      { label: "Certification", value: "AWS Cloud Practitioner (914/1000)" },
      { label: "Core Stack", value: "Java • Spring Boot • AWS" },
    ]
  },

  skills: {
    backend: [
      { name: "Java", level: "Primary Language" },
      { name: "Spring Boot", level: "Framework" },
      { name: "Spring Security", level: "Auth & RBAC" },
      { name: "Hibernate / JPA", level: "ORM & Persistence" },
      { name: "RESTful API Design", level: "API Architecture" },
      { name: "JWT Authentication", level: "Token Security" },
    ],
    frontend: [
      { name: "Angular", level: "Single Page Apps" },
      { name: "TypeScript", level: "Typed Web Dev" },
      { name: "JavaScript", level: "Client Scripting" },
      { name: "HTML5 & CSS3", level: "Semantic Markup & Styling" },
    ],
    database: [
      { name: "MySQL", level: "Relational Modeling" },
      { name: "Relational Schema Design", level: "Normalization & Indexes" },
      { name: "Transactional Integrity", level: "ACID & @Transactional" },
      { name: "Redis", level: "In-Memory Caching & TTL" },
    ],
    cloud: [
      { name: "AWS EC2", level: "Compute Deployment" },
      { name: "AWS S3", level: "Object Storage & Pre-signed URLs" },
      { name: "AWS RDS", level: "Managed Cloud DB" },
      { name: "Docker", level: "Containerization" },
      { name: "Git & GitHub", level: "Version Control" },
      { name: "Maven", level: "Build Tool" },
      { name: "Postman", level: "API Testing" },
    ],
    core: [
      { name: "Data Structures & Algorithms", level: "Problem Solving" },
      { name: "Object-Oriented Design (OOP)", level: "Design Patterns" },
      { name: "Role-Based Access Control (RBAC)", level: "Authorization" },
      { name: "Concurrency & Locking", level: "Data Integrity" },
    ]
  },

  featuredProjects: [
    {
      id: "driveshare",
      title: "DriveShare",
      subtitle: "Full-Stack Car Rental & Reservation Platform",
      badge: "Group Project",
      image: "./assets/images/projects/driveshare.png",
      description: "A full-stack vehicle rental platform architected to facilitate vehicle listing, real-time discovery, reservations, and multi-tier user role management with high transaction integrity.",
      problemSolved: "Preventing concurrent booking collisions (double-booking) and securely handling vehicle media uploads in a multi-role web environment.",
      technologies: ["Spring Boot", "Angular", "AWS EC2", "AWS S3", "AWS RDS", "Docker", "MySQL", "Spring Security", "JWT"],
      features: [
        "Led a 3-person team building 18 REST API endpoints with Spring Boot & JPA for catalog browsing, booking workflows, and account management.",
        "Enforced booking integrity via @Transactional to eliminate race conditions and prevent double-booking under concurrent checkout operations.",
        "Integrated AWS S3 for vehicle image uploads via pre-signed URLs, reducing server payload overhead.",
        "Secured APIs with stateless JWT authentication and role-based access control across 3 distinct tiers (USER, RENTER, ADMIN).",
        "Containerized services with Docker and deployed the full-stack system on AWS EC2 backed by a managed AWS RDS (MySQL) instance."
      ],
      cloudDeployment: "Deployed on AWS EC2 & RDS (MySQL) with Docker",
      github: "https://github.com/Sadik-R-Khan",
      hasImage: true
    },
    {
      id: "ticket-engine",
      title: "High-Concurrency Ticket Booking Engine",
      subtitle: "High-Throughput Seat Reservation & Cart Lifecycle System",
      badge: "Backend Systems",
      image: null,
      description: "A high-throughput ticketing engine engineered to handle sudden traffic spikes, eliminate overselling of inventory, and automate cart expiration with atomic operations.",
      problemSolved: "Solving overselling and race conditions when multiple users attempt to reserve the exact same seat simultaneously.",
      technologies: ["Spring Boot", "Angular", "Redis", "MySQL", "AWS EC2", "AWS S3", "AWS RDS", "Docker"],
      features: [
        "Engineered a high-throughput ticketing engine using Redis Lua scripts for atomic seat reservation, mathematically preventing overselling under simulated concurrent bursts.",
        "Designed a 10-minute cart-hold mechanism using Redis TTL and keyspace notifications to automatically release unpaid seats back to available inventory.",
        "Built a responsive Angular seat-selection dashboard with PDF ticket generation persisted to AWS S3 storage.",
        "Containerized with Docker and deployed on AWS EC2 paired with AWS RDS (MySQL)."
      ],
      cloudDeployment: "Deployed on AWS EC2 & RDS (MySQL) with Docker & Redis",
      github: "https://github.com/Sadik-R-Khan",
      hasImage: false
    },
    {
      id: "docwallet",
      title: "DocWallet",
      subtitle: "Personal Document Storage & Management System",
      badge: "Personal Project",
      image: "./assets/images/projects/docwallet.png",
      description: "A centralized, modern document management platform designed to store, organize, and access important personal, academic, and identification files from any device.",
      problemSolved: "Fragmented document storage across emails and drives by providing an organized, authenticated repository with cloud persistence.",
      technologies: ["Spring Boot", "Angular", "AWS S3", "MySQL", "Spring Security", "REST APIs"],
      features: [
        "Structured secure cloud storage for multi-format documents including PDF, DOC, and image assets.",
        "Designed categorized vault management allowing rapid filtering by document category, creation date, and status.",
        "Implemented authenticated user sessions to ensure private, isolated file access anytime and anywhere.",
        "Created an intuitive, clean dashboard interface providing seamless file upload and instant retrieval."
      ],
      cloudDeployment: "Configured with cloud-backed persistence",
      github: "https://github.com/Sadik-R-Khan",
      hasImage: true
    }
  ],

  freelanceProjects: [
    {
      id: "an-enterprises",
      title: "AN Enterprises",
      tagline: "Signage | Branding | Beyond",
      type: "Freelance Web Development",
      image: "./assets/images/projects/an-enterprises.png",
      description: "Delivered a commercial web presence for a signage and brand fabrication enterprise, translating business requirements into a clean, modern web experience.",
      highlights: [
        "Structured comprehensive service showcases covering indoor & outdoor signage, custom design, fabrication, and on-site installation.",
        "Engineered a responsive, mobile-first design tailored to prospective corporate and retail clients.",
        "Created clear call-to-action touchpoints for customer inquiries and customized quotation workflows."
      ],
      technologies: ["Responsive Web", "UI Architecture", "Modern CSS", "Client Consultation"]
    },
    {
      id: "decor-studio",
      title: "The Decor Studio",
      tagline: "Furnish | Style | Belong",
      type: "Freelance Web Development",
      image: "./assets/images/projects/decor-studio.png",
      description: "Crafted an elegant digital showcase for an interior styling and furnishing brand, highlighting bespoke furniture collections and residential/commercial spaces.",
      highlights: [
        "Built a visually refined, editorial layout highlighting interior design aesthetics and curated furniture catalogs.",
        "Organized clear service funnels for furniture collections, home decor, custom manufacturing, and design consultations.",
        "Optimized client asset loading to deliver fast performance without sacrificing image clarity."
      ],
      technologies: ["Visual Design", "Responsive Layouts", "Client Branding", "Performance Optimization"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Ajeenkya D. Y. Patil University",
      location: "Pune, Maharashtra",
      period: "2022 – 2026",
      cgpa: "8.32 / 10",
      description: "4-year undergraduate degree in Computer Science & Engineering. Built a strong foundation in Data Structures, Algorithms, Operating Systems, Database Management Systems, and Object-Oriented Software Design."
    },
    {
      degree: "Full Stack Java with Angular",
      institution: "Symbiosis Digital Academy",
      location: "Pune, Maharashtra",
      period: "Feb 2026 – Jun 2026",
      cgpa: null,
      description: "4-month intensive program specializing in enterprise Java Full Stack development: Spring Boot, Spring Security, Hibernate/JPA, RESTful APIs, MySQL, and Angular single-page applications."
    }
  ],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "Apr 2026",
      score: "914 / 1000",
      isPrimary: true,
      description: "Demonstrates overall understanding of AWS Cloud concepts, security and compliance, core services (EC2, S3, RDS, VPC, IAM), and cloud billing/economics."
    },
    {
      title: "Full Stack Java with Angular",
      issuer: "Symbiosis Digital Academy",
      date: "Feb 2026 – Jun 2026",
      score: null,
      isPrimary: false,
      description: "Comprehensive certification covering end-to-end full stack software engineering using Java, Spring Boot, MySQL, and Angular."
    }
  ],

  leetcode: {
    profileUrl: "https://leetcode.com/u/Khan_Sadik/",
    username: "Khan_Sadik",
    description: "Active problem solver practicing Data Structures and Algorithms to reinforce algorithmic thinking, time/space complexity optimization, and clean implementation in Java.",
    focusAreas: [
      "Arrays & Strings",
      "Two Pointers & Sliding Window",
      "Hash Maps & Sets",
      "Trees & Binary Search",
      "Dynamic Programming Fundamentals",
      "Concurrency & Thread Safety"
    ]
  }
};
