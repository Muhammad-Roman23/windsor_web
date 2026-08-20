import { Sections } from "@/components/layout/Sections";
import { Hero } from "@/components/sections/Hero";
import { ManufacturersSlider } from "@/components/sections/Features";
import { TrustedPartnerSection } from "@/components/sections/Work";
import { SourcingOptionsSection } from "@/components/sections/Stats";
import { DealersImportersSection } from "@/components/sections/Testimonials";
import { AuctionAccessSection } from "@/components/sections/Team";
import { Clients } from "@/components/sections/Clients";
import { Cta } from "@/components/sections/Cta";

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
        <Clients />
        <Cta />
      </Sections>
    </main>
  );
}
