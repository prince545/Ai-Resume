import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Resume AI rewrote my bullets to sound way more professional. The missing keywords feature helped me pass the exact ATS screen I failed before.",
        author: "Sarah Jenkins",
        role: "Product Manager at TechFlow",
        initials: "SJ",
        bg: "bg-blue-100 text-blue-600"
    },
    {
        quote: "I didn't even have a resume. I just dumped my past job duties into the generator, and Gemini outputted a stunning, formatted PDF.",
        author: "David Chen",
        role: "Data Scientist",
        initials: "DC",
        bg: "bg-indigo-100 text-indigo-600"
    },
    {
        quote: "As a recruiter, the formatting and action verbs this tool suggests are exactly what we look for. It's like having a career coach inside your browser.",
        author: "Emily Ross",
        role: "Senior Tech Recruiter",
        initials: "ER",
        bg: "bg-violet-100 text-violet-600"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16 tracking-tight">
                    Don't just take our word for it
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                            <div className="flex text-yellow-400 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <p className="text-slate-700 font-medium italic mb-8 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.bg}`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{t.author}</h4>
                                    <p className="text-sm text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
