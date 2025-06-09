import { LinkPreview } from "@/components/ui/link-preview";
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiFirebase,
  SiPostgresql,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiAxios,
  SiDotnet,
  SiElasticsearch,
  SiKibana,
} from "react-icons/si";

const COVID19 = () => {
  return (
    <div className="bg-neutral-800  rounded-3xl mb-4">
      <div className="font-bold text-2xl text-neutral-200 mb-4">
        Key Features:
      </div>
      <ul className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto list-disc list-inside space-y-3">
        <li>
          <span className="font-semibold text-neutral-200">Real-Time Data Updates:</span> Fetches and displays live COVID-19 case numbers, recoveries, and deaths from reliable APIs like WHO or Johns Hopkins.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Interactive Data Visualizations:</span> Includes dynamic charts (e.g., line graphs, heatmaps) built with Chart.js or D3.js for tracking trends over time.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Global and Regional Breakdown:</span> Provides detailed statistics by country, region, or continent with a searchable and filterable interface.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Predictive Analytics:</span> Uses machine learning models to forecast case trends based on historical data and current patterns.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">User-Friendly Interface:</span> Responsive design with dark/light mode, optimized for mobile and desktop, ensuring accessibility.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Vaccination Tracking:</span> Monitors global vaccination rates, including doses administered and coverage percentages.
        </li>
      </ul>
    </div>
  );
};

const AestheticPro = () => {
  return (
    <div className="bg-neutral-800  rounded-3xl mb-4">
      <p className="mb-4 sm:mb-8 text-xs sm:text-sm md:text-2xl font-bold text-neutral-200">
        Platfrom Link: {" "}
        <LinkPreview
          url="https://aestheticpro.vercel.app/"
          className="font-bold bg-clip-text text-blue-500"
        >
          AestheticPro
        </LinkPreview>
        {" "}


      </p>
      <div className="font-bold text-2xl text-neutral-200 mb-4">
        Key Features:
      </div>
      <ul className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto list-disc list-inside space-y-3">
        <li>
          <span className="font-semibold text-neutral-200">Real-Time Data Updates:</span> Fetches and displays live COVID-19 case numbers, recoveries, and deaths from reliable APIs like WHO or Johns Hopkins.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Interactive Data Visualizations:</span> Includes dynamic charts (e.g., line graphs, heatmaps) built with Chart.js or D3.js for tracking trends over time.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Global and Regional Breakdown:</span> Provides detailed statistics by country, region, or continent with a searchable and filterable interface.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Predictive Analytics:</span> Uses machine learning models to forecast case trends based on historical data and current patterns.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">User-Friendly Interface:</span> Responsive design with dark/light mode, optimized for mobile and desktop, ensuring accessibility.
        </li>
        <li>
          <span className="font-semibold text-neutral-200">Vaccination Tracking:</span> Monitors global vaccination rates, including doses administered and coverage percentages.
        </li>
      </ul>
    </div>
  );
};





