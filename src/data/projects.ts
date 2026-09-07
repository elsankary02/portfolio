import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "invesier",
    title: "Invesier",
    subtitle: "Social Trading Platform",
    overview:
      "A social trading app connecting traders and investors through live trading challenges, market updates, educational sessions, and social interaction features.",
    role: "Flutter Developer — Built UI screens in Flutter for a social trading app connecting traders and investors.",
    challenges: [
      "Presenting live trading content and market updates clearly",
      "Creating engaging social interaction flows around trading content",
      "Maintaining consistent navigation across all app screens",
    ],
    solutions: [
      "Designed UI for live trading challenges, market updates, and educational sessions",
      "Crafted UI/UX flows for social interaction features to support user engagement",
      "Ensured consistent design language and smooth navigation across all app screens",
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
    image: "/images/projects/invesier.png",
    gradient: "from-primary-600 via-primary-500 to-primary-700",
  },
  {
    id: "al-rubban-marine",
    title: "Al Rubban Marine",
    subtitle: "Boat Maintenance & Service Management Platform",
    overview:
      "A marine service app that lets boat owners manage boats, request maintenance services, schedule repairs, and track service progress.",
    role: "Flutter Developer — Built UI screens in Flutter for a marine service app supporting boat management and maintenance requests.",
    challenges: [
      "Making on-site and center-based repair scheduling easy to follow",
      "Presenting real-time service progress clearly",
      "Maintaining a reliable experience across Android and iOS",
    ],
    solutions: [
      "Designed UI for on-site and center-based repair scheduling flows",
      "Built responsive UI/UX for real-time service progress tracking",
      "Maintained consistent UI components and design patterns across all screens",
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
    image: "/images/projects/alrubbanmarine.png",
    gradient: "from-primary-500 via-secondary-500 to-primary-700",
  },
  {
    id: "lady-driver",
    title: "Lady Driver",
    subtitle: "Women-Only Ride Sharing Platform",
    overview:
      "A women-only ride-sharing app connecting passengers and drivers through a smooth, accessible, and safety-focused mobile experience.",
    role: "Flutter Developer — Built UI screens for booking, driver offers, pickup and drop-off maps, live trip tracking, and safety actions.",
    challenges: [
      "Creating clear booking flows for both passengers and drivers",
      "Presenting driver offers and pickup or drop-off locations intuitively",
      "Making live trip tracking and safety actions easy to access",
    ],
    solutions: [
      "Built responsive Flutter UI screens for passenger and driver ride-sharing flows",
      "Designed booking flows, driver offers, and pickup or drop-off map screens",
      "Crafted live trip tracking and safety action screens across the app",
    ],
    keyFeatures: [
      "Passenger and driver ride booking",
      "Driver offers",
      "Pickup and drop-off maps",
      "Live trip tracking",
      "Safety action screens",
    ],
    technologies: ["Flutter", "Dart", "REST API", "Firebase"],
    results: [
      "Delivered a polished ride-hailing experience",
      "Simplified booking and trip management flows",
      "Created a scalable foundation for future mobility features",
    ],
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.ladydriver.eg&hl=ar",
    image: "/images/projects/lady-driver-showcase.png",
    gradient: "from-secondary-500 via-primary-500 to-primary-700",
  },
  {
    id: "bookly",
    title: "Bookly",
    subtitle: "Digital Book Explorer App",
    overview:
      "A book discovery application using the Google Books API with real-time search and detailed book previews.",
    role: "Flutter Developer — Built the book discovery experience, responsive UI, and scalable app architecture.",
    challenges: [
      "Supporting real-time search and detailed book previews",
      "Keeping app behavior predictable as the project grows",
      "Creating a responsive experience with clean API integration",
    ],
    solutions: [
      "Integrated the Google Books API for real-time search and detailed book previews",
      "Implemented Bloc/Cubit state management with MVVM architecture",
      "Designed a responsive UI with GoRouter navigation and GetIt dependency injection",
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
    github: "https://github.com/elsankary02/bookly",
    image: "/images/projects/bookly.jpg",
    gradient: "from-primary-500 via-primary-400 to-secondary-500",
  },
  {
    id: "food-ninja",
    title: "Food Ninja",
    subtitle: "Hybrid Food & Grocery Platform",
    overview:
      "A hybrid food and grocery delivery application combining multiple UI/UX designs into one unified experience.",
    role: "Flutter Developer — Developed a scalable food and grocery delivery experience with rich UI and smooth user flows.",
    challenges: [
      "Combining multiple UI/UX designs into one cohesive experience",
      "Supporting advanced search, filtering, and ordering flows",
      "Keeping the codebase maintainable as features grow",
    ],
    solutions: [
      "Implemented Clean Architecture with Riverpod for scalable state management",
      "Built search, filtering, animations, and localization features",
      "Optimized app performance and delivered smooth navigation across screens",
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
    github: "https://github.com/elsankary02/food_ninja",
    image: "/images/projects/food-ninja.jpg",
    gradient: "from-primary-500 via-secondary-500 to-primary-600",
  },
];
