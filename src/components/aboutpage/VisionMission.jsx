import React from 'react'

const VisionMission = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.03),rgba(0,0,0,0))]"></div>

            {/* Accent Elements */}
            <div className="absolute top-10 left-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                            Nilai Inti Perusahaan
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                        Visi & <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Misi</span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                        Pedoman yang menjadi dasar setiap langkah dan keputusan kami dalam menghadirkan layanan properti eksklusif
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Vision Card */}
                    <div
                        className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {/* Icon Container */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-400/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-6 font-playfair text-center group-hover:text-amber-400 transition-colors duration-300">
                            Visi Kami
                        </h3>
                        <p className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide text-center">
                            Menjadi perusahaan properti <span className="text-amber-400 font-semibold">premium terdepan</span> di Pekanbaru yang dikenal dengan pelayanan profesional, transparan, dan berkelas, serta menjadi mitra terpercaya dalam mewujudkan impian properti eksklusif setiap klien.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div
                        className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {/* Icon Container */}
                        <div className="relative mb-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-400/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-2xl font-bold text-white mb-6 font-playfair text-center group-hover:text-amber-400 transition-colors duration-300">
                            Misi Kami
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Memberikan solusi properti eksklusif terbaik dengan integritas dan profesionalisme tinggi",
                                "Membangun hubungan jangka panjang berdasarkan kepercayaan dan kepuasan klien premium",
                                "Mengutamakan kualitas pelayanan dan inovasi dalam setiap transaksi properti mewah",
                                "Berkontribusi positif terhadap perkembangan properti premium di Pekanbaru"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start group/item">
                                    <div className="flex-shrink-0 mt-1 mr-4">
                                        <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                            <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide group-hover/item:text-amber-400 transition-colors duration-300">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
                    {[
                        {
                            icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                            title: 'Integritas',
                            description: 'Kejujuran dan transparansi dalam setiap transaksi properti'
                        },
                        {
                            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                            title: 'Profesionalisme',
                            description: 'Pelayanan terbaik dengan standar industri tertinggi'
                        },
                        {
                            icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                            title: 'Komitmen',
                            description: 'Dedikasi penuh untuk kepuasan klien jangka panjang'
                        }
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="group text-center bg-gradient-to-br from-gray-900/50 to-black/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-1"
                        >
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-400/5 rounded-xl blur-md group-hover:blur-lg transition-all duration-500"></div>
                                <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-3 font-playfair group-hover:text-amber-400 transition-colors duration-300">
                                {value.title}
                            </h4>
                            <p className="text-gray-400 font-poppins font-light text-sm leading-relaxed tracking-wide">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VisionMission