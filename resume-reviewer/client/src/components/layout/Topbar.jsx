import { UserButton } from "@clerk/clerk-react";
import { Menu, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

// Helper to map paths to human readable breadcrumbs
const pathMap = {
    "/dashboard": "Dashboard",
    "/review": "Review Resume",
    "/review/results": "Analysis Results",
    "/generate": "Generate Resume",
    "/history": "History"
};

export default function Topbar({ onMenuClick }) {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Build breadcrumbs array
    const breadcrumbs = [];
    let currentPath = "";

    pathnames.forEach((p, index) => {
        currentPath += `/${p}`;
        if (pathMap[currentPath]) {
            breadcrumbs.push({
                label: pathMap[currentPath],
                href: index === pathnames.length - 1 ? null : currentPath
            });
        } else if (p === "results" && pathnames[index - 1] === "review") {
            breadcrumbs.push({ label: pathMap["/review/results"], href: null });
        }
    });

    // Fallback if no matching path
    if (breadcrumbs.length === 0) {
        breadcrumbs.push({ label: "Dashboard", href: null });
    }

    return (
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Left side: Mobile menu & Breadcrumbs */}
            <div className="flex items-center gap-4">
                <button
                    className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors"
                    onClick={onMenuClick}
                >
                    <Menu className="w-5 h-5" />
                </button>

                <nav className="hidden sm:flex text-sm font-medium text-slate-600 items-center">
                    {breadcrumbs.map((crumb, idx) => (
                        <div key={idx} className="flex items-center">
                            {idx > 0 && <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />}
                            {crumb.href ? (
                                <Link to={crumb.href} className="hover:text-blue-600 transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-slate-900">{crumb.label}</span>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Right side: User Profile */}
            <div className="flex items-center gap-4">
                <div className="hidden sm:block text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Account</p>
                </div>
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "w-9 h-9 border-2 border-white shadow-sm",
                            userButtonPopoverCard: "shadow-xl border border-slate-100 rounded-xl"
                        }
                    }}
                />
            </div>
        </header>
    );
}
