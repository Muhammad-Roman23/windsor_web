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
import { BlogsListingSection } from "@/components/sections/BlogsListingSection";



export const metadata: Metadata = {
  title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
  description:
    "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

  alternates: {
    canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
  },

};

export default function UsedStockCars() {







  return (
    <main>
      <Sections>

        <PageBanner title="Blogs" />

      <BlogsListingSection />
        <StartSourcingCTA
          heading="Find Your Next Japanese Stock Car"
          paragraph1="Looking for a Japanese used car, automatic SUV, hybrid hatchback, 7-seater or performance vehicle?"
          paragraph2="Tell Windsor Autos your preferred make, model, year, budget and destination, and our team can help you source suitable stock from Japan and arrange the export process."
          buttonText="Request a Vehicle"
          href="/ Start Sourcing From Japan"
        />
        {/* <FinalCta /> */}
      </Sections>
    </main>
  );
}
