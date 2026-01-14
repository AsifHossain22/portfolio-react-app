const projectsData = [
  {
    id: "project-1",
    title: "AXIT – Modern SaaS Landing Page",
    shortDescription:
      "A modern, responsive landing page for SaaS products and digital services.",
    image: "https://i.ibb.co/99gLYh86/axit.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    live: "https://asifhossain22.github.io/axit/",
    github: "https://github.com/AsifHossain22/axit",
    problem:
      "Early-stage startups and SaaS products often struggle to present their value clearly with a professional landing page that converts visitors into users.",
    solution:
      "Designed and developed a clean, conversion-focused landing page with clear call-to-actions, pricing sections, testimonials and feature highlights.",
    features: [
      "Hero section with CTA and signup form",
      "Tabbed feature section with smooth transitions",
      "Pricing plans layout",
      "Customer testimonials section",
      "Fully responsive layout",
      "Contact form and footer with social links",
    ],
    learnings:
      "Improved understanding of UI hierarchy, conversion-oriented layouts and responsive design without relying on frameworks.",
  },
  {
    id: "project-2",
    title: "Biker Zone – Motorcycle Showcase Platform",
    shortDescription:
      "A modern website to showcase bikes, latest news and customer reviews.",
    image: "https://i.ibb.co/FdkQtq2/biker-zone.png",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    live: "https://asifhossain22.github.io/biker-zone/",
    github: "https://github.com/AsifHossain22/biker-zone",
    problem:
      "Motorcycle enthusiasts and sellers need a visually engaging platform to display bikes, share updates and build trust with customer feedback.",
    solution:
      "Built a responsive bike showcase website featuring highlighted products, news sections, testimonials and FAQs for better user engagement.",
    features: [
      "Hero slider highlighting featured bikes",
      "Bike collection showcase section",
      "Latest news and blog cards",
      "Customer testimonials with ratings",
      "FAQ accordion for common questions",
      "Mobile-first responsive design",
    ],
    learnings:
      "Strengthened skills in layout structuring, reusable components and building content-heavy pages with consistent design patterns.",
  },
  {
    id: "project-3",
    title: "Burger House – Restaurant Landing Page",
    shortDescription:
      "A visually rich landing page for a burger restaurant with menu highlights and table reservations.",
    image: "https://i.ibb.co/x8Sh5Tqf/burger-house.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    live: "https://asifhossain22.github.io/burger-house/",
    github: "https://github.com/AsifHossain22/burger-house",
    problem:
      "Restaurants need an attractive online presence to promote menu items, special offers, and allow customers to easily make reservations.",
    solution:
      "Created a food-focused landing page emphasizing visuals, promotions, menu sections and a reservation form to enhance customer engagement.",
    features: [
      "Promotional hero section with offers",
      "Menu highlights with call-to-action buttons",
      "Featured events and special deals",
      "Table reservation form",
      "Brand-focused footer with contact info",
      "Fully responsive and image-optimized layout",
    ],
    learnings:
      "Learned how to design visually driven interfaces, balance imagery with content and improve user flow for business-focused websites.",
  },
  {
    id: "project-4",
    title: "Online Food & Restaurant Ordering Platform",
    shortDescription:
      "A modern food ordering website showcasing popular restaurants, discounts and featured meals.",
    image: "https://i.ibb.co/vCWVk8dq/food-restaurant.png",
    tech: ["HTML", "CSS", "Tailwind"],
    live: "https://asifhossain22.github.io/food-restaurant/",
    github: "https://github.com/AsifHossain22/food-restaurant",
    problem:
      "Many food websites fail to clearly highlight popular brands, ongoing discounts and easy navigation, leading to poor user engagement.",
    solution:
      "Designed a visually rich and structured food ordering platform that highlights featured brands, discount offers and strong call-to-action sections to improve conversion.",
    features: [
      "Hero section with promotional CTA",
      "Featured restaurant and brand listings",
      "Discount-focused product cards",
      "Responsive layout for all devices",
      "Newsletter subscription section",
      "Social media integration",
    ],
    learnings:
      "Learned how to design conversion-focused UI, improve visual hierarchy and structure landing pages for food and restaurant-based businesses.",
  },
  {
    id: "project-5",
    title: "Nature’s Platter – Online Grocery Shop",
    shortDescription:
      "An e-commerce grocery platform focused on fresh, healthy products with fast delivery and offers.",
    image: "https://i.ibb.co/XfbBG09p/grocery-shop.png",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    live: "https://asifhossain22.github.io/grocery-shop/",
    github: "https://github.com/AsifHossain22/grocery-shop",
    problem:
      "Customers often struggle to find reliable online grocery platforms that emphasize freshness, health and fast delivery.",
    solution:
      "Built a clean and friendly grocery shopping platform highlighting healthy products, service reliability and promotional offers.",
    features: [
      "Fresh produce-focused hero section",
      "Service highlights (24/7 support, fast delivery, healthy products)",
      "Customer feedback showcase",
      "Popular and discounted product listings",
      "Promotional offer banners",
      "Email subscription for grocery updates",
      "Responsive and accessible UI",
    ],
    learnings:
      "Gained experience designing e-commerce layouts, managing product sections and building trust through UI elements like services and feedback.",
  },
  {
    id: "project-6",
    title: "English Learning & Programming Education Platform",
    shortDescription:
      "An interactive EdTech platform for learning English and basic programming concepts.",
    image: "https://i.ibb.co/NdHkHSbN/learn-english-programming.png",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    live: "https://asifhossain22.github.io/learn-English-programming/",
    github: "https://github.com/AsifHossain22/learn-English-programming",
    problem:
      "Many learners find it difficult to start learning English due to complex platforms and lack of structured beginner-friendly content.",
    solution:
      "Created a simple, approachable learning platform with guided lessons, vocabulary sections, and FAQs to support beginners.",
    features: [
      "Language toggle (English / Bangla)",
      "Beginner-friendly hero section",
      "Structured lesson navigation",
      "Vocabulary learning modules",
      "FAQ section for common questions",
      "Clean and distraction-free interface",
      "Responsive design",
    ],
    learnings:
      "Learned how to design educational user experiences, organize lesson-based content and build inclusive interfaces for non-technical learners.",
  },
  {
    id: "project-7",
    title: "Lucid – Product Landing Page",
    shortDescription:
      "A modern, conversion-focused landing page designed to showcase a digital product with features, pricing, testimonials and contact sections.",
    image: "https://i.ibb.co/fYzN7b4G/lucid.png",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"],
    live: "https://asifhossain22.github.io/lucid/",
    github: "https://github.com/AsifHossain22/lucid",
    problem:
      "Many digital products fail to convert visitors due to poor layout structure, unclear call-to-actions and lack of trust elements such as testimonials and pricing clarity.",
    solution:
      "I designed and developed a single-page landing website with clear visual hierarchy, strong CTAs, social proof and pricing sections to guide users toward conversion.",
    features: [
      "Hero section with primary and secondary call-to-action buttons",
      "Product feature highlights with icon-based layout",
      "Device-focused product showcase section",
      "Client testimonials slider for social proof",
      "Pricing plans with clear comparison",
      "Contact form with location map",
      "Fully responsive across all screen sizes",
    ],
    learnings:
      "Learned how to design landing pages optimized for conversion, improve content flow and balance visuals with usability for marketing-focused websites.",
  },
  {
    id: "project-8",
    title: "Penguin Fashion – E-Commerce Website",
    shortDescription:
      "A fashion e-commerce website showcasing winter jackets for men and women with clean product cards and user-friendly shopping experience.",
    image: "https://i.ibb.co/1YbW2G9Y/penguin-fashion.png",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript"],
    live: "https://asifhossain22.github.io/penguin-fashion/",
    github: "https://github.com/AsifHossain22/penguin-fashion",
    problem:
      "Small fashion brands often struggle to present products clearly online while maintaining a modern, trustworthy shopping experience.",
    solution:
      "I built a visually clean e-commerce interface that focuses on product imagery, pricing clarity, and simple navigation to enhance the shopping journey.",
    features: [
      "Seasonal hero section with marketing message",
      "Separate product sections for women and men",
      "Product cards with image, title, price and buy button",
      "Consistent spacing and clean card-based layout",
      "Service highlights such as free exchanges and seller support",
      "Mobile-first responsive design",
    ],
    learnings:
      "Gained experience in designing scalable product grids, improving visual consistency and creating user-friendly e-commerce layouts.",
  },
  {
    id: "project-9",
    title: "PH Tube – Video Browsing Platform",
    shortDescription:
      "A YouTube-style video browsing platform with category filtering, search and dynamic content sorting.",
    image: "https://i.ibb.co/Xk41LTst/ph-tube.png",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript", "API Integration"],
    live: "https://asifhossain22.github.io/ph-tube/",
    github: "https://github.com/AsifHossain22/ph-tube",
    problem:
      "Users often struggle to discover relevant video content quickly when platforms lack proper categorization, sorting and search features.",
    solution:
      "I built a video browsing platform that allows users to filter videos by category, search by keywords and sort content based on views for better discoverability.",
    features: [
      "Category-based video filtering (All, Music, Comedy, Drawing)",
      "Search functionality for videos",
      "Sort videos by view count",
      "Video cards with thumbnails, creators and view metrics",
      "Dynamic data rendering from API",
      "Responsive grid layout for all devices",
    ],
    learnings:
      "Learned how to work with external APIs, manage dynamic UI rendering and implement filtering and sorting logic efficiently in JavaScript.",
  },
  {
    id: "project-10",
    title: "Pro Edu – Online Learning Platform",
    shortDescription:
      "An educational platform UI designed to promote online courses, instructors, student success stories and platform credibility.",
    image: "https://i.ibb.co/TFxPVz2/pro-edu.png",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://asifhossain22.github.io/pro-edu/",
    github: "https://github.com/AsifHossain22/pro-edu",
    problem:
      "Online learning platforms need to build trust quickly while presenting large amounts of content such as courses, testimonials and FAQs without overwhelming users.",
    solution:
      "I designed a structured education website that highlights popular courses, platform statistics, student success and frequently asked questions in a clear and engaging layout.",
    features: [
      "Hero section with enrollment call-to-action",
      "Popular courses grid with pricing",
      "Learning institute overview with key statistics",
      "Student success showcase section",
      "Testimonials carousel for credibility",
      "FAQ accordion for common questions",
      "Trusted companies and partners section",
      "Responsive layout for all devices",
    ],
    learnings:
      "Improved my ability to organize content-heavy pages, design trust-building sections, and structure educational platforms for clarity and engagement.",
  },
  {
    id: "project-11",
    title: "LearnedSkills – Skill Tracking Dashboard",
    shortDescription:
      "A personal learning dashboard to track technical skills, deadlines and progress in a clean, card-based interface.",
    image: "https://i.ibb.co/KjVCj0Zh/skills-board.png",
    tech: ["HTML", "CSS", "Tailwind", "JavaScript", "API Integration"],
    live: "https://asifhossain22.github.io/skills-board/",
    github: "https://github.com/AsifHossain22/skills-board",
    problem:
      "Self-learners often lack a simple system to track skills they are learning, deadlines and progress in one organized place.",
    solution:
      "I designed and developed a dashboard that visually organizes learning skills into cards with descriptions, deadlines and completion actions.",
    features: [
      "Skill cards with title, description and category",
      "Deadline tracking for each skill",
      "Mark skill as completed functionality",
      "Activity log with clear history control",
      "Minimal and distraction-free UI",
      "Responsive dashboard layout",
    ],
    learnings:
      "Improved my ability to design dashboard layouts, manage UI state and create clean, user-friendly interfaces for productivity tools.",
  },
  {
    id: "project-12",
    title: "Tea House – Product Landing Website",
    shortDescription:
      "A visually rich product landing website for a tea brand, showcasing featured products, testimonials, and promotional content.",
    image: "https://i.ibb.co/XZRX9WMF/tea-house.png",
    tech: ["HTML", "CSS", "Tailwind"],
    live: "https://asifhossain22.github.io/tea-house/",
    github: "https://github.com/AsifHossain22/tea-house",
    problem:
      "Product-based brands need visually appealing websites that highlight quality, trust and storytelling to engage potential customers.",
    solution:
      "I built a modern landing page focused on product presentation, brand storytelling and customer testimonials to enhance brand credibility.",
    features: [
      "Hero section with product highlights and ratings",
      "Featured product showcase grid",
      "Brand story and quality emphasis section",
      "Customer testimonial cards",
      "News and events section",
      "Clean footer with quick links and newsletter subscription",
      "Fully responsive design",
    ],
    learnings:
      "Learned how to balance visual storytelling with structured content and design product-focused landing pages that feel premium and engaging.",
  },
];

export default projectsData;
