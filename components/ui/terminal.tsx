// components/terminal.tsx
'use client';

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

const Terminal = forwardRef<HTMLDivElement, TerminalProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-lg bg-black/90 p-4 font-mono text-sm text-green-400 overflow-x-auto",
                className
            )}
            {...props}
        >
            <div className="mb-2 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            {children}
        </div>
    )
);

Terminal.displayName = "Terminal";

export { Terminal };