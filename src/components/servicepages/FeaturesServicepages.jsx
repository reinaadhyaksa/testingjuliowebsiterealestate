import { useState } from "react"
import { REIBedIcon, REIDoorIcon, REIKeyIcon, REIMapPin, REIRulerIcon, REITagIcon } from "../Icon"
import { propertiesForSale, propertiesForRent } from "../../data"
import { SectionHeader } from "../Template"

export default function FeaturesServicepages() {
    const [activeTab, setActiveTab] = useState('jual')

    // Fungsi untuk handle klik tombol Beli
    const handleBuyClick = (property) => {
        const phoneNumber = "+6281235272436";
        const message = `Halo, saya tertarik dengan properti berikut:\n\n*${property.title}*\nLokasi: ${property.location}\nHarga: ${property.price}\nTipe: ${property.type}\n\nBisa saya mendapatkan informasi lebih lanjut?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    }

    const renderPropertyDetails = (details) => {
        if (details.beds) {
            return (
                <>
                    <span className="flex items-center text-xs md:text-sm text-[#6B7280]">
                        <REIBedIcon />
                        <span className="ml-1">{details.beds}</span>
                    </span>
                    <span className="flex items-center text-xs md:text-sm text-[#6B7280]">
                        <REIBedIcon />
                        <span className="ml-1">{details.baths}</span>
                    </span>
                    <span className="flex items-center text-xs md:text-sm text-[#6B7280]">
                        <REIRulerIcon />
                        <span className="ml-1">{details.area}</span>
                    </span>
                </>
            )
        } else if (details.floors) {
            return (
                <>
                    <span className="flex items-center text-xs md:text-sm text-[#6B7280]">
                        <REIDoorIcon />
                        <span className="ml-1">{details.floors}</span>
                    </span>
                    <span className="flex items-center text-xs md:text-sm text-[#6B7280]">
                        <REIRulerIcon />
                        <span className="ml-1">{details.area}</span>
                    </span>
                </>
            )
        } else {
            return (
                <span className="flex items-center text-xs md:text-sm text-[#6B7280]">
                    <REIRulerIcon />
                    <span className="ml-1">{details.area}</span>
                </span>
            )
        }
    }

    const currentProperties = activeTab === 'jual' ? propertiesForSale : propertiesForRent

    return (
        <section className="section-padding bg-gradient-to-b from-white to-[#FAFAFA]" aria-labelledby="featured-properties-heading" id="properti">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title={"Properti"}
                    subTitle={"Unggulan Riau"}
                    desc={'Jelajahi pilihan properti terbaik kami yang tersedia untuk <strong class="font-semibold">dijual dan disewa di Riau</strong> dengan harga kompetitif dan lokasi strategis'}
                />

                <div className="flex justify-center mb-8 md:mb-12" data-aos="fade-up">
                    <div className="inline-flex rounded-xl border border-gray-200 p-1 bg-white shadow-md" role="tablist" aria-label="Jenis layanan properti">
                        <button
                            onClick={() => setActiveTab('jual')}
                            className={`px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 flex items-center text-sm md:text-base font-sans ${activeTab === 'jual'
                                ? 'bg-gradient-to-r from-[#800000] to-[#B22222] text-white shadow-sm'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            role="tab"
                            aria-selected={activeTab === 'jual'}
                            aria-controls="jual-panel"
                            id="jual-tab"
                        >
                            <REITagIcon />
                            <span className="ml-2">Properti Dijual</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('sewa')}
                            className={`px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 flex items-center text-sm md:text-base font-sans ${activeTab === 'sewa'
                                ? 'bg-gradient-to-r from-[#800000] to-[#B22222] text-white shadow-sm'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            role="tab"
                            aria-selected={activeTab === 'sewa'}
                            aria-controls="sewa-panel"
                            id="sewa-tab"
                        >
                            <REIKeyIcon />
                            <span className="ml-2">Properti Disewa</span>
                        </button>
                    </div>
                </div>

                <div
                    id="jual-panel"
                    role="tabpanel"
                    aria-labelledby="jual-tab"
                    className={activeTab === 'jual' ? 'block' : 'hidden'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {propertiesForSale.map((property, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 property-card group hover:-translate-y-1 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                itemScope
                                itemType="https://schema.org/Product"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={`${property.title} - Properti dijual di ${property.location}`}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                    />

                                    <span className={`absolute top-3 left-3 md:top-4 md:left-4 ${property.badgeColor} text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold shadow-md`}>
                                        {property.type}
                                    </span>
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B] mb-2 md:mb-3 group-hover:text-[#800000] transition-colors duration-300 line-clamp-2 leading-tight font-sans" itemProp="name">
                                        {property.title}
                                    </h3>

                                    <p className="text-[#6B7280] mb-3 md:mb-4 flex items-center text-sm md:text-base font-sans" itemProp="location" itemScope itemType="https://schema.org/Place">
                                        <REIMapPin />
                                        <span className="ml-1 md:ml-2" itemProp="address">{property.location}</span>
                                    </p>

                                    <div className="flex justify-between items-center mb-4 md:mb-6">
                                        <div className="flex space-x-3 md:space-x-4" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                                            {renderPropertyDetails(property.details)}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-4 md:mb-6">
                                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                            <span className="text-xl md:text-2xl font-bold text-[#800000]" itemProp="price">{property.price}</span>
                                            <meta itemProp="priceCurrency" content="IDR" />
                                            {property.priceNote && (
                                                <span className="text-[#6B7280] text-xs md:text-sm block mt-1 font-sans">{property.priceNote}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 md:space-x-3">
                                        <button
                                            onClick={() => handleBuyClick(property)}
                                            className="flex-1 py-2 md:py-3 bg-gradient-to-r from-[#800000] to-[#B22222] text-white font-semibold rounded-lg hover:from-[#D4AF37] hover:to-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center group/btn text-xs md:text-sm font-sans cursor-pointer"
                                        >
                                            <span>Beli</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div
                    id="sewa-panel"
                    role="tabpanel"
                    aria-labelledby="sewa-tab"
                    className={activeTab === 'sewa' ? 'block' : 'hidden'}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {propertiesForRent.map((property, index) => (
                            <article
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 property-card group hover:-translate-y-1 border border-gray-100"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                itemScope
                                itemType="https://schema.org/Product"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={`${property.title} - Properti disewa di ${property.location}`}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                        itemProp="image"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <span className={`absolute top-3 left-3 md:top-4 md:left-4 ${property.badgeColor} text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold shadow-md`}>
                                        {property.type}
                                    </span>
                                </div>

                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-[#2B2B2B] mb-2 md:mb-3 group-hover:text-[#800000] transition-colors duration-300 line-clamp-2 leading-tight font-sans" itemProp="name">
                                        {property.title}
                                    </h3>

                                    <p className="text-[#6B7280] mb-3 md:mb-4 flex items-center text-sm md:text-base font-sans" itemProp="location" itemScope itemType="https://schema.org/Place">
                                        <REIMapPin />
                                        <span className="ml-1 md:ml-2" itemProp="address">{property.location}</span>
                                    </p>

                                    <div className="flex justify-between items-center mb-4 md:mb-6">
                                        <div className="flex space-x-3 md:space-x-4" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                                            {renderPropertyDetails(property.details)}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mb-4 md:mb-6">
                                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                            <span className="text-xl md:text-2xl font-bold text-[#800000]" itemProp="price">{property.price}</span>
                                            <meta itemProp="priceCurrency" content="IDR" />
                                            {property.priceNote && (
                                                <span className="text-[#6B7280] text-xs md:text-sm block mt-1 font-sans">{property.priceNote}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 md:space-x-3">
                                        <button
                                            onClick={() => handleBuyClick(property)}
                                            className="flex-1 py-2 md:py-3 bg-gradient-to-r from-[#800000] to-[#B22222] text-white font-semibold rounded-lg hover:from-[#D4AF37] hover:to-[#D4AF37] transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center group/btn text-xs md:text-sm font-sans cursor-pointer"
                                        >
                                            <span>Sewa</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}