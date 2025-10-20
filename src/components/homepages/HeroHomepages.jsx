import { Link } from "react-router-dom"
import { REISearch, REICalendar, REIPlus } from "../Icon"


export default function HeroHomepages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#FAFAFA] via-[#FFFFFF] to-[#F8F6F4] min-h-screen">
            <div className="container mx-auto px-4 pt-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2B2B2B] mb-6 leading-tight md:leading-tight lg:leading-tight font-serif">
                            Platform Properti <span className="text-[#800000]">Premium</span> di Riau
                        </h1>

                        <p className="text-lg md:text-xl lg:text-xl text-[#6B7280] mb-8 leading-relaxed md:leading-loose tracking-normal font-sans">
                            <strong className="font-semibold text-[#800000]">Properti Riau</strong> menghadirkan pengalaman eksklusif dalam jual, beli, dan sewa properti di Riau.
                            Dengan sistem digital yang canggih dan tampilan yang elegan, kami memudahkan Anda menemukan
                            rumah, ruko, tanah, atau apartemen dengan gaya hidup masa kini.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                            <Link
                                to={"/layanan"}
                                className="px-6 py-3 md:px-8 md:py-4 bg-[#800000] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-[#B22222] transition-all duration-300 flex items-center justify-center text-base md:text-lg tracking-wide font-sans hover:transform hover:-translate-y-1">
                                <REISearch />
                                <span className="ml-2">Jelajahi Properti Riau</span>
                            </Link>
                            <a
                                href="https://wa.me/6281235272436" target="_blank"
                                className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#800000] text-[#800000] font-semibold rounded-lg hover:bg-[#800000] hover:text-white transition-all duration-300 flex items-center justify-center text-base md:text-lg tracking-wide font-sans hover:transform hover:-translate-y-1">
                                <REIPlus />
                                <span className="ml-2">Pasang Iklan Properti</span>
                            </a>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6">
                            <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="text-2xl md:text-3xl font-bold text-[#800000] leading-none">500+</div>
                                <div className="text-[#6B7280] text-sm md:text-base mt-1 tracking-wide font-sans">Properti Tersedia</div>
                            </div>
                            <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="text-2xl md:text-3xl font-bold text-[#800000] leading-none">42</div>
                                <div className="text-[#6B7280] text-sm md:text-base mt-1 tracking-wide font-sans">Properti Terjual</div>
                            </div>
                            <div className="text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="text-2xl md:text-3xl font-bold text-[#800000] leading-none">10+</div>
                                <div className="text-[#6B7280] text-sm md:text-base mt-1 tracking-wide font-sans">Tahun Pengalaman</div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2" data-aos="fade-left">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dc9q58yts/image/upload/f_auto,q_auto/v1760621834/homepage_yj03se.webp"
                                alt="Properti Premium di Riau - Platform properti eksklusif terdepan"
                                className="rounded-xl shadow-xl w-full border-4 border-white"
                                loading="lazy"
                            />

                            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl p-4 md:p-5 w-48 md:w-56 transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                                <div className="flex items-center mb-2 md:mb-3">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center mr-3 shadow-md">
                                        <REICalendar />
                                    </div>
                                    <h3 className="font-bold text-[#2B2B2B] text-sm md:text-base leading-tight font-sans">Pengalaman 10+ Tahun</h3>
                                </div>
                                <p className="text-[#6B7280] text-xs md:text-sm font-sans">Melayani dengan standar premium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}