import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { FileSearch } from "lucide-react";

import PageHeader from "../components/shared/PageHeader";
import FileUploadZone from "../components/reviewer/FileUploadZone";
import JobDescriptionInput from "../components/reviewer/JobDescriptionInput";
import LoadingOverlay from "../components/reviewer/LoadingOverlay";

export default function ReviewerPage() {
    const [file, setFile] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const navigate = useNavigate();
    const { getToken, userId } = useAuth();

    const handleAnalyze = async () => {
        if (!file) {
            toast.error("Please upload a resume first.");
            return;
        }

        setIsAnalyzing(true);

        try {
            const token = await getToken();
            const headers = { "x-user-id": userId };
            if (token) headers.Authorization = `Bearer ${token}`;

            // 1. Upload File
            const formData = new FormData();
            formData.append("resume", file);

            const uploadRes = await fetch("http://localhost:5000/api/resume/upload", {
                method: "POST",
                headers, // Do NOT set Content-Type for FormData, browser does it automatically with boundary
                body: formData,
            });

            if (!uploadRes.ok) throw new Error("File upload failed");
            const { resumeId } = await uploadRes.json();

            // 2. Analyze File against Job Description
            const analyzeRes = await fetch(`http://localhost:5000/api/resume/analyze/${resumeId}`, {
                method: "POST",
                headers: {
                    ...headers,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ jobDescription }),
            });

            if (!analyzeRes.ok) {
                const errorData = await analyzeRes.json().catch(() => ({}));
                throw new Error(errorData.error || "Analysis failed due to a server error. Please try again.");
            }
            const analysisData = await analyzeRes.json();

            // 3. Navigate to Results with state (use the nested analysis object)
            navigate("/review/results", {
                state: { analysis: analysisData.analysis },
                replace: true // Don't build up massive browser history if they rethink multiple times
            });

        } catch (error) {
            console.error(error);
            toast.error(error.message || "An error occurred during analysis.");
            setIsAnalyzing(false); // only toggle off if error, otherwise component unmounts
        }
    };

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <LoadingOverlay isOpen={isAnalyzing} />

            <PageHeader
                title="Resume Reviewer"
                subtitle="Get instant, actionable feedback based on advanced ATS algorithms and expert recruiter insights."
            />

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column: Form */}
                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">1. Upload Resume</h3>
                        <FileUploadZone onFileSelect={setFile} selectedFile={file} />
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">2. Target Role</h3>
                        <JobDescriptionInput value={jobDescription} onChange={setJobDescription} />
                    </div>
                </div>

                {/* Right Column: Action & Info */}
                <div className="space-y-6">
                    <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg shadow-blue-900/20 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileSearch className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Ready to analyze?</h3>
                        <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                            Our AI will score your formatting, identify missing keywords, and suggest powerful bullet rewrites.
                        </p>
                        <button
                            onClick={handleAnalyze}
                            disabled={!file || isAnalyzing}
                            className="w-full py-4 px-6 bg-white text-blue-600 hover:bg-blue-50 focus:ring-4 focus:ring-blue-300 font-bold rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                        >
                            Analyze Resume Now
                        </button>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                        <h4 className="font-semibold text-slate-900 mb-2 text-sm">Privacy & Security</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Your documents are encrypted securely. We never share your data with third-party recruiters or employers. You can delete your resume from our servers at any time from your History dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
