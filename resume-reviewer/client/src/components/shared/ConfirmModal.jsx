import { Loader2 } from "lucide-react";

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    isDestructive = false,
    isLoading = false
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
                <div className="bg-slate-50 px-6 py-4 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button
                        onClick={onClose}
                        disabled={isLoading}
                        className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-colors"
                    >
                        {cancelText}
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={isLoading}
                        className={`flex items-center justify-center min-w-[100px] px-4 py-2 text-sm font-semibold text-white rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${isDestructive
                                ? "bg-red-600 hover:bg-red-700 focus:ring-red-500"
                                : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500"
                            } disabled:opacity-70`}
                    >
                        {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
