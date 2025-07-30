import {HTMLAttributes} from "react";
import {cn} from "@/lib/utils";
import {PlusIcon} from "lucide-react";

// Add fade-in animation and glassy card styles
export function SectionWrapperBorder({children, className, hasBorderTop, ...props}: HTMLAttributes<HTMLDivElement> & { hasBorderTop?: boolean }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl shadow-xl border border-[#FFD700]/40 bg-white/10 backdrop-blur-md overflow-hidden my-8 animate-fadein",
        hasBorderTop && "border-t-2 border-[#FFD700]",
        className
      )}
      {...props}
    >
      {hasBorderTop && (
        <>
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 bg-background">
            <PlusIcon className="size-6 text-[#FFD700]"/>
          </div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-background">
            <PlusIcon className="size-6 text-[#FFD700]"/>
          </div>
        </>
      )}
      {children}
    </div>
  )
}

export function SectionWrapperContent({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container py-16 md:py-24 lg:py-32", className)} {...props}>
      {children}
    </div>
  )
}

// Add fade-in animation
// In globals.css, add:
// @keyframes fadein { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
// .animate-fadein { animation: fadein 1s cubic-bezier(.4,0,.2,1) both; }
