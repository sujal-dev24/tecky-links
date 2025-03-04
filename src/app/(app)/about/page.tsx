export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/grid.svg)] opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mt-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About <span className="text-purple-300">TECKYLinks</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Were dedicated to making link sharing simpler and more efficient for everyone. Our platform combines ease of use with powerful features to give you the best URL shortening experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">Our Mission</h2>
            <div className="space-y-6">
              <p className="text-xl text-purple-700 leading-relaxed">
                Our mission is to simplify the way people share links online. We believe that every link should be clean, professional, and easy to remember. Whether you are a business professional, social media influencer, or casual user, were here to make your link sharing experience better.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-900">Fast</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-900">Secure</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-purple-900">Reliable</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Development Team</h3>
              <p className="text-purple-700 leading-relaxed">
                Our developers work tirelessly to ensure our platform is fast, secure, and reliable. Using cutting-edge technology to deliver the best experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Support Team</h3>
              <p className="text-purple-700 leading-relaxed">
                Available 24/7 to help you with any questions or concerns you might have. Dedicated to providing exceptional customer service.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Security Team</h3>
              <p className="text-purple-700 leading-relaxed">
                Dedicated to keeping your links and data safe and secure at all times. Implementing industry-leading security measures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


