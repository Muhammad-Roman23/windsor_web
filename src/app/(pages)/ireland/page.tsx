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
        <PopularJapaneseCarsSection eyebrow="Top Choices From Japan"
          paragraphs="Windsor Auto Group helps Irish dealers and importers access Japanese used cars through stock and auction sourcing."
          heading="Popular Japanese Used Cars for Ireland"
          badgeText="Available via Japan auctions"
          cars={[
            {
              title: "Toyota Yaris Cross – Efficient Hybrid SUV for Irish Drivers",
              description:
                "The Toyota Yaris Cross combines compact dimensions with the practicality of a small SUV, making it a strong choice for Irish drivers. Its hybrid powertrain can suit daily commuting, while the raised driving position and flexible interior provide useful everyday practicality. The Yaris Cross was one of Ireland's leading new-car models in 2025, showing its strong appeal in the local market. Windsor Autos can source Yaris Cross models from Japanese auctions across different years, grades and specifications, giving buyers more choice when searching for Japanese used cars Ireland.",
              image:
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=80",
              alt: "Toyota Yaris Cross hybrid SUV",
            },
            {
              title: "Toyota RAV4 – Versatile SUV for Family Journeys",
              description:
                "The Toyota RAV4 is designed for drivers who need more interior room, luggage capacity and versatility. Its SUV body makes it suitable for family use, longer journeys and everyday driving around Ireland. The RAV4 was among Ireland's top five new-car models in 2025, while Toyota remained the country's leading new-car brand. Windsor Autos helps customers source RAV4 vehicles from Japan, with options across different model years and specifications. For buyers planning to import Japanese cars to Ireland, the RAV4 offers a practical combination of space, efficiency and Toyota engineering.",
              image:
                "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80",
              alt: "Toyota RAV4 family SUV",
            },
            {
              title: "Toyota C-HR – Stylish Hybrid Crossover for Everyday Driving",
              description:
                "The Toyota C-HR brings together crossover practicality with a distinctive design and hybrid efficiency. Its compact size makes it convenient for urban driving, while its cabin and elevated driving position provide everyday comfort. The C-HR was also among the leading Toyota models recorded in Ireland's 2025 market data. Windsor Autos gives buyers access to C-HR vehicles sourced through Japan, allowing them to compare available grades, mileage, model years and specifications. It is an excellent option for customers looking to import a Japanese car to Ireland with a modern hybrid drivetrain.",
              image:
                "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
              alt: "Toyota C-HR hybrid crossover",
            },
            {
              title: "Nissan X-Trail – Spacious SUV for Irish Families",
              description:
                "The Nissan X-Trail is a practical choice for families who want additional cabin space, comfortable seating and SUV versatility. It can handle everyday commuting as well as longer journeys across Ireland, making it suitable for drivers with varied requirements. Nissan is one of the established Japanese automotive brands with a strong presence in international markets. Windsor Autos can help buyers source suitable X-Trail models from Japan based on their preferred age, mileage, condition and specification, giving Irish customers another option when searching for cars from Japan Ireland.",
              image:
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
              alt: "Nissan X-Trail spacious SUV",
            },
            {
              title: "Mazda CX-5 – Comfortable Crossover for Everyday Use",
              description:
                "The Mazda CX-5 offers a balance of comfort, practicality and engaging road manners in a family-friendly crossover package. Its spacious cabin and useful boot make it suitable for commuting, family trips and longer journeys around Ireland. Mazda's reputation for distinctive design and driver-focused engineering makes the CX-5 an appealing alternative to more common SUVs. Windsor Autos sources Japanese vehicles according to customer requirements, helping Irish buyers explore available CX-5 models from Japan instead of being restricted to nearby dealership inventory.",
              image:
                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
              alt: "Mazda CX-5 comfortable crossover",
            },
          ]}
        />
        <IrelandCitiesSection
  eyebrow="Nationwide Coverage"
  heading="Japanese Used Cars Available Across Ireland"
  description="Windsor Autos helps customers across Ireland access vehicles sourced from Japan. Whether you are based in Dublin, Cork, Galway or Limerick, our team can help you identify suitable Japanese used cars according to your budget and requirements. We support the vehicle sourcing and export stages, giving customers a clearer route from selecting a car in Japan to arranging its shipment for Ireland."
  cities={[
    {
      number: "01",
      title: "Used Cars in Dublin",
      description:
        "Dublin drivers often need economical vehicles that are easy to manoeuvre through busy urban roads while remaining comfortable for regular commuting. Hybrid hatchbacks and compact crossovers can be particularly practical choices. Windsor Autos gives Dublin buyers access to Japanese vehicle stock beyond what may be available from local dealers. If you are searching for used cars in Dublin or considering a Japanese vehicle import, we can help you find suitable cars from Japan based on your preferred model, budget and specification.",
    },
    {
      number: "02",
      title: "Used Cars in Cork",
      description:
        "Cork combines urban driving with suburban and regional journeys, so many drivers look for vehicles that offer practicality without excessive running costs. Compact cars, hybrids and SUVs provide different solutions depending on individual needs. Windsor Autos sources vehicles from Japanese auctions and export channels, giving Cork buyers access to a broader selection of Japanese used cars. Our team can help you explore suitable vehicles and understand the steps involved in bringing a car from Japan to Ireland.",
    },
    {
      number: "03",
      title: "Used Cars in Galway",
      description:
        "Galway drivers may need a vehicle that performs comfortably across city streets, regional roads and longer journeys. Japanese hatchbacks, crossovers and SUVs offer a range of options for different lifestyles. Windsor Autos helps customers in Galway source vehicles from Japan according to their preferred model, age, mileage and budget. Whether you need an efficient commuter car or a practical family vehicle, our Japanese vehicle sourcing service provides access to options beyond standard local stock.",
    },
    {
      number: "04",
      title: "Used Cars in Limerick",
      description:
        "Limerick buyers can choose from a wide range of Japanese vehicles depending on their driving requirements and household needs. Compact hatchbacks can work well for city use, while crossovers and SUVs offer additional space for families. Windsor Autos helps customers source vehicles from Japan and supports the export process once a suitable car has been selected. If you are considering Japanese car import Ireland services, our team can help you understand the vehicle sourcing and export stages before purchase.",
    },
  ]}
