type detailsType = {
  id: string;
  prjectName: string;
  projectInfo: string;
  link: {
    github: string;
    live: string;
  };
  techStack: string[];
  features: string[];
  projectImg: string;

  screenshots: string[];
  lessonsLearned: {
    title: string;
    description: string;
  }[];
}[];

export const details: detailsType = [
  {
    id: "wildoasis",
    prjectName: "The Wild Oasis",
    projectInfo:
      "Wild Oasis is an easy-to-use hotel booking website that helps travelers find their perfect getaway in stunning natural locations. The platform offers a curated selection of hotels, resorts, and eco-lodges, focusing on properties nestled in serene landscapes",
    link: {
      github: "https://github.com/SteveEnny/The-wild-oasis-typescript-based",
      live: "https://the-wild-oasis-typescript-based.vercel.app/",
    },
    techStack: ["nextjs", "supabase", "tailwind"],
    features: [
      "Authentication with Supabase",
      "UI State Management with context API",
      "streaming, suspense data",
      "Server action and mutations",
      "Excellent error handling",
    ],
    projectImg: "wildoasis",
    screenshots: ["wildoasis2", "wildoasis3", "wildoasis4"],
    lessonsLearned: [
      {
        title: "Authentication",
        description:
          "Learned how learnt how to use Next auth to sign in into the application",
      },
      {
        title: "Data fetching and caching",
        description:
          "ferching data on the server with the fetch API, revalidating cached data",
      },
      {
        title: "Environmental Variables",
        description:
          "protected my supabase variables using an environmental variables",
      },
      {
        title: "Routing",
        description: "understanding the nextJs page and app route",
      },
    ],
  },
  {
    id: "fastpizza",
    prjectName: "Fast React Pizza",
    projectInfo:
      "PizzaHub is a user-friendly application that allows customers to explore and order from a variety of pizza types. With an intuitive interface, users can browse through different pizza styles—whether classic, gourmet, or customizable.",
    link: {
      github: "https://github.com/SteveEnny/Fast-pizza",
      live: "https://fast-pizza-aygz.vercel.app/",
    },
    techStack: ["react", "tailwind", "redux"],
    features: [
      "Authentication",
      "Role and Permission",
      "Management of employees",
    ],
    projectImg: "fastpizza",
    screenshots: ["fastpizza1", "fastpizza2", "fastpizza3", "fastpizza4"],
    lessonsLearned: [
      {
        title: "Authentication",
        description:
          "Learned how learnt how to use Next auth to sign in into the application",
      },
      {
        title: "Data fetching and caching",
        description:
          "ferching data on the server with the fetch API, revalidating cached data",
      },
      {
        title: "Environmental Variables",
        description:
          "protected my supabase variables using an environmental variables",
      },
      {
        title: "Routing",
        description: "understanding the angular single page routing",
      },
    ],
  },
  {
    id: "HR",
    prjectName: "HR Management",
    projectInfo:
      "HRMS is an all-in-one HR management application designed to streamline employee management processes. The platform allows HR teams to manage employee records, track attendance, and oversee payroll and benefits",
    link: {
      github: "https://github.com/Oluwabambi/HRMS-frontend",
      live: "https://hrms-dashboard.netlify.app/",
    },
    techStack: ["Angular", "Tailwindicon", "Laravel"],
    features: [
      "Authentication",
      "Role and Permission",
      "Management of employees",
    ],
    projectImg: "hr",
    screenshots: ["hr1", "hr2", "hr3", "hr4"],
    lessonsLearned: [
      {
        title: "Authentication",
        description:
          "Learned how learnt how to use Next auth to sign in into the application",
      },
      {
        title: "Data fetching and caching",
        description:
          "ferching data on the server with the fetch API, revalidating cached data",
      },
      {
        title: "Environmental Variables",
        description:
          "protected my supabase variables using an environmental variables",
      },
      {
        title: "Routing",
        description: "understanding the angular single page routing",
      },
    ],
  },
];

// export default details;
