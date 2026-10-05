import { PageBanner } from "@/components/sections/PageBanner";
import { Sections } from "@/components/layout/Sections";
import { Metadata } from "next";
import { InventoryHeroSection } from "@/components/sections/ExportReadyStock";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { BrowseByCategorySection } from "@/components/sections/BrowseByCategorySection";
import { StockCarPriceGuideSection } from "@/components/sections/StockCarPriceGuideSection";
import { ExportDestinationsSection } from "@/components/sections/ExportDestinationsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FAQ } from "@/components/sections/FAQ";
import { FindYourStockCarSection } from "@/components/sections/FindYourStockCarSection";
import { StartSourcingCTA } from "@/components/sections/Cta";
import { TrendingCarsSection } from "@/components/sections/TrendingCarsSection";
import { VintageCarsSection } from "@/components/sections/VintageCarsSection";
import { GrowthHero } from "@/components/sections/FeedColumn";
import { CommunityTestimonials } from "@/components/sections/CommunityTestimonials";
import { FeaturedVideosSection } from "@/components/sections/FeaturedVideosSection";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { OfficeLocationsSection } from "@/components/sections/OfficeLocationsSection";



export const metadata: Metadata = {
    title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
    description:
        "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

    alternates: {
        canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
    },

};

export default function Contact() {







    return (
        <main>
            <Sections>

                <PageBanner title="Contact Us" />
                <ContactUsSection />
                <OfficeLocationsSection />
                {/* <FinalCta /> */}
            </Sections>
        </main>
    );
}
