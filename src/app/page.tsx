import { Sections } from "@/components/layout/Sections";
import { Hero } from "@/components/sections/Hero";
import { ManufacturersSlider } from "@/components/sections/Features";
import { TrustedPartnerSection } from "@/components/sections/Work";
import { SourcingOptionsSection } from "@/components/sections/Stats";
import { DealersImportersSection } from "@/components/sections/DealersNeeds";
import { AuctionAccessSection } from "@/components/sections/Team";
import { JapanToMarketProcess } from "@/components/sections/Clients";
import {  StartSourcingCTA } from "@/components/sections/Cta";
import { GlobalReachSection } from "@/components/sections/GlobalReach";
import { VehicleCategoriesSection } from "@/components/sections/VehicleCategoriesSection";
import { BetterWaySection } from "@/components/sections/BetterWaySection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ConfidenceSection } from "@/components/sections/ConfidenceSection";
import { TrustpilotReviews } from "@/components/sections/TrustpilotReviews";
import { Testimonials } from "@/components/sections/Testimonials";
import { MarketGuide } from "@/components/sections/MarketGuide";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  const exportFaqs = [
  {
    question: "What does Windsor Auto Group specialize in?",
    answer: "Windsor Auto Group specializes in sourcing and supplying Japanese used cars to dealers, importers and automotive businesses in international markets.",
  },
  {
    question: "Can I source vehicles from Japanese car auctions?",
    answer: "Yes. If the vehicle you need is not available in current stock, we can help identify suitable vehicles through Japanese car auctions based on your preferred model, year, mileage, grade, specification and budget.",
  },
  {
    question: "Do you work with car dealers and importers?",
    answer: "Yes. Windsor Auto Group is designed to support professional vehicle buyers, including dealerships, importers, traders and other automotive businesses sourcing cars from Japan.",
  },
  {
    question: "Can you ship Japanese used cars worldwide?",
    answer: "We support international vehicle exports from Japan to multiple markets. Shipping availability and import requirements depend on the destination country, vehicle and available shipping routes.",
  },
  {
    question: "Can I request a specific vehicle?",
    answer: "Yes. Send us the make, model, year, mileage, specification and budget you are looking for, and our sourcing team can search suitable options within the Japanese market.",
  },
  {
    question: "Do you help with the export process from Japan?",
    answer: "Yes. After purchase, we can coordinate the relevant Japan-side export preparation, documentation and shipping arrangements required to send the vehicle to its destination.",
  },
];

  return (
    <main>
      <Sections>
        
        <Hero />
        <ManufacturersSlider />
        <TrustedPartnerSection />
        <SourcingOptionsSection />
        <DealersImportersSection />
        <AuctionAccessSection />
        <JapanToMarketProcess />
        <GlobalReachSection />
        <VehicleCategoriesSection />
        <BetterWaySection />
        <MissionSection />
        <ConfidenceSection />
        <TrustpilotReviews />
        <Testimonials />
        <MarketGuide />
        <FAQ faqs={exportFaqs} />
        <StartSourcingCTA/>
      </Sections>
    </main>
  );
}
