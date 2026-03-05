import { useUser } from "@clerk/clerk-react";

export default function WelcomeBanner() {
    const { user } = useUser();
    const firstName = user?.firstName || "there";

    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg shadow-blue-900/10 mb-8 relative overflow-hidden flex flex-col justify-center min-h-[160px]">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-900/20 rounded-full blur-2xl -ml-24 -mb-24 pointer-events-none" />

            <div className="relative z-10">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">
                    Welcome back, {firstName}! 👋
                </h1>
                <p className="text-blue-100 text-lg max-w-xl">
                    Here's a quick overview of your resume activities and insights to help you land your next big role.
                </p>
            </div>
        </div>
    );
}
