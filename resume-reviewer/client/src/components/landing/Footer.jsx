export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-900">
                        <span className="text-xs font-bold leading-none text-white">R</span>
                    </div>
                    <span className="font-bold text-slate-900">Resume AI</span>
                </div>
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-900">Privacy Policy</a>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-900">Terms of Service</a>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-900">Contact Support</a>
                </nav>
                <p className="text-sm text-slate-400">
                    &copy; {new Date().getFullYear()} Resume AI. All rights reserved. Built with Gemini 2.5 Flash.
                </p>
            </div>
        </footer>
    );
}
