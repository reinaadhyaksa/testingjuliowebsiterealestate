import React from 'react'

const CompanyOverview = () => {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_70%,rgba(120,119,198,0.03),rgba(0,0,0,0))]"></div>

            {/* Accent Elements */}
            <div className="absolute top-10 left-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div data-aos="fade-right">
                        {/* Section Badge */}
                        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                                Tentang Perusahaan
                            </span>
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6 font-playfair leading-tight">
                            Selamat Datang di{' '}
                            <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                                Agane Properti
                            </span>{' '}
                            Pekanbaru
                        </h2>

                        <div className="space-y-6">
                            <p className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide">
                                Agane Properti Pekanbaru hadir sebagai mitra terpercaya dalam dunia properti mewah dan eksklusif di Pekanbaru. Sejak berdiri, kami berkomitmen untuk membantu setiap klien menemukan hunian impian, investasi menguntungkan, serta solusi terbaik dalam jual, beli, dan sewa properti.
                            </p>

                            <p className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide">
                                Dengan pengalaman dan jaringan luas di bidang real estate, kami menghadirkan layanan yang <span className="text-amber-400 font-semibold">profesional, transparan, dan berkelas</span>. Setiap langkah bersama Agane Properti Pekanbaru didasarkan pada kejujuran, kepercayaan, dan kepuasan pelanggan.
                            </p>

                            <p className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide">
                                Kami memahami bahwa properti bukan sekadar bangunan — melainkan <span className="text-white font-medium">investasi masa depan</span> dan tempat untuk membangun cerita hidup. Itulah mengapa kami selalu memberikan yang terbaik dalam setiap transaksi.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            {[
                                { number: "500+", label: "Properti Terkelola" },
                                { number: "15+", label: "Tahun Pengalaman" },
                                { number: "98%", label: "Klien Puas" },
                                { number: "24/7", label: "Layanan Konsultasi" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center group" data-aos="fade-up" data-aos-delay={index * 100}>
                                    <div className="relative">
                                        <div className="text-3xl font-bold text-amber-400 font-playfair mb-2 group-hover:scale-110 transition-transform duration-500">
                                            {stat.number}
                                        </div>
                                        <div className="text-gray-400 font-poppins font-light text-sm tracking-wide">
                                            {stat.label}
                                        </div>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <button className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 hover:text-white backdrop-blur-sm">
                                <span className="flex items-center gap-3 tracking-wide">
                                    Pelajari Lebih Lanjut
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div data-aos="fade-left" data-aos-delay="300">
                        <div className="relative">
                            {/* Frame dekoratif dengan aksen emas */}
                            <div className="absolute -inset-6 bg-gradient-to-r from-amber-500/20 to-amber-400/10 rounded-3xl blur-xl opacity-60"></div>
                            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/15 to-transparent rounded-2xl"></div>

                            {/* Main Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80"
                                    alt="Tim Agane Properti"
                                    className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                                {/* Image badge */}
                                <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-lg px-4 py-2">
                                    <span className="text-amber-400 text-sm font-poppins font-semibold tracking-wide">
                                        Tim Profesional Kami
                                    </span>
                                </div>
                            </div>

                            {/* Floating stats card */}
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl p-6 shadow-2xl backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="500">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-400 font-playfair mb-1">15+</div>
                                    <div className="text-sm text-gray-300 font-poppins tracking-wide">Tahun Pengalaman</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyOverview