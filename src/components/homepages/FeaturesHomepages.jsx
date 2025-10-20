import { Link } from "react-router-dom"
import { features } from "../../data"
import { REICalendar, REIPhone, REIShieldCheckIcon, REIHandshakeIcon, REIBoltIcon, REIChartIcon, REIMobileIcon, REISearchLarge, REIPhoneLarge } from "../Icon"
import { SectionHeader } from "../Template"

const iconMap = {
    'bolt': REIBoltIcon,
    'shield': REIShieldCheckIcon,
    'search': REISearchLarge,
    'chart': REIChartIcon,
    'headset': REIPhoneLarge,
    'mobile': REIMobileIcon,
    'handshake': REIHandshakeIcon,
}
 
export default function FeaturesHomepage() {
    return (
        <section className="section-padding bg-[#FAFAFA]" aria-labelledby="features-heading">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={"Mengapa Memilih"}
                    subTitle={"Properti Riau?"}
                    desc={"Kami percaya, mencari properti ideal seharusnya mudah, aman, dan menyenangkan. Temukan pilihan terbaik dari agen terpercaya — semua dalam satu tempat."}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || REIShieldCheckIcon;

                        return (
                            <article
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-xl text-center border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 property-card group"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                            >
                                <div className="bg-gradient-to-br from-[#800000] to-[#B22222] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300 shadow-md">
                                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                                </div>

                                <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B] mb-3 md:mb-4 group-hover:text-[#800000] transition-colors duration-300 leading-tight tracking-tight font-sans">
                                    {feature.title}
                                </h3>

                                <p className="text-[#6B7280] leading-relaxed md:leading-loose text-base md:text-lg tracking-normal font-sans">
                                    {feature.description}
                                </p>

                                <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-full mx-auto"></div>
                                </div>
                            </article>
                        )
                    })}
                </div>

                <div className="mt-12 md:mt-16 text-center" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 lg:p-12 text-white shadow-lg">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 leading-tight tracking-tight font-serif">
                            Siap Memulai Perjalanan Properti Anda?
                        </h3>
                        <p className="text-[#F8F6F4] text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed md:leading-loose tracking-normal font-sans">
                            Bergabung dengan ratusan klien yang telah menemukan properti impian mereka melalui platform properti Riau.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to={"/kontak"}
                                className="px-6 py-3 md:px-8 md:py-3 bg-white text-[#800000] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center text-base md:text-lg tracking-wide font-sans hover:transform hover:-translate-y-1">
                                <REICalendar />
                                <span className="ml-2">Konsultasi Gratis</span>
                            </Link>
                            <Link
                                to={"/kontak"}
                                className="px-6 py-3 md:px-8 md:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center text-base md:text-lg tracking-wide font-sans hover:transform hover:-translate-y-1">
                                <REIPhone />
                                <span className="ml-2">Hubungi Kami</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}