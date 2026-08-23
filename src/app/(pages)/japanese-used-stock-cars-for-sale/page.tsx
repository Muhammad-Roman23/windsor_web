import { PageBanner } from "@/components/sections/PageBanner";
import { Sections } from "@/components/layout/Sections";
import { Metadata } from "next";



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
        
        <PageBanner title="Japanese Stock Cars" />

        {/* <FinalCta /> */}
      </Sections>
    </main>
  );
}
