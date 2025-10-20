import HeroHomepages from "../components/homepages/HeroHomepages";
import FeaturesHomepage from "../components/homepages/FeaturesHomepages";
import PropertyHomepages from "../components/homepages/PropertyHomepages";
import CTAHomepages from "../components/homepages/CTAHomepages";

export default function Homepage() {
    return (
        <>
            <HeroHomepages />
            <FeaturesHomepage />
            <PropertyHomepages />
            <CTAHomepages />
        </>
    )
}