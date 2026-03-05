import { FileSearch, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function QuickActionCards() {
    return (
        <div className="grid md:grid-cols-2 gap-6 mb-10">
            <Link
                to="/review"
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-200 transition-all duration-300"
            >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                </div>
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileSearch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Review Resume</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                    Upload an existing resume and let Gemini analyze it against ATS standards or a specific job description.
                </p>
            </Link>

            <Link
                to="/generate"
                className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300"
            >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Generate Resume</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                    Don't have a resume? Provide your bare experience and let AI craft a beautifully formatted, impactful profile.
                </p>
            </Link>
        </div>
    );
}
