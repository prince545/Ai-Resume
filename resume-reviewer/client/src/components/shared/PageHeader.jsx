import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({ title, subtitle, breadcrumbs }) {
    return (
        <div className="mb-8">
            {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="flex items-center space-x-2 text-sm text-slate-500 mb-3">
                    {breadcrumbs.map((crumb, idx) => (
                        <div key={idx} className="flex items-center">
                            {idx > 0 && <ChevronRight className="w-4 h-4 mx-1 text-slate-300" />}
                            {crumb.href ? (
                                <Link to={crumb.href} className="hover:text-blue-600 transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-slate-700 font-medium">{crumb.label}</span>
                            )}
                        </div>
                    ))}
                </nav>
            )}
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h1>
            {subtitle && <p className="mt-2 text-base text-slate-500">{subtitle}</p>}
        </div>
    );
}
