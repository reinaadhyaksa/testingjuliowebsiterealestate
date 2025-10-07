import { useState } from 'react'

const FAQItem = ({ question, answer, delay }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-gray-50 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-delay={delay}>
            <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-gray-800">{question}</span>
                <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-indigo-600`}></i>
            </button>
            <div className={`px-6 pb-6 ${isOpen ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    )
}

const FAQAccordion = () => {
    const faqData = [
        {
            question: "Berapa lama waktu respons untuk pertanyaan melalui form kontak?",
            answer: "Tim kami akan merespons pertanyaan Anda dalam waktu 24 jam pada hari kerja. Untuk pertanyaan mendesak, disarankan menghubungi kami melalui telepon atau WhatsApp.",
            delay: 100
        },
        {
            question: "Apakah tersedia layanan konsultasi properti gratis?",
            answer: "Ya, kami menyediakan konsultasi properti gratis baik secara online maupun offline. Anda dapat menjadwalkan sesi konsultasi melalui form di atas atau menghubungi kami langsung.",
            delay: 200
        },
        {
            question: "Bagaimana cara melihat properti yang tersedia?",
            answer: "Anda dapat melihat katalog properti kami di website atau menghubungi tim marketing untuk mendapatkan rekomendasi properti yang sesuai dengan kebutuhan dan budget Anda.",
            delay: 300
        },
        {
            question: "Apakah Agane Properti melayani daerah selain Pekanbaru?",
            answer: "Saat ini kami fokus melayani area Pekanbaru dan sekitarnya. Namun, untuk properti tertentu di luar Pekanbaru, kami dapat memberikan rekomendasi mitra terpercaya di daerah tersebut.",
            delay: 400
        }
    ]

    return (
        <div className="max-w-3xl mx-auto space-y-6">
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

export default FAQAccordion