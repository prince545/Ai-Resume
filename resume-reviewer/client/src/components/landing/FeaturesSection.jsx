import { Target, Search, PenTool, LayoutTemplate, Zap, Download } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "ATS Compatibility Scoring",
        description: "Get a detailed 0-100 score on how well your resume will pass through enterprise Applicant Tracking Systems.",
        color: "text-rose-500",
        bg: "bg-rose-100"
    },
    {
        icon: Search,
        title: "Missing Keyword Detection",
        description: "Compare your resume directly against a job description to find the exact skills and keywords you're missing.",
        color: "text-amber-500",
        bg: "bg-amber-100"
    },
    {
        icon: PenTool,
        title: "AI Bullet Rewrites",
        description: "Our AI transforms weak, passive sentences into strong, metric-driven achievements that recruiters love.",
        color: "text-emerald-500",
        bg: "bg-emerald-100"
    },
    {
        icon: Zap,
        title: "Instant Generation",
        description: "Don't have a resume? Provide your raw experience and let Gemini construct a perfect, professional document in seconds.",
        color: "text-indigo-500",
        bg: "bg-indigo-100"
    },
    {
        icon: LayoutTemplate,
        title: "Beautiful Templates",
        description: "Choose from multiple modern, clean, and professional templates designed specifically to pass ATS parsers easily.",
        color: "text-blue-500",
        bg: "bg-blue-100"
    },
    {
        icon: Download,
        title: "Export & Email",
        description: "Download your pixel-perfect resume as a PDF, or email it directly to yourself or a recruiter straight from the app.",
        color: "text-violet-500",
        bg: "bg-violet-100"
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Everything you need to stand out
                    </h2>
                    <p className="text-lg text-slate-600">
                        Advanced artificial intelligence built directly into your career workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${f.bg}`}>
                                <f.icon className={`w-6 h-6 ${f.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
