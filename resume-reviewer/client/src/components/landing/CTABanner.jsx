import { SignUpButton } from "@clerk/clerk-react";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                    {/* Decorative background glow */}
                    <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-blue-600/30 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-indigo-600/30 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative px-8 py-16 md:px-16 md:py-20 text-center z-10 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to beat the ATS?
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Join thousands of job seekers who improved their interview callback rates using our AI-powered resume tools.
                        </p>
                        <SignUpButton mode="modal">
                            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/50 transition-all hover:scale-105 active:scale-95">
                                Start for free today <ArrowRight className="w-5 h-5" />
                            </button>
                        </SignUpButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
