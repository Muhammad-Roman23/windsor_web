import { PageBanner } from "@/components/sections/PageBanner";
import { Sections } from "@/components/layout/Sections";
import { Metadata } from "next";
import { IrelandCarsHeroSection } from "@/components/sections/IrelandCarsHeroSection";
import { PopularJapaneseCarsSection } from "@/components/sections/PopularJapaneseCarsSection";
import { IrelandCitiesSection } from "@/components/sections/IrelandCitiesSection";
import { JapaneseCarsSection } from "@/components/sections/JapaneseCarsSection";
import { WhyWindsorAutosSection } from "@/components/sections/WhyWindsorAutosSection";
import { WhyChooseWindsorProcess } from "@/components/sections/WhyChooseWindsorProcess";
import { FAQ } from "@/components/sections/FAQ";



  export const metadata: Metadata = {
  title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
  description:
    "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

  alternates: {
    canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
  },

};

export default function Ireland() {



const exportFaqs = [
  {
    question: "Are Japanese used cars suitable for Ireland?",
    answer: "Yes. Japanese vehicles are available in many configurations that suit Irish driving, including compact hatchbacks, hybrids, crossovers and SUVs. The suitability of an individual vehicle depends on its specification, condition and Irish registration requirements.",
  },
  {
    question: "What Japanese cars are popular in Ireland?",
    answer: "Toyota has a particularly strong presence in Ireland. Popular Japanese options include models such as the Toyota Yaris Cross, Toyota RAV4, Toyota C-HR, Nissan X-Trail and Mazda CX-5. The best choice depends on your budget, driving needs, space requirements and preferred powertrain.",
  },
  {
    question: "Can I import a used car from Japan to Ireland?",
    answer: "Yes. Vehicles can be imported from Japan into Ireland, but the buyer must complete the applicable customs, VRT and registration requirements. Revenue states that registering a used vehicle from Japan requires documentation including the Japanese Export Certificate and evidence relating to CO₂ and NOx emissions.",
  },
  {
    question: "How does importing a Japanese car to Ireland work?",
    answer: "The process generally starts with selecting a suitable vehicle and confirming its available details. Once purchased, the vehicle is prepared for export from Japan and shipped to Ireland. After arrival, the vehicle must go through the relevant customs, VRT and registration procedures before it can be legally driven on Irish roads.",
  },
  {
    question: "How long does a Japanese car take to reach Ireland?",
    answer: "The shipping period depends on the departure port, vessel schedule, shipping route and destination port. Additional time is then required for arrival procedures, customs, VRT and registration in Ireland. Windsor Autos can provide the expected shipping information for your individual vehicle and shipment.",
  },

];


  return (
    <main>
      <Sections>
        
        <PageBanner title="Ireland" />
        <IrelandCarsHeroSection />
        <PopularJapaneseCarsSection />
        <IrelandCitiesSection />
        <JapaneseCarsSection />
        <WhyWindsorAutosSection />
        <WhyChooseWindsorProcess />
         <FAQ faqs={exportFaqs} />
</Sections>
    </main>
  );
}
