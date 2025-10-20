import { features, stats } from "../../data"
import { Link } from "react-router-dom"
import { REISearch, REIHandshakeIcon, REIRocketIcon, REIPlayCircleIcon, REICommentsIcon, REIAwardIcon, REIBoltIcon, REIChartIcon, REIHeadset, REIMobileIcon, REIShieldCheckIconSmall } from "../Icon"

const iconMap = {
    'bolt': REIBoltIcon,
    'shield': REIShieldCheckIconSmall,
    'search': REISearch,
    'chart': REIChartIcon,
    'headset': REIHeadset,
    'mobile': REIMobileIcon,
    'handshake': REIHandshakeIcon,
}

export default function HeroAboutpages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="about-hero-heading">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30" data-aos="fade-up">
                            <REIRocketIcon />
                            <span className="text-white font-medium text-sm md:text-base font-sans ml-2">Platform Properti Digital Terdepan di Riau</span>
                        </div>

                        <h1 id="about-hero-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                            Tentang <span className="text-[#D4AF37]">Properti Riau</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#F8F6F4] mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans">
                            Platform properti modern yang menghadirkan pengalaman baru dalam <strong className="text-white font-semibold">jual, beli, dan sewa properti di Riau</strong>.
                            Dengan sistem digital yang cepat dan tampilan elegan, kami memudahkan Anda menemukan rumah, ruko, tanah, atau apartemen dengan gaya hidup masa kini.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                            {features.map((feature, index) => {
                                const IconComponent = iconMap[feature.icon];
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center bg-white/10 backdrop-blur-sm p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group rounded-lg"
                                        data-aos="fade-up"
                                        data-aos-delay={(index + 1) * 100}
                                    >
                                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 rounded-lg mr-3 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300">
                                            {IconComponent && <IconComponent className="text-white w-3 h-3 md:w-4 md:h-4" />}
                                        </div>
                                        <span className="text-white font-medium text-xs md:text-sm leading-tight font-sans">{feature.title}</span>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                                    data-aos="fade-up"
                                    data-aos-delay={(index + 1) * 100}
                                >
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors duration-300 leading-none">
                                        {stat.number}
                                    </div>
                                    <div className="text-[#F8F6F4] text-xs md:text-sm leading-tight font-sans">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4" data-aos="fade-up" data-aos-delay="400">
                            <Link
                                to="/layanan"
                                className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                            >
                                <REIPlayCircleIcon />
                                <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Lihat Layanan Kami</span>
                            </Link>
                            <Link
                                to="/kontak"
                                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                            >
                                <REICommentsIcon />
                                <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Konsultasi Gratis</span>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/2" data-aos="fade-left">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <img
                                    src="https://res.cloudinary.com/dc9q58yts/image/upload/f_auto,q_auto/v1760876099/Team_g8gsfi.webp"
                                    alt="Tim Properti Riau - Platform properti digital terdepan di Riau"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg border border-gray-100 transform rotate-3 group-hover:rotate-0 transition-transform duration-300 hover:-translate-y-1">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs md:text-sm font-semibold text-gray-800 font-sans">Online 24/7</span>
                                </div>
                                <div className="text-xs text-gray-500 mt-1 font-sans">Layanan Digital</div>
                            </div>

                            <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-lg md:rounded-xl p-3 md:p-4 shadow-lg text-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 hover:-translate-y-1">
                                <div className="text-center">
                                    <div className="text-xl md:text-2xl font-bold leading-none">500+</div>
                                    <div className="text-xs md:text-sm opacity-90 mt-1 font-sans">Properti Aktif</div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg rotate-90 group-hover:rotate-0 transition-transform duration-500">
                                <div className="flex items-center space-x-1 md:space-x-2">
                                    <REIAwardIcon />
                                    <span className="text-xs md:text-sm font-bold font-sans">Terpercaya</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}