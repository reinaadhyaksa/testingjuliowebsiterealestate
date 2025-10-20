import { useState } from "react"
import { Link } from "react-router-dom"

export default function Contact() {
    const contactMethods = [
        {
            icon: "fas fa-phone-alt",
            title: "Telepon Properti Riau",
            description: "Hubungi kami untuk konsultasi cepat dan informasi properti di Riau",
            contacts: [
                { type: "phone", value: "+62 812-3527-2436" },
            ],
            note: "Senin - Jumat: 08:00 - 17:00 WIB"
        },
        {
            icon: "fas fa-envelope",
            title: "Email Properti Riau",
            description: "Kirim pertanyaan detail melalui email dan dapatkan balesan dalam 24 jam",
            contacts: [
                { type: "email", value: "info@propertiriau.com" },
                { type: "email", value: "bantuan@propertiriau.com" }
            ],
            note: "Balasan maksimal dalam 24 jam"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Kantor Properti Riau",
            description: "Kunjungi kantor kami di Pekanbaru untuk konsultasi langsung dengan tim profesional properti Riau",
            address: {
                street: "Jl. Sudirman No. 123",
                city: "Pekanbaru, Riau 28131",
                country: "Indonesia"
            },
            note: "Senin - Jumat: 08:00 - 17:00 WIB"
        }
    ]

    const renderContactItem = (contact) => {
        if (contact.type === 'phone') {
            return (
                <a
                    href={`tel:${contact.value}`}
                    className="block text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    aria-label={`Hubungi Properti Riau di ${contact.value}`}
                >
                    <i className="fas fa-phone mr-2" aria-hidden="true"></i>{contact.value}
                </a>
            )
        } else if (contact.type === 'email') {
            return (
                <a
                    href={`mailto:${contact.value}`}
                    className="block text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                    aria-label={`Kirim email ke Properti Riau di ${contact.value}`}
                >
                    <i className="fas fa-envelope mr-2" aria-hidden="true"></i>{contact.value}
                </a>
            )
        }
    }

    const [formData, setFormData] = useState({
        nama: '',
        telepon: '',
        email: '',
        subjek: '',
        pesan: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Format pesan untuk WhatsApp
        const phoneNumber = "+6281235272436";
        const subjectText = getSubjectText(formData.subjek);

        const message = `Halo Properti Riau, saya ingin berkonsultasi mengenai properti.

*Data Diri:*
👤 Nama: ${formData.nama}
📞 Telepon: ${formData.telepon}
📧 Email: ${formData.email}

*Subjek Konsultasi:*
${subjectText}

*Pesan Detail:*
${formData.pesan}

Saya berharap bisa segera dihubungi untuk informasi lebih lanjut. Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Buka WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form
        setFormData({
            nama: '',
            telepon: '',
            email: '',
            subjek: '',
            pesan: ''
        })
    }

    // Fungsi untuk mendapatkan teks subjek yang lebih deskriptif
    const getSubjectText = (subjectValue) => {
        const subjectMap = {
            'jual': '🏠 Ingin Menjual Properti di Riau',
            'beli': '💰 Ingin Membeli Properti di Riau',
            'sewa': '🔑 Ingin Menyewa Properti di Riau',
            'konsultasi': '💬 Konsultasi Properti Riau',
            'agen': '👥 Bergabung sebagai Agen Properti Riau',
            'lainnya': '📋 Lainnya'
        };
        return subjectMap[subjectValue] || subjectValue;
    }

    const additionalInfo = [
        {
            icon: "fas fa-clock",
            title: "Jam Operasional Properti Riau",
            content: (
                <>
                    <p className="text-gray-600">Senin - Jumat: 08:00 - 17:00 WIB</p>
                    <p className="text-gray-600">Sabtu: 09:00 - 15:00 WIB</p>
                    <p className="text-gray-600 text-sm">Minggu & Hari Libur: Tutup</p>
                </>
            )
        },
        {
            icon: "fas fa-user-friends",
            title: "Konsultasi Properti Langsung",
            content: (
                <p className="text-gray-600">
                    Untuk konsultasi properti langsung di Riau, disarankan membuat janji terlebih dahulu melalui telepon atau email.
                </p>
            )
        },
        {
            icon: "fas fa-headset",
            title: "Dukungan Cepat Properti Riau",
            content: (
                <p className="text-gray-600">
                    Untuk pertanyaan mendesak seputar properti Riau, hubungi nomor telepon kami yang tersedia 24/7.
                </p>
            )
        }
    ]

    return (
        <>
            <section className="section-padding bg-gradient-to-br from-white to-[#FAFAFA]" aria-labelledby="contact-methods-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                        {/* Badge */}
                        <div className="inline-flex items-center bg-[#800000] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mb-4 md:mb-6 shadow-lg text-sm md:text-base font-sans">
                            <i className="fas fa-comments mr-2 text-sm"></i>
                            <span className="font-semibold">Terhubung Dengan Kami</span>
                        </div>

                        <h2 id="contact-methods-heading" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight font-serif">
                            Informasi Kontak <span className="text-[#800000]">Properti Riau</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed md:leading-loose font-sans">
                            Beberapa cara untuk terhubung dengan tim <strong className="text-[#800000] font-semibold">Properti Riau</strong>. Kami senang mendengar dari Anda dan siap membantu kebutuhan properti Anda di Riau.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {contactMethods.map((method, index) => (
                            <article
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-xl text-center shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                                data-aos="fade-up"
                                data-aos-delay={(index + 1) * 100}
                                itemScope
                                itemType="https://schema.org/ContactPoint"
                            >
                                {/* Background Gradient Effect */}
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#800000]/5 to-[#B22222]/5 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative z-10">
                                    <div className="bg-gradient-to-r from-[#800000] to-[#B22222] w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <i className={`${method.icon} text-white text-lg md:text-2xl`} aria-hidden="true"></i>
                                    </div>

                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-[#800000] transition-colors duration-300 leading-tight font-sans" itemProp="name">
                                        {method.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base font-sans" itemProp="description">
                                        {method.description}
                                    </p>

                                    {method.contacts ? (
                                        <div className="space-y-2 md:space-y-3">
                                            {method.contacts.map((contact, contactIndex) => (
                                                <div key={contactIndex} itemProp={contact.type === 'phone' ? 'telephone' : 'email'}>
                                                    {renderContactItem(contact)}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-gray-700 space-y-1 md:space-y-2 text-sm md:text-base font-sans" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                            <p className="font-medium" itemProp="streetAddress">{method.address.street}</p>
                                            <p itemProp="addressLocality">{method.address.city}</p>
                                            <p itemProp="addressCountry">{method.address.country}</p>
                                        </div>
                                    )}

                                    <p className="text-gray-500 text-xs md:text-sm mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-100 group-hover:border-[#B22222]/30 transition-colors duration-300 font-sans" itemProp="hoursAvailable">
                                        {method.note}
                                    </p>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#B22222]/20 transition-all duration-300 pointer-events-none"></div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-gradient-to-br from-[#FAFAFA] to-white" aria-labelledby="contact-form-heading">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Contact Form */}
                        <div data-aos="fade-right">
                            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
                                {/* Form Header */}
                                <div className="text-center mb-6 md:mb-8">
                                    <div className="inline-flex items-center bg-[#800000] text-white rounded-full px-4 py-2 md:px-6 md:py-2 mb-3 md:mb-4 shadow-lg text-sm md:text-base font-sans">
                                        <i className="fas fa-envelope mr-2 text-sm"></i>
                                        <span className="font-semibold">Kirim Pesan</span>
                                    </div>
                                    <h2 id="contact-form-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight font-serif">
                                        Hubungi <span className="text-[#800000]">Properti Riau</span>
                                    </h2>
                                    <p className="text-gray-600 text-sm md:text-base font-sans">
                                        Isi formulir di bawah ini dan tim <strong className="text-[#800000] font-semibold">Properti Riau</strong> akan menghubungi Anda secepatnya untuk konsultasi properti.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" itemScope itemType="https://schema.org/ContactPage">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div>
                                            <label htmlFor="nama" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base font-sans">
                                                Nama Lengkap *
                                            </label>
                                            <input
                                                type="text"
                                                id="nama"
                                                name="nama"
                                                value={formData.nama}
                                                onChange={handleChange}
                                                className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white text-sm md:text-base font-sans"
                                                placeholder="Masukkan nama lengkap"
                                                required
                                                itemProp="name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="telepon" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base font-sans">
                                                Nomor Telepon *
                                            </label>
                                            <input
                                                type="tel"
                                                id="telepon"
                                                name="telepon"
                                                value={formData.telepon}
                                                onChange={handleChange}
                                                className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white text-sm md:text-base font-sans"
                                                placeholder="Contoh: 081234567890"
                                                required
                                                itemProp="telephone"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base font-sans">
                                            Alamat Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white text-sm md:text-base font-sans"
                                            placeholder="nama@email.com"
                                            required
                                            itemProp="email"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subjek" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base font-sans">
                                            Subjek Konsultasi Properti *
                                        </label>
                                        <select
                                            id="subjek"
                                            name="subjek"
                                            value={formData.subjek}
                                            onChange={handleChange}
                                            className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white appearance-none text-sm md:text-base font-sans"
                                            required
                                            itemProp="description"
                                        >
                                            <option value="">Pilih subjek pesan</option>
                                            <option value="jual">Ingin Menjual Properti di Riau</option>
                                            <option value="beli">Ingin Membeli Properti di Riau</option>
                                            <option value="sewa">Ingin Menyewa Properti di Riau</option>
                                            <option value="konsultasi">Konsultasi Properti Riau</option>
                                            <option value="agen">Bergabung sebagai Agen Properti Riau</option>
                                            <option value="lainnya">Lainnya</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="pesan" className="block text-gray-700 font-semibold mb-2 md:mb-3 text-sm md:text-base font-sans">
                                            Pesan Detail *
                                        </label>
                                        <textarea
                                            id="pesan"
                                            name="pesan"
                                            value={formData.pesan}
                                            onChange={handleChange}
                                            rows="4"
                                            className="w-full px-3 py-3 md:px-4 md:py-4 border border-gray-200 rounded-lg form-input focus:outline-none focus:border-[#800000] focus:ring-4 focus:ring-[#800000]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white resize-none text-sm md:text-base font-sans"
                                            placeholder="Tulis pesan detail Anda tentang properti Riau di sini..."
                                            required
                                            itemProp="text"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3 md:py-4 bg-gradient-to-r from-[#800000] to-[#B22222] text-white font-semibold rounded-lg hover:from-[#A52A2A] hover:to-[#A52A2A] transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center group text-sm md:text-base font-sans"
                                    >
                                        <i className="fab fa-whatsapp mr-2 md:mr-3 text-sm md:text-base group-hover:scale-110 transition-transform" aria-hidden="true"></i>
                                        Kirim via WhatsApp
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map & Additional Info */}
                        <div data-aos="fade-left">
                            <div className="space-y-6 md:space-y-8">
                                {/* Map Section */}
                                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100">
                                    <div className="flex items-center mb-4 md:mb-6">
                                        <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 md:p-3 rounded-lg mr-3 md:mr-4 shadow-md">
                                            <i className="fas fa-map-marker-alt text-white text-lg md:text-xl"></i>
                                        </div>
                                        <div>
                                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight font-serif">
                                                Lokasi Kantor <span className="text-[#800000]">Properti Riau</span>
                                            </h2>
                                            <p className="text-gray-600 text-sm md:text-base font-sans">Kunjungi kantor kami di Pekanbaru</p>
                                        </div>
                                    </div>

                                    <div className="map-container rounded-lg overflow-hidden shadow-md border border-gray-200">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255152.2352152598!2d101.30549354999999!3d0.5070677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ab806a1c95cd%3A0x2fecd4f0dcee9e3c!2sPekanbaru%2C%20Kota%20Pekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1690200000000!5m2!1sid!2sid"
                                            width="100%"
                                            height="250"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Lokasi Kantor Properti Riau di Pekanbaru"
                                            aria-label="Peta lokasi kantor Properti Riau di Pekanbaru"
                                        ></iframe>
                                    </div>
                                </div>

                                {/* Additional Contact Info */}
                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100">
                                    <div className="text-center mb-6 md:mb-8">
                                        <div className="inline-flex items-center bg-gradient-to-r from-[#B22222] to-[#D4AF37] text-white rounded-full px-4 py-2 md:px-6 md:py-2 shadow-lg text-sm md:text-base font-sans">
                                            <i className="fas fa-info-circle mr-2 text-sm"></i>
                                            <span className="font-semibold">Informasi Tambahan</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 md:space-y-6">
                                        {additionalInfo.map((info, index) => (
                                            <article key={index} className="flex items-start group hover:bg-[#FAFAFA] p-3 md:p-4 rounded-lg transition-all duration-300">
                                                <div className="bg-gradient-to-r from-[#800000] to-[#B22222] p-2 md:p-3 rounded-lg mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                                                    <i className={`${info.icon} text-white text-base md:text-lg`} aria-hidden="true"></i>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-1 md:mb-2 group-hover:text-[#800000] transition-colors duration-300 text-sm md:text-base leading-tight font-sans">
                                                        {info.title}
                                                    </h4>
                                                    <div className="text-gray-600 leading-relaxed text-xs md:text-sm font-sans">
                                                        {info.content}
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}