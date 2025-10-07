import { SectionHeader, ThirdBackground, WhyComponents } from "../Template"
import { services } from "../../data/data"

function Services() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-black">
            <ThirdBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    tag={"Layanan Premium"}
                    title={"Layanan"}
                    subTitle={"Eksklusif"}
                    desc={"Kami menyediakan berbagai layanan properti premium untuk memenuhi kebutuhan eksklusif Anda"}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-amber-500/5 transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 200)}
                        >
                            <div className="relative mb-6 sm:mb-8">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/15 to-amber-400/5 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                                <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                                    <i className={`${service.icon} text-white text-lg sm:text-xl lg:text-2xl`}></i>
                                </div>
                            </div>

                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-playfair text-center group-hover:text-amber-400 transition-colors duration-300 tracking-tight">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 font-poppins font-light leading-relaxed text-center mb-4 sm:mb-6 text-xs sm:text-sm tracking-wide">
                                {service.description}
                            </p>

                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center" data-aos="fade-up" data-aos-delay="400">
                    <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-playfair tracking-tight">
                            Mengapa Memilih <span className="text-amber-400">Layanan Kami?</span>
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                            <WhyComponents title={"Tim Profesional"} desc={"dengan pengalaman lebih dari 15 tahun di industri properti"} />
                            <WhyComponents title={"Transparansi Penuh"} desc={"dalam setiap proses transaksi dan komunikasi"} />
                            <WhyComponents title={"Jaringan Luas"} desc={"akses ke properti eksklusif yang tidak tersedia di pasaran umum"} />
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 font-playfair mb-1 sm:mb-2">500+</div>
                            <div className="text-gray-300 font-poppins font-semibold text-sm sm:text-base mb-4 sm:mb-6">Properti Terkelola</div>
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 font-playfair mb-1 sm:mb-2">98%</div>
                            <div className="text-gray-300 font-poppins font-semibold text-sm sm:text-base">Kepuasan Klien</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services