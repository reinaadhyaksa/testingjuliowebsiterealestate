import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { REIHome, REIPhone, REIBuilding, REIInfoCircle, REIClock, REIMapPin } from "./Icon"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const isActiveLink = (path) => {
        return location.pathname === path
    }

    const navlinks = [
        {
            name: "Beranda",
            link: "/"
        },
        {
            name: "Layanan Properti",
            link: "/layanan"
        },
        {
            name: "Tentang Kami",
            link: "/tentang-kami"
        },
        {
            name: "Kontak",
            link: "/kontak"
        }
    ]

    const mobileIcons = [REIHome, REIBuilding, REIInfoCircle, REIPhone]

    return (
        <header className="bg-white/95 backdrop-blur-sm shadow-md fixed w-full top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link
                            to={"/"}
                            className="flex items-center gap-2 sm:gap-3"
                        >
                            <div className="bg-gradient-to-r from-[#800000] to-[#B22222] w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                                <REIHome />
                            </div>
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent leading-tight tracking-tight font-serif">
                                Properti<span className="text-[#B22222]">Riau</span>
                            </h1>
                        </Link>
                    </div>

                    <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
                        {navlinks.map((item, index) => {
                            const isActive = isActiveLink(item.link)
                            return (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className={`font-semibold transition-all duration-300 py-2 border-b-2 text-sm xl:text-base tracking-normal font-sans ${isActive
                                        ? 'text-[#800000] font-bold underline-offset-4 border-[#800000]'
                                        : 'text-gray-700 hover:text-[#800000] border-transparent hover:border-[#800000]'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}

                        <Link
                            to={"/kontak"}
                            className="bg-gradient-to-r from-[#800000] to-[#B22222] hover:from-[#B22222] hover:to-[#800000] text-white px-4 xl:px-5 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ml-3 text-xs xl:text-sm min-h-[40px] flex items-center tracking-wide font-sans"
                        >
                            <REIPhone />
                            <span className="ml-1.5">Hubungi Kami</span>
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-2 lg:hidden">
                        <button
                            className="text-gray-600 hover:text-[#800000] transition-all duration-300 p-1.5"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                        >
                            <div className={`w-5 h-4 flex flex-col justify-between transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-180' : ''}`}>
                                <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1.5 bg-[#800000]' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5 bg-[#800000]' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100 transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                    }`}>
                    <nav className="flex flex-col py-3 sm:py-4 bg-white/95">
                        {navlinks.map((item, index) => {
                            const isActive = isActiveLink(item.link)
                            const IconComponent = mobileIcons[index]

                            return (
                                <Link
                                    key={index}
                                    to={item.link}
                                    className={`transition-all duration-300 py-2.5 sm:py-3 px-5 sm:px-6 border-l-4 flex items-center gap-2.5 text-sm sm:text-base tracking-normal font-sans ${isActive
                                        ? 'text-[#800000] font-bold bg-gradient-to-r from-[#800000]/10 to-[#B22222]/10 border-[#800000] underline-offset-4'
                                        : 'text-gray-600 hover:bg-gradient-to-r hover:from-[#800000]/5 hover:to-[#B22222]/5 border-transparent hover:border-[#800000]'
                                        }`}
                                    onClick={closeMobileMenu}
                                >
                                    {IconComponent && <IconComponent />}
                                    {item.name}
                                </Link>
                            )
                        })}

                        <div className="flex flex-col gap-2 px-5 sm:px-6 pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-gray-100">
                            <Link
                                onClick={closeMobileMenu}
                                to={"/kontak"}
                                className="bg-gradient-to-r from-[#800000] to-[#B22222] hover:from-[#B22222] hover:to-[#800000] text-white py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-xs sm:text-sm min-h-[44px] flex items-center justify-center tracking-wide font-sans"
                            >
                                <REIPhone />
                                <span className="ml-1.5">Hubungi Kami</span>
                            </Link>
                            <Link
                                onClick={closeMobileMenu}
                                to={"/layanan"}
                                className="border-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white py-2.5 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm min-h-[44px] flex items-center justify-center tracking-wide font-sans"
                            >
                                <REIBuilding />
                                <span className="ml-1.5">Lihat Layanan</span>
                            </Link>
                        </div>

                        <div className="px-5 sm:px-6 pt-3 sm:pt-4 mt-1 sm:mt-2 border-t border-gray-100">
                            <div className="flex flex-col gap-1.5 text-xs text-gray-600 tracking-normal font-sans">
                                <div className="flex items-center gap-1.5">
                                    <REIPhone />
                                    <span>+62 812 3456 7890</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <REIClock />
                                    <span>Buka 08:00 - 17:00</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <REIMapPin />
                                    <span>Pekanbaru, Riau</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 z-40 lg:hidden"
                        onClick={closeMobileMenu}
                    ></div>
                )}
            </div>
        </header>
    )
}