import { REICalender, REITelepon } from "../../data/icons"
import { CTAServices, FifthBackground } from "../Template"

function CTA() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
            <FifthBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8" data-aos="fade-down">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-xs sm:text-sm font-poppins font-medium tracking-wide">
                        Mulai Perjalanan Anda
                    </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 sm:mb-8 font-playfair leading-tight tracking-tight" data-aos="fade-up">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent block">
                        Siap Mewujudkan{' '}
                    </span>
                    <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent block mt-2 sm:mt-3">
                        Impian Properti Eksklusif?
                    </span>
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl lg:max-w-3xl mx-auto font-poppins font-light leading-relaxed tracking-wide px-4" data-aos="fade-up" data-aos-delay="200">
                    Hubungi kami sekarang untuk <span className="text-amber-400 font-semibold">konsultasi gratis</span> dan temukan solusi properti premium terbaik untuk kebutuhan Anda.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-delay="400">
                    <button className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 rounded-lg font-poppins font-semibold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:-translate-y-1 shadow-xl hover:shadow-amber-500/20 overflow-hidden w-full sm:w-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 tracking-wide">
                            <REITelepon />
                            Hubungi Konsultan Kami
                        </span>
                    </button>

                    <button className="group border border-gray-600 text-gray-300 px-6 sm:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 rounded-lg font-poppins font-semibold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 hover:text-white backdrop-blur-sm w-full sm:w-auto">
                        <span className="flex items-center justify-center gap-2 sm:gap-3 tracking-wide">
                            <REICalender />
                            Jadwalkan Konsultasi
                        </span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl lg:max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-delay="600">
                    <CTAServices title={"Konsultasi Gratis & Tanpa Biaya"} />
                    <CTAServices title={"Tim Profesional Berpengalaman"} />
                    <CTAServices title={"Proses Transparan & Terjamin"} />
                </div>

                <p className="text-gray-500 text-xs sm:text-sm font-poppins font-light tracking-wide" data-aos="fade-up" data-aos-delay="800">
                    Layanan profesional dengan standar tertinggi untuk kepuasan klien
                </p>
            </div>
        </section>
    )
}

export default CTA