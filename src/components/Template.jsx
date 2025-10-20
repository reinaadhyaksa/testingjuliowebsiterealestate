export function SectionHeader ({ title, subTitle, desc }) {
    return (
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
            <h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2B2B2B] mb-4 md:mb-6 leading-tight tracking-tight font-serif"
            >
                {title} <span className="bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent">
                    {subTitle}
                </span>
            </h2>
            <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed md:leading-loose tracking-normal font-sans" 
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        </div>
    )
}