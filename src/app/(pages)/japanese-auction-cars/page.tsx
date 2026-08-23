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
import { AuctionCarsExport } from "@/components/sections/AuctionCarsExport";
import { FinalCta } from "@/components/sections/FinalCta";
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Auction Cars for Sale from Japan | Windsor Auto",
  description:
    "Meta description:Buy Japanese auction cars from Japan with Windsor Auto Group. Source quality vehicles, review auction sheets and arrange international vehicle export.",
  alternates: {
    canonical: "http://localhost:3000/japanese-auction-cars",
  },  

};

export default function AuctionCars() {

const exportFaqs = [
  {
    question: "What are Japanese auction cars?",
    answer: "Japanese auction cars are used vehicles offered through Japan's professional vehicle auction network, including cars, SUVs, hybrids, MPVs, luxury vehicles and performance models.",
  },
  {
    question: "Can I buy auction cars directly from Japan?",
    answer: "International buyers generally work with an exporter or auction purchasing service to participate in Japanese auctions. Windsor Auto Group can assist with sourcing, bidding and export arrangements.",
  },
  {
    question: "What is a Japanese auction sheet?",
    answer: "A Japanese auction sheet is a vehicle inspection document containing information about condition, mileage, grade, damage and other relevant vehicle details.",
  },
  {
    question: "Are Japanese auction grades important?",
    answer: "Yes. Auction grades provide an initial indication of condition, but buyers should also review the complete auction sheet, inspection diagram and photographs.",
  },
  {
    question: "Can Japanese auction cars be exported internationally?",
    answer: "Yes. Vehicles purchased through Japanese auctions can be exported internationally, subject to the import, customs and registration requirements of the destination country.",
  },
];


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
        <AuctionCarsExport />
        <FAQ faqs={exportFaqs} />
        {/* <FinalCta /> */}
      </Sections>
    </main>
  );
}
