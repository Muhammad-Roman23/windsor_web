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
        <FAQ />
        <StartSourcingCTA/>
      </Sections>
    </main>
  );
}
