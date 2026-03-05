import { Copy, Download } from 'lucide-react';
import { toast } from 'sonner';

export default function CoverLetterPanel({ text }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to clipboard!');
    };

    const handleDownload = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cover_letter.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-gray-50">
                <h3 className="font-semibold text-gray-800">Cover Letter</h3>
                <div className="flex gap-2">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        <Copy className="w-3.5 h-3.5" /> Copy
                    </button>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg transition-colors"
                    >
                        <Download className="w-3.5 h-3.5" /> Download
                    </button>
                </div>
            </div>
            <div className="p-6 max-h-[520px] overflow-y-auto">
                <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">{text}</pre>
            </div>
        </div>
    );
}
