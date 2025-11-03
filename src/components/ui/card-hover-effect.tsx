import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    src: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isFewItems = items.length <= 2;

  return (
    <div
      className={cn(
        isFewItems
          ? "flex justify-center items-center flex-wrap gap-6 py-10"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center py-10 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full max-w-lg"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-2xl sm:rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card isFewItems={isFewItems}>
            {item.src && (
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl mb-2 border border-neutral-800"
              />
            )}
            <CardTitle className="text-center">{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  isFewItems,
}: {
  className?: string;
  children: React.ReactNode;
  isFewItems: boolean;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl sm:rounded-2xl w-full p-3 sm:p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        isFewItems ? "h-[550px]" : "h-full", // 👈 fixed height when few items
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
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-2 sm:mt-4",
        className
      )}
    >
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
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm sm:text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
