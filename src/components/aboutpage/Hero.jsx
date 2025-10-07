const Hero = () => {
    return (
        <section className="about-hero pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-black">
            {/* Background dengan gradasi hitam elegan */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

            {/* Overlay tekstur halus */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(0,0,0,0))]"></div>

            {/* Aksen emas dekoratif */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>

            {/* Garis aksen emas */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

            <div className="container mx-auto px-6 text-center relative z-10">
                {/* Section Badge */}
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8" data-aos="fade-down">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                        Tentang Kami
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight" data-aos="fade-up">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                        Tentang
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                        Kami
                    </span>
                </h1>

                {/* Subheading */}
                <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins font-light leading-relaxed tracking-wide mb-8" data-aos="fade-up" data-aos-delay="200">
                    Mengenal lebih dekat <span className="text-amber-400 font-semibold">Agane Properti Pekanbaru</span> - Mitra Terpercaya untuk Properti Eksklusif Anda
                </p>

                {/* Stats Preview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-12" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-amber-400 font-playfair mb-2">15+</div>
                        <div className="text-sm text-gray-400 font-poppins tracking-wide">Tahun Pengalaman</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-amber-400 font-playfair mb-2">500+</div>
                        <div className="text-sm text-gray-400 font-poppins tracking-wide">Properti Terkelola</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-amber-400 font-playfair mb-2">98%</div>
                        <div className="text-sm text-gray-400 font-poppins tracking-wide">Kepuasan Klien</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-amber-400 font-playfair mb-2">24/7</div>
                        <div className="text-sm text-gray-400 font-poppins tracking-wide">Layanan Konsultasi</div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12" data-aos="fade-up" data-aos-delay="600">
                    <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center gap-3 tracking-wide">
                            Konsultasi dengan Tim Kami
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="800">
                    <div className="animate-bounce">
                        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    )
}

export default Hero