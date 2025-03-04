import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Long URLs into
              <span className="text-purple-300"> Powerful Links</span>
            </h1>
            <p className="text-xl text-purple-100 mb-10">
              More than just a URL shortener. Get detailed analytics, custom branded links, and powerful features to optimize your links.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shortend-url"
                className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Shorten URL Now
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 bg-purple-700 text-white rounded-full font-semibold hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Everything You Need in a URL Shortener
            </h2>
            <p className="text-xl text-purple-600 max-w-2xl mx-auto">
              Powerful features to help you manage, track, and optimize your links
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Lightning Fast
              </h3>
              <p className="text-purple-700 leading-relaxed">
                Generate shortened URLs instantly with our optimized infrastructure. No waiting, no delays.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Detailed Analytics
              </h3>
              <p className="text-purple-700 leading-relaxed">
                Track clicks, analyze traffic sources, and understand your audience with comprehensive insights.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">
                Enterprise Security
              </h3>
              <p className="text-purple-700 leading-relaxed">
                Bank-level encryption and advanced security measures to keep your links and data protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Supercharge Your Links?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Join over 100,000+ users who trust TECKYLinks for their link management needs.
            </p>
            <Link
              href="/shortend-url"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
