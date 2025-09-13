import { cn } from "@/lib/utils";
import {
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
            description: "Proficient in UML diagrams (use case, class, sequence, etc.) and BPMN diagrams.",
            icon: <IconLayout />,
        },
        {
            title: "Business Intelligence",
            description: "Experience with ETL processes using SSIS and Talend, and multidimensional/tabular models with SSAS.",
            icon: <IconChartBar />,
        },
        {
            title: "Programming Languages",
            description: "Proficient in Java, JavaScript, C#, and Python.",
            icon: <IconCode />,
        },
        {
            title: "Backend Development",
            description: "Expertise in Nest.js, Express.js, ASP.NET, Spring Boot, FastAPI, and microservices architecture. Experienced in building event-driven workflows using Inngest and implementing RAG systems with vector databases.",
            icon: <IconServer />,
        },
        {
            title: "Frontend Development",
            description: "Skilled in Next.js, React, Angular, and tools like Zustand, Bootstrap, Redux, Shadcn/ui.",
            icon: <IconBrowser />,
        },
        {
            title: "Databases",
            description: "Familiar with NoSQL, SQL, MySQL, PostgreSQL, MongoDB, and Prisma ORM (Neon, Firebase, and Supabase integration). Experienced in managing vector databases for semantic search and AI-powered applications.",
            icon: <IconDatabase />,
        },
        {
            title: "Third-Party Integrations and APIs",
            description: "Experience with REST API, GraphQL, Strapi, Headless CMS, Auth0, Firebase, and Vercel. Skilled in using Gemini text-embedding-004 for creating vector embeddings.",
            icon: <IconPlug />,
        },
        {
            title: "Cloud Technologies",
            description: "Proficient in AWS, Azure, and Vercel for deployment and hosting.",
            icon: <IconCloud />,
        },
        {
            title: "Quality Assurance and Testing",
            description: "Skilled in Jest, JavaScript testing, Cypress, Selenium, Postman, and SoapUI for SOAP web services.",
            icon: <IconCheck />,
        },
        {
            title: "DevOps and Version Control",
            description: "Expertise in Git, GitHub/GitLab workflows, CI/CD with GitHub Actions, Docker, and Kubernetes.",
            icon: <IconGitBranch />,
        },
        {
            title: "Development Methodologies",
            description: "Experienced in delivering projects using Agile methodology.",
            icon: <NotebookText />,
        },
        {
            title: "Other Tools",
            description: "Familiar with Node.js JavaScript runtime environment.",
            icon: <IconTool />,
        },
    ];
    
    return (
        <>
            <div id="skills" className="md:mt-[150px] flex flex-col px-4 ">

                <div className="px-8 md:mt-36 flex flex-col justify-center items-center">
                    <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b  from-neutral-600 to-white text-2xl md:text-2xl lg:text-4xl font-sans  relative z-20 font-bold tracking-tight">
                        <Cover>My Skills</Cover>
                    </h2>
                    <p className="max-w-x1 text-[1rem] text-start mt-[20px] md:text-1g text-neutral-400">
                        I provide the best tech
                    </p>
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
