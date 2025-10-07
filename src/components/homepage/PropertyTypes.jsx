import { properties } from "../../data/data"
import { REIRight } from "../../data/icons"
import { FourthBackground, SectionHeader } from "../Template"

function PropertyTypes() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-black">
            <FourthBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    tag={"Koleksi Eksklusif"}
                    title={"Properti"}
                    subTitle={"Premium"}
                    desc={"Menghadirkan pilihan properti terbaik dengan kualitas dan lokasi strategis untuk investasi masa depan Anda"}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {properties.map((property, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-amber-500/5 transition-all duration-500 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={100 + (index * 100)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-2 py-1 rounded-full text-xs sm:text-sm font-poppins font-semibold tracking-wide shadow-lg">
                                    Premium
                                </div>

                                <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 font-playfair leading-tight group-hover:text-amber-400 transition-colors duration-300">
                                    {property.title}
                                </h3>

                                <p className="text-gray-400 font-poppins font-light leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm tracking-wide">
                                    {property.description}
                                </p>

                                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-700/60">
                                    <span className="text-amber-400 font-poppins font-semibold text-sm sm:text-base tracking-wide">
                                        Explore
                                    </span>

                                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                        <svg
                                            className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-black transform group-hover:translate-x-0.5 sm:group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 sm:mt-16" data-aos="fade-up" data-aos-delay="500">
                    <button className="group border border-gray-600 text-gray-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-poppins font-semibold text-sm sm:text-base lg:text-lg transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 hover:text-white backdrop-blur-sm w-full sm:w-auto">
                        <span className="flex items-center justify-center gap-2 sm:gap-3 tracking-wide">
                            Lihat Semua Properti
                            <REIRight />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PropertyTypes