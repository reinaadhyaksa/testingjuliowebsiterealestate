const OurValues = () => {
    const values = [
        {
            icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
            title: 'Integritas',
            description: 'Kejujuran dan transparansi menjadi landasan utama dalam setiap transaksi properti eksklusif dengan klien.'
        },
        {
            icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            title: 'Profesionalisme',
            description: 'Memberikan layanan premium terbaik dengan standar tertinggi, pengetahuan mendalam, dan pendekatan yang sistematis.'
        },
        {
            icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
            title: 'Kepuasan Klien',
            description: 'Kepuasan dan keberhasilan klien eksklusif adalah prioritas utama dalam setiap layanan premium yang kami berikan.'
        },
        {
            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            title: 'Inovasi',
            description: 'Terus beradaptasi dan mengembangkan strategi baru untuk memberikan solusi properti premium yang terdepan.'
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
                            Nilai Inti
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                        Nilai-Nilai <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Kami</span>
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                        Prinsip yang menjadi fondasi dalam setiap layanan properti premium yang kami berikan
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-3"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-400/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                    </svg>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-4 font-playfair group-hover:text-amber-400 transition-colors duration-300">
                                {value.title}
                            </h3>
                            <p className="text-gray-400 font-poppins font-light leading-relaxed tracking-wide text-sm">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default OurValues