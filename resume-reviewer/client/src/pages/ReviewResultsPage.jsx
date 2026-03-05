import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, History } from "lucide-react";
import ResultsDashboard from "../components/ResultsDashboard";
import PageHeader from "../components/shared/PageHeader";

export default function ReviewResultsPage() {
    const location = useLocation();
    const navigate = useNavigate();

    // The analysis data should be passed via router state from the ReviewerPage
    const analysis = location.state?.analysis;

    if (!analysis) {
        // If no analysis exists in state (e.g. user navigated here directly), redirect back to review
        return <Navigate to="/review" replace />;
    }

    return (
        <div className="max-w-5xl mx-auto pb-12 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <PageHeader
                    title="Analysis Results"
                    subtitle={`Score: ${analysis.overallScore}/100 - Grade: ${analysis.grade}`}
                    breadcrumbs={[
                        { label: "Dashboard", href: "/dashboard" },
                        { label: "Review Resume", href: "/review" },
                        { label: "Results" }
                    ]}
                />

                <div className="flex items-center gap-3 self-start sm:self-auto -mt-4 sm:mt-0">
                    <button
                        onClick={() => navigate("/review")}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        <RefreshCw className="w-4 h-4" /> Analyze Another
                    </button>
                    <button
                        onClick={() => navigate("/history")}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
                    >
                        <History className="w-4 h-4" /> View History
                    </button>
                </div>
            </div>

            {/* Existing ResultsDashboard component repurposed seamlessly */}
            <div className="-mt-8">
                <ResultsDashboard analysis={analysis} />
            </div>
        </div>
    );
}
