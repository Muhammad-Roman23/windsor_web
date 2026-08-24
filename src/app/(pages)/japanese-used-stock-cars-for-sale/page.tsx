import { PageBanner } from "@/components/sections/PageBanner";
import { Sections } from "@/components/layout/Sections";
import { Metadata } from "next";
import {  InventoryHeroSection } from "@/components/sections/ExportReadyStock";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { BrowseByCategorySection } from "@/components/sections/BrowseByCategorySection";
import { StockCarPriceGuideSection } from "@/components/sections/StockCarPriceGuideSection";
import { ExportDestinationsSection } from "@/components/sections/ExportDestinationsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FAQ } from "@/components/sections/FAQ";
import { FindYourStockCarSection } from "@/components/sections/FindYourStockCarSection";
import { StartSourcingCTA } from "@/components/sections/Cta";



  export const metadata: Metadata = {
  title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
  description:
    "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

  alternates: {
    canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
  },

};

export default function UsedStockCars() {





const exportFaqs = [
  {
    question: "What are Japanese used cars?",
    answer: "Japanese used cars are pre-owned vehicles sourced from Japan's domestic market or auction network. They include hatchbacks, SUVs, hybrids, sedans, MPVs, 7-seaters and sports cars from manufacturers such as Toyota, Nissan, Honda, Mazda, Subaru and Mitsubishi.",
  },
  {
    question: "How do I import cars from Japan to the UK?",
    answer: "The process normally involves selecting and purchasing the vehicle, arranging export and shipping, completing UK customs requirements and registering the vehicle with the DVLA. Requirements and costs vary according to the vehicle and import circumstances.",
  },
  {
    question: "What are the best Japanese used cars to buy?",
    answer: "The best used cars to buy depend on your requirements. Toyota Prius and Aqua suit buyers seeking hybrids, Toyota RAV4 and Honda Vezel offer SUV practicality, while Toyota Alphard, Voxy and Nissan Serena are strong options for buyers seeking a best used family car.",
  },
  {
    question: "Can I buy automatic used cars from Japan?",
    answer: "Yes. Japan has a large selection of automatic hatchbacks, SUVs, hybrids, sedans and MPVs. Windsor Autos can source automatic vehicles according to your preferred make, model, budget and destination.",
  },
  {
    question: "What is the Japanese used car price?",
    answer: "There is no fixed Japanese used car price. Auction values vary according to model, year, mileage, condition, specification and current demand. Shipping, import taxes and registration are additional costs.",
  },
  {
    question: "Can dealers buy Japanese stock cars from Windsor Autos?",
    answer: "Yes. Windsor Autos supplies Japanese stock to international dealers, importers and automotive businesses. Buyers can provide their preferred models, specifications, quantities, budget and destination so suitable stock can be sourced.",
  },
];


  return (
    <main>
      <Sections>
        
        <PageBanner title="Japanese Stock Cars" />
        <InventoryHeroSection />
        <WhatYouGetSection />
<BrowseByCategorySection />
<StockCarPriceGuideSection />
<ExportDestinationsSection />
<WhyChooseSection />
 <FAQ faqs={exportFaqs} />
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
