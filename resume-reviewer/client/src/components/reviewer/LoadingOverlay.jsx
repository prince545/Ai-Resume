import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
    "Parsing document structure...",
    "Extracting text and formatting...",
    "Connecting to Gemini 2.5 Flash...",
    "Evaluating ATS compatibility...",
    "Analyzing content and impact...",
    "Checking for missing keywords...",
    "Generating improvement suggestions...",
    "Finalizing scores...",
];

export default function LoadingOverlay({ isOpen }) {
    const [msgIdx, setMsgIdx] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            setMsgIdx(0);
            return;
        }

        const interval = setInterval(() => {
            setMsgIdx((current) => (current < messages.length - 1 ? current + 1 : current));
        }, 2000); // Change message every 2 seconds

        return () => clearInterval(interval);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center flex flex-col items-center animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                    <Loader2 className="w-10 h-10 text-blue-600 animate-spin absolute" strokeWidth={2.5} />
                    {/* Subtle pulse ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Analyzing Resume</h3>
                <p className="text-sm font-medium text-blue-600 h-5 transition-all">
                    {messages[msgIdx]}
                </p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-6 overflow-hidden">
                    <div
                        className="h-full bg-blue-600 transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${Math.max(10, (msgIdx / (messages.length - 1)) * 100)}%` }}
                    />
                </div>
                <p className="text-xs text-slate-400 mt-4">This usually takes 10-15 seconds.</p>
            </div>
        </div>
    );
}
