import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "invesier",
    title: "Invesier",
    subtitle: "Social Trading Platform",
    overview:
      "A social trading platform that connects traders and investors with live market updates, educational sessions, and interactive social features. The app is designed to keep users engaged with trading-related content and real-time app flows.",
    role: "Flutter Developer — Built core app features, integrated APIs, and contributed to a polished user experience for trading and social engagement.",
    challenges: [
      "Delivering a smooth and engaging experience for a trading-focused audience",
      "Keeping real-time content and social features responsive",
      "Supporting diverse user interactions around market updates and educational content",
    ],
    solutions: [
      "Implemented trading and social features with a clean and scalable Flutter architecture",
      "Integrated APIs and real-time app flows for market updates and user engagement",
      "Focused on a responsive experience that supports content discovery and interaction",
    ],
    keyFeatures: [
      "Live trading challenges",
      "Market updates",
      "Educational sessions",
      "Social interaction features",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "REST API", "Firebase"],
    results: [
      "Delivered a polished social trading experience",
      "Improved user engagement through real-time content flows",
      "Supported a growing community of traders and investors",
    ],
    appStore: "https://apps.apple.com/eg/app/invesier/id6751276435",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.reyada.invesier",
    image: "/images/projects/invesier.jpg",
    gradient: "from-primary-600 via-primary-500 to-primary-700",
  },
  {
    id: "al-rubban-marine",
    title: "Al Rubban Marine",
    subtitle: "Boat Maintenance & Service Management Platform",
    overview:
      "A marine service application that helps boat owners manage boats, request customized maintenance services, schedule repairs, and track service progress. The app is built for reliability across Android and iOS with smooth real-time updates.",
    role: "Flutter Developer — Built scalable features, integrated APIs, and delivered a reliable cross-platform experience.",
    challenges: [
      "Supporting complex service booking and progress tracking flows",
      "Delivering a smooth experience across Android and iOS",
      "Handling real-time updates and push notifications reliably",
    ],
    solutions: [
      "Implemented scalable Flutter features using Clean Architecture and Riverpod",
      "Integrated REST APIs and push notifications for service updates",
      "Delivered a smooth and dependable experience for boat owners and service teams",
    ],
    keyFeatures: [
      "Boat management",
      "Customized maintenance requests",
      "Repair scheduling",
      "Service progress tracking",
      "Real-time updates and push notifications",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Clean Architecture",
      "REST API",
      "Firebase",
    ],
    results: [
      "Delivered a professional marine service app",
      "Improved service management and client communication",
      "Supported reliable cross-platform usage",
    ],
    appStore: "https://apps.apple.com/us/app/al-rubban-marine/id6760139511",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.reyada.alrubbanmarine&hl=ar",
    image: "/images/projects/alrubbanmarine.jpg",
    gradient: "from-primary-500 via-secondary-500 to-primary-700",
  },
  {
    id: "news-app",
    title: "News App",
    subtitle: "Real-Time Global Headlines Platform",
    overview:
      "A real-time news application that fetches and displays global headlines across multiple categories with a clean and responsive experience. The app focuses on scalability, smooth navigation, and dark/light mode support.",
    role: "Flutter Developer — Built the app architecture, UI, and data flow for a responsive news experience.",
    challenges: [
      "Managing real-time data loading from REST APIs",
      "Keeping the app structure maintainable and scalable",
      "Providing a smooth experience across screen sizes and themes",
    ],
    solutions: [
      "Implemented MVVM architecture with Riverpod for maintainable state management",
      "Integrated REST APIs to display news content across categories",
      "Built a responsive UI with AutoRoute navigation and dark/light mode support",
    ],
    keyFeatures: [
      "Real-time global headlines",
      "Category-based news browsing",
      "Dark and light mode",
      "Smooth navigation",
    ],
    technologies: ["Flutter", "Dart", "Riverpod", "MVVM", "REST API"],
    results: [
      "Created a polished and scalable news application",
      "Delivered a smooth user experience across categories",
      "Built a maintainable architecture for future growth",
    ],
    github: "https://github.com/elsankary02/news_app",
    image: "/images/projects/News.jpg",
    gradient: "from-secondary-500 via-primary-500 to-primary-700",
  },
  {
    id: "bookly",
    title: "Bookly",
    subtitle: "Digital Book Explorer App",
    overview:
      "A book discovery app that lets users search for books, preview details, and explore a large digital library. The project emphasizes clean API integration and a polished, responsive interface.",
    role: "Flutter Developer — Built the search experience, UI, and app architecture for a scalable book explorer.",
    challenges: [
      "Handling live search and high-quality book previews",
      "Creating a maintainable architecture for app state and navigation",
      "Providing a clean and intuitive user experience",
    ],
    solutions: [
      "Implemented Bloc/Cubit with MVVM architecture for predictable state flow",
      "Integrated the Google Books API for live search and book details",
      "Built a responsive UI with GoRouter navigation and dependency injection",
    ],
    keyFeatures: [
      "Real-time book search",
      "Book previews",
      "Clean navigation",
      "Responsive UI",
    ],
    technologies: ["Flutter", "Dart", "Bloc", "MVVM", "GetIt", "REST API"],
    results: [
      "Delivered an intuitive digital book browsing experience",
      "Built a scalable and structured architecture",
      "Created a polished app for exploring books quickly",
    ],
    github: "https://github.com/elsankary02/bookly_app",
    image: "/images/projects/bookly.jpg",
    gradient: "from-primary-500 via-primary-400 to-secondary-500",
  },
  {
    id: "food-ninja",
    title: "Food Ninja App",
    subtitle: "Hybrid Food & Grocery Platform",
    overview:
      "A hybrid food and grocery delivery experience that combines multiple UI/UX design ideas into one unified app. The project focuses on smooth navigation, search, filtering, animations, and localization.",
    role: "Flutter Developer — Designed and built a scalable food delivery experience with a rich UI and smooth user flows.",
    challenges: [
      "Blending multiple UI/UX directions into one experience",
      "Supporting search, filters, and smooth order flows",
      "Keeping the codebase maintainable as features grow",
    ],
    solutions: [
      "Implemented Clean Architecture with Riverpod for scalable state management",
      "Built advanced features including search, filtering, animations, and localization",
      "Delivered a smooth order flow and cohesive app experience",
    ],
    keyFeatures: [
      "Food and grocery delivery experience",
      "Search and filtering",
      "Animations",
      "Localization",
      "Smooth order flow",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Clean Architecture",
      "Localization",
    ],
    results: [
      "Delivered a polished hybrid food and grocery app",
      "Improved usability with rich interactions and clear flows",
      "Built a maintainable structure for future expansion",
    ],
    github: "https://github.com/elsankary02/food_ninja_app",
    image: "/images/projects/ninja_food.jpg",
    gradient: "from-primary-500 via-secondary-500 to-primary-600",
  },
];
