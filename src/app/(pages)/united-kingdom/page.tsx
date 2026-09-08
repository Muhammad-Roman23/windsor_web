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
import { UKCarsHeroSection } from "@/components/sections/UKCarsHeroSection";
import { UKUsedCarsSection } from "@/components/sections/UKUsedCarsSection";
import { PickBestVehiclesSection } from "@/components/sections/PickBestVehiclesSection";
import { ImportJapaneseCarsSection } from "@/components/sections/ImportJapaneseCarsSection";
import { WhyChooseJapaneseCarsSection } from "@/components/sections/WhyChooseJapaneseCarsSection";
import { StartSourcingCTA } from "@/components/sections/Cta";



  export const metadata: Metadata = {
  title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
  description:
    "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

  alternates: {
    canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
  },

};

export default function UnitedKingdom() {



const exportFaqs = [
  {
    question: "Can I buy Japanese cars from Japan for the UK?",
    answer: "Yes. Windsor Auto Group helps UK dealers and importers source vehicles from Japanese stock and auctions, including vehicles that may not be readily available through conventional UK supply channels.",
  },
  {
    question: "Can Windsor Auto Group source a specific vehicle?",
    answer: "Yes. You can provide the make, model, preferred year, maximum mileage, specification, grade and budget. Our team can then search available Japanese stock or suitable auction opportunities.",
  },
  {
    question: "Does Windsor supply Japanese used cars to UK dealers?  ",
    answer: "Yes. Windsor Auto Group operates as a Japanese used car supplier for dealers, importers and automotive businesses looking to source vehicles from Japan for their markets.",
  },
  {
    question: "What Japanese cars can I import into the UK?",
    answer: "Japanese-market supply can include hatchbacks, hybrids, SUVs, MPVs, sedans, premium vehicles and specialist models. Availability changes continuously, with manufacturers including Toyota, Nissan, Honda, Mazda, Subaru and Lexus represented across the market.",
  },
  {
    question: "What information do I need to request a Japanese car?",
    answer: "The more specific your requirements, the easier it is to identify suitable vehicles. Ideally provide the make, model, model year, maximum mileage, preferred grade or specification and target budget.",
  },
  {
    question: " Does Windsor handle UK registration?",
    answer: "Windsor supports the Japan-side sourcing and export process. UK-side requirements such as customs, NOVA, vehicle approval and DVLA registration depend on the individual import and remain subject to the applicable UK rules.",
  },



];


  return (
    <main>
      <Sections>
        
        <PageBanner title="United Kingdom" />
        <UKCarsHeroSection />
         <UKUsedCarsSection />
          <PopularJapaneseCarsSection 
          eyebrow="Top Choices From Japan"
          paragraphs="Explore a selection of vehicles that can suit different UK market requirements, including popular Japanese models, practical family cars, hybrids and premium imports."
          heading="Top Japanese Used Cars in the UK"
          badgeText="Available via Japan auctions"
          cars={[
            {
              title: "Toyota Alphard",
              description:
                "The Toyota Alphard is a premium Japanese MPV known for its spacious cabin, comfortable seating and high-end interior features. Its generous passenger space makes it particularly appealing to specialist dealers serving families, executive customers and customers seeking a distinctive imported vehicle. Japanese-market Alphard models are available in different grades, engines and specifications. Windsor Auto Group can help UK importers source suitable Alphard vehicles according to their required specification and target budget.",
              image:
                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=80",
              alt: "Toyota Alphard premium MPV",
            },
            {
              title: "Toyota Vellfire",
              description:
                "The Toyota Vellfire offers a combination of premium styling, flexible seating and substantial cabin space. It is particularly suited to buyers looking for a luxury Japanese MPV that stands apart from conventional UK-market vehicles. Different Japanese-market grades can provide varying equipment levels and interior configurations. Windsor Auto Group helps dealers and importers source Vellfire models from Japan, giving them access to vehicles that can add variety to specialist UK dealership stock.",
              image:
                "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80",
              alt: "Toyota Vellfire luxury MPV",
            },
            {
              title: "Toyota Prius",
              description:
                "The Toyota Prius remains one of the world's best-known hybrid vehicles, combining an efficient powertrain with practical everyday usability. Its established reputation makes it a familiar name for UK customers searching for economical used vehicles. Japanese-market Prius models can also be available across different generations, grades and specifications. For businesses looking to import Japanese used cars to the UK, Windsor Auto Group can help source Prius vehicles suited to specific dealership requirements.",
              image:
                "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
              alt: "Toyota C-HR hybrid crossover",
            },
            {
              title: "Nissan Serena",
              description:
                "The Nissan Serena is a practical Japanese MPV offering flexible seating, useful interior space and family-oriented functionality. Its sliding-door configuration and spacious cabin make it an interesting option for UK buyers seeking something different from mainstream people carriers. Serena models are available in several Japanese-market specifications and generations. Windsor Auto Group helps professional buyers source suitable vehicles from Japan based on model year, mileage, condition and specification.",
              image:
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
              alt: "Nissan Serena practical MPV",
            },
            {
              title: "Lexus RX",
              description:
                "The Lexus RX combines premium comfort, distinctive styling and the engineering associated with Toyota's luxury brand. Its SUV format makes it suitable for customers wanting additional space without moving into a larger full-size vehicle. Japanese-market Lexus models can offer attractive specifications and equipment levels for specialist importers. Windsor Auto Group can source suitable RX vehicles from Japan for dealers looking to expand their selection of premium Japanese used cars in the UK.",
              image:
                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
              alt: "Lexus RX premium SUV",
            },
            {
              title: "Honda Vezel",
              description:
                "The Honda Vezel, closely related to the HR-V nameplate in other markets, is a compact crossover designed around practicality, efficiency and urban usability. Its size makes it suitable for city driving while still offering useful cabin and luggage space. Japanese-market Vezel models are available in petrol and hybrid configurations depending on generation. Windsor Auto Group can help UK importers find suitable Vezel vehicles through Japanese stock and auction sourcing.",
              image:
                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
              alt: "Lexus RX premium SUV",
            },
          ]}
        />
       <PickBestVehiclesSection
  eyebrow="Current Japanese Stock"
  heading="Pick the Best Japanese Used Vehicles"
  paragraphs={[
    "Explore our current Japanese stock and discover vehicles available for UK dealers and importers.",
    "Our inventory can change regularly, with different makes, models, model years, grades, specifications and mileage ranges available. If you cannot find the vehicle you need, you can also send us your requirements and our team can search the Japanese market for a suitable option.",
  ]}
  stockCars={[
    {
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=320&fit=crop&q=80",
      title: "Toyota Prius",
      meta: "2021 · Hybrid · Grade 4.5",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=320&fit=crop&q=80",
      title: "Honda Vezel",
      meta: "2020 · SUV · Grade 4",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=320&fit=crop&q=80",
      title: "Mazda CX-5",
      meta: "2019 · Diesel · Grade 4.5",
    },
    {
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=320&fit=crop&q=80",
      title: "Nissan Note",
      meta: "2022 · e-Power · Grade 5",
    },
  ]}
  stockBadgeText="In Stock"
  ctaLabel="View All Cars"
  ctaHref="#view-all-cars"
/>
      
<ImportJapaneseCarsSection
  eyebrow="End-to-End Import Process"
  heading="Import Japanese Cars UK"
  intro="Importing a vehicle from Japan involves several stages between selecting a car and completing its registration in the UK. Windsor Auto Group handles the Japan-side sourcing, purchase coordination, export preparation and shipping arrangements, while UK import and registration requirements depend on the individual vehicle and circumstances."
  steps={[
    {
      number: "01",
      title: "Source Your Vehicle",
      description:
        "Choose from available stock or provide your preferred make, model, year, mileage and specification.",
      icon: "search",
    },
    {
      number: "02",
      title: "Purchase & Export",
      description:
        "Once your vehicle is selected, purchase arrangements and Japan-side export preparation can be coordinated.",
      icon: "file-check",
    },
    {
      number: "03",
      title: "Ship to the UK",
      description:
        "The vehicle is prepared for international shipment with the relevant export documentation and shipping arrangements.",
      icon: "ship",
    },
    {
      number: "04",
      title: "Complete UK Requirements",
      description:
        "Depending on the vehicle, UK importation can involve customs declarations, VAT, applicable duty, vehicle approval, NOVA notification and DVLA registration.",
      icon: "clipboard-list",
    },
  ]}
  ctaLabel="Start Your Import"
  ctaHref="#request-vehicle"
/>

                <IrelandCitiesSection
  eyebrow="Nationwide Coverage"
  heading="Japanese Used Cars Available Across the UK"
  description="Windsor Auto Group supports professional buyers across the UK, helping dealers and importers source Japanese vehicles for different regional markets. Whether your business operates in London, Birmingham, Manchester, Leeds, Sheffield, Nottingham, Leicester, Coventry, Bradford or Derby, you can source vehicles through our Japanese supply network.
Our focus is not limited to one city or one type of vehicle. We help businesses identify suitable Japanese stock according to their customer demand, budget and preferred vehicle category.
"
  cities={[
    {
      number: "01",
      title: "Japanese Used Cars in London",
      description:
        "London's diverse automotive market creates demand for economical city cars, hybrids, premium vehicles and distinctive Japanese imports. Windsor Auto Group helps London dealers and importers access Japanese stock beyond conventional local inventory. From Toyota hybrids to premium Lexus and specialist MPVs, we can help source vehicles according to your dealership requirements. If you are looking to import Japanese cars to London, our team can assist with the Japan-side sourcing and export process.",
    },
    {
      number: "02",
      title: ": Japanese Used Cars in Birmingham",
      description:
        "Birmingham's large and diverse vehicle market requires stock across multiple price points and categories. Japanese hatchbacks, hybrids, SUVs and MPVs can give dealers additional options for different customer groups. Windsor Auto Group helps Birmingham businesses source vehicles from Japanese stock and auctions based on model, year, mileage and specification. Our sourcing service provides a practical route for dealers wanting to expand their selection of Japanese used cars in Birmingham.",
    },
    {
      number: "03",
      title: "Japanese Used Cars in Manchester",
      description:
        "Manchester dealers can benefit from a varied selection of Japanese vehicles suited to urban commuting, family use and longer-distance driving. Windsor Auto Group helps professional buyers source vehicles including hybrids, crossovers, MPVs and premium Japanese imports. Instead of relying only on existing UK inventory, dealers can provide their requirements and explore suitable vehicles available through Japan's export market.",
    },
    {
      number: "04",
      title: "Japanese Used Cars in Leeds",
      description:
        "Leeds has demand for practical everyday vehicles as well as family cars and SUVs. Windsor Auto Group helps local dealers and importers access Japanese vehicle stock across different model years, specifications and mileage ranges. Whether you need a compact hybrid, family MPV or premium SUV, our team can help identify suitable Japanese vehicles and coordinate the Japan-side export process for your UK business.",
    },
  ]}
/>
<WhyChooseJapaneseCarsSection />
<WhyChooseWindsorProcess
  eyebrow="Why Choose"
  headingAccent="Why Source "
  headingText="Japanese Cars With Windsor Auto Group?"
  paragraph="Windsor Auto Group is focused on professional vehicle sourcing from Japan, helping UK dealers, importers and automotive businesses access vehicles beyond their existing domestic supply channels.
Rather than simply listing cars, we help buyers identify suitable vehicles, coordinate purchases and organise the Japan-side export process. This gives businesses a more structured way to source Japanese used cars according to their own inventory requirements.
"
  steps={[
    {
      number: "01",
      title: "Stock & Auction Sourcing",
      description:
        "Browse available Japanese stock or ask our team to search auction opportunities for a specific vehicle requirement.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "02",
      title: "Requirements-Based Vehicle Search",
      description:
        "Provide your preferred make, model, year, mileage, grade and budget so sourcing can be focused around what your business actually needs.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "03",
      title: "Japan-Side Export Support",
      description:
        "From purchase coordination to export preparation and shipping arrangements, we help keep the vehicle's journey from Japan organised.",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80",
    },
    {
      number: "04",
      title: "Built for UK Automotive Businesses",
      description:
        "Our service is designed for UK dealers, importers and automotive businesses that need reliable access to Japanese vehicle supply.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
    },
  ]}
/>
  <FAQ faqs={exportFaqs} />
        <StartSourcingCTA
          heading="Ready to Source Your Next Japanese Car?"
          paragraph1="Whether you need a particular auction vehicle, additional dealership stock or regular access to Japanese used cars, Windsor Auto Group can help you explore suitable vehicles from Japan."
          paragraph2="
Tell us what you need and start your vehicle request today.
"
          buttonText="Request a Vehicle"
          href="/ Start Sourcing From Japan"
        />
</Sections>
    </main>
  );
}
