import { Link } from "react-router-dom"

export default function CTAContactpages () {
    return (
        <section className="section-padding bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="final-cta-heading">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30" data-aos="fade-up">
                        <i className="fas fa-rocket text-[#D4AF37] mr-2 text-sm"></i>
                        <span className="text-white font-medium text-sm md:text-base font-sans">Mulai Sekarang Juga</span>
                    </div>

                    {/* Main Heading */}
                    <h2 id="final-cta-heading" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Siap Memulai Perjalanan <span className="text-[#D4AF37]">Properti</span> Anda di Riau?
                    </h2>

                    {/* Description */}
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Hubungi <strong className="text-white font-semibold">Properti Riau</strong> sekarang untuk konsultasi gratis dan temukan solusi properti terbaik sesuai kebutuhan Anda di Riau.
                    </p>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">🏆</div>
                            <div className="text-white/90 text-xs md:text-sm leading-tight font-sans">Terpercaya</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">⚡</div>
                            <div className="text-white/90 text-xs md:text-sm leading-tight font-sans">Proses Cepat</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">💰</div>
                            <div className="text-white/90 text-xs md:text-sm leading-tight font-sans">Gratis Konsultasi</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">🛡️</div>
                            <div className="text-white/90 text-xs md:text-sm leading-tight font-sans">Aman & Terjamin</div>
                        </div>
                    </div>

                    {/* Main CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="200">
                        <a
                            href="https://wa.me/6281235272436" target="_blank"
                            className="px-6 py-3 md:px-8 md:py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-whatsapp mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                            WhatsApp Langsung
                        </a>
                    </div>

                    {/* Quick Action Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-8 md:mb-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                            <div className="bg-white/20 p-2 md:p-3 rounded-xl inline-flex mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-home text-lg md:text-xl"></i>
                            </div>
                            <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base leading-tight font-sans">Jual Properti</h4>
                            <p className="text-white/90 text-xs md:text-sm leading-relaxed font-sans">Maximalkan nilai properti Anda</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                            <div className="bg-white/20 p-2 md:p-3 rounded-xl inline-flex mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-search text-lg md:text-xl"></i>
                            </div>
                            <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base leading-tight font-sans">Cari Properti</h4>
                            <p className="text-white/90 text-xs md:text-sm leading-relaxed font-sans">Temukan properti impian</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-white hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                            <div className="bg-white/20 p-2 md:p-3 rounded-xl inline-flex mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                                <i className="fas fa-handshake text-lg md:text-xl"></i>
                            </div>
                            <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-base leading-tight font-sans">Konsultasi</h4>
                            <p className="text-white/90 text-xs md:text-sm leading-relaxed font-sans">Gratis dengan ahli properti</p>
                        </div>
                    </div>

                    {/* Quick Contact Info */}
                    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20" data-aos="fade-up" data-aos-delay="400">
                        <p className="text-white/90 mb-4 md:mb-6 text-base md:text-lg font-sans">Butuh bantuan cepat untuk properti Riau?</p>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 text-white">
                            <a href="tel:+6281234567890" className="flex items-center hover:text-[#D4AF37] transition-colors duration-300 group w-full lg:w-auto">
                                <div className="bg-white/20 p-2 md:p-3 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                                    <i className="fas fa-phone text-[#D4AF37] text-sm" aria-hidden="true"></i>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs md:text-sm text-white/80 leading-tight font-sans">Telepon Langsung</div>
                                    <div className="font-semibold text-sm md:text-base font-sans">+62 812-3527-2436</div>
                                </div>
                            </a>
                            <a href="mailto:info@propertiriau.com" className="flex items-center hover:text-[#D4AF37] transition-colors duration-300 group w-full lg:w-auto">
                                <div className="bg-white/20 p-2 md:p-3 rounded-full mr-3 group-hover:bg-white/30 transition-colors">
                                    <i className="fas fa-envelope text-[#D4AF37] text-sm" aria-hidden="true"></i>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs md:text-sm text-white/80 leading-tight font-sans">Email Kami</div>
                                    <div className="font-semibold text-sm md:text-base font-sans">info@propertiriau.com</div>
                                </div>
                            </a>
                            <div className="flex items-center w-full lg:w-auto">
                                <div className="bg-white/20 p-2 md:p-3 rounded-full mr-3">
                                    <i className="fas fa-map-marker-alt text-[#D4AF37] text-sm" aria-hidden="true"></i>
                                </div>
                                <div className="text-left">
                                    <div className="text-xs md:text-sm text-white/80 leading-tight font-sans">Lokasi Kantor</div>
                                    <div className="font-semibold text-sm md:text-base font-sans">Pekanbaru, Riau</div>
                                </div>
                            </div>
                        </div>

                        {/* Operating Hours */}
                        <div className="mt-4 md:mt-6 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 max-w-md mx-auto border border-white/20">
                            <div className="flex items-center justify-center text-white/90 text-xs md:text-sm font-sans">
                                <i className="fas fa-clock text-[#D4AF37] mr-1 md:mr-2 text-xs md:text-sm"></i>
                                <span>Layanan 24/7 - Senin hingga Minggu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}