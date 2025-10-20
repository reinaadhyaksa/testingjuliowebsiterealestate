import { Link } from "react-router-dom"
import { values } from "../../data"

// Komponen SVG Custom untuk Values Section
const GemIcon = () => (
    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    </svg>
)

const HandshakeIcon = () => (
    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v6m4-6v6m4-6v6M3 12h18M3 12l2-2m-2 2l2 2m14-2l2 2m-2-2l2-2M7 8h10M7 8a2 2 0 002-2h6a2 2 0 002 2M7 8v10a2 2 0 002 2h6a2 2 0 002-2V8" />
    </svg>
)

const UsersIcon = () => (
    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
)

export default function Values() {
    return (
        <section className="section-padding bg-gradient-to-br from-white to-[#FAFAFA]" aria-labelledby="values-heading">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm md:text-base font-sans">
                        <GemIcon />
                        <span className="font-semibold ml-2 md:ml-3">Nilai Inti Properti Riau</span>
                    </div>

                    <h2 id="values-heading" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4 md:mb-6 leading-tight font-serif">
                        Nilai-Nilai <span className="bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent">Kami</span>
                    </h2>
                    <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                        Fondasi yang menggerakkan setiap layanan kami dalam menghadirkan pengalaman properti terbaik untuk Anda di Riau dengan teknologi digital modern.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {values.map((value, index) => {
                        const IconComponent = value.IconComponent; // Asumsikan values data memiliki IconComponent

                        return (
                            <article
                                key={index}
                                className="group relative"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                            >
                                {/* Background Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#800000] to-[#B22222] rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 scale-105 group-hover:scale-100"></div>

                                {/* Floating Animation */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#800000] to-[#B22222] opacity-0 group-hover:opacity-5 transition-opacity duration-500 animate-float"></div>

                                {/* Main Card */}
                                <div className="bg-white rounded-xl p-6 md:p-8 text-center shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 relative z-10 h-full flex flex-col backdrop-blur-sm">
                                    {/* Icon Container with Gradient */}
                                    <div className="relative mb-4 md:mb-6">

                                        {/* Main Icon Circle */}
                                        <div className="relative bg-gradient-to-br from-[#800000] to-[#B22222] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37]">
                                            {IconComponent ? (
                                                <IconComponent className="text-white w-6 h-6 md:w-8 md:h-8" />
                                            ) : (
                                                <div className="text-white text-lg md:text-2xl">⭐</div> // Fallback
                                            )}
                                        </div>

                                        {/* Number Badge */}
                                        <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-sm group-hover:scale-105 transition-transform duration-300">
                                            {index + 1}
                                        </div>

                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 border-2 border-[#800000]/30 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B] mb-3 md:mb-4 group-hover:text-[#800000] transition-colors duration-300 leading-tight font-sans">
                                        {value.title}
                                    </h3>
                                    <p className="text-[#6B7280] leading-relaxed flex-grow text-sm md:text-base md:text-lg font-sans">
                                        {value.description}
                                    </p>

                                    {/* Progress Indicator */}
                                    <div className="mt-4 md:mt-6 mb-3 md:mb-4">
                                        <div className="flex justify-between text-xs text-[#6B7280] mb-1 md:mb-2 font-sans">
                                            <span>Komitmen</span>
                                            <span className="font-semibold text-[#800000]">{90 + (index * 2)}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-1 md:h-1.5">
                                            <div
                                                className="bg-gradient-to-r from-[#800000] to-[#B22222] h-1 md:h-1.5 rounded-full transition-all duration-1000 ease-out group-hover:from-[#D4AF37] group-hover:to-[#D4AF37]"
                                                style={{ width: `${90 + (index * 2)}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    {/* Hover Border Effect */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#B22222]/30 transition-all duration-300 pointer-events-none"></div>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 md:mt-16" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 lg:p-12 text-white shadow-lg max-w-4xl mx-auto relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full"></div>
                            <div className="absolute top-8 right-6 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"></div>
                            <div className="absolute bottom-6 left-8 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full"></div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 leading-tight font-serif">
                                Siap Bekerja Sama dengan Nilai Terbaik?
                            </h3>
                            <p className="text-[#F8F6F4] text-base md:text-lg mb-4 md:mb-6 max-w-2xl mx-auto leading-relaxed font-sans">
                                Mari wujudkan impian properti Anda di Riau dengan tim profesional yang mengutamakan kualitas, kepercayaan, dan inovasi digital.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                                <Link
                                    to="/kontak"
                                    className="px-6 py-3 md:px-8 md:py-4 bg-white text-[#800000] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans"
                                >
                                    <HandshakeIcon />
                                    <span className="ml-2 md:ml-3 group-hover:scale-110 transition-transform">Mulai Kerjasama</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}