import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, File, X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FileUploadZone({ onFileSelect, selectedFile }) {
    const [error, setError] = useState(null);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        setError(null);
        if (rejectedFiles.length > 0) {
            setError("Please upload a valid PDF or DOCX file under 5MB.");
            return;
        }
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "application/pdf": [".pdf"],
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"]
        },
        maxSize: 5 * 1024 * 1024, // 5MB
        maxFiles: 1,
        multiple: false
    });

    if (selectedFile) {
        return (
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <File className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 truncate">
                            {selectedFile.name}
                        </p>
                        <p className="text-xs text-slate-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                    </div>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onFileSelect(null);
                    }}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                    title="Remove file"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-2">
            <div
                {...getRootProps()}
                className={cn(
                    "relative group overflow-hidden border-2 border-dashed rounded-xl p-10 text-center transition-all cursor-pointer bg-slate-50",
                    isDragActive
                        ? "border-blue-500 bg-blue-50/50"
                        : "border-slate-200 hover:border-blue-400 hover:bg-slate-50",
                    error && "border-red-300 bg-red-50/50"
                )}
            >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center transition-colors",
                        isDragActive ? "bg-blue-100 text-blue-600" : "bg-white border border-slate-100 shadow-sm text-slate-400 group-hover:text-blue-500"
                    )}>
                        <UploadCloud className={cn("w-8 h-8", isDragActive && "animate-bounce")} />
                    </div>
                    <div>
                        <p className="text-base font-semibold text-slate-700">
                            {isDragActive ? "Drop your resume here" : "Click or drag to upload resume"}
                        </p>
                        <p className="text-sm text-slate-500 mt-1">PDF or DOCX (Max 5MB)</p>
                    </div>
                </div>
                {error && (
                    <div className="absolute bottom-4 left-0 right-0 text-red-500 text-sm font-medium">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}
