import { useState } from 'react'

function ServicesTabs() {
    const [activeTab, setActiveTab] = useState('jual')

    const tabContent = {
        jual: (
            <div className="service-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
                            Jual Properti dengan <span className="text-amber-400">Agane</span>
                        </h2>
                        <p className="text-gray-300 mb-4 font-poppins font-light leading-relaxed">
                            Ingin menjual properti Anda dengan harga terbaik? Kami siap membantu! Dengan jaringan pemasaran yang luas dan strategi penjualan yang terbukti efektif, properti Anda akan mendapatkan eksposur maksimal kepada calon pembeli yang tepat.
                        </p>
                        <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                            Tim profesional kami akan menilai properti Anda, memberikan saran untuk meningkatkan nilai jual, dan menangani seluruh proses penjualan dari awal hingga akhir.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Penilaian properti yang akurat",
                                "Pemasaran yang luas dan terarah",
                                "Negosiasi harga yang menguntungkan",
                                "Bantuan proses legal dan administrasi"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300 font-poppins font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                Konsultasi Penjualan Gratis
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div data-aos="fade-left">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                alt="Jual Properti"
                                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <FeaturedPropertiesForSale />
            </div>
        ),

        beli: (
            <div className="service-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
                            Beli Properti <span className="text-amber-400">Impian</span> Anda
                        </h2>
                        <p className="text-gray-300 mb-4 font-poppins font-light leading-relaxed">
                            Mencari properti yang sesuai dengan kebutuhan dan budget? Kami memiliki portofolio properti terbaik di Pekanbaru dengan berbagai pilihan lokasi, tipe, dan harga.
                        </p>
                        <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                            Tim kami akan membantu Anda menemukan properti yang tepat, melakukan pengecekan legalitas, dan memandu Anda melalui seluruh proses pembelian hingga kunci berada di tangan Anda.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Konsultasi kebutuhan properti",
                                "Rekomendasi properti terbaik",
                                "Peninjauan dan inspeksi properti",
                                "Bantuan pembiayaan dan KPR"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300 font-poppins font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                Cari Properti
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div data-aos="fade-left">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                alt="Beli Properti"
                                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <PropertySearchForm />
            </div>
        ),

        sewa: (
            <div className="service-content">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
                            Sewa Properti dengan <span className="text-amber-400">Mudah</span>
                        </h2>
                        <p className="text-gray-300 mb-4 font-poppins font-light leading-relaxed">
                            Butuh properti untuk hunian atau bisnis dalam jangka waktu tertentu? Kami menawarkan berbagai pilihan properti sewa dengan lokasi strategis dan fasilitas lengkap.
                        </p>
                        <p className="text-gray-300 mb-6 font-poppins font-light leading-relaxed">
                            Proses sewa yang transparan dan mudah, dengan kontrak yang jelas dan perlindungan bagi kedua belah pihak. Baik untuk kebutuhan pribadi maupun perusahaan.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Properti siap huni dengan fasilitas lengkap",
                                "Kontrak yang jelas dan transparan",
                                "Bantuan administrasi dan legalitas",
                                "Layanan perawatan dan pemeliharaan"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <svg className="w-5 h-5 text-amber-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-gray-300 font-poppins font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                Lihat Properti Sewa
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div data-aos="fade-left">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                alt="Sewa Properti"
                                className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </div>

                <RentalProperties />
            </div>
        )
    }

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.03),rgba(0,0,0,0))]"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center mb-16" data-aos="fade-up">
                    <div className="inline-flex rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-2" role="group">
                        {[
                            { id: 'jual', label: 'Jual Properti', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                            { id: 'beli', label: 'Beli Properti', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
                            { id: 'sewa', label: 'Sewa Properti', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-8 py-4 text-sm font-poppins font-medium rounded-xl border transition-all duration-500 flex items-center gap-3 ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black border-amber-500 shadow-2xl shadow-amber-500/25 transform -translate-y-1'
                                        : 'text-gray-400 border-gray-700 hover:text-white hover:border-amber-500/50 hover:bg-gray-800/50'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                                </svg>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {tabContent[activeTab]}
                </div>
            </div>
        </section>
    )
}

// Sub-components dengan tema hitam-emas
function FeaturedPropertiesForSale() {
    const properties = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Rumah Mewah di Sukajadi",
            description: "LT: 300m², LB: 450m² • 5 KT, 4 KM",
            price: "Rp 3.5 M",
            delay: 100
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Apartemen di City Center",
            description: "LT: 75m² • 2 KT, 1 KM • Lantai 15",
            price: "Rp 850 Jt",
            delay: 200
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Ruko Strategis di Sudirman",
            description: "LT: 200m², LB: 400m² • 3 Lantai",
            price: "Rp 5.2 M",
            delay: 300
        }
    ]

    return (
        <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center font-playfair" data-aos="fade-up">
                Properti <span className="text-amber-400">Terlaris</span> untuk Dijual
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} type="sale" />
                ))}
            </div>
        </div>
    )
}

