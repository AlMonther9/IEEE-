import Sponsors from "@/components/landing/Sponsors";

export default function SponsorsPage() {
    return (
        <div className="min-h-[70vh] p-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-header">
                Sponsors and Partners
            </h1>
            <div className="w-full max-w-6xl">
                <Sponsors />
            </div>
        </div>
    );
}
