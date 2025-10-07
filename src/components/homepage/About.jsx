import { SecondBackground, SectionHeader } from "../Template"

function About() {
    return (
        <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-black">
            <SecondBackground />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader 
                    tag={"Agen Properti Pekanbaru"}
                    title={"Agen Properti"}
                    subTitle={"Terpercaya Pekanbaru"}
                    desc={"Sebagai agen properti terkemuka di Pekanbaru, kami menghadirkan solusi jual beli properti terbaik untuk rumah, apartemen, dan tanah di Riau."}
                />

                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 font-playfair leading-tight tracking-tight">
                                Partner Investasi Properti{' '}
                                <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                                    Pekanbaru
                                </span>
                            </h2>

                            <div className="space-y-4 sm:space-y-6">
                                <p className="text-gray-300 font-poppins font-light leading-relaxed text-sm sm:text-base lg:text-lg tracking-wide">
                                    <strong>Agen Properti Pekanbaru</strong> - Spesialis jual beli rumah, apartemen, tanah dan properti komersial di wilayah Pekanbaru dan sekitarnya.
                                </p>

                                <p className="text-gray-300 font-poppins font-light leading-relaxed text-sm sm:text-base lg:text-lg tracking-wide">
                                    Dengan pengalaman <strong>15 tahun di pasar properti Riau</strong>, kami memahami dinamika harga dan perkembangan kawasan strategis Pekanbaru.
                                </p>

                                <p className="text-gray-300 font-poppins font-light leading-relaxed text-sm sm:text-base lg:text-lg tracking-wide">
                                    Layanan lengkap mulai dari <strong>konsultasi properti Pekanbaru</strong>, legalitas, hingga proses jual beli yang aman dan terpercaya.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
                        <div className="relative">
                            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-gradient-to-r from-amber-500/15 to-amber-400/5 rounded-xl sm:rounded-2xl blur-lg opacity-40"></div>
                            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-amber-500/10 to-transparent rounded-xl"></div>

                            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                                    alt="Properti Eksklusif Pekanbaru - Agen Properti Terpercaya di Riau"
                                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
                                    <span className="text-amber-400 text-xs sm:text-sm font-poppins font-semibold tracking-wide">
                                        Properti Eksklusif Pekanbaru
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About