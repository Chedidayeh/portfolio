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
} from "react-icons/si";
import { Briefcase, FileText, BarChart, PenTool, TrendingUp, Github } from 'lucide-react';



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




import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"





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
      <div className="container mx-auto text-start text-gray-200 mb-4 font-medium">
        <LinkPreview url="https://github.com/Chedidayeh/ai-career-coach" className="">
          <button
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-md border-2 border-gray-600 hover:from-blue-600 hover:to-purple-500 hover:scale-105 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="button"
          >
            <Github className="w-5 h-5" />
            Visit GitHub repo
          </button>
        </LinkPreview>
      </div>
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

          <TabsContent className="mt-8 sm:mt-10 md:mt-12" value="core">
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

          <TabsContent className="mt-8 sm:mt-10 md:mt-12" value="features">
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

          <TabsContent className="mt-8 sm:mt-10 md:mt-12" value="technical">

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

          <TabsContent className="mt-8 sm:mt-10 md:mt-12" value="data">
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
          
          <TabsContent className="mt-8 sm:mt-10 md:mt-12" value="user">

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

          <TabsContent className="mt-8 sm:mt-10 md:mt-12" value="target">
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


const AestheticPro = () => {
  const features = [
    {
      src: "/aestheticpro1.png",
      title: "Marketplace Hub",
      description: "A dynamic platform connecting sellers and buyers, enabling seamless product discovery, customization, and transactions."
    },
    {
      src: "/aestheticpro2.png",
      title: "Design Customization",
      description: "Empowers sellers and clients to upload, edit, and apply designs to a wide range of products, delivering a personalized and interactive experience."
    },
    {
      src: "/aestheticpro3.png",
      title: "Analytics Dashboard",
      description: "Equips admins and sellers with comprehensive insights into sales trends, product performance, and user engagement to drive strategic decisions."
    },
    {
      src: "/aestheticpro4.png",
      title: "Order Management",
      description: "Streamlines operations with real-time order tracking, status updates, and notifications, enhancing efficiency and customer satisfaction."
    },
    {
      src: "/aestheticpro5.png",
      title: "Referral Program",
      description: "Boosts engagement and revenue by enabling users to earn commissions through product referrals with a robust, user-friendly system."
    },
    {
      src: "/aestheticpro6.png",
      title: "Store Levels",
      description: "Unlock progressive benefits based on sales milestones: Level 1 offers up to 30 products and designs with priority listing, Level 2 adds 50 products and trending store highlights, Level 3 includes 70 products and priority customer support, and Level 4 provides unlimited products and premium marketing support."
    },
    {
      src: "/aestheticpro7.png",
      title: "Seller Store",
      description: "A personalized storefront for sellers to showcase products and designs, featuring a main store page with follower tracking, product sorting, and filtering options for an optimized shopping experience."
    }
  ];
  return (
    <div className="bg-neutral-800 rounded-3xl mb-4">
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='space-y-12'>
          {features.map((image, index) => (
            <div key={index} className='flex flex-col space-y-12'>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{image.title}</h3>
              <div className='relative w-full h-[400px] overflow-hidden rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10'>
                <img
                  src={image.src}
                  alt={image.description}
                  width={3000}
                  height={3000}
                  className='object-cover w-full h-full'
                />
              </div>

              <div className="flex items-center justify-center my-4">
                <p className='text-base font-medium text-center text-white leading-relaxed max-w-3xl'>
                  {image.description}
                </p>
              </div>
              <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





export const projects = [
  {
    "title": "AI Career Coach",
    "image": "/téléchargement.png", // Placeholder; no specific image provided
    "description": "A comprehensive career development platform leveraging AI to provide personalized job interview preparation, ATS-optimized resume building, tailored cover letter generation, and real-time industry insights for job seekers and professionals.",
    "link": "https://ai-career-coach-pied.vercel.app/", // Placeholder; no specific link provided
    "stack": [
      {
        "id": 1,
        "name": "Next.js",
        "designation": "Frontend Framework",
        "icon": SiNextdotjs // react-icons/si: Next.js icon
      },
      {
        "id": 2,
        "name": "TypeScript",
        "designation": "Programming Language",
        "icon": SiTypescript // react-icons/si: TypeScript icon
      },
      {
        "id": 3,
        "name": "Tailwind CSS",
        "designation": "CSS Framework",
        "icon": SiTailwindcss // react-icons/si: Tailwind CSS icon
      },
      {
        "id": 4,
        "name": "Prisma",
        "designation": "ORM",
        "icon": SiPrisma // react-icons/si: Prisma icon
      },
      {
        "id": 5,
        "name": "PostgreSQL",
        "designation": "Database",
        "icon": SiPostgresql // react-icons/si: PostgreSQL icon
      },
      {
        "id": 6,
        "name": "Clerk",
        "designation": "Authentication",
        "icon": SiClerk // react-icons/si: Clerk icon (assumed, may need verification)
      }
    ],
    "content": <AiCareerCoach />
  },
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

