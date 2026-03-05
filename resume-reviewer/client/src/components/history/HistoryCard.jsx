import { Calendar, Trash2, ArrowRight, FileText } from "lucide-react";

export default function HistoryCard({ item, onView, onDelete }) {
    // If there's an analysis, it was reviewed. If not, it might just be a generated resume stub
    const analysis = item.analyses?.[0];
    const isReviewed = !!analysis;

    const scoreColor = analysis?.overallScore >= 80
        ? "text-green-700 bg-green-100 border-green-200"
        : analysis?.overallScore >= 60
            ? "text-yellow-700 bg-yellow-100 border-yellow-200"
            : "text-red-700 bg-red-100 border-red-200";

    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
            <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-slate-400" />
                </div>

                <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                        {item.originalFileName || "Generated Resume"}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(item.createdAt).toLocaleDateString(undefined, {
                                year: 'numeric', month: 'short', day: 'numeric'
                            })}
                        </span>
                        {isReviewed && (
                            <span className={`px-2 py-0.5 rounded-full border font-semibold ${scoreColor}`}>
                                Score: {analysis.overallScore}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <button
                    onClick={() => onDelete(item._id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete record"
                >
                    <Trash2 className="w-5 h-5" />
                </button>
                {isReviewed && (
                    <button
                        onClick={() => onView(analysis)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors border border-blue-100 hover:border-blue-600"
                    >
                        Review Details <ArrowRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}
