function ProcessSection() {
    const processes = [
        {
            icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z',
            title: 'Konsultasi',
            description: 'Diskusikan kebutuhan properti Anda dengan konsultan kami',
            delay: 100
        },
        {
            icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
            title: 'Pencarian',
            description: 'Kami akan mencari properti yang sesuai dengan kriteria Anda',
            delay: 200
        },
        {
            icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
            title: 'Peninjauan',
            description: 'Lakukan peninjauan properti dan negosiasi harga',
            delay: 300
        },
        {
            icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            title: 'Transaksi',
            description: 'Proses administrasi dan serah terima kunci',
            delay: 400
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
                            Proses Profesional
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                        Proses <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Layanan</span> Kami
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                        Kami memastikan setiap langkah transaksi properti berjalan lancar, aman, dan transparan
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processes.map((process, index) => (
                        <div
                            key={index}
                            className="group text-center relative"
                            data-aos="fade-up"
                            data-aos-delay={process.delay}
                        >
                            {/* Connection Line */}
                            {index < processes.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-700 -z-10 transform translate-x-1/2 group-hover:bg-amber-500/30 transition-colors duration-500"></div>
                            )}

                            {/* Icon Container */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-400/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-500">
                                    <svg className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={process.icon} />
                                    </svg>
                                </div>

                                {/* Step Number */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-black text-sm font-poppins font-bold shadow-lg">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 font-playfair group-hover:text-amber-400 transition-colors duration-300">
                                {process.title}
                            </h3>
                            <p className="text-gray-400 font-poppins font-light leading-relaxed tracking-wide">
                                {process.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSection