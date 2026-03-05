import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoadingSpinner({ className, size = "default", text }) {
    const sizeClasses = {
        sm: "w-4 h-4",
        default: "w-6 h-6",
        lg: "w-10 h-10",
    };

    return (
        <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
            <Loader2
                className={cn("animate-spin text-blue-600", sizeClasses[size])}
                strokeWidth={size === "lg" ? 2.5 : 2}
            />
            {text && <p className="text-sm font-medium text-slate-600 animate-pulse">{text}</p>}
        </div>
    );
}
