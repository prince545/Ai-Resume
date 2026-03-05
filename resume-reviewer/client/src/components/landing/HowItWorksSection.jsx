import { FileText, Sparkles, Send } from "lucide-react";

export default function HowItWorksSection() {
    const steps = [
        {
            title: "Upload & Configure",
            desc: "Drag and drop your PDF or DOCX resume, and optionally paste the exact job description you are targeting.",
            icon: <FileText className="w-8 h-8 text-blue-600" />
        },
        {
            title: "AI Analysis",
            desc: "Gemini 2.5 Flash breaks down your text, scoring your ATS compatibility, formatting, language, and content impact.",
            icon: <Sparkles className="w-8 h-8 text-indigo-600" />
        },
        {
            title: "Action & Export",
            desc: "Review the AI-generated rewrites for weak bullets, apply the missing keywords, and download your polished result.",
            icon: <Send className="w-8 h-8 text-violet-600" />
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        How Resume AI Works
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Three simple steps to significantly increase your interview callback rate.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-1/6 right-1/6 h-[2px] bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 z-0" />

                    {steps.map((s, i) => (
                        <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-32 h-32 rounded-full border-4 border-slate-50 bg-white shadow-xl flex items-center justify-center mb-8 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                                <div className="absolute inset-0 bg-slate-50/50 mix-blend-multiply" />
                                <div className="relative z-10">{s.icon}</div>
                                {/* Step Number Bubble */}
                                <div className="absolute top-2 right-2 w-7 h-7 bg-slate-900 text-white text-sm font-bold rounded-full flex items-center justify-center z-20">
                                    {i + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{s.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
