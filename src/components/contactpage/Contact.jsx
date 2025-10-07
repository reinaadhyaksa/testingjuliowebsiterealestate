import { useState } from 'react'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted')
    }

    return (
        <div className="font-sans bg-black">
            {/* Hero Section */}
            <section className="contact-hero pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-black">
                {/* Background dengan gradasi hitam elegan */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>

                {/* Overlay tekstur halus */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(0,0,0,0))]"></div>

                {/* Aksen emas dekoratif */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>

                {/* Garis aksen emas */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8" data-aos="fade-down">
                        <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-300 text-sm font-poppins font-medium tracking-wide">
                            Hubungi Kami
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight" data-aos="fade-up">
                        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                            Hubungi
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                            Kami
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins font-light leading-relaxed tracking-wide" data-aos="fade-up" data-aos-delay="200">
                        Siap membantu mewujudkan impian properti eksklusif Anda. Mari berdiskusi dengan tim profesional kami!
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-20 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                            Informasi <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Kontak</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                            Tim profesional kami siap membantu Anda dengan berbagai kebutuhan properti eksklusif
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                                title: 'Alamat Kantor',
                                details: ['Jl. Jenderal Sudirman No. 123', 'Pekanbaru, Riau 28125'],
                                delay: 100
                            },
                            {
                                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                                title: 'Telepon & WhatsApp',
                                details: ['+62 812 3456 7890', '+62 823 4567 8901'],
                                delay: 200
                            },
                            {
                                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                                title: 'Email',
                                details: ['info@aganeproperti.com', 'marketing@aganeproperti.com'],
                                delay: 300
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center shadow-2xl hover:shadow-amber-500/10 transition-all duration-700 transform hover:-translate-y-2"
                                data-aos="fade-up"
                                data-aos-delay={item.delay}
                            >
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-400/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                    <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:from-amber-400 group-hover:to-amber-500 transition-all duration-500">
                                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-playfair group-hover:text-amber-400 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                {item.details.map((detail, idx) => (
                                    <p key={idx} className="text-gray-400 font-poppins font-light leading-relaxed">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-20 bg-black relative overflow-hidden border-t border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-black"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div data-aos="fade-right">
                            <h2 className="text-3xl font-bold text-white mb-6 font-playfair">
                                Kirim <span className="text-amber-400">Pesan</span> kepada Kami
                            </h2>
                            <p className="text-gray-400 mb-8 font-poppins font-light leading-relaxed tracking-wide">
                                Isi form di bawah ini dan tim profesional kami akan menghubungi Anda dalam waktu 24 jam.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="nama" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">Nama Lengkap *</label>
                                        <input
                                            type="text"
                                            id="nama"
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                                            placeholder="Masukkan nama lengkap"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telepon" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">Nomor Telepon *</label>
                                        <input
                                            type="tel"
                                            id="telepon"
                                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                                            placeholder="Contoh: 081234567890"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">Alamat Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                                        placeholder="nama@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subjek" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">Subjek *</label>
                                    <select
                                        id="subjek"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                                        required
                                    >
                                        <option value="" className="bg-gray-800">Pilih subjek pesan</option>
                                        <option value="jual" className="bg-gray-800">Ingin Menjual Properti</option>
                                        <option value="beli" className="bg-gray-800">Ingin Membeli Properti</option>
                                        <option value="sewa" className="bg-gray-800">Ingin Menyewa Properti</option>
                                        <option value="konsultasi" className="bg-gray-800">Konsultasi Properti</option>
                                        <option value="lainnya" className="bg-gray-800">Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="pesan" className="block text-sm font-medium text-gray-300 mb-2 font-poppins">Pesan *</label>
                                    <textarea
                                        id="pesan"
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-poppins focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
                                        placeholder="Tulis pesan detail Anda di sini..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="setuju"
                                        className="w-4 h-4 text-amber-500 bg-gray-800 border-gray-700 rounded focus:ring-amber-500 focus:ring-2 mt-1"
                                        required
                                    />
                                    <label htmlFor="setuju" className="ml-3 block text-sm text-gray-400 font-poppins">
                                        Saya setuju dengan <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">kebijakan privasi</a> dan <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">syarat & ketentuan</a>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="group w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black py-4 px-6 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
                                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Kirim Pesan
                                    </span>
                                </button>
                            </form>
                        </div>

                        {/* Map & Office Hours */}
                        <div data-aos="fade-left">
                            {/* Map */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4 font-playfair">Lokasi Kantor Kami</h3>
                                <div className="map-container h-80 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.665665486383!2d101.44719427483187!3d0.507899363678826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9f000000001%3A0x7d7d7d7d7d7d7d7d!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1234567890123!5m2!1sid!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Lokasi Kantor Agane Properti"
                                    >
                                    </iframe>
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
                                <h3 className="text-xl font-semibold text-white mb-4 font-playfair">Jam Operasional</h3>
                                <div className="space-y-4">
                                    {[
                                        { day: 'Senin - Jumat', time: '08:00 - 17:00' },
                                        { day: 'Sabtu', time: '09:00 - 15:00' },
                                        { day: 'Minggu', time: 'Tutup' }
                                    ].map((schedule, index) => (
                                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700/60 last:border-b-0">
                                            <span className="text-gray-400 font-poppins font-light">{schedule.day}</span>
                                            <span className="font-medium text-white font-poppins">{schedule.time}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-700/60">
                                    <h4 className="text-lg font-semibold text-white mb-3 font-playfair">Konsultasi Diluar Jam Kerja</h4>
                                    <p className="text-gray-400 mb-4 font-poppins font-light leading-relaxed">
                                        Untuk konsultasi di luar jam operasional, silakan hubungi kami melalui WhatsApp untuk janji temu.
                                    </p>
                                    <button className="group w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-green-500/25 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
                                            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            WhatsApp Kami
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-black relative overflow-hidden border-t border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
                            Pertanyaan <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Umum</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg font-poppins font-light leading-relaxed tracking-wide">
                            Beberapa pertanyaan yang sering diajukan oleh klien eksklusif kami
                        </p>
                    </div>

                    <FAQAccordion />
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden border-t border-gray-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="max-w-2xl mx-auto" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Butuh Bantuan <span className="text-amber-400">Cepat?</span></h2>
                        <p className="text-xl mb-8 text-gray-300 font-poppins font-light leading-relaxed">
                            Untuk pertanyaan mendesak terkait properti eksklusif, hubungi nomor darurat kami yang tersedia 24/7
                        </p>
                        <div className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl shadow-2xl inline-block" data-aos="zoom-in">
                            <div className="flex items-center justify-center space-x-6">
                                <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 rounded-2xl shadow-2xl">
                                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-gray-400 font-poppins font-light">Hotline Darurat</p>
                                    <p className="text-3xl font-bold text-amber-400 font-playfair">+62 812 3456 7890</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6 text-gray-500 text-sm font-poppins font-light">
                            * Hotline ini khusus untuk pertanyaan mendesak di luar jam operasional
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black relative overflow-hidden border-t border-gray-800">
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair" data-aos="fade-up">
                        Mari Mulai <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Percakapan</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-poppins font-light leading-relaxed tracking-wide" data-aos="fade-up" data-aos-delay="200">
                        Tim profesional kami siap membantu mewujudkan impian properti eksklusif Anda. Hubungi kami sekarang!
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6" data-aos="fade-up" data-aos-delay="400">
                        <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 shadow-2xl hover:shadow-amber-500/25 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center gap-3 tracking-wide">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Telepon Sekarang
                            </span>
                        </button>
                        <button className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 hover:text-white backdrop-blur-sm">
                            <span className="flex items-center gap-3 tracking-wide">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                WhatsApp
                            </span>
                        </button>
                        <button className="group border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-poppins font-semibold transition-all duration-500 transform hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-500/5 hover:text-white backdrop-blur-sm">
                            <span className="flex items-center gap-3 tracking-wide">
                                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email Kami
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

const FAQItem = ({ question, answer, delay }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/10 transition-all duration-500"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <button
                className="w-full text-left p-8 flex justify-between items-center focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-bold text-white font-poppins text-lg group-hover:text-amber-400 transition-colors duration-300 pr-4">
                    {question}
                </span>
                <div className="flex-shrink-0">
                    <svg
                        className={`w-6 h-6 text-amber-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>
            <div className={`px-8 pb-8 transition-all duration-500 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 mb-4 rounded-full"></div>
                <p className="text-gray-400 font-poppins font-light leading-relaxed tracking-wide">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const FAQAccordion = () => {
    const faqData = [
        {
            question: "Berapa lama waktu respons untuk pertanyaan melalui form kontak?",
            answer: "Tim profesional kami akan merespons pertanyaan Anda dalam waktu 24 jam pada hari kerja. Untuk pertanyaan mendesak terkait properti eksklusif, disarankan menghubungi kami melalui telepon atau WhatsApp.",
            delay: 100
        },
        {
            question: "Apakah tersedia layanan konsultasi properti gratis?",
            answer: "Ya, kami menyediakan konsultasi properti eksklusif gratis baik secara online maupun offline. Anda dapat menjadwalkan sesi konsultasi melalui form di atas atau menghubungi kami langsung untuk pengalaman yang lebih personal.",
            delay: 200
        },
        {
            question: "Bagaimana cara melihat properti eksklusif yang tersedia?",
            answer: "Anda dapat melihat katalog properti eksklusif kami di website atau menghubungi tim marketing untuk mendapatkan rekomendasi properti premium yang sesuai dengan kebutuhan dan budget Anda. Kami juga menyediakan private viewing untuk properti tertentu.",
            delay: 300
        },
        {
            question: "Apakah Agane Properti melayani daerah selain Pekanbaru?",
            answer: "Saat ini kami fokus melayani area Pekanbaru dan sekitarnya dengan standar layanan premium. Namun, untuk properti eksklusif tertentu di luar Pekanbaru, kami dapat memberikan rekomendasi mitra terpercaya di daerah tersebut.",
            delay: 400
        }
    ]

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    delay={faq.delay}
                />
            ))}
        </div>
    )
}

export default Contact