import React from 'react'

const CompanyHistory = () => {
    const timeline = [
        {
            year: '2018',
            title: 'Pendirian Agane Properti Pekanbaru',
            description: 'Agane Properti Pekanbaru resmi didirikan dengan visi menjadi mitra terpercaya dalam dunia properti eksklusif di Pekanbaru.',
            icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
            year: '2019',
            title: 'Ekspansi Layanan Premium',
            description: 'Meluncurkan layanan konsultasi properti eksklusif dan investasi premium, serta memperluas jaringan properti mewah di Pekanbaru.',
            icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
        },
        {
            year: '2020',
            title: 'Pengakuan Industri',
            description: 'Mendapatkan penghargaan sebagai "Agen Properti Premium Terpercaya" dari Asosiasi Real Estate Indonesia Pekanbaru.',
            icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
            year: '2022',
            title: 'Inovasi Digital Premium',
            description: 'Meluncurkan platform digital eksklusif untuk memudahkan klien mengakses informasi properti premium dan konsultasi personal.',
            icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
            year: '2023',
            title: 'Pertumbuhan Berkelanjutan',
            description: 'Terus berkembang dengan jaringan klien eksklusif yang semakin luas dan portofolio properti premium yang semakin beragam.',
            icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
        }
    ]

    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.03),rgba(0,0,0,0))]"></div>

            {/* Accent Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16" data-aos="fade-up">
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                            Perjalanan Eksklusif
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                        Perjalanan <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Kami</span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                        Cerita di balik kesuksesan Agane Properti Pekanbaru dalam menghadirkan layanan properti premium
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-400/30 to-amber-500/50 transform -translate-x-1/2"></div>

                        <div className="space-y-16">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative flex flex-col md:flex-row items-start group"
                                    data-aos="fade-up"
                                    data-aos-delay={(index + 1) * 100}
                                >
                                    {/* Left Side - Year */}
                                    <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                                        <div className="flex md:justify-end items-center gap-4">
                                            <div className="text-right">
                                                <h3 className="text-2xl font-bold text-amber-400 font-playfair mb-1 group-hover:scale-105 transition-transform duration-500">
                                                    {item.year}
                                                </h3>
                                                <p className="text-gray-300 font-poppins font-semibold tracking-wide">
                                                    {item.title}
                                                </p>
                                            </div>
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                                                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transform -translate-x-1/2 border-4 border-black shadow-2xl group-hover:scale-125 transition-transform duration-500 z-10"></div>

                                    {/* Right Side - Description */}
                                    <div className="md:w-1/2 md:pl-12">
                                        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl group-hover:shadow-amber-500/10 transition-all duration-500 transform group-hover:-translate-y-1">
                                            <p className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Start and End Markers */}
                        <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 bg-amber-400 rounded-full transform -translate-x-1/2 -translate-y-2 shadow-lg"></div>
                        <div className="absolute left-4 md:left-1/2 bottom-0 w-4 h-4 bg-amber-400 rounded-full transform -translate-x-1/2 translate-y-2 shadow-lg"></div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
                    <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-poppins font-semibold text-lg transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="relative z-10 flex items-center gap-3 tracking-wide">
                            Bergabung dengan Perjalanan Kami
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CompanyHistory