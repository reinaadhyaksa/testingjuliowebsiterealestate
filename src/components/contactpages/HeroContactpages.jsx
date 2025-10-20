import { Link } from "react-router-dom";

export default function HeroContactpages () {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#800000] via-[#B22222] to-[#800000] relative overflow-hidden" aria-labelledby="contact-hero-heading">
            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-white/30" data-aos="fade-up">
                        <i className="fas fa-headset text-[#D4AF37] mr-2 text-sm"></i>
                        <span className="text-white font-medium text-sm md:text-base font-sans">Layanan Pelanggan 24/7</span>
                    </div>

                    {/* Main Heading */}
                    <h1 id="contact-hero-heading" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif" data-aos="fade-up">
                        Hubungi <span className="text-[#D4AF37]">Properti Riau</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl lg:text-2xl text-[#F8F6F4] max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans" data-aos="fade-up" data-aos-delay="100">
                        Kami siap membantu Anda dalam setiap langkah perjalanan properti di Riau. Jangan ragu untuk menghubungi tim properti Riau yang ramah dan profesional.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                                <i className="fas fa-clock text-[#D4AF37] text-lg md:text-xl"></i>
                            </div>
                            <div className="text-[#F8F6F4] text-xs md:text-sm leading-tight font-sans">Respons Cepat</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                                <i className="fas fa-shield-alt text-[#D4AF37] text-lg md:text-xl"></i>
                            </div>
                            <div className="text-[#F8F6F4] text-xs md:text-sm leading-tight font-sans">Aman & Terpercaya</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                                <i className="fas fa-users text-[#D4AF37] text-lg md:text-xl"></i>
                            </div>
                            <div className="text-[#F8F6F4] text-xs md:text-sm leading-tight font-sans">Tim Profesional</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-white/20">
                            <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                                <i className="fas fa-tag text-[#D4AF37] text-lg md:text-xl"></i>
                            </div>
                            <div className="text-[#F8F6F4] text-xs md:text-sm leading-tight font-sans">Gratis Konsultasi</div>
                        </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="300">
                        <a 
                            href="https://wa.me/6281235272436" target="_blank"
                            className="px-6 py-3 md:px-8 md:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-sm md:text-base font-sans">
                            <i className="fab fa-whatsapp mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform"></i>
                            Chat WhatsApp
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="animate-bounce">
                            <i className="fas fa-chevron-down text-white text-xl md:text-2xl opacity-70"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}