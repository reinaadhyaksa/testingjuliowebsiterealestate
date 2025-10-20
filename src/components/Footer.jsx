import { Link } from "react-router-dom"
import { REIFacebook, REIInstagram, REITwitter, REIWhatsapp, REILink, REIHeadset, REIChevronRight, REIMapPin, REIPhone, REIClock, REIEnvelope } from "./Icon"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#2B2B2B] to-[#1A1A1A] text-white py-12 relative overflow-hidden" role="contentinfo">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#800000] rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#B22222] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent font-serif">
                                Properti<span className="text-[#B22222]">Riau</span>
                            </h3>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base font-sans">
                            Platform properti premium yang menghadirkan pengalaman eksklusif dalam jual, beli, dan sewa properti di Riau dengan layanan terdepan.
                        </p>
                        <div className="flex space-x-3 md:space-x-4">
                            <a href="#" className="bg-gray-700 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#B22222] p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook Properti Riau">
                                <REIFacebook />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#B22222] p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram Properti Riau">
                                <REIInstagram />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#B22222] p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1" aria-label="Twitter Properti Riau">
                                <REITwitter />
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gradient-to-r hover:from-[#800000] hover:to-[#B22222] p-2 md:p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1" aria-label="WhatsApp Properti Riau">
                                <REIWhatsapp />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center font-sans">
                            <REILink />
                            <span className="ml-2">Tautan Cepat</span>
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {[
                                { name: "Beranda", path: "/" },
                                { name: "Tentang Kami", path: "/tentang-kami" },
                                { name: "Layanan Properti", path: "/layanan" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className="text-gray-400 hover:text-[#D4AF37] transition-all duration-300 flex items-center group text-sm md:text-base font-sans"
                                    >
                                        <REIChevronRight />
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center font-sans">
                            <REIHeadset />
                            <span className="ml-2">Hubungi Kami</span>
                        </h4>
                        <address className="not-italic">
                            <ul className="space-y-3 md:space-y-4">
                                <li className="flex items-start">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-1.5 md:p-2 rounded-lg mr-2 md:mr-3 mt-0.5">
                                        <REIMapPin />
                                    </div>
                                    <div>
                                        <span className="text-gray-400 block text-sm md:text-base font-sans">Jl. Sudirman No. 123</span>
                                        <span className="text-gray-400 text-sm md:text-base font-sans">Pekanbaru, Riau 28125</span>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-1.5 md:p-2 rounded-lg mr-2 md:mr-3">
                                        <REIPhone />
                                    </div>
                                    <div>
                                        <a href="tel:+6281234567890" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm md:text-base font-sans">
                                            +62 812-3527-2436
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-1.5 md:p-2 rounded-lg mr-2 md:mr-3">
                                        <REIEnvelope />
                                    </div>
                                    <div>
                                        <a href="mailto:info@propertiriau.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm md:text-base font-sans">
                                            info@propertiriau.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </address>
                    </div>

                    <div>
                        <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center font-sans">
                            <REIClock />
                            <span className="ml-2">Jam Operasional</span>
                        </h4>
                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base font-sans">
                            <li className="flex justify-between text-gray-400">
                                <span>Senin - Jumat</span>
                                <span className="text-[#D4AF37]">08:00 - 17:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Sabtu</span>
                                <span className="text-[#D4AF37]">09:00 - 15:00</span>
                            </li>
                            <li className="flex justify-between text-gray-400">
                                <span>Minggu</span>
                                <span className="text-[#D4AF37]">Tutup</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0 font-sans">
                        <p>&copy; 2024 Properti Riau. Semua hak dilindungi.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer