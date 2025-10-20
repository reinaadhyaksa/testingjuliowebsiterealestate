import { features } from "../../data"
import { REIShieldCheckIcon, REIHandshakeIcon, REIBoltIcon, REIChartIcon, REIMobileIcon, REIStarIcon, REIAwardIcon, REISearchLarge, REIPhoneLarge } from "../Icon"

const iconMap = {
    'bolt': REIBoltIcon,
    'shield': REIShieldCheckIcon,
    'search': REISearchLarge,
    'chart': REIChartIcon,
    'headset': REIPhoneLarge,
    'mobile': REIMobileIcon,
    'handshake': REIHandshakeIcon,
}

export default function Features() {
    return (
        <section className="section-padding bg-gradient-to-br from-[#FAFAFA] to-white" aria-labelledby="features-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-3 md:mb-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm md:text-base font-sans">
                            <REIStarIcon />
                            <span className="font-semibold ml-2 md:ml-3">Keunggulan Platform Kami</span>
                        </div>
                        <h2 id="features-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-3 md:mb-4 leading-tight font-serif">
                            Mengapa <span className="bg-gradient-to-r from-[#B22222] to-[#D4AF37] bg-clip-text text-transparent">Memilih Kami?</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-sans">
                            Platform properti modern dengan teknologi terkini untuk pengalaman transaksi properti Riau yang luar biasa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {features.map((feature, index) => {
                            const IconComponent = iconMap[feature.icon];

                            return (
                                <article
                                    key={index}
                                    className="bg-white rounded-xl p-5 md:p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/5 to-[#B22222]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                                    <div className="flex items-start relative z-10">
                                        <div className="bg-gradient-to-br from-[#800000] to-[#B22222] p-3 md:p-4 rounded-xl mr-4 flex-shrink-0 shadow-sm group-hover:scale-105 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300">
                                            {IconComponent ? (
                                                <IconComponent className="text-white w-5 h-5 md:w-6 md:h-6" />
                                            ) : (
                                                <div className="text-white text-lg md:text-xl">⚡</div> // Fallback
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B] mb-2 group-hover:text-[#800000] transition-colors duration-300 leading-tight line-clamp-2 font-sans">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[#6B7280] leading-relaxed text-sm md:text-base mb-3 line-clamp-3 font-sans">
                                                {feature.description}
                                            </p>

                                            <div className="mt-3">
                                                <div className="flex justify-between text-xs md:text-sm text-[#6B7280] mb-1 font-sans">
                                                    <span>Efisiensi</span>
                                                    <span className="font-semibold text-[#800000]">{85 + (index * 5)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                                                    <div
                                                        className="bg-gradient-to-r from-[#800000] to-[#B22222] h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-[#D4AF37] group-hover:to-[#D4AF37]"
                                                        style={{ width: `${85 + (index * 5)}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    <div className="mt-8 md:mt-10 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-xl p-5 md:p-6 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden max-w-2xl mx-auto">
                        <div className="relative z-10 text-center">
                            <div className="flex items-center justify-center mb-2 md:mb-3">
                                <REIAwardIcon />
                                <p className="text-base md:text-lg font-semibold font-sans ml-2 md:ml-3">Platform Properti Terpercaya di Riau</p>
                            </div>
                            <p className="text-white/80 text-xs md:text-sm leading-relaxed font-sans">
                                Dipercaya oleh <strong>1.200+ klien</strong> dengan rating <strong>4.9/5</strong> dari <strong>500+ transaksi</strong> properti Riau
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}