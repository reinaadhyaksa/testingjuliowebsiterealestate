import { propertyTypes } from "../../data"
import { REIHome, REIMapPin } from "../Icon"
import { SectionHeader } from "../Template"

export default function PropertyHomepages() {
    return (
        <section className="section-padding bg-gradient-to-b from-white to-[#FAFAFA]" aria-labelledby="property-types-heading">
            <div className="container mx-auto px-4">
                <SectionHeader 
                    title={"Jelajahi Berbagai"}
                    subTitle={"Jenis Properti"}
                    desc={"Dari rumah keluarga hingga investasi komersial, temukan berbagai pilihan properti di Riau sesuai kebutuhan Anda."}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {propertyTypes.map((property, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
                            data-aos="zoom-in"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={`${property.title} di Riau - ${property.description}`}
                                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                                    <span className="bg-gradient-to-r from-[#800000] to-[#B22222] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg text-xs sm:text-sm font-medium shadow-md">
                                        {property.count}+ Tersedia
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 rounded-lg mr-3 group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all duration-300 shadow-sm">
                                        <REIHome />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-[#2B2B2B] group-hover:text-[#800000] transition-colors duration-300 leading-tight font-sans">
                                        {property.title}
                                    </h3>
                                </div>

                                <p className="text-[#6B7280] mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base font-sans">
                                    {property.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs sm:text-sm text-[#6B7280] flex items-center font-sans">
                                        <REIMapPin />
                                        <span className="ml-1 sm:ml-2">Seluruh Riau</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}