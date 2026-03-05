import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ErrorBoundary from "../shared/ErrorBoundary";

export default function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 font-sans text-slate-900">
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto w-full">
                    <ErrorBoundary>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
                            <Outlet />
                        </div>
                    </ErrorBoundary>
                </main>
            </div>
        </div>
    );
}