export const projects = [
  {
    title: "COVID-19 BI Project",
    image: "/BI.jpg",
    description:
      "This BI project uses Elasticsearch and Kibana to visualize COVID-19 cases across five countries, sourced from Kaggle. A star-schema data warehouse with Dim_Country, Dim_Date, and Fact_COVID. With dates ensures data integrity. Dashboards show case distribution by country and age. Talend data loading errors were resolved for reliable insights.",
    link: "",
    stack: [
      {
        id: 17,
        name: "Elasticsearch",
        designation: "Elasticsearch",
        icon: SiElasticsearch, // Available in react-icons/si
      },
      {
        id: 18,
        name: "Kibana",
        designation: "Kibana",
        icon: SiKibana, // Available in react-icons/si
      },
    ],
    content: <COVID19 />,
  },
  {
    title: "AestheticPro",
    image: "/aestheticProLogo.png",
    description:
      "Print-on-Demand E-commerce Platform: (Built with Next.js, TypeScript, and Prisma) Created multi-role dashboards for sellers, factories, and admins with real-time analytics and order management. Implemented dynamic product mockup generation and detailed seller performance tracking. Integrated Firebase Storage, PostgreSQL, affiliate marketing, and real-time notifications for engagement. Empowers Tunisian creators to launch brands with built-in social media and online store tools.",
    link: "https://aestheticpro.vercel.app",
    stack: [
      {
        id: 1,
        name: "NextJs",
        designation: "NextJs",
        icon: SiNextdotjs, // Already provided
      },
      {
        id: 2,
        name: "TypeScript",
        designation: "TypeScript",
        icon: SiTypescript, // Available in react-icons/si
      },
      {
        id: 3,
        name: "Prisma",
        designation: "Prisma",
        icon: SiPrisma, // Available in react-icons/si
      },
      {
        id: 4,
        name: "Firebase Storage",
        designation: "Firebase Storage",
        icon: SiFirebase, // Using Firebase icon as no specific Firebase Storage icon
      },
      {
        id: 5,
        name: "PostgreSQL",
        designation: "PostgreSQL",
        icon: SiPostgresql, // Available in react-icons/si
      },
    ],
    content: <AestheticPro />,

  },
  {
    title: "SpringBoot Project",
    image: "",
    description:
      "I built a full-stack flying agency web app using a Spring Boot backend with RESTful APIs and Spring Data JPA for MySQL database management via phpMyAdmin, and a Next.js frontend with React and TypeScript for a responsive, SEO-friendly interface. Features include flight search/booking, user authentication, booking management, and an admin dashboard, styled with Tailwind CSS and Shadcn/ui, using Axios for API calls.",
    link: "https://github.com/Chedidayeh/SpringBoot-Project",
    stack: [
      {
        id: 7,
        name: "Spring Boot",
        designation: "Spring Boot",
        icon: SiSpringboot, // Available in react-icons/si
      },
      {
        id: 9,
        name: "MySQL",
        designation: "MySQL",
        icon: SiMysql, // Available in react-icons/si
      },
      {
        id: 10,
        name: "NextJs",
        designation: "NextJs",
        icon: SiNextdotjs, // Available in react-icons/si
      },
      {
        id: 11,
        name: "TypeScript",
        designation: "TypeScript",
        icon: SiTypescript, // Available in react-icons/si
      },
      {
        id: 12,
        name: "Tailwind CSS",
        designation: "Tailwind CSS",
        icon: SiTailwindcss, // Available in react-icons/si
      },
      {
        id: 14,
        name: "Axios",
        designation: "Axios",
        icon: SiAxios, // Available in react-icons/si
      },
    ],
  },
  {
    title: "ASP.NET Project",
    image: "",
    description:
      "I developed a full-stack travel agency web app using an ASP.NET Core backend with RESTful APIs for managing flights, hotels, reservations, and destinations, integrated with a Next.js frontend built in React and TypeScript for a responsive, SEO-optimized interface with SSR and SSG. Key features include flight and hotel booking, reservation and destination management, real-time data, notifications, and an admin dashboard, styled with Tailwind CSS and Shadcn/ui, using Axios for API communication.",
    link: "https://github.com/Chedidayeh/ASP.NET",
    stack: [
      {
        id: 13,
        name: "ASP.NET Core",
        designation: "ASP.NET Core",
        icon: SiDotnet, // Using .NET icon as no specific ASP.NET Core icon
      },
      {
        id: 15,
        name: "NextJs",
        designation: "NextJs",
        icon: SiNextdotjs, // Available in react-icons/si
      },
      {
        id: 16,
        name: "TypeScript",
        designation: "TypeScript",
        icon: SiTypescript, // Available in react-icons/si
      },
      {
        id: 17,
        name: "Tailwind CSS",
        designation: "Tailwind CSS",
        icon: SiTailwindcss, // Available in react-icons/si
      },
      {
        id: 19,
        name: "Axios",
        designation: "Axios",
        icon: SiAxios, // Available in react-icons/si
      },
    ],
  },
  {
    title: "Matrix Calculator SOAP Web Service",
    image: "",
    description:
      "I developed a Java-based Matrix Calculator SOAP Web Service using JAX-WS to perform 2D matrix operations like addition and multiplication, exposed via a WSDL interface for SOAP requests. Managed with Maven and dependencies like JAX-WS and JAXB, it runs locally via Endpoint and is testable with SoapUI, offering a practical example of SOAP-based mathematical computations.",
    link: "https://github.com/Chedidayeh/Matrix-Calculator-SOAP-Web-Service",
    stack: [
    ],
  },
];


