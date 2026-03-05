import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    FileSearch,
    Sparkles,
    History,
    Settings,
    Menu,
    X
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Review Resume", href: "/review", icon: FileSearch },
    { name: "Generate Resume", href: "/generate", icon: Sparkles },
    { name: "History", href: "/history", icon: History },
];

export default function Sidebar({ isOpen, setIsOpen }) {
    const location = useLocation();

    // Close sidebar on mobile when navigating
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setIsOpen]);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsOpen(false);
        }
    }, [location.pathname, setIsOpen]);

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden animate-in fade-in"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Content */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto lg:z-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
                    <NavLink to="/dashboard" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-inner shadow-blue-400/50">
                            <span className="text-white font-bold text-lg leading-none">R</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">Resume AI</span>
                    </NavLink>
                    <button
                        className="lg:hidden p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.href);
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                                    isActive
                                        ? "bg-blue-600 text-white shadow-md shadow-blue-900/50"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-400 group-hover:text-blue-400")} />
                                {item.name}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Footer/Settings dummy link */}
                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-all group">
                        <Settings className="w-5 h-5 group-hover:text-slate-300" />
                        Settings
                    </button>
                </div>
            </aside>
        </>
    );
}
