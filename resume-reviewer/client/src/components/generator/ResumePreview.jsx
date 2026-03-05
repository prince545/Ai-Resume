import { forwardRef } from 'react';

// ─── Modern Template ──────────────────────────────────────────────────────────
function ModernTemplate({ data }) {
    return (
        <div className="flex h-full bg-white text-gray-800 text-[13px] leading-snug">
            {/* Sidebar */}
            <div className="w-[34%] bg-gradient-to-b from-blue-700 to-indigo-800 text-white p-6 flex flex-col gap-5">
                <div>
                    <h1 className="text-xl font-bold leading-tight">{data.name || 'Your Name'}</h1>
                    <p className="text-blue-200 text-xs mt-0.5">{data.experience?.[0]?.role || 'Professional'}</p>
                </div>
                <div className="border-t border-blue-500/50 pt-4">
                    <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-2">Contact</h2>
                    {data.email && <p className="text-xs text-blue-100 break-all">{data.email}</p>}
                    {data.phone && <p className="text-xs text-blue-100">{data.phone}</p>}
                    {data.location && <p className="text-xs text-blue-100">{data.location}</p>}
                    {data.linkedin && <p className="text-xs text-blue-100 break-all">{data.linkedin}</p>}
                </div>
                <div className="border-t border-blue-500/50 pt-4">
                    <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-1.5">
                        {(data.skills || []).map((s, i) => (
                            <span key={i} className="bg-blue-600/50 text-white text-[10px] px-2 py-0.5 rounded-full">{s}</span>
                        ))}
                    </div>
                </div>
                {data.education?.length > 0 && (
                    <div className="border-t border-blue-500/50 pt-4">
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-2">Education</h2>
                        {data.education.map((e, i) => (
                            <div key={i} className="mb-2">
                                <p className="text-xs font-semibold text-white">{e.degree}</p>
                                <p className="text-[10px] text-blue-200">{e.institution}</p>
                                <p className="text-[10px] text-blue-300">{e.year}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Main */}
            <div className="flex-1 p-6 flex flex-col gap-5">
                <div>
                    <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5">Summary</h2>
                    <p className="text-gray-600 text-xs leading-relaxed">{data.summary}</p>
                </div>
                {data.experience?.length > 0 && (
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">Experience</h2>
                        {data.experience.map((exp, i) => (
                            <div key={i} className="mb-4">
                                <div className="flex justify-between items-baseline">
                                    <p className="font-semibold text-gray-900 text-sm">{exp.role}</p>
                                    <p className="text-[10px] text-gray-400">{exp.duration}</p>
                                </div>
                                <p className="text-xs text-blue-600 mb-1">{exp.company}</p>
                                <ul className="list-disc list-inside space-y-0.5">
                                    {(exp.bullets || []).map((b, j) => (
                                        <li key={j} className="text-[11px] text-gray-600">{b}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
                {data.projects?.length > 0 && (
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-2">Projects</h2>
                        {data.projects.map((p, i) => (
                            <div key={i} className="mb-2">
                                <p className="font-semibold text-gray-900 text-xs">{p.name} <span className="font-normal text-gray-400">· {p.tech}</span></p>
                                <p className="text-[11px] text-gray-600">{p.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Classic Template ─────────────────────────────────────────────────────────
function ClassicTemplate({ data }) {
    return (
        <div className="bg-white text-gray-900 p-8 text-[13px] leading-snug">
            <div className="text-center border-b-2 border-gray-900 pb-4 mb-5">
                <h1 className="text-2xl font-bold uppercase tracking-widest">{data.name || 'Your Name'}</h1>
                <p className="text-xs text-gray-600 mt-1">
                    {[data.email, data.phone, data.location, data.linkedin].filter(Boolean).join(' | ')}
                </p>
            </div>
            {data.summary && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-0.5 mb-2">Professional Summary</h2>
                    <p className="text-xs text-gray-700 leading-relaxed">{data.summary}</p>
                </section>
            )}
            {data.experience?.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-0.5 mb-2">Experience</h2>
                    {data.experience.map((exp, i) => (
                        <div key={i} className="mb-4">
                            <div className="flex justify-between">
                                <p className="font-bold text-sm">{exp.role}</p>
                                <p className="text-xs text-gray-500">{exp.duration}</p>
                            </div>
                            <p className="text-xs italic text-gray-600 mb-1">{exp.company}</p>
                            <ul className="list-disc list-outside ml-4 space-y-0.5">
                                {(exp.bullets || []).map((b, j) => <li key={j} className="text-[11px]">{b}</li>)}
                            </ul>
                        </div>
                    ))}
                </section>
            )}
            {data.skills?.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-0.5 mb-2">Skills</h2>
                    <p className="text-xs text-gray-700">{data.skills.join(' · ')}</p>
                </section>
            )}
            {data.education?.length > 0 && (
                <section className="mb-5">
                    <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-0.5 mb-2">Education</h2>
                    {data.education.map((e, i) => (
                        <div key={i} className="flex justify-between text-xs">
                            <div>
                                <p className="font-semibold">{e.degree}</p>
                                <p className="text-gray-600">{e.institution}</p>
                            </div>
                            <p className="text-gray-500">{e.year}</p>
                        </div>
                    ))}
                </section>
            )}
            {data.projects?.length > 0 && (
                <section>
                    <h2 className="text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-0.5 mb-2">Projects</h2>
                    {data.projects.map((p, i) => (
                        <div key={i} className="mb-1.5 text-xs">
                            <p className="font-semibold">{p.name} <span className="font-normal text-gray-500">({p.tech})</span></p>
                            <p className="text-gray-600">{p.description}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

// ─── Minimal Template ─────────────────────────────────────────────────────────
function MinimalTemplate({ data }) {
    return (
        <div className="bg-white text-gray-800 p-8 text-[13px]">
            <div className="mb-6">
                <h1 className="text-3xl font-light tracking-tight text-gray-900">{data.name || 'Your Name'}</h1>
                <p className="text-xs text-gray-400 mt-1">
                    {[data.email, data.phone, data.location].filter(Boolean).join('  ·  ')}
                </p>
            </div>
            {data.summary && (
                <section className="mb-6">
                    <p className="text-xs text-gray-600 leading-relaxed border-l-2 border-gray-200 pl-3">{data.summary}</p>
                </section>
            )}
            {data.experience?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-3">Experience</h2>
                    {data.experience.map((exp, i) => (
                        <div key={i} className="mb-4 grid grid-cols-[1fr_auto]">
                            <div>
                                <p className="font-medium text-gray-900">{exp.role} <span className="text-gray-400 font-normal">@ {exp.company}</span></p>
                                <ul className="mt-1 space-y-0.5">
                                    {(exp.bullets || []).map((b, j) => (
                                        <li key={j} className="text-[11px] text-gray-500 before:content-['–'] before:mr-1.5">{b}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-[10px] text-gray-400 text-right ml-4 mt-0.5">{exp.duration}</p>
                        </div>
                    ))}
                </section>
            )}
            {data.skills?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2">Skills</h2>
                    <div className="flex flex-wrap gap-1.5">
                        {data.skills.map((s, i) => <span key={i} className="text-[10px] text-gray-600 border border-gray-200 px-2 py-0.5 rounded">{s}</span>)}
                    </div>
                </section>
            )}
            {data.education?.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2">Education</h2>
                    {data.education.map((e, i) => (
                        <div key={i} className="flex justify-between text-xs text-gray-600">
                            <p>{e.degree} — {e.institution}</p>
                            <p className="text-gray-400">{e.year}</p>
                        </div>
                    ))}
                </section>
            )}
            {data.projects?.length > 0 && (
                <section>
                    <h2 className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2">Projects</h2>
                    {data.projects.map((p, i) => (
                        <div key={i} className="mb-1.5 text-xs text-gray-600">
                            <span className="font-medium text-gray-800">{p.name}</span> · {p.tech} — {p.description}
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
const ResumePreview = forwardRef(function ResumePreview({ data, templateId }, ref) {
    const empty = !data || !data.name;

    if (empty) {
        return (
            <div ref={ref} className="bg-white rounded-xl border border-dashed border-gray-300 min-h-[600px] flex items-center justify-center">
                <p className="text-gray-300 text-sm">Your resume preview will appear here</p>
            </div>
        );
    }

    const wrapperCls = "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden min-h-[600px]";

    return (
        <div ref={ref} id="resume-preview-root" className={wrapperCls}>
            {templateId === 'modern' && <ModernTemplate data={data} />}
            {templateId === 'classic' && <ClassicTemplate data={data} />}
            {templateId === 'minimal' && <MinimalTemplate data={data} />}
        </div>
    );
});

export default ResumePreview;
