import { Link } from "react-router-dom"
import { REISearch, REIPhone } from "../Icon"

export default function CTAHomepages() {
    return (
        <section className="section-padding bg-gradient-to-r from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="cta-heading">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
                <div className="absolute top-1/4 right-20 w-16 h-16 bg-white rounded-full"></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up">
                <h2 id="cta-heading" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                    Siap Memulai <span className="text-[#D4AF37]">Pencarian Properti</span> Anda?
                </h2>

                <p className="text-lg md:text-xl text-[#F8F6F4] mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed md:leading-loose font-sans">
                    Bergabunglah dengan ribuan orang yang telah menemukan properti impian mereka melalui Properti Riau.
                    Mulai perjalanan properti Anda sekarang dengan platform digital terdepan di Riau.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mb-10 md:mb-12">
                    <Link
                        to={"/layanan"}
                        className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-base md:text-lg mx-auto sm:mx-0 font-sans">
                        <REISearch />
                        <span className="ml-2 md:ml-3">Lihat Semua Properti Riau</span>
                    </Link>
                    <Link
                        to={"/kontak"}
                        className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-base md:text-lg mx-auto sm:mx-0 font-sans">
                        <REIPhone />
                        <span className="ml-2 md:ml-3">Hubungi Konsultan Properti</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                    <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 leading-none">500+</div>
                        <div className="text-[#F8F6F4] text-sm md:text-base leading-tight font-sans">Properti Tersedia</div>
                    </div>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 leading-none">1.200+</div>
                        <div className="text-[#F8F6F4] text-sm md:text-base leading-tight font-sans">Klien Puas</div>
                    </div>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 leading-none">98%</div>
                        <div className="text-[#F8F6F4] text-sm md:text-base leading-tight font-sans">Tingkat Kepuasan</div>
                    </div>
                    <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2 leading-none">24/7</div>
                        <div className="text-[#F8F6F4] text-sm md:text-base leading-tight font-sans">Layanan Digital</div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
        </section>
    )
}