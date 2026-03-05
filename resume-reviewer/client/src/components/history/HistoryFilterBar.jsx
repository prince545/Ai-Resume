import { Filter, ArrowDownUp } from "lucide-react";

export default function HistoryFilterBar({ filter, setFilter, sortOrder, setSortOrder }) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
            <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <div className="flex bg-slate-100 rounded-lg p-1">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("reviewed")}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${filter === "reviewed" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            }`}
                    >
                        Reviewed
                    </button>
                </div>
            </div>

            <button
                onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200"
            >
                <ArrowDownUp className="w-4 h-4" />
                {sortOrder === 'desc' ? 'Newest first' : 'Oldest first'}
            </button>
        </div>
    );
}
