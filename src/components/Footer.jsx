function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 to-black border-t border-gray-800/60 text-white py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-amber-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-lg sm:text-xl font-bold text-white font-playfair relative">
                                    Agane <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Properti</span>
                                </h3>
                            </div>
                            <span className="text-xs text-gray-400 font-poppins font-light tracking-wide hidden sm:block">
                                Pekanbaru
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base font-poppins font-light leading-relaxed mb-4 sm:mb-6">
                            Solusi Profesional untuk Jual, Beli & Sewa Properti Eksklusif di Pekanbaru.
                        </p>

                        <div className="flex space-x-3 sm:space-x-4">
                            {['facebook-f', 'instagram', 'twitter', 'whatsapp'].map((platform) => (
                                <a
                                    key={platform}
                                    href="#"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/60 hover:bg-amber-500/20 border border-gray-700/60 hover:border-amber-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:text-amber-400 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-sm"
                                >
                                    <i className={`fab fa-${platform} text-xs sm:text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-poppins text-white">
                            Layanan
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Jual Properti', 'Beli Properti', 'Sewa Properti', 'Konsultasi Properti'].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-400 text-sm sm:text-base font-poppins font-light transition-all duration-300 transform hover:translate-x-1 block"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-poppins text-white">
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                            {['Beranda', 'Tentang Kami', 'Properti Unggulan', 'Blog'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-amber-400 text-sm sm:text-base font-poppins font-light transition-all duration-300 transform hover:translate-x-1 block"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 font-poppins text-white">
                            Kontak
                        </h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-4 h-4 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <i className="fas fa-map-marker-alt text-amber-400 text-xs"></i>
                                </div>
                                <span className="text-sm sm:text-base font-poppins font-light leading-relaxed">
                                    Jl. Contoh No. 123, Pekanbaru, Riau
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-4 h-4 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-phone-alt text-amber-400 text-xs"></i>
                                </div>
                                <span className="text-sm sm:text-base font-poppins font-light">
                                    +62 812 3456 7890
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-4 h-4 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-envelope text-amber-400 text-xs"></i>
                                </div>
                                <span className="text-sm sm:text-base font-poppins font-light">
                                    info@aganeproperti.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700/40 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
                    <p className="text-gray-400 text-xs sm:text-sm font-poppins font-light tracking-wide">
                        &copy; 2024 Agane Properti Pekanbaru. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 text-xs text-gray-500 font-poppins font-light">
                        <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="hover:text-amber-400 transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer