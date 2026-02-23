import Sponsors from "@/components/landing/Sponsors";
import FAQ from "@/components/faq/Faq";
export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
        Design System Preview
      </h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Solid Colors */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Solid Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-lg shadow-md bg-primary-blue flex items-center justify-center text-white font-medium text-xs">
                #1C4ED8
              </div>
              <div>
                <p className="font-semibold">Primary Blue</p>
                <code className="text-sm text-gray-500">bg-primary-blue</code>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-24 h-24 rounded-lg shadow-md bg-primary-yellow flex items-center justify-center text-black font-medium text-xs">
                #FBBF24
              </div>
              <div>
                <p className="font-semibold">Primary Yellow</p>
                <code className="text-sm text-gray-500">bg-primary-yellow</code>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Gradients</h2>
          <div className="grid grid-cols-1 gap-6">

            <div className="space-y-2">
              <p className="font-semibold">Blue CTA Gradient</p>
              <div className="h-16 w-full rounded-lg shadow-sm bg-gradient-blue-cta flex items-center justify-center text-white">
                <span className="bg-white/20 px-3 py-1 rounded">CTA Button</span>
              </div>
              <code className="text-sm text-gray-500 block">bg-gradient-blue-cta</code>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Yellow CTA Gradient</p>
              <div className="h-16 w-full rounded-lg shadow-sm bg-gradient-yellow-cta flex items-center justify-center text-black">
                <span className="bg-black/10 px-3 py-1 rounded">CTA Button</span>
              </div>
              <code className="text-sm text-gray-500 block">bg-gradient-yellow-cta</code>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Header Text Gradient</p>
              <div className="h-16 w-full rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-header">
                  Gradient Text Example
                </span>
              </div>
              <code className="text-sm text-gray-500 block">bg-gradient-header (used here with bg-clip-text)</code>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Main Background Gradient</p>
              <div className="h-32 w-full rounded-lg shadow-sm bg-gradient-main flex items-center justify-center text-gray-400 border border-gray-700">
                Main Background Area
              </div>
              <code className="text-sm text-gray-500 block">bg-gradient-main</code>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Secondary Background Gradient</p>
              <div className="h-32 w-full rounded-lg shadow-sm bg-gradient-secondary flex items-center justify-center text-gray-400 border border-gray-700">
                Secondary Background Area
              </div>
              <code className="text-sm text-gray-500 block">bg-gradient-secondary</code>
            </div>

          </div>
          <Sponsors />
          <FAQ />

        </section>
      </div>
    </div>


  );
}
