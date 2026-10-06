import { Sections } from "@/components/layout/Sections";
import { StartSourcingCTA } from "@/components/sections/Cta";
import { OurCoreValuesSection } from "@/components/sections/OurCoreValuesSection";
import { OurJourneySection } from "@/components/sections/OurJourneySection";
import { OurServicesSection } from "@/components/sections/OurServicesSection";

import { PageBanner } from "@/components/sections/PageBanner";
import { WelcomeNobukoSection } from "@/components/sections/WelcomeNobukoSection";
import { WhyChooseNobukoSection } from "@/components/sections/WhyChooseNobukoSection";

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Japanese Auction Cars for Sale from Japan | Windsor Auto",
  description:
    "Meta description:Buy Japanese auction cars from Japan with Windsor Auto Group. Source quality vehicles, review auction sheets and arrange international vehicle export.",
  alternates: {
    canonical: "http://localhost:3000/japanese-auction-cars",
  },  

};

export default function About() {

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
        
        <PageBanner title="About" />
<WelcomeNobukoSection />
<OurJourneySection />
<OurCoreValuesSection />

<OurServicesSection />

<WhyChooseNobukoSection />

 <StartSourcingCTA
          heading="Find Your Next Japanese Stock Car"
          paragraph1="Looking for a Japanese used car, automatic SUV, hybrid hatchback, 7-seater or performance vehicle?"
          paragraph2="Tell Windsor Autos your preferred make, model, year, budget and destination, and our team can help you source suitable stock from Japan and arrange the export process."
          buttonText="Request a Vehicle"
          href="/ Start Sourcing From Japan"
        />
       

      </Sections>
    </main>
  );
}
