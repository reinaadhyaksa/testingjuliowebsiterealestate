import CompanyHistory from "../components/aboutpage/CompanyHistory";
import CompanyOverview from "../components/aboutpage/CompanyOverview";
import CTA from "../components/aboutpage/CTA";
import Hero from "../components/aboutpage/Hero";
import OurValues from "../components/aboutpage/OurValues";
import Testimonials from "../components/aboutpage/Testimonials";
import VisionMission from "../components/aboutpage/VisionMission";

export default function AboutPages () {
    return (
        <>
            <Hero />
            <CompanyOverview />
            <VisionMission />
            <OurValues />
            <CompanyHistory />
            <Testimonials />
            <CTA />
        </>
    )
}