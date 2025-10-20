import { Link } from "react-router-dom"
import { REIBoltIcon, REICalendar, REIClock, REICommentsIcon, REIEnvelope, REIPhone, REIShieldCheckIcon, REIStarIcon } from "../Icon"

export default function CTAServicepages() {
    return (
        <section className="section-padding bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="cta-heading">
            <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30" data-aos="fade-up">
                        <REIClock />
                        <span className="text-white font-medium text-sm md:text-base font-sans ml-2">Konsultasi Gratis - Terbatas</span>
                    </div>

                    <h2 id="cta-heading" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Siap Memulai <span className="text-[#D4AF37]">Transaksi Properti</span> di Riau?
                    </h2>

                    <p className="text-lg md:text-xl text-[#F8F6F4] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Hubungi kami sekarang untuk konsultasi gratis dan temukan solusi properti terbaik untuk kebutuhan Anda di Riau.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="100">
                        <Link
                            to="/kontak"
                            className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                        >
                            <REICommentsIcon />
                            <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Hubungi Agen Sekarang</span>
                        </Link>
                        <Link 
                            to={"/kontak"}
                            className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans">
                            <REICalendar />
                            <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Jadwalkan Konsultasi</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex items-center justify-center text-white/80 font-sans">
                            <REIShieldCheckIcon />
                            <span className="text-xs md:text-sm ml-2">Aman & Terpercaya</span>
                        </div>
                        <div className="flex items-center justify-center text-white/80 font-sans">
                            <REIBoltIcon />
                            <span className="text-xs md:text-sm ml-2">Proses Cepat</span>
                        </div>
                        <div className="flex items-center justify-center text-white/80 font-sans">
                            <REIStarIcon />
                            <span className="text-xs md:text-sm ml-2">Berkualitas</span>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/20" data-aos="fade-up" data-aos-delay="300">
                        <p className="text-[#F8F6F4] mb-3 md:mb-4 text-sm md:text-base font-sans">Butuh bantuan segera untuk properti Riau?</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 font-sans">
                            <a href="https://wa.me/6281235272436" target="_blank" className="flex items-center text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm md:text-base">
                                <REIPhone />
                                <span className="ml-2">+62 812-3527-2436</span>
                            </a>
                            <span className="text-white/50 hidden sm:block text-sm">•</span>
                            <a href="mailto:info@propertyriau.com" className="flex items-center text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm md:text-base">
                                <REIEnvelope />
                                <span className="ml-2">info@propertyriau.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}