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
import { CyprusCarsHeroSection } from "@/components/sections/CyprusCarsHeroSection";
import { CyprusUsedCarsSection } from "@/components/sections/CyprusUsedCarsSection";



export const metadata: Metadata = {
    title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
    description:
        "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

    alternates: {
        canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
    },

};

export default function Cyprus() {



    const exportFaqs = [
        {
            question: "Can I buy Japanese cars from Japan for Cyprus?",
            answer: "Yes. Windsor Auto Group helps Cyprus dealers and importers source vehicles from Japanese stock and auctions, including models and specifications that may not be readily available through local inventory.",
        },
        {
            question: "Can Windsor source a specific Japanese car?",
            answer: "Yes. Provide the make, model, preferred year, mileage, specification, grade and budget, and our team can search suitable Japanese stock or auction opportunities.",
        },
        {
            question: "Does Windsor supply Japanese used cars to Cyprus dealers? ",
            answer: "Yes. Windsor Auto Group operates as a Japanese used car supplier for dealers, importers and automotive businesses looking to source vehicles from Japan for the Cyprus market.",
        },
        {
            question: "What Japanese cars are popular in Cyprus?",
            answer: "Toyota has a particularly strong position in Cyprus's used-car market, followed by Mazda and Nissan. Popular Japanese options can include the Toyota Yaris, Aqua, C-HR, Mazda Demio, Nissan Note and Honda Fit, depending on current market demand and availability.",
        },
        {
            question: "Can I import hybrid cars from Japan to Cyprus?",
            answer: "Yes. Japanese auctions and export stock include a wide range of hybrid vehicles. Hybrid demand is strong in Cyprus, with hybrids accounting for 44.3% of passenger-car registrations in 2025.",
        },
        {
            question: "What information should I provide when requesting a vehicle?",
            answer: "The most useful details are the make, model, model year, maximum mileage, preferred grade or specification and target budget. This allows the sourcing team to focus on vehicles that are more relevant to your business.",
        },



    ];


    return (
        <main>
            <Sections>

                <PageBanner title="Cyprus" />
                <CyprusCarsHeroSection />
                <CyprusUsedCarsSection />

                <PopularJapaneseCarsSection
                    eyebrow="Top Choices From Japan"
                    paragraphs="Explore popular vehicles that can suit different Cyprus dealership and importer requirements, including efficient hybrids, compact cars, family vehicles and versatile SUVs."
                    heading="Top Japanese Used Cars in Cyprus"
                    badgeText="Available via Japan auctions"
                    cars={[
                        {
                            title: "Toyota Yaris – Compact Car for Cyprus City Driving",
                            description:
                                "The Toyota Yaris is a practical choice for Cyprus drivers who want compact dimensions, efficient performance and easy everyday usability. Its size makes it convenient for urban areas such as Nicosia and Limassol, while its established reputation gives dealers a familiar model to offer customers. Toyota is the leading brand in Cyprus's used-car market, making the Yaris a strong option for businesses sourcing Japanese used cars in Cyprus. Windsor Auto Group can source suitable Yaris models from Japanese stock and auctions.",
                            image:
                                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=80",
                            alt: "Toyota Alphard premium MPV",
                        },
                        {
                            title: "Toyota Aqua – Efficient Japanese Hybrid Hatchback",
                            description:
                                "The Toyota Aqua is a compact hybrid designed around fuel efficiency and practical city driving. Its combination of a small footprint and hybrid powertrain makes it particularly suitable for customers who want lower fuel consumption without moving into a larger vehicle. Japanese import markets have shown strong demand for the Aqua, making it an attractive model for specialist importers. Windsor Auto Group can help Cyprus dealers source Aqua models from Japan across different generations, grades and specifications.",
                            image:
                                "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80",
                            alt: "Toyota Vellfire luxury MPV",
                        },
                        {
                            title: "Toyota C-HR – Popular Hybrid Crossover",
                            description:
                                "The Toyota C-HR offers a combination of crossover styling, hybrid technology and everyday practicality. It provides a higher driving position than a conventional hatchback while remaining suitable for urban use. The model is particularly relevant to buyers looking for an efficient vehicle with a more distinctive design. Windsor Auto Group can source Japanese-market C-HR models for Cyprus dealers and importers, giving businesses access to different model years, specifications and mileage options.",
                            image:
                                "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
                            alt: "Toyota C-HR hybrid crossover",
                        },
                        {
                            title: "Mazda Demio – Practical Compact Hatchback",
                            description:
                                "The Mazda Demio, known as the Mazda2 in several markets, is a compact Japanese hatchback suited to drivers looking for an economical and easy-to-manage vehicle. Its small dimensions work well for city driving, while the interior provides practical everyday space. Mazda is one of Cyprus's strongest used-car brands, ranking second behind Toyota in 2025 used passenger-car registrations. Windsor Auto Group can help importers source suitable Demio models from Japan.",
                            image:
                                "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
                            alt: "Nissan Serena practical MPV",
                        },
                        {
                            title: "Nissan Note – Versatile Family Hatchback",
                            description:
                                "The Nissan Note offers more interior flexibility than many conventional compact hatchbacks, making it useful for families and everyday urban driving. Japanese-market Note models are available with different specifications and powertrains, including efficient options suited to city use. The Note has also appeared strongly in Japanese used-import markets, making it an interesting vehicle for professional importers. Windsor Auto Group can source suitable Nissan Note vehicles based on your required year, mileage and specification.",
                            image:
                                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
                            alt: "Lexus RX premium SUV",
                        },
                        {
                            title: "Honda Fit – Efficient Small Family Car",
                            description:
                                "The Honda Fit, also known as the Jazz in many international markets, is valued for its compact exterior and surprisingly versatile interior. Its efficient engines, practical cabin layout and easy manoeuvrability make it suitable for Cyprus's urban driving environment. Honda remains an established Japanese brand in the Cyprus used-car market. Windsor Auto Group can help dealers source Fit models from Japanese auctions with different grades, model years and specifications.",
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
                        "Explore our current Japanese stock and find vehicles suitable for Cyprus dealers, importers and automotive businesses.Our available inventory can include different makes, models, years, grades, specifications and mileage ranges. If the vehicle you need is not currently listed, send us your requirements and our team can search Japanese stock and auction opportunities for a suitable option.",
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
  heading="Import Japanese Cars Cyprus"
  intro="Importing a vehicle from Japan involves several stages, from selecting the right car to arranging export and shipment. Windsor Auto Group focuses on the Japan-side sourcing, purchase coordination, export preparation and shipping arrangements, while Cyprus-side customs, registration and other requirements depend on the vehicle and import circumstances."
  steps={[
    {
      number: "01",
      title: "Source Your Vehicle",
      description:
        "Choose from available Japanese stock or request a specific make, model, year, mileage and specification.",
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
      title: "Ship to Cyprus",
      description:
        "The vehicle is prepared for international shipment with the relevant export documentation and shipping arrangements.",
      icon: "ship",
    },
    {
      number: "04",
      title: "Complete Cyprus Requirements",
      description:
        "After arrival, the importer must complete the applicable customs, registration, inspection and taxation requirements for the vehicle in Cyprus.",
      icon: "clipboard-list",
    },
  ]}
  ctaLabel="Start Your Import"
  ctaHref="#request-vehicle"
/>

                <IrelandCitiesSection
                    eyebrow="Nationwide Coverage"
                    heading="Japanese Used Cars Available Across Cyprus"
                    description="Windsor Auto Group supports dealers and importers across Cyprus, helping professional buyers source Japanese vehicles for different local markets. Whether your business operates in Nicosia, Limassol, Larnaca, Paphos or Famagusta, our team can help identify suitable Japanese stock according to your customers, budget and preferred vehicle category.
From compact hybrids for city customers to SUVs and family cars, we help Cyprus businesses access a broader Japanese vehicle supply network.
"
                    cities={[
                        {
                            number: "01",
                            title: "Japanese Used Cars in Nicosia",
                            description:
                                "Nicosia's urban market creates demand for economical hatchbacks, hybrids and practical vehicles suited to everyday commuting. Windsor Auto Group helps Nicosia dealers access Japanese stock beyond their existing local inventory. Toyota hybrids, compact hatchbacks and crossovers can provide different options for customers looking for efficient and dependable used vehicles. If you are looking to import Japanese cars to Nicosia, our team can assist with sourcing and Japan-side export arrangements.",
                        },
                        {
                            number: "02",
                            title: "Japanese Used Cars in Limassol",
                            description:
                                "Limassol has a diverse vehicle market covering compact cars, family vehicles, SUVs and premium models. Windsor Auto Group helps local dealers and importers source Japanese vehicles based on model, specification, mileage and budget. Whether you need a Toyota hybrid, Mazda hatchback or larger Nissan SUV, our sourcing network can help expand your dealership's available selection.",
                        },
                        {
                            number: "03",
                            title: "Japanese Used Cars in Larnaca",
                            description:
                                "Larnaca buyers can benefit from access to compact and efficient Japanese vehicles suited to everyday driving. Windsor Auto Group helps dealers source vehicles from Japanese stock and auctions, including hybrids, hatchbacks and practical family cars. By providing your preferred vehicle requirements, you can explore options beyond the standard stock available through local channels.",
                        },
                        {
                            number: "04",
                            title: "Japanese Used Cars in Paphos",
                            description:
                                "Paphos has demand for practical vehicles suitable for local journeys, family use and everyday driving. Windsor Auto Group helps Paphos dealers and importers source Japanese hatchbacks, hybrids, crossovers and SUVs according to their target customers. From Toyota and Mazda to Nissan and Honda, our team can help identify suitable vehicles from Japan and coordinate the export process.",
                        },
                    ]}
                />
                <JapaneseCarsSection
  eyebrow="Japanese Imports"
  heading="Why Cyprus Drivers Choose Japanese Used Cars"
  headingBeforeAccent="Why"
  headingAccent="Cyprus"
  headingAfterAccent="Drivers Choose Japanese Used Cars"
  description="JJapan is home to globally recognised automotive manufacturers including Toyota, Mazda, Nissan, Honda, Subaru and Lexus. Japanese vehicles cover a broad range of categories, from compact hybrids and hatchbacks to SUVs, MPVs and premium cars."
  features={[
    {
      number: "01",
      title: "Strong Japanese Automotive Presence",
      description:
        "Toyota, Mazda and Nissan were among the leading brands in Cyprus's 2025 used-car market. This existing familiarity can make Japanese vehicles an attractive proposition for local dealers and customers. Windsor Auto Group helps businesses access additional Japanese stock directly through the export market.",
      icon: "settings",
    },
    {
      number: "02",
      title: "Growing Hybrid Demand",
      description:
        "Hybrid vehicles are increasingly important in Cyprus, with their share of passenger-car registrations reaching 44.3% in 2025, up from 37.1% in 2024. Japanese manufacturers have extensive hybrid line-ups, giving Cyprus importers access to efficient options across different vehicle categories.",
      icon: "fuel",
    },
    {
      number: "03",
      title: "More Choice From Japan",
      description:
        "The Japanese market can provide access to different model years, grades, colours, mileage ranges and specifications. For Cyprus dealers, this can create additional sourcing opportunities beyond vehicles already available through local suppliers.",
      icon: "gavel",
    },
    {
      number: "04",
      title: "Models for Different Customers",
      description:
        "From compact Toyota Yaris and Aqua hybrids to Mazda hatchbacks, Nissan family cars and Honda models, Japanese stock covers multiple customer requirements. Windsor Auto Group helps importers narrow the available options around their target price, specification and market demand.",
      icon: "wallet",
    },
  ]}
/>
                <WhyChooseWindsorProcess
                    eyebrow="Why Choose"
                    headingAccent="Why Source "
                    headingText="Japanese Cars With Windsor Auto Group?"
                    paragraph="Windsor Auto Group is focused on professional vehicle sourcing from Japan, helping Cyprus dealers, importers and automotive businesses access a wider selection of Japanese used vehicles.
Rather than restricting buyers to fixed inventory, we can work around specific requirements and help identify suitable vehicles through Japanese stock and auction channels. Our service covers vehicle sourcing, purchase coordination, export preparation and shipping support.
"   
                    steps={[
                        {
                            number: "01",
                            title: "Stock & Auction Sourcing",
                            description:
                                "Browse available Japanese stock or ask our team to search auction opportunities for a particular vehicle requirement.",
                            image:
                                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            number: "02",
                            title: " Requirements-Based Sourcing",
                            description:
                                "Provide your preferred make, model, year, mileage, grade and budget so the search can focus on relevant vehicles.",
                            image:
                                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            number: "03",
                            title: " Japan-Side Export Support",
                            description:
                                "From purchase coordination to export preparation and shipping arrangements, we help keep the vehicle's journey from Japan organised.",
                            image:
                                "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80",
                        },
                        {
                            number: "04",
                            title: "Built for Cyprus Importers",
                            description:
                                "Our service is designed for Cyprus dealers, vehicle importers and automotive businesses looking to source Japanese used cars for their local market.",
                            image:
                                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
                        },
                    ]}
                />
                <FAQ faqs={exportFaqs} />
                <StartSourcingCTA
                    heading="Ready to Source Your Next Japanese Car?"
                    paragraph1="Whether you need a specific auction vehicle, additional dealership stock or regular access to Japanese used cars in Cyprus, Windsor Auto Group can help you explore suitable vehicles from Japan."
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
