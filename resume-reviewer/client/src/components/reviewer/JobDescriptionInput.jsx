import { Info } from "lucide-react";

export default function JobDescriptionInput({ value, onChange }) {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-base font-bold text-slate-900">Target Job Description</h3>
                    <p className="text-sm text-slate-500 mt-1">
                        (Optional) Paste the job you're applying for to get a targeted ATS analysis.
                    </p>
                </div>
            </div>

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                rows={8}
                placeholder="Past the job description here... (e.g. 'We are looking for a Senior React Developer with 5+ years experience...')"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y min-h-[150px]"
            />

            <div className="mt-4 flex items-start gap-2 text-sm text-slate-500 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p>
                    If you leave this blank, the AI will evaluate your resume against general industry best practices and standard ATS rules.
                </p>
            </div>
        </div>
    );
}
