"use client";
import { projects } from "@/data";
import { Cover } from "./ui/cover";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useState, useRef, createContext, useContext, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { IconType } from "react-icons/lib";
import { LinkPreview } from "./ui/link-preview";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

interface Project {
  title: string;
  image : string,
  description: string;
  link: string;
  stack: {
    id: number;
    name: string;
    designation: string;
    icon: IconType;
  }[];
  content?: React.ReactNode;
}

interface HoverEffectContextType {
  onCardClose: (index: number) => void;
  currentIndex: number;
}

const HoverEffectContext = createContext<HoverEffectContextType>({
  onCardClose: () => {},
  currentIndex: -1,
});

export function Projects() {
  return (
    <MotionConfig  transition={{ duration: 0.3, ease: "easeInOut" }}>
      <div id="projects" className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-52 mt-20 sm:mt-28 md:mt-36 flex flex-col justify-center items-center mb-6 sm:mb-10">
        <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-600 to-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>My Projects</Cover>
        </h2>
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-start mt-3 sm:mt-5 text-neutral-400">
          Check out the list of my projects
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 ">
        <HoverEffect items={projects} />
      </div>
    </MotionConfig>
  );
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: Project[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClose = (index: number) => {
    setSelectedIndex(null);
  };

  return (
    <HoverEffectContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex: selectedIndex || -1 }}
    >
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <CardWithPopover
            key={item.link}
            item={item}
            index={idx}
            isHovered={hoveredIndex === idx}
            setHoveredIndex={setHoveredIndex}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
      </div>
    </HoverEffectContext.Provider>
  );
};

const CardWithPopover = ({
  item,
  index,
  isHovered,
  setHoveredIndex,
  setSelectedIndex,
}: {
  item: Project;
  index: number;
  isHovered: boolean;
  setHoveredIndex: (index: number | null) => void;
  setSelectedIndex: (index: number | null) => void;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(HoverEffectContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[102] h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              ref={containerRef}
              className="relative z-[60] mx-auto my-4 sm:my-10 h-fit max-w-5xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 font-sans bg-neutral-900"
            >
              <button
                className="sticky top-2 sm:top-4 right-2 sm:right-4 ml-auto flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white"
                onClick={handleClose}
              >
                <IconX className="h-4 w-4 sm:h-6 sm:w-6 text-neutral-900" />
              </button>
              <motion.p className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
                {item.title}
              </motion.p>
              <motion.p className="my-3 sm:my-4 text-sm sm:text-base font-medium text-gray-400 ">
                {item.description}
              </motion.p>
              <div className="">
                <div className="flex flex-row items-start justify-start w-full">
                  <AnimatedTooltip items={item.stack} />
                </div>
              </div>
              <div className="flex items-center justify-center  my-4">
                <MagicButton 
                  title="Visit Project" 
                  icon={<FaLocationArrow />} 
                  position="right"
                  handleClick={() => window.open(item.link, '_blank')}
                />
              </div>
              {item.content && (
                <div className="bg-neutral-800 p-4 sm:p-6 md:p-8 lg:p-14 rounded-2xl sm:rounded-3xl mb-4">
                  {item.content}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        className="relative group block p-2 h-full w-full cursor-pointer"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={handleOpen}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-2xl sm:rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
            />
          )}
        </AnimatePresence>
        <Card>
          <CardTitle className="text-xl sm:text-2xl">{item.title}</CardTitle>
          <CardDescription className="text-sm sm:text-base ">{item.description}</CardDescription>
          <div className="flex flex-row items-center justify-center mb-6 sm:mb-10 w-full mt-3 sm:mt-4">
            <AnimatedTooltip items={item.stack.slice(0, 3)} />
            {item.stack.length > 3 && (
              <span className="ml-2 text-sm text-neutral-400">+{item.stack.length - 3} more</span>
            )}
          </div>
        </Card>
      </motion.div>
    </>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl sm:rounded-2xl h-full w-full p-3 sm:p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 sm:p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 sm:mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const text = children as string;
  const truncatedText = text.length > 100 ? `${text.slice(0, 100)}...` : text;
  
  return (
    <p
      className={cn(
        "mt-4 sm:mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm sm:text-base",
        className
      )}
    >
      {truncatedText}
      {text.length > 50 && (
        <span className="text-blue-400 ml-1 cursor-pointer">read more</span>
      )}
    </p>
  );
};
