function CTASection() {
    return (
        <section className="py-20 bg-black relative overflow-hidden border-t border-gray-800">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(180,149,95,0.08),rgba(0,0,0,0))]"></div>

            {/* Accent Elements */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8" data-aos="fade-down">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                        Mulai Sekarang
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-playfair leading-tight" data-aos="fade-up">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        Siap Memulai{' '}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                        Perjalanan Properti?
                    </span>
                </h2>

                {/* Subheading */}
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto font-poppins font-light leading-relaxed tracking-wide" data-aos="fade-up" data-aos-delay="200">
                    Hubungi kami sekarang untuk mendapatkan layanan profesional dan solusi terbaik untuk kebutuhan properti eksklusif Anda.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12" data-aos="fade-up" data-aos-delay="400">
                    {/* Primary Button */}
                    <button className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-black px-12 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center gap-3 tracking-wide">
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Hubungi Kami Sekarang
                        </span>
                    </button>

                    {/* Secondary Button */}
                    <button className="group border-2 border-gray-600 text-gray-300 px-12 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 hover:text-white backdrop-blur-sm">
                        <span className="flex items-center gap-3 tracking-wide">
                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Jadwalkan Konsultasi
                        </span>
                    </button>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="600">
                    <div className="flex items-center justify-center gap-3 text-gray-400 font-poppins text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Konsultasi Gratis & Tanpa Biaya
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-400 font-poppins text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Tim Profesional Berpengalaman
                    </div>
                    <div className="flex items-center justify-center gap-3 text-gray-400 font-poppins text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        Proses Transparan & Terjamin
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection