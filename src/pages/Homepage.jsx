import About from "../components/homepage/About"
import CTA from "../components/homepage/CTA"
import Hero from "../components/homepage/Hero"
import PropertyTypes from "../components/homepage/PropertyTypes"
import Services from "../components/homepage/Services"

export const Homepage = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <PropertyTypes />
            <CTA />
        </>
    )
} 