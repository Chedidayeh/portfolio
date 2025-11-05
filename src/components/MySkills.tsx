import { cn } from "@/lib/utils";
import {
    IconBrain,
    IconBrowser,
    IconChartBar,
    IconCheck,
    IconCloud,
    IconCode,
    IconDatabase,
    IconGitBranch,
    IconLayout,
    IconPlug,
    IconServer,
    IconTool,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";
import { NotebookText } from "lucide-react";

export function Skills() {
const skills = [
  {
    title: "Software Design and Modeling",
    description:
      "Strong understanding of software architecture and system design. Proficient in UML diagrams (use case, class, sequence, activity) and BPMN modeling for process visualization.",
    icon: <IconLayout />,
  },
  {
    title: "Programming Languages",
    description:
      "Proficient in Java, JavaScript, Python, and TypeScript.",
    icon: <IconCode />,
  },
  {
    title: "Machine Learning & AI Development",
    description:
      "Experienced with TensorFlow, PyTorch, scikit-learn, NumPy, Pandas, and Matplotlib for model training, evaluation, and data processing. Knowledge of embeddings, RAG systems, and Agentic AI workflows using LangChain and Hugging Face.",
    icon: <IconBrain />,
  },
  {
    title: "Backend Development",
    description:
      "Expertise in Express.js, ASP.NET, Spring Boot, and FastAPI. Skilled in building scalable APIs, microservices, and event-driven workflows using Inngest. Experienced in integrating AI-powered backends with vector databases for intelligent retrieval systems.",
    icon: <IconServer />,
  },
  {
    title: "Frontend Development",
    description:
      "Skilled in Next.js and React ecosystems with advanced UI and state management using Tailwind CSS, Zustand, Shadcn/ui, and Aceternity UI.",
    icon: <IconBrowser />,
  },
  {
    title: "Databases & Data Management",
    description:
      "Proficient in SQL and NoSQL systems including PostgreSQL, MySQL, MongoDB, and SQLite. Experienced with Prisma ORM, Neon, Firebase, and Supabase integrations. Skilled in managing vector databases like Pinecone for semantic search and GenAI applications.",
    icon: <IconDatabase />,
  },
  {
    title: "Integrations & APIs",
    description:
      "Experience with REST APIs, GraphQL, Strapi, and Headless CMS. Proficient in authentication systems (Auth0, Firebase) and vector embedding generation using Gemini text-embedding-004.",
    icon: <IconPlug />,
  },
  {
    title: "Cloud & Deployment",
    description:
      "Proficient in AWS, Azure, and Vercel for scalable deployment, hosting, and AI infrastructure configuration.",
    icon: <IconCloud />,
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Hands-on experience with Jest, Cypress, Selenium, and Postman for automated testing, integration validation, and API performance assurance.",
    icon: <IconCheck />,
  },
  {
    title: "DevOps & CI/CD",
    description:
      "Expert in Git, GitHub/GitLab workflows, and continuous integration/deployment pipelines using GitHub Actions. Familiar with Docker, Kubernetes, and MLOps best practices for model deployment.",
    icon: <IconGitBranch />,
  },
  {
    title: "Project Management & Methodologies",
    description:
      "Experienced in Agile and Scrum methodologies for iterative software development, sprint planning, and collaborative project delivery.",
    icon: <NotebookText />,
  },
  {
    title: "Tools & Runtime Environments",
    description:
      "Proficient with Node.js runtime, package managers (npm, pnpm, yarn), and modern developer toolchains for efficient full-stack development.",
    icon: <IconTool />,
  },
  {
    title: "Business Intelligence",
    description:
      "Experience in data integration and analytics using SSIS, Talend, and multidimensional/tabular modeling with SSAS for decision support systems.",
    icon: <IconChartBar />,
  },
];

    
    return (
        <>
            <div id="skills" className="mt-20 lg:mt-0 flex flex-col px-4 ">

                <div className="px-8 md:mt-36 flex flex-col justify-center items-center">
                    <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-2xl lg:text-4xl font-sans  relative z-20 font-bold tracking-tight">
                        <Cover>My Skills</Cover>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
                    {skills.map((skill, index) => (
                        <Skill key={skill.title} {...skill} index={index} totalSkills={skills.length} />
                    ))}
                </div>
            </div>
        </>
    );
}

const Skill = ({
    title,
    description,
    icon,
    index,
    totalSkills,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
    totalSkills: number;
}) => {
    const isLastInRow = (index + 1) % 4 === 0;
    const isLastRow = index >= totalSkills - 4;

    return (
        <div
            className={cn(
                "flex flex-col py-10 relative group/feature border-neutral-800",
                !isLastInRow && "lg:border-r",
                index % 4 === 0 && "lg:border-l",
                !isLastRow && "lg:border-b"
            )}
        >
            {!isLastRow && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
            )}
            {isLastRow && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10  text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full  bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
