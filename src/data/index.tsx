"use client"

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
  SiClerk,
  SiReact,
} from "react-icons/si";
import { Briefcase, FileText, BarChart, PenTool, TrendingUp, Github } from 'lucide-react';



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



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






const AiCareerCoach = () => {
  const features = [
    {
      src: ["/téléchargement.png"],
      title: "AI-Powered Career Guidance",
      description: "Leverage Google's Generative AI to receive personalized career advice, industry-specific insights, and real-time market trends to guide your professional journey."
    },
    {
      src: ["/AI Career Coach.png", "/AI Career Coach1.png"],
      title: "Interview Preparation System",
      description: "Practice with an interactive quiz system featuring role-specific technical and behavioral questions, track performance with analytics, and get AI-generated improvement tips."
    },
    {
      src: ["/AI Career Coach5.png", "/AI Career Coach4.png"],
      title: "Smart Resume Builder",
      description: "Create ATS-optimized resumes using an AI-assisted Markdown editor, with real-time feedback, scoring, and industry-specific templates for professional formatting."
    },
    {
      src: ["/AI Career Coach3.png"],
      title: "AI Cover Letter Generator",
      description: "Generate tailored cover letters based on job descriptions with company-specific customization, manage multiple drafts, and track completion status effortlessly."
    },
    {
      src: ["/AI Career Coach2.png"],
      title: "Industry Insights Dashboard",
      description: "Access real-time industry trends, salary data, market outlooks, and in-demand skills recommendations to stay competitive in your career."
    }
  ];



  return (
    <div className="bg-neutral-800 rounded-3xl mb-4">

      <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">Full Stack AI Career Coach with Next JS, Neon DB, Tailwind, Prisma, Inngest, Shadcn UI</h1>

      <div className="flex justify-center w-full">
        <Tabs className="w-full max-w-4xl" defaultValue="core">
          <TabsList className="justify-center w-full bg-transparent gap-2 sm:gap-4 md:gap-6 flex flex-wrap" >
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="core">Core Purpose</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="features">Key Features</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="technical">Technical Teck</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="data">Data Models</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="user">UX</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="target">Target</TabsTrigger>
          </TabsList>

          <TabsContent className="mt-20" value="core">
            <h3 className="text-xl sm:text-2xl text-center font-semibold mb-3 sm:mb-4">🎯 Core Purpose</h3>
            <p className="text-sm sm:text-base mb-4">The app serves as an AI-powered career coach that helps users:</p>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Prepare for job interviews with personalized practice sessions</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Create professional resumes optimized for ATS (Applicant Tracking Systems)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Generate tailored cover letters for specific job applications</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Get industry insights and career guidance</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Track their professional development progress</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="features">
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='space-y-12'>
                {features.map((feature, index) => (
                  <div key={index} className='flex flex-col space-y-12'>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">{feature.title}</h3>
                    <div className='relative w-full h-[400px] overflow-hidden  bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 flex flex-wrap items-center justify-center gap-4'>
                      {feature.src.map((imgSrc, imgIdx) => (
                        <img
                          key={imgSrc + imgIdx}
                          src={imgSrc}
                          alt={feature.description}
                          width={3000}
                          height={3000}
                          className='object-cover w-full h-full rounded-xl max-w-[400px] max-h-[400px]'
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-center my-4">
                      <p className='text-base font-medium text-center text-white leading-relaxed max-w-3xl'>
                        {feature.description}
                      </p>
                    </div>
                    <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent className="mt-20" value="technical">

            <h3 className="text-xl sm:text-2xl text-center font-semibold mb-3 sm:mb-4">🛠 Technical Architecture</h3>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Frontend Stack:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Next.js 15</strong> with App Router for modern React development</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>TypeScript</strong> for type safety</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Tailwind CSS</strong> for styling with custom UI components</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Radix UI</strong> for accessible component primitives</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Lucide React</strong> for icons</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Framer Motion</strong> for animations</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Backend & Database:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Prisma ORM</strong> with PostgreSQL database</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Clerk</strong> for authentication and user management</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Google Generative AI</strong> for AI-powered features</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Inngest</strong> for background job processing</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Key Dependencies:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>React Hook Form for form management</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Recharts for data visualization</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>HTML2PDF for document generation</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Sonner for toast notifications</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="data">
            <h3 className="text-xl sm:text-2xl  text-center font-semibold mb-3 sm:mb-4">📊 Data Models</h3>
            <p className="text-sm sm:text-base mb-4">The application uses a well-structured database schema with models for:</p>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Users</strong> (with industry preferences and skills)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Assessments</strong> (interview quiz results and performance)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Resumes</strong> (ATS-optimized content with scoring)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Cover Letters</strong> (job-specific applications)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Industry Insights</strong> (market data and trends)</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="user">

            <h3 className="text-xl text-center sm:text-2xl font-semibold mb-3 sm:mb-4">🎨 User Experience</h3>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Landing Page Features:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Modern hero section with animated gradient titles</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Feature showcase highlighting AI capabilities</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Statistics display (50+ industries, 1000+ questions, 95% success rate)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Step-by-step "How It Works" guide</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>User testimonials and FAQ section</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Dashboard Experience:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Personalized industry insights</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Progress tracking and analytics</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Quick access to all career tools</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Onboarding flow for new users</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="target">
            <h3 className="text-xl text-center sm:text-2xl font-semibold mb-3 sm:mb-4">🎯 Target Audience</h3>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Job seekers looking to improve their application materials</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Professionals preparing for interviews</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Career changers seeking industry insights</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Anyone wanting AI-powered career guidance</span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

    </div>

  );
};

const ScrapeFlow = () => {
  const features = [
    {
      src: ["/scrapeflow1.png"],
      title: "ScrapeFlow Home Dashboard",
      description: "Get a quick overview of your scraping activities with real-time stats on workflow and phase executions, credits consumed, and visual graphs for daily success/failure rates, empowering efficient workflow management."
    },
    {
      src: ["/scrapeflow3.png"],
      video: "/scrapeflow7.mp4",
      title: "Workflow Editor",
      description: "Design and customize scraping workflows visually using a drag-and-drop interface with modular tasks like data extraction, user interactions, and result delivery, offering a code-free way to automate complex processes."
    },
    {
      src: ["/scrapeflow5.png"],
      video: "/scrapeflow6.mp4",
      title: "Workflow Run Details",
      description: "Track and analyze individual workflow runs with detailed status updates, including failure reasons like insufficient credits, phase-by-phase execution logs, and input/output data, ensuring precise monitoring and troubleshooting."
    },
    {
      src: ["/scrapeflow4.png"],
      title: "All Runs Overview",
      description: "View a comprehensive log of all workflow runs, including status, credits used, and timestamps, allowing you to assess performance and optimize your scraping strategies effectively."
    },
    {
      src: ["/scrapeflow2.png"],
      title: "Billing Section",
      description: "Monitor your credit balance and purchase flexible credit packs (e.g., Small, Medium, Large) to keep your workflows running smoothly, with clear warnings when credits are low."
    },
    {
      src: ["/scrapeflow2.png"],
      title: "Credentials Management",
      description: "Securely manage and encrypt your credentials with an intuitive interface, ensuring sensitive data like login details are safely stored and easily accessible for workflow automation."
    },
  ];



  return (
    <div className="bg-neutral-800 rounded-3xl mb-4">

      <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">Full Stack AI Career Coach with Next JS, Neon DB, Tailwind, Prisma, Inngest, Shadcn UI</h1>

      <div className="flex justify-center w-full">
        <Tabs className="w-full max-w-4xl" defaultValue="core">
          <TabsList className="justify-center w-full bg-transparent gap-2 sm:gap-4 md:gap-6 flex flex-wrap mb-10 md:mb-4" >
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="core">Core Purpose</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="features">Key Features</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="technical">Technical Teck</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="data">Data Models</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="user">UX</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="target">Target</TabsTrigger>
          </TabsList>

          <TabsContent className="mt-20" value="core">
            <h3 className="text-xl sm:text-2xl text-center font-semibold mb-3 sm:mb-4">🎯 Core Purpose</h3>
            <p className="text-sm sm:text-base mb-4">The app serves as a no-code workflow automation platform that helps users:</p>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Design complex web scraping workflows visually without coding</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Automate browser-based tasks like navigation, form filling, and data extraction</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Schedule and monitor workflow executions with detailed logs</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Leverage AI-powered data parsing for accurate extraction</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Manage credits and billing for seamless automation scaling</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="features">
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='space-y-12'>
                {features.map((feature, index) => (
                  <div key={index} className='flex flex-col space-y-12'>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">{feature.title}</h3>
                    <div className='relative w-full h-[400px] overflow-hidden  bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 flex flex-wrap items-center justify-center gap-4'>
                      {feature.src.map((imgSrc, imgIdx) => (
                        <img
                          key={imgSrc + imgIdx}
                          src={imgSrc}
                          alt={feature.description}
                          width={3000}
                          height={3000}
                          className='object-cover w-full h-full rounded-xl max-w-[400px] max-h-[400px]'
                        />
                      ))}
                {feature.video && (
               <div className="relative w-full max-w-[640px] mx-auto aspect-video bg-black rounded-xl shadow-lg flex items-center justify-center">
               <video
                 src={feature.video}
                 controls
                 poster={feature.src?.[0]} // Optional: show first image as poster
                 className="object-contain w-full h-full rounded-xl"
               />
             </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center my-4">
                      <p className='text-base font-medium text-center text-white leading-relaxed max-w-3xl'>
                        {feature.description}
                      </p>
                    </div>
                    <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent className="mt-20" value="technical">
            <h3 className="text-xl sm:text-2xl text-center font-semibold mb-3 sm:mb-4">🛠 Technical Architecture</h3>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Frontend Stack:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Next.js 15</strong> with App Router for modern React development</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>ReactFlow</strong> for visual workflow editor with drag-and-drop functionality</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>TypeScript</strong> for type safety</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Tailwind CSS</strong> for styling with custom UI components</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Radix UI</strong> for accessible component primitives</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Lucide React</strong> for icons</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Framer Motion</strong> for animations</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Backend & Database:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Prisma ORM</strong> with SQLite database for lightweight data management</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Clerk</strong> for secure authentication and user management</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Puppeteer</strong> for browser automation and web scraping</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Next.js API Routes</strong> for server-side logic and workflow execution</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Key Dependencies:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Stripe</strong> for payment processing and credit purchases</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Node-cron</strong> for scheduling workflow executions</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Axios</strong> for handling HTTP requests and webhook delivery</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Zod</strong> for schema validation and data integrity</span>
              </li>
            </ul>
          </TabsContent>


          <TabsContent className="mt-20" value="data">
            <h3 className="text-xl sm:text-2xl text-center font-semibold mb-3 sm:mb-4">📊 Data Models</h3>
            <p className="text-sm sm:text-base mb-4">The application uses a well-structured database schema with models for:</p>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Workflow</strong> (user-defined workflows with execution plans and schedules)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>WorkflowExecution</strong> (tracks execution details, status, and triggers)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>ExecutionPhase</strong> (individual phases of workflow execution with inputs/outputs)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>ExecutionLog</strong> (logs for each execution phase with timestamps and levels)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>UserBalance</strong> (manages user credits for workflow executions)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Credential</strong> (secure storage for user-specific credentials)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>UserPurchase</strong> (tracks user purchases and payment details)</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="user">
            <h3 className="text-xl text-center sm:text-2xl font-semibold mb-3 sm:mb-4">🎨 User Experience</h3>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Landing Page Features:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Modern hero section with animated gradient titles</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Feature showcase highlighting visual workflow editor and AI-powered extraction</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Statistics display (100+ task types, 10,000+ successful executions, 98% uptime)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Step-by-step "How It Works" guide for creating and scheduling workflows</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>User testimonials and FAQ section for web scraping and automation</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Dashboard Experience:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Visual workflow editor for drag-and-drop automation design</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Real-time execution tracking with detailed logs and status updates</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Credit usage monitoring and billing history overview</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Secure credential management and onboarding for new users</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="target">
            <h3 className="text-xl text-center sm:text-2xl font-semibold mb-3 sm:mb-4">🎯 Target Audience</h3>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Data analysts automating web scraping tasks</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Businesses needing scheduled data extraction and reporting</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Developers building custom automation workflows</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Non-technical users seeking no-code web scraping solutions</span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

    </div>

  );
};


const AestheticPro = () => {
  const features = [
    {
      src: ["/aestheticpro1.png"],
      title: "Marketplace Hub",
      description: "A dynamic platform connecting sellers and buyers, enabling seamless product discovery, customization, and transactions."
    },
    {
      src: ["/aestheticpro2.png"],
      title: "Design Customization",
      description: "Empowers sellers and clients to upload, edit, and apply designs to a wide range of products, delivering a personalized and interactive experience."
    },
    {
      src: ["/aestheticpro3.png"],
      title: "Analytics Dashboard",
      description: "Equips admins and sellers with comprehensive insights into sales trends, product performance, and user engagement to drive strategic decisions."
    },
    {
      src: ["/aestheticpro4.png"],
      title: "Order Management",
      description: "Streamlines operations with real-time order tracking, status updates, and notifications, enhancing efficiency and customer satisfaction."
    },
    {
      src: ["/aestheticpro5.png"],
      title: "Referral Program",
      description: "Boosts engagement and revenue by enabling users to earn commissions through product referrals with a robust, user-friendly system."
    },
    {
      src: ["/aestheticpro6.png"],
      title: "Store Levels",
      description: "Unlock progressive benefits based on sales milestones: Level 1 offers up to 30 products and designs with priority listing, Level 2 adds 50 products and trending store highlights, Level 3 includes 70 products and priority customer support, and Level 4 provides unlimited products and premium marketing support."
    },
    {
      src: ["/aestheticpro7.png"],
      title: "Seller Store",
      description: "A personalized storefront for sellers to showcase products and designs, featuring a main store page with follower tracking, product sorting, and filtering options for an optimized shopping experience."
    }
  ];
  return (
    <div className="bg-neutral-800 rounded-3xl mb-4">


      <div className="flex justify-center w-full">
        <Tabs className="w-full max-w-4xl" defaultValue="overview">
          <TabsList className="justify-center w-full bg-transparent gap-2 sm:gap-4 md:gap-6 flex flex-wrap" >
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="overview">Overview</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="features">Key Features</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="technical">Technical Teck</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="points">Unique Selling Points</TabsTrigger>
            <TabsTrigger className="border border-gray-600 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 text-xs sm:text-sm md:text-base rounded-lg " value="target">Target Audience</TabsTrigger>

          </TabsList>

          <TabsContent className="mt-20" value="overview">
            <p className="text-sm sm:text-base mb-4">AestheticPro.tn is a Tunisian print-on-demand platform built with Next.js. It empowers users to create, customize, and sell their own designs on a variety of products. The platform serves three main user groups:</p>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Customers: Shop for unique, artist-designed products.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Designers/Sellers: Upload and sell custom designs, manage their own storefront, and earn passive income.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Affiliates: Promote products and earn commissions through referrals.</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="features">
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='space-y-12'>
                {features.map((feature, index) => (
                  <div key={index} className='flex flex-col space-y-12'>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">{feature.title}</h3>
                    <div className='relative w-full h-[400px] overflow-hidden  bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 flex flex-wrap items-center justify-center gap-4'>
                      {feature.src.map((imgSrc, imgIdx) => (
                        <img
                          key={imgSrc + imgIdx}
                          src={imgSrc}
                          alt={feature.description}
                          width={3000}
                          height={3000}
                          className='object-cover w-full h-full rounded-xl max-w-[400px] max-h-[400px]'
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-center my-4">
                      <p className='text-base font-medium text-center text-white leading-relaxed max-w-3xl'>
                        {feature.description}
                      </p>
                    </div>
                    <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent className="mt-20" value="technical">


            <h4 className="text-lg sm:text-xl font-medium mb-2">Frontend Stack:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Next.js 15</strong> with App Router for modern React development</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>TypeScript</strong> for type safety</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Tailwind CSS</strong> for styling with custom UI components</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Shadcn UI</strong> for accessible component primitives</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Lucide React</strong> for icons</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-pink-500 to-purple-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Framer Motion</strong> for animations</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Backend & Database:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Prisma ORM</strong> with PostgreSQL database</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>NextAuth.js</strong> for authentication and user management</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-green-400 to-blue-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Inngest</strong> for background job processing</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="points">
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Empowering Creativity:</strong> Enables Tunisian artists and entrepreneurs to monetize their creativity and reach a wider audience.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Quality & Sustainability:</strong> (interview quiz results and performance)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>User-Friendly Experience:</strong> Easy-to-use interface for both buyers and sellers, with robust support and satisfaction guarantees.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span><strong>Community & Growth:</strong> Offers marketing support, community features, and regular insights to help sellers maximize their potential.</span>
              </li>

            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="user">


            <h4 className="text-lg sm:text-xl font-medium mb-2">Landing Page Features:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Modern hero section with animated gradient titles</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Feature showcase highlighting AI capabilities</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Statistics display (50+ industries, 1000+ questions, 95% success rate)</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Step-by-step "How It Works" guide</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>User testimonials and FAQ section</span>
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-2">Dashboard Experience:</h4>
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Personalized industry insights</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Progress tracking and analytics</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Quick access to all career tools</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-pink-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Onboarding flow for new users</span>
              </li>
            </ul>
          </TabsContent>

          <TabsContent className="mt-20" value="target">
            <ul className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-lg p-6 mb-4 text-sm sm:text-base space-y-3 border border-gray-600">
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Artists, graphic designers, and illustrators who want to monetize their artwork by selling custom-designed products.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Entrepreneurs looking to launch their own brand or product line without handling production, inventory, or shipping.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Customers seeking unique, personalized, and high-quality products that stand out from mass-produced items.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Individuals interested in earning passive income by promoting products through the affiliate program, even if they are not designers themselves.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>The platform is especially tailored for the Tunisian market, supporting local talent and providing a marketplace for Tunisian creativity.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-1 w-3 h-3 rounded-full bg-gradient-to-tr from-cyan-400 to-green-400 shadow-md group-hover:scale-110 transition-transform duration-200" />
                <span>Social media influencers, bloggers, and content creators who can leverage their audience to drive sales and earn commissions.</span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
};





export const projects = [
  {
    title: "Scrape Flow",
    description: "ScrapeFlow is a modern, extensible workflow automation platform designed for browser-based web scraping, data extraction, and automation tasks. Built with Next.js, Prisma, and Puppeteer, it empowers users to visually design, schedule, and execute complex scraping workflows without writing code.",
    link: "",
    github: "",
    stack: [
      {
        id: 1,
        name: "Next.js",
        designation: "Frontend Framework",
        icon: SiNextdotjs // react-icons/si: Next.js icon
      },
      {
        id: 2,
        name: "TypeScript",
        designation: "Programming Language",
        icon: SiTypescript // react-icons/si: TypeScript icon
      },
      {
        id: 3,
        name: "Tailwind CSS",
        designation: "CSS Framework",
        icon: SiTailwindcss // react-icons/si: Tailwind CSS icon
      },
      {
        id: 4,
        name: "Prisma",
        designation: "ORM",
        icon: SiPrisma // react-icons/si: Prisma icon
      },
      {
        id: 5,
        name: "PostgreSQL",
        designation: "Database",
        icon: SiPostgresql // react-icons/si: PostgreSQL icon
      },
      {
        id: 6,
        name: "Clerk",
        designation: "Authentication",
        icon: SiClerk // react-icons/si: Clerk icon (assumed, may need verification)
      },
      {
        id: 7,
        name: "React Flow",
        designation: "Graph Flow",
        icon: SiReact // react-icons/si: Clerk icon (assumed, may need verification)
      }
    ],
    content: <ScrapeFlow />
  },
  {
    title: "AI Career Coach",
    image: "/téléchargement.png", // Placeholder; no specific image provided
    description: "A comprehensive career development platform leveraging AI to provide personalized job interview preparation, ATS-optimized resume building, tailored cover letter generation, and real-time industry insights for job seekers and professionals.",
    link: "https://ai-career-coach-pied.vercel.app/",
    github: "https://github.com/Chedidayeh/ai-career-coach",
    stack: [
      {
        id: 1,
        name: "Next.js",
        designation: "Frontend Framework",
        icon: SiNextdotjs // react-icons/si: Next.js icon
      },
      {
        id: 2,
        name: "TypeScript",
        designation: "Programming Language",
        icon: SiTypescript // react-icons/si: TypeScript icon
      },
      {
        id: 3,
        name: "Tailwind CSS",
        designation: "CSS Framework",
        icon: SiTailwindcss // react-icons/si: Tailwind CSS icon
      },
      {
        id: 4,
        name: "Prisma",
        designation: "ORM",
        icon: SiPrisma // react-icons/si: Prisma icon
      },
      {
        id: 5,
        name: "PostgreSQL",
        designation: "Database",
        icon: SiPostgresql // react-icons/si: PostgreSQL icon
      },
      {
        id: 6,
        name: "Clerk",
        designation: "Authentication",
        icon: SiClerk // react-icons/si: Clerk icon (assumed, may need verification)
      }
    ],
    content: <AiCareerCoach />
  },
  {
    title: "AestheticPro",
    description:
      "Print-on-Demand E-commerce Platform: (Built with Next.js, TypeScript, and Prisma) Created multi-role dashboards for sellers, factories, and admins with real-time analytics and order management. Implemented dynamic product mockup generation and detailed seller performance tracking. Integrated Firebase Storage, PostgreSQL, affiliate marketing, and real-time notifications for engagement. Empowers Tunisian creators to launch brands with built-in social media and online store tools.",
    link: "https://aestheticpro.vercel.app",
    github : "",
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
    description:
      "I built a full-stack flying agency web app using a Spring Boot backend with RESTful APIs and Spring Data JPA for MySQL database management via phpMyAdmin, and a Next.js frontend with React and TypeScript for a responsive, SEO-friendly interface. Features include flight search/booking, user authentication, booking management, and an admin dashboard, styled with Tailwind CSS and Shadcn/ui, using Axios for API calls.",
    link: "",
    github: "https://github.com/Chedidayeh/SpringBoot-Project",

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
    description:
      "I developed a full-stack travel agency web app using an ASP.NET Core backend with RESTful APIs for managing flights, hotels, reservations, and destinations, integrated with a Next.js frontend built in React and TypeScript for a responsive, SEO-optimized interface with SSR and SSG. Key features include flight and hotel booking, reservation and destination management, real-time data, notifications, and an admin dashboard, styled with Tailwind CSS and Shadcn/ui, using Axios for API communication.",
    link: "",
    github: "https://github.com/Chedidayeh/ASP.NET",
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
    title: "COVID-19 BI Project",
    description:
      "This BI project uses Elasticsearch and Kibana to visualize COVID-19 cases across five countries, sourced from Kaggle. A star-schema data warehouse with Dim_Country, Dim_Date, and Fact_COVID. With dates ensures data integrity. Dashboards show case distribution by country and age. Talend data loading errors were resolved for reliable insights.",
    link: "",
    github: "",
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
    title: "Matrix Calculator SOAP Web Service",
    description:
      "I developed a Java-based Matrix Calculator SOAP Web Service using JAX-WS to perform 2D matrix operations like addition and multiplication, exposed via a WSDL interface for SOAP requests. Managed with Maven and dependencies like JAX-WS and JAXB, it runs locally via Endpoint and is testable with SoapUI, offering a practical example of SOAP-based mathematical computations.",
    link: "",
    github: "https://github.com/Chedidayeh/Matrix-Calculator-SOAP-Web-Service",
    stack: [
    ],
  },
];

