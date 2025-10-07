const Testimonials = () => {
    const testimonials = [
        {
            name: 'Dewi Sartika',
            role: 'Pembeli Rumah Premium',
            comment: '"Sangat puas dengan pelayanan eksklusif Agane Properti. Proses pembelian rumah pertama saya berjalan lancar berkat bantuan tim yang profesional dan sangat perhatian terhadap detail."',
            rating: 5
        },
        {
            name: 'Rudi Hermawan',
            role: 'Penjual Properti Eksklusif',
            comment: '"Rumah premium saya terjual dengan harga yang melebihi harapan dalam waktu singkat. Terima kasih untuk strategi pemasaran yang sophisticated dari Agane Properti."',
            rating: 5
        },
        {
            name: 'Linda Sari',
            role: 'Penyewa Apartemen Mewah',
            comment: '"Proses sewa apartemen mewah sangat mudah dan transparan. Tim Agane Properti sangat responsif dan membantu menyelesaikan semua administrasi dengan standar premium."',
            rating: 5
        }
    ]

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-amber-400' : 'text-gray-600'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))
    }

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden border-t border-gray-800">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"></div>

            {/* Accent Elements */}
            <div className="absolute top-10 left-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                            Testimoni Eksklusif
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                        Apa Kata <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Klien</span> Kami
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                        Pengalaman langsung dari klien eksklusif yang telah mempercayakan properti premium mereka kepada kami
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            {/* Rating Stars */}
                            <div className="flex justify-center mb-4">
                                <div className="flex space-x-1">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>

                            {/* Comment */}
                            <p className="text-gray-300 font-poppins font-light leading-relaxed tracking-wide mb-6 text-center italic">
                                {testimonial.comment}
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center justify-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white font-poppins">{testimonial.name}</h4>
                                    <p className="text-amber-400 text-sm font-poppins font-light tracking-wide">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials