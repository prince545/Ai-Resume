import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-sm">
                                    <span className="text-sm font-bold leading-none text-white">R</span>
                                </div>
                                <span className="font-bold text-slate-900 text-lg">Resume AI</span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Transform your resume into a powerful career tool with AI-driven insights and optimization.
                            </p>
                            <div className="flex items-center gap-3 pt-2">
                                <a 
                                    href="#" 
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-600 text-slate-600 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a 
                                    href="#" 
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-600 text-slate-600 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a 
                                    href="#" 
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-600 text-slate-600 transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a 
                                    href="#" 
                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-600 text-slate-600 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Product */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-slate-900">Product</h3>
                            <nav className="space-y-2">
                                <Link to="/review" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Resume Review
                                </Link>
                                <Link to="/generate" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Resume Generator
                                </Link>
                                <Link to="/history" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Analysis History
                                </Link>
                                <a href="#pricing" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Pricing Plans
                                </a>
                                <a href="#features" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Features
                                </a>
                            </nav>
                        </div>

                        {/* Company */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-slate-900">Company</h3>
                            <nav className="space-y-2">
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    About Us
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Careers
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Blog
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Press Kit
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Partners
                                </a>
                            </nav>
                        </div>

                        {/* Support & Contact */}
                        <div className="space-y-4">
                            <h3 className="font-semibold text-slate-900">Support</h3>
                            <nav className="space-y-2">
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Help Center
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Contact Support
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    API Documentation
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Status Page
                                </a>
                                <a href="#" className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                                    Community Forum
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Contact Info Bar */}
                <div className="border-t border-slate-200 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-slate-600">support@resumeai.com</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <Phone className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-slate-600">1-800-RESUME</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <span className="text-sm text-slate-600">San Francisco, CA</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            &copy; {new Date().getFullYear()} Resume AI. All rights reserved.
                        </p>
                        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                Cookie Policy
                            </a>
                            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                                GDPR Compliance
                            </a>
                        </nav>
                        <p className="text-sm text-slate-400">
                            Powered by AI Technology
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
