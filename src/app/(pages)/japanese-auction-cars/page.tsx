import { Sections } from "@/components/layout/Sections";
import { SaleAuctionCars } from "@/components/sections/SaleAuctionCars";
import { PageBanner } from "@/components/sections/PageBanner";
import { AuctionRequirementsCTA } from "@/components/sections/AuctionRequirementsCTA";
import { BuyJapaneseAuctionCars } from "@/components/sections/BuyJapaneseAuctionCars";
import { HowAuctionsWork } from "@/components/sections/HowAuctionsWork";
import { AuctionSheetsExplainer } from "@/components/sections/AuctionSheetsExplainer";
import { AuctionGradesExplained } from "@/components/sections/AuctionGradesExplained";
import { HowWeHelpYouBuy } from "@/components/sections/HowWeHelpYouBuy";
import { SearchAvailableInventory } from "@/components/sections/SearchAvailableInventory";



export default function AuctionCars() {
  return (
    <main>
      <Sections>
        
        <PageBanner title="Japanese Auction Cars" />
        <SaleAuctionCars />
        <AuctionRequirementsCTA />
        <BuyJapaneseAuctionCars />
        <HowAuctionsWork />
        <AuctionSheetsExplainer />
        <AuctionGradesExplained />
        <HowWeHelpYouBuy />
        <SearchAvailableInventory />
      </Sections>
    </main>
  );
}
