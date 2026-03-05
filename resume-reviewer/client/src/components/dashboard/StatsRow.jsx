import { FileText, Sparkles, Target } from "lucide-react";

export default function StatsRow({ data }) {
    // Just show zero if no data
    const reviewCount = data?.filter(r => r.analyses?.length > 0).length || 0;
    const generateCount = 0; // The current API doesn't save generated resumes yet

    const stats = [
        {
            label: "Resumes Reviewed",
            value: reviewCount,
            icon: Target,
            color: "text-blue-600",
            bg: "bg-blue-100",
        },
        {
            label: "Resumes Generated",
            value: generateCount,
            icon: Sparkles,
            color: "text-indigo-600",
            bg: "bg-indigo-100",
        },
        {
            label: "Cover Letters Drafted",
            value: generateCount, // Assuming 1-to-1 for now based on current schema limitation
            icon: FileText,
            color: "text-violet-600",
            bg: "bg-violet-100",
        }
    ];

    return (
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {stats.map((s, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${s.bg}`}>
                        <s.icon className={`w-6 h-6 ${s.color}`} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">{s.label}</p>
                        <p className="text-2xl font-bold text-slate-900 leading-none mt-1">{s.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
