import { REIMessage, REIRight } from "../../data/icons"
import { BadgeHero, MainBackground } from "../Template"
import { Link } from "react-router-dom"

function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 pb-16 sm:pt-24 sm:pb-20">
            <MainBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl lg:max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-md border border-gray-700/50 rounded-full px-3 py-2 mb-6 sm:mb-8 shadow-xl" data-aos="fade-down">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-xs sm:text-sm font-poppins font-medium tracking-wide">
                            <span className="text-amber-500 font-semibold">Premium</span> Real Estate Agency Pekanbaru
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-playfair tracking-tight leading-tight" data-aos="fade-up">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent block">
                            Agen Properti Terpercaya
                        </span>
                        <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent block mt-2 sm:mt-3">
                            di Pekanbaru
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto font-poppins font-light leading-relaxed tracking-wide" data-aos="fade-up" data-aos-delay="200">
                        Jual, Beli & Sewa <span className="font-semibold text-white">Properti Eksklusif Pekanbaru</span> - Solusi Cerdas Investasi Properti Riau
                    </p>

                    <p className="text-sm sm:text-base text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto font-poppins font-light leading-relaxed tracking-wide" data-aos="fade-up" data-aos-delay="400">
                        Agen properti terbaik di Pekanbaru dengan portofolio 500+ properti mewah dan premium.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 sm:mb-14" data-aos="fade-up" data-aos-delay="600">
                        <Link
                            to="/layanan"
                            className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-poppins font-semibold text-sm sm:text-base transition-all duration-500 transform hover:-translate-y-1 shadow-xl hover:shadow-amber-500/30 overflow-hidden w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
                                Lihat Properti Pekanbaru
                                <REIRight />
                            </span>
                        </Link>

                        <Link
                            to="/kontak"
                            className="group border border-gray-600 text-gray-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-poppins font-semibold text-sm sm:text-base transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 backdrop-blur-sm hover:text-white w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                        >
                            <span className="flex items-center justify-center gap-2 tracking-wide">
                                Konsultasi Gratis Pekanbaru
                                <REIMessage />
                            </span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto pt-6 sm:pt-8 border-t border-gray-700/40" data-aos="fade-up" data-aos-delay="800">
                        <BadgeHero title={"500+"} desc={"Properti Pekanbaru"} />
                        <BadgeHero title={"15+"} desc={"Tahun di Pekanbaru"} />
                        <BadgeHero title={"98%"} desc={"Klien Puas Riau"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero