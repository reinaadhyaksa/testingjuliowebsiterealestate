import { timeline } from "../../data"
import { Link } from "react-router-dom"

export default function Timeline () {
    return (
        <section className="section-padding bg-gradient-to-br from-white to-[#FAFAFA]" aria-labelledby="timeline-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm md:text-base font-sans">
                        <i className="fas fa-rocket mr-2 md:mr-3 text-[#D4AF37] text-sm" aria-hidden="true"></i>
                        <span className="font-semibold">Evolusi Digital Properti Riau</span>
                    </div>

                    <h2 id="timeline-heading" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4 md:mb-6 leading-tight font-serif">
                        Perjalanan <span className="bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent">Digital Kami</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Jejak langkah inovasi kami dalam membangun platform properti digital terdepan di Riau, dari konsep hingga menjadi solusi terpercaya.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Main Timeline Container */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-[#800000] via-[#B22222] to-[#D4AF37] rounded-full hidden lg:block shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
                        </div>

                        {/* Mobile Timeline Line */}
                        <div className="absolute left-8 w-1.5 h-full bg-gradient-to-b from-[#800000] via-[#B22222] to-[#D4AF37] rounded-full lg:hidden shadow-md">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
                        </div>

                        <div className="space-y-12 md:space-y-16 lg:space-y-0">
                            {timeline.map((item, index) => (
                                <article
                                    key={index}
                                    className="relative group"
                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                    data-aos-delay={index * 100}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-full border-4 border-white shadow-lg z-10 hidden lg:flex items-center justify-center group-hover:scale-110 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-inner"></div>
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 border-2 border-[#800000] rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Mobile Dot */}
                                    <div className="absolute left-8 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-full border-4 border-white shadow-lg z-10 lg:hidden flex items-center justify-center group-hover:scale-110 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300">
                                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-inner"></div>
                                    </div>

                                    {/* Content Container */}
                                    <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 md:gap-8`}>
                                        {/* Year Badge */}
                                        <div className={`lg:w-2/5 ${index % 2 === 0 ? 'lg:pr-6 lg:text-right' : 'lg:pl-6'} mb-4 md:mb-6 lg:mb-0`}>
                                            <div className="inline-flex items-center bg-gradient-to-r from-[#800000] to-[#B22222] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 text-sm md:text-base font-sans">
                                                <i className="fas fa-calendar-star mr-2 md:mr-3 text-[#D4AF37] text-sm" aria-hidden="true"></i>
                                                <span className="font-bold tracking-wide">{item.year}</span>
                                            </div>
                                            {/* Achievement Badge */}
                                            {item.achievement && (
                                                <div className="mt-2 md:mt-3 inline-flex items-center bg-white/80 backdrop-blur-sm text-[#6B7280] px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium border border-gray-200 font-sans">
                                                    <i className="fas fa-trophy text-[#D4AF37] mr-1 md:mr-2 text-xs"></i>
                                                    {item.achievement}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content Card */}
                                        <div className="lg:w-3/5">
                                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden">
                                                {/* Background Gradient Effect */}
                                                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#800000]/5 to-[#B22222]/5 rounded-full -translate-y-16 md:-translate-y-20 translate-x-16 md:translate-x-20 group-hover:scale-150 transition-transform duration-700"></div>
                                                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-[#D4AF37]/3 to-[#B22222]/3 rounded-full translate-y-12 md:translate-y-16 -translate-x-12 md:-translate-x-16 group-hover:scale-125 transition-transform duration-700 delay-200"></div>

                                                {/* Content */}
                                                <div className="relative z-10">
                                                    <div className="flex items-center mb-3 md:mb-4">
                                                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 md:p-3 rounded-xl mr-3 md:mr-4 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                                            <i className={`${item.icon} text-white text-lg md:text-xl`} aria-hidden="true"></i>
                                                        </div>
                                                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B2B2B] group-hover:text-[#800000] transition-colors duration-300 flex-1 leading-tight font-sans">
                                                            {item.title}
                                                        </h3>
                                                    </div>

                                                    <p className="text-[#6B7280] leading-relaxed mb-4 md:mb-6 text-sm md:text-base md:text-lg font-sans">
                                                        {item.description}
                                                    </p>

                                                    {/* Progress & Metrics */}
                                                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                                                        <div className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm text-[#6B7280] font-sans">
                                                            <div className="flex items-center space-x-1">
                                                                <i className="fas fa-chart-line text-[#B22222] text-xs" aria-hidden="true"></i>
                                                                <span>Growth {item.growth}%</span>
                                                            </div>
                                                            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                                            <div className="flex items-center space-x-1">
                                                                <i className="fas fa-users text-[#800000] text-xs" aria-hidden="true"></i>
                                                                <span>{item.clients}+ Clients</span>
                                                            </div>
                                                        </div>

                                                        {/* Progress Dots */}
                                                        <div className="flex space-x-1">
                                                            {Array.from({ length: 5 }).map((_, dotIndex) => (
                                                                <div
                                                                    key={dotIndex}
                                                                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${dotIndex <= index
                                                                        ? 'bg-gradient-to-r from-[#800000] to-[#B22222] shadow-sm'
                                                                        : 'bg-gray-200'
                                                                        }`}
                                                                ></div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Hover Border Glow */}
                                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#B22222]/30 group-hover:shadow-[0_0_30px_rgba(178,34,34,0.1)] transition-all duration-500 pointer-events-none"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Line (Mobile) */}
                                    {index < timeline.length - 1 && (
                                        <div className="absolute left-8 top-full w-1.5 h-12 md:h-16 bg-gradient-to-b from-[#800000] to-[#B22222] lg:hidden shadow-md">
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
                                        </div>
                                    )}
                                </article>
                            ))}
                        </div>

                        {/* Start and End Markers */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 md:-top-6 w-4 h-4 md:w-5 md:h-5 bg-[#800000] rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center">
                            <i className="fas fa-play text-white text-xs"></i>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 md:-bottom-6 w-4 h-4 md:w-5 md:h-5 bg-[#D4AF37] rounded-full border-4 border-white shadow-lg hidden lg:flex items-center justify-center">
                            <i className="fas fa-infinity text-white text-xs"></i>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-12 md:mt-20" data-aos="fade-up">
                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 lg:p-12 text-white shadow-lg max-w-4xl mx-auto relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full animate-pulse"></div>
                                <div className="absolute top-8 right-6 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full animate-pulse delay-300"></div>
                                <div className="absolute bottom-6 left-8 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full animate-pulse delay-700"></div>
                                <div className="absolute bottom-4 right-4 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full animate-pulse delay-500"></div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                                    Terus Berinovasi untuk Masa Depan Properti Riau
                                </h3>
                                <p className="text-[#F8F6F4] text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
                                    Perjalanan digital kami terus berlanjut dengan komitmen menghadirkan solusi properti terbaik untuk masyarakat Riau.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                    <Link
                                        to="/layanan"
                                        className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                                    >
                                        <i className="fas fa-cube mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                                        Jelajahi Platform Digital
                                    </Link>
                                    <Link
                                        to="/kontak"
                                        className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                                    >
                                        <i className="fas fa-comment-dots mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                                        Bergabung Bersama Kami
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}