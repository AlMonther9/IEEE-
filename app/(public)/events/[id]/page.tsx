// Dynamic Event Details (e.g., /events/hackathon-2026)
export default function EventDetailsPage() {
    return (
        <div className="min-h-[70vh] p-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-header">
                Event Details
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                Details for a specific event will appear here.
            </p>
        </div>
    );
}