function PropertySearchForm() {
    return (
        <div className="mt-20 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl" data-aos="fade-up">
            <h3 className="text-3xl font-bold text-white mb-8 text-center font-playfair">
                Cari Properti yang <span className="text-amber-400">Tepat</span> untuk Anda
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Tipe Properti", options: ["Semua Tipe", "Rumah", "Apartemen", "Ruko", "Tanah"] },
                    { label: "Lokasi", options: ["Semua Lokasi", "Sukajadi", "Payung Sekir", "Marpoyan", "Tenayan"] },
                    { label: "Harga Maksimal", options: ["Semua Harga", "Rp 500 Juta", "Rp 1 Miliar", "Rp 2 Miliar", "Rp 5 Miliar"] }
                ].map((field, index) => (
                    <div key={index}>
                        <label className="block text-sm font-medium text-gray-300 mb-2 font-poppins">{field.label}</label>
                        <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300">
                            {field.options.map((option, idx) => (
                                <option key={idx} value={option} className="bg-gray-800">{option}</option>
                            ))}
                        </select>
                    </div>
                ))}
                <div className="flex items-end">
                    <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Cari Properti
                    </button>
                </div>
            </form>
        </div>
    )
}

function RentalProperties() {
    const rentals = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Apartemen Furnished",
            description: "LT: 60m² • 1 KT, 1 KM • Lantai 12",
            price: "Rp 8 Jt/bulan",
            delay: 100
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Rumah 2 Lantai",
            description: "LT: 200m², LB: 300m² • 3 KT, 2 KM",
            price: "Rp 15 Jt/bulan",
            delay: 200
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            title: "Ruko Komersial",
            description: "LT: 150m², LB: 300m² • 2 Lantai",
            price: "Rp 25 Jt/bulan",
            delay: 300
        }
    ]

    return (
        <div className="mt-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center font-playfair" data-aos="fade-up">
                Properti Sewa <span className="text-amber-400">Populer</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rentals.map(property => (
                    <PropertyCard key={property.id} property={property} type="rental" />
                ))}
            </div>
        </div>
    )
}

function PropertyCard({ property, type }) {
    const badgeClass = type === 'sale'
        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black'
        : 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-black'

    const badgeText = type === 'sale' ? 'Dijual' : 'Disewa'

    return (
        <div className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-3"
            data-aos="fade-up" data-aos-delay={property.delay}>
            <div className="relative overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute top-4 right-4">
                    <span className={`${badgeClass} text-xs font-poppins font-semibold px-3 py-1.5 rounded-full shadow-lg`}>
                        {badgeText}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-bold text-white font-playfair mb-2 group-hover:text-amber-400 transition-colors duration-300">{property.title}</h4>
                <p className="text-gray-400 font-poppins font-light mb-4 leading-relaxed">{property.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-700/60">
                    <span className="text-amber-400 font-poppins font-bold text-lg">{property.price}</span>
                    <button className="text-gray-400 hover:text-amber-400 font-poppins font-medium flex items-center gap-2 group/btn transition-colors duration-300">
                        Lihat Detail
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServicesTabs