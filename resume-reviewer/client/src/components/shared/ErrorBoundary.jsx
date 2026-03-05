import { Component } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-red-100 p-8 text-center space-y-4">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-slate-900">Something went wrong</h1>
                        <p className="text-slate-500 text-sm">
                            We encountered an unexpected error. Please try refreshing the page or navigating back.
                        </p>
                        {process.env.NODE_ENV === "development" && (
                            <div className="mt-4 p-4 bg-slate-900 rounded-lg text-left overflow-auto text-xs text-red-400 font-mono">
                                {this.state.error?.toString()}
                            </div>
                        )}
                        <button
                            onClick={() => window.location.reload()}
                            className="mt-6 w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-colors"
                        >
                            <RefreshCcw className="w-4 h-4" /> Refresh Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