/>
    <JapaneseCarsSection
  eyebrow="Japanese Imports"
  heading="Why Irish Drivers Choose Japanese Used Cars"
  headingBeforeAccent="Why"
  headingAccent="Irish"
  headingAfterAccent="Drivers Choose Japanese Used Cars"
  description="Japan has a well-established automotive industry with globally recognised manufacturers including Toyota, Nissan, Honda, Mazda and Subaru. Japanese vehicles are known for practical engineering, efficient powertrains and a broad selection of hybrid and petrol models. For Irish buyers, sourcing directly from Japan can also provide access to different model years, grades and specifications. Windsor Autos focuses on helping customers identify vehicles that suit their individual requirements rather than simply offering one type of car."
  features={[
    {
      number: "01",
      title: "Proven Japanese Engineering",
      description:
        "Japanese manufacturers have built global reputations around dependable vehicle engineering and long-term usability. Toyota, Honda, Nissan, Mazda and Subaru all offer extensive model ranges covering hatchbacks, hybrids, crossovers and SUVs. Windsor Autos considers factors such as mileage, age, condition and available vehicle information when helping customers source a Japanese used car for Ireland.",
      icon: "settings",
    },
    {
      number: "02",
      title: "Efficient Hybrid and Petrol Models",
      description:
        "Fuel economy is an important consideration for Irish motorists, particularly commuters covering regular daily distances. Japanese manufacturers offer a broad range of hybrid and efficient petrol vehicles, from compact hatchbacks to larger SUVs. Toyota's hybrid range is especially prominent in Ireland, with hybrid vehicles representing 22.48% of new-car registrations in 2025. Windsor Autos gives buyers access to Japanese hybrid and petrol stock across different vehicle categories.",
      icon: "fuel",
    },
    {
      number: "03",
      title: "Wider Choice From Japanese Auctions",
      description:
        "Buying through the Japanese export market can open access to a larger range of vehicles than the stock available at one local dealership. Buyers can explore different model years, grades, colours, mileage ranges and specifications. Japanese auction documentation can also provide useful information about an individual vehicle before purchase. Windsor Autos helps customers navigate this sourcing process and identify vehicles that match their requirements.",
      icon: "gavel",
    },
    {
      number: "04",
      title: "Options for Different Budgets",
      description:
        "Japanese used cars are available across a broad range of vehicle types and price points. Whether you are looking for a compact commuter, a hybrid crossover or a larger family SUV, the Japanese market provides numerous options. Windsor Autos works with customers to narrow down suitable vehicles according to their budget, preferred model, age, mileage and specification rather than taking a one-size-fits-all approach.",
      icon: "wallet",
    },
  ]}
/>
        <WhyWindsorAutosSection />
        
<WhyChooseWindsorProcess
  eyebrow="Why Choose"
  headingAccent="Windsor Autos"
  headingText="for Used Cars Ireland"
  paragraph="Windsor Autos is a trusted Japanese used car supplier with years of experience serving Irish buyers. We help customers source vehicles from Japan and support the full export process, giving you more confidence when importing a car to Ireland."
  steps={[
    {
      number: "01",
      title: "Browse Quality Japanese Cars",
      description:
        "We offer direct access to Japan’s top auction houses, giving you more value, reliability and transparency than local dealerships.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "02",
      title: "Buy from a Trusted Exporter",
      description:
        "We are a trusted Japanese used car supplier with years of experience serving Irish buyers and supporting the full export process.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "03",
      title: "Choose a Reliable Vehicle",
      description:
        "Our cars have low miles, are damage free, and are inspected before shipment so you can buy with greater confidence.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "04",
      title: "Let Us Handle the Process",
      description:
        "We take care of all transportation and paperwork requirements for you, from auction to Irish port.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "05",
      title: "Find the Right Car for Your Needs",
      description:
        "Whether you need a hybrid for Dublin commuting or an SUV for Cork’s country roads, we help you find the perfect used car for sale in Ireland.",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "06",
      title: "Drive Home with Confidence",
      description:
        "Choose Windsor Autos and enjoy a high-quality Japanese used car backed by reliable service from start to finish.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=400&q=80",
    },
  ]}
/>

        <FAQ faqs={exportFaqs} />
      </Sections>
    </main>
  );
}
