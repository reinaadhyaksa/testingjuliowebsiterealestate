import { Link } from "react-router-dom"
import { useState } from "react"
import { navLinks } from "../data/data"
import { REIMenu, REITelepon } from "../data/icons"

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="w-full bg-black/90 backdrop-blur-lg border-b border-gray-800/60 z-50 fixed top-0 left-0 right-0">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
                <div className="flex items-center group">
                    <div className="relative">
                        <div className="absolute -inset-1 sm:-inset-1.5 bg-amber-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
                        <Link to="/">
                            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-playfair relative tracking-tight">
                                Agen Properti <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Pekanbaru</span>
                            </h1>
                        </Link>
                    </div>
                    <span className="ml-2 sm:ml-3 text-xs text-gray-400 font-poppins font-light tracking-wide hidden sm:block">
                        Jual Beli Sewa Properti
                    </span>
                </div>

                <div className="hidden lg:flex space-x-4 xl:space-x-6 2xl:space-x-8">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            className="relative text-white font-poppins font-medium px-3 py-2 group/nav transition-all duration-300"
                        >
                            <span className="relative z-10 text-sm xl:text-base tracking-wide">{link.label}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 to-amber-500/0 rounded-lg group-hover/nav:from-amber-500/10 group-hover/nav:to-amber-500/5 transition-all duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 group-hover/nav:w-full transition-all duration-300 ease-out"></div>
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                    <Link 
                        to="/kontak"
                        className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-poppins font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-amber-500/30 group/cta text-xs lg:text-sm"
                    >
                        <REITelepon />
                        <span className="hidden xs:inline text-xs lg:text-sm">Hubungi Kami</span>
                    </Link>

                    <button
                        onClick={toggleMobileMenu}
                        className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-amber-500/50 transition-all duration-300 group/mobile focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                        aria-label="Toggle mobile menu"
                    >
                        <REIMenu />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gray-800/60 shadow-2xl transition-all duration-300 ease-out transform ${isMobileMenuOpen
                    ? 'translate-y-0 opacity-100 visible'
                    : '-translate-y-4 opacity-0 invisible'
                }`}>
                <div className="container mx-auto px-4 sm:px-6 py-4 space-y-2 sm:space-y-3">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.to}
                            onClick={closeMobileMenu}
                            className="block text-white font-poppins font-medium py-2.5 sm:py-3 px-4 rounded-lg bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 transition-all duration-300 hover:from-amber-500/20 hover:to-amber-500/10 hover:border-amber-500/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm sm:text-base"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link 
                        to="/kontak"
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2.5 rounded-lg font-poppins font-semibold mt-2 sm:mt-3 shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-0.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    >
                        <REITelepon />
                        Hubungi Agen Pekanbaru
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header