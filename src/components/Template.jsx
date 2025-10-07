export const MainBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/95 to-gray-800/90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.05),rgba(0,0,0,0))]"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-amber-500/10 to-yellow-600/5 rounded-full blur-2xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-l from-gray-700/15 to-gray-600/5 rounded-full blur-2xl"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
        </>
    )
}

export const SecondBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_70%,rgba(120,119,198,0.03),rgba(0,0,0,0))]"></div>
            <div className="absolute top-10 left-5 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 bg-amber-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-5 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-amber-400/3 rounded-full blur-2xl"></div>
        </>
    )
}

export const ThirdBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_30%_20%,rgba(120,119,198,0.03),rgba(0,0,0,0))]"></div>
            <div className="absolute top-10 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-amber-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-amber-400/3 rounded-full blur-2xl"></div>
        </>
    )
}

export const FourthBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(120,119,198,0.02),rgba(0,0,0,0))]"></div>
            <div className="absolute top-20 left-5 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-5 sm:right-10 w-28 h-28 sm:w-40 sm:h-40 bg-amber-400/3 rounded-full blur-2xl"></div>
        </>
    )
}

export const FifthBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(180,149,95,0.05)_0%,_transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(120,119,198,0.03)_0%,_transparent_50%)]"></div>
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-amber-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-amber-400/3 rounded-full blur-2xl"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/15 to-transparent"></div>
        </>
    )
}

export const BadgeHero = ({ title, desc }) => {
    return (
        <div className="text-center">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white font-playfair">{title}</div>
            <div className="text-xs text-gray-400 font-poppins tracking-wide mt-1">{desc}</div>
        </div>
    )
}

export const SectionHeader = ({ tag, title, subTitle, desc }) => {
    return (
        <div className="text-center mb-12 sm:mb-16 lg:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-gray-700 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-poppins font-medium tracking-wide">
                    {tag}
                </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 font-playfair tracking-tight">
                {title} <span className="bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    {subTitle}
                </span>
            </h2>

            <div className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>

            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-poppins font-light leading-relaxed tracking-wide px-4">
                {desc}
            </p>
        </div>
    )
}

export const WhyComponents = ({ title, desc }) => {
    return (
        <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
            </div>
            <p className="text-gray-400 font-poppins font-light leading-relaxed text-xs sm:text-sm">
                <span className="text-white font-medium">{title} </span>{desc}
            </p>
        </div>
    )
}

export const CTAServices = ({ title }) => {
    return (
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-400 font-poppins text-xs sm:text-sm">
            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
            <span className="text-center">{title}</span>
        </div>
    )
}