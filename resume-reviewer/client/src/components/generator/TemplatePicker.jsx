import { Check } from 'lucide-react';

const templates = [
    {
        id: 'modern',
        name: 'Modern',
        description: 'Clean two-column with accent colors',
        preview: 'bg-gradient-to-br from-blue-600 to-indigo-700',
    },
    {
        id: 'classic',
        name: 'Classic',
        description: 'Traditional single-column, corporate feel',
        preview: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
    {
        id: 'minimal',
        name: 'Minimal',
        description: 'Ultra-clean white with subtle dividers',
        preview: 'bg-gradient-to-br from-slate-100 to-white border-2 border-slate-200',
    },
];

export default function TemplatePicker({ selected, onSelect }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {templates.map((t) => (
                <button
                    key={t.id}
                    onClick={() => onSelect(t.id)}
                    className={`relative rounded-xl border-2 p-1 transition-all duration-200 group hover:shadow-lg
            ${selected === t.id ? 'border-blue-600 shadow-md shadow-blue-100' : 'border-gray-200 hover:border-blue-300'}`}
                >
                    {/* Mini preview card */}
                    <div className={`h-28 rounded-lg ${t.preview} flex flex-col items-start justify-start p-2 gap-1`}>
                        <div className="w-12 h-1.5 rounded bg-white/70" />
                        <div className="w-8 h-1 rounded bg-white/50" />
                        <div className="mt-1.5 w-full h-px bg-white/30" />
                        <div className="w-full h-1 rounded bg-white/30 mt-1" />
                        <div className="w-4/5 h-1 rounded bg-white/30" />
                        <div className="w-full h-1 rounded bg-white/30" />
                        <div className="w-3/5 h-1 rounded bg-white/30" />
                    </div>
                    {/* Label */}
                    <div className="mt-2 mb-1 text-left px-1">
                        <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.description}</p>
                    </div>
                    {/* Checkmark */}
                    {selected === t.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
}
