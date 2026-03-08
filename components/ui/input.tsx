import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function Input({ className, type, startIcon, endIcon, ...props }: InputProps) {
  return (
    <div
      className={cn(
        "group flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-4 backdrop-blur-md transition hover:bg-white/5",
        "focus-within:border-primary-blue/50 focus-within:bg-white/5 focus-within:ring-1 focus-within:ring-primary-blue/30",
        props["aria-invalid"] ? "border-red-400/90 focus-within:border-red-400/90 focus-within:ring-red-400/30" : "",
        className
      )}
    >
      {startIcon && <div className="shrink-0 text-slate-400 transition-colors group-focus-within:text-primary-blue/80 flex items-center justify-center">{startIcon}</div>}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-full w-full bg-transparent text-base text-white placeholder:text-slate-400 focus:outline-none"
        )}
        {...props}
      />
      {endIcon && <div className="shrink-0 text-primary-blue/80 flex items-center justify-center">{endIcon}</div>}
    </div>
  )
}

export { Input }
