import { FileSearch, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecentActivityList({ data, loading }) {
    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 animate-pulse">
                <div className="h-6 bg-slate-200 rounded w-1/4 mb-6" />
                <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex gap-4 items-center">
                            <div className="w-10 h-10 bg-slate-200 rounded-lg shrink-0" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 bg-slate-200 rounded w-3/4" />
                                <div className="h-3 bg-slate-200 rounded w-1/4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // Only take the 5 most recent
    const recent = data?.slice(0, 5) || [];

    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900">Recent Activity</h2>
                {recent.length > 0 && (
                    <Link to="/history" className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                        View all <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                )}
            </div>

            {recent.length === 0 ? (
                <div className="p-8 text-center text-slate-500 flex flex-col items-center">
                    <Clock className="w-10 h-10 text-slate-300 mb-3" />
                    <p className="font-medium text-slate-900 mb-1">No activity yet</p>
                    <p className="text-sm">When you review or generate resumes, they'll show up here.</p>
                </div>
            ) : (
                <div className="divide-y divide-slate-100">
                    {recent.map((item) => (
                        <div key={item._id} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex items-center gap-4 group">
                            <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center shrink-0">
                                <FileSearch className="w-5 h-5" />
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-900 truncate">
                                    {item.originalFileName || "Generated Resume"}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">
                                    {new Date(item.createdAt).toLocaleDateString(undefined, {
                                        month: 'short', day: 'numeric', year: 'numeric'
                                    })}
                                </p>
                            </div>

                            {item.analyses?.length > 0 && (
                                <Link
                                    to="/review/results"
                                    state={{ analysis: item.analyses[0] }}
                                    className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium hover:border-blue-300 hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    View
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
