import { Sections } from "@/components/layout/Sections";
import { Hero } from "@/components/sections/Hero";
import { ManufacturersSlider } from "@/components/sections/Features";
import { TrustedPartnerSection } from "@/components/sections/Work";
import { SourcingOptionsSection } from "@/components/sections/Stats";
import { DealersImportersSection } from "@/components/sections/Testimonials";
import { AuctionAccessSection } from "@/components/sections/Team";
import { JapanToMarketProcess } from "@/components/sections/Clients";
import { Cta } from "@/components/sections/Cta";
import { GlobalReachSection } from "@/components/sections/GlobalReach";
import { VehicleCategoriesSection } from "@/components/sections/VehicleCategoriesSection";
import { BetterWaySection } from "@/components/sections/BetterWaySection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ConfidenceSection } from "@/components/sections/ConfidenceSection";

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
        <Cta />
      </Sections>
    </main>
  );
}
