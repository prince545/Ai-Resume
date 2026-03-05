import { FileQuestion, Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyHistoryState() {
    return (
        <div className="bg-white border text-center border-slate-200 rounded-2xl p-12 shadow-sm flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mb-6">
                <FileQuestion className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No history found</h3>
            <p className="text-slate-500 max-w-md mx-auto mb-8">
                You haven't reviewed or generated any resumes yet. Once you do, they will appear here for easy access and re-evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/review"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <Plus className="w-5 h-5" /> Review a Resume
                </Link>
                <Link
                    to="/generate"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
                >
                    Generate New Resume
                </Link>
            </div>
        </div>
    );
}
