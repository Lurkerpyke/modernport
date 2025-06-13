// components/ui/code-block.tsx
'use client';

import { cn } from "@/lib/utils";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
    code: string;
    language?: string;
}

export const CodeBlock = ({ code, className, ...props }: CodeBlockProps) => {
    return (
        <pre
            className={cn(
                "rounded-md bg-black/90 p-4 font-mono text-sm text-green-400 overflow-x-auto",
                className
            )}
            {...props}
        >
            <code>{code}</code>
        </pre>
    );
};