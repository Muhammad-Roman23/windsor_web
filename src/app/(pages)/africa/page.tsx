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
import { AfricaCarsHeroSection } from "@/components/sections/AfricaCarsHeroSection";
import { AfricaUsedCarsSection } from "@/components/sections/AfricaUsedCarsSection";
import { SupplyPartnerSection } from "@/components/sections/SupplyPartnerSection";
import { BuyerConfidenceSection } from "@/components/sections/BuyerConfidenceSection";
import { AfricaImportInfoSection } from "@/components/sections/AfricaImportInfoSection";
import { TopJapaneseUsedCarsIntroSection } from "@/components/sections/TopJapaneseUsedCarsIntroSection";
import { UsedCarsAcrossCyprusSection } from "@/components/sections/UsedCarsAcrossCyprus";
import { WhyJapanesePopularSection } from "@/components/sections/WhyJapanesePopularSection";
import { NobukoTrustedPartnerSection } from "@/components/sections/NobukoTrustedPartnerSection";
import { TransparentImportProcessSection } from "@/components/sections/TransparentImportProcessSection";




export const metadata: Metadata = {
    title: "Japanese Used stock Cars for Sale | Windsor Auto group ",
    description:
        "Verified Japanese used cars for sale including SUVs, hatchbacks, hybrids and 7-seaters. Windsor Autos supplies export-ready stock to UK, Ireland, Cyprus, USA and worldwide.",

    alternates: {
        canonical: "http://localhost:3000/japanese-used-stock-cars-for-sale",
    },

};

export default function Africa() {



    const exportFaqs = [
        {
            question: "Can Windsor Auto Group supply Japanese used cars to Africa?",
            answer: "Yes. Windsor Auto Group supplies Japanese used vehicles to international dealers, importers and automotive businesses across African markets.",
        },
        {
            question: "Which Japanese cars are popular in Africa?",
            answer: "Popular choices include the Toyota Corolla, Hilux, Probox, Vitz, Land Cruiser Prado, Nissan Note, Honda Fit and Mazda Demio, although demand varies between individual African countries.",
        },
        {
            question: "Can you source cars specifically for Kenya or Tanzania?",
            answer: "Yes. You can tell us your destination market, preferred models, budget and specifications so the search can be tailored to your requirements.",
        },
        {
            question: "Do you supply Japanese auction cars?",
            answer: "Yes. Japanese auction sourcing is available for buyers looking for vehicles that may not be available in current export stock.",
        },
        {
            question: "Can I import commercial vehicles from Japan?",
            answer: "Yes. Depending on the destination market, Japanese commercial options can include vehicles such as Toyota Hiace, Toyota Probox, Toyota Hilux and other work-oriented models.",
        },
        {
            question: "Can Windsor Auto Group arrange shipping to Africa?",
            answer: "We can support the Japan-side export and shipping process. The available route, destination port, shipping method and local import requirements depend on the country and vehicle.",
        },



    ];


    return (
        <main>
            <Sections>

                <PageBanner title="Africa" />
                {/* <AfricaCarsHeroSection /> */}

                {/* <AfricaUsedCarsSection /> */}
                <TopJapaneseUsedCarsIntroSection />

                <PopularJapaneseCarsSection
                    eyebrow="Top Choices From Japan"
                    paragraphs="Windsor Auto Group helps professional buyers source Japanese used cars for Africa, including popular models from Toyota, Mazda, Nissan and Honda. "
                    heading="Top Japanese Used Cars in Africa"
                    badgeText="Available via Japan auctions"
                    cars={[
                        {
                            title: "Toyota Corolla",
                            description:
                                "The Corolla remains one of the most recognised Japanese cars across African markets. Its practical size, familiar Toyota platform and widespread parts availability make it a strong option for everyday and commercial use.",
                            image:
                                "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&q=80",
                            alt: "Toyota Alphard premium MPV",
                        },
                        {
                            title: "Toyota Hilux",
                            description:
                                "For buyers looking for a capable pickup, the Hilux is a proven choice. Its strong reputation for durability and utility makes it suitable for business, agriculture, construction and demanding road conditions.",
                            image:
                                "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=900&q=80",
                            alt: "Toyota Vellfire luxury MPV",
                        },
                        {
                            title: "Toyota Probox",
                            description:
                                "The Probox is a practical Japanese wagon widely used for business and everyday transport. Its useful cargo space and straightforward design make it particularly relevant for commercial buyers.",
                            image:
                                "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80",
                            alt: "Toyota C-HR hybrid crossover",
                        },
                        {
                            title: "Toyota Vitz",
                            description:
                                "Compact, economical and easy to use in busy urban areas, the Vitz is a popular choice for buyers looking for an affordable Japanese hatchback. It is particularly visible in East African import markets.",
                            image:
                                "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80",
                            alt: "Nissan Serena practical MPV",
                        },
                        {
                            title: "Nissan Note",
                            description:
                                "The Nissan Note offers a balance of compact dimensions, interior space and fuel efficiency. It is a useful option for urban customers and dealers looking for practical Japanese hatchbacks.",
                            image:
                                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
                            alt: "Lexus RX premium SUV",
                        },
                        {
                            title: "Toyota Land Cruiser Prado",
                            description:
                                "For customers who need more space, ground clearance and capability, the Land Cruiser Prado sits in a different segment. It is a popular Japanese SUV choice for African markets where road conditions and long-distance travel matter.",
                            image:
                                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80",
                            alt: "Lexus RX premium SUV",
                        },
                    ]}
                />
                <PickBestVehiclesSection
                    eyebrow="Current Japanese Stock"
                    heading="Find the Right Japanese Vehicle for Your Market"
                    paragraphs={[
                        "Different African markets have different vehicle requirements. A compact hatchback may suit an urban customer, while dealers in other regions may focus more heavily on SUVs, pickups, vans or commercial vehicles.Browse available Japanese stock or tell Windsor Auto Group what you need, and our team can search the Japanese market around your preferred model, specification and budget.",
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
              <UsedCarsAcrossCyprusSection />
              <WhyJapanesePopularSection />

              <NobukoTrustedPartnerSection />

              <TransparentImportProcessSection />

                <FAQ faqs={exportFaqs} />
                <StartSourcingCTA
                    heading=" Source Japanese Cars for Africa"
                    paragraph1="Need Japanese vehicles for your dealership or import business?"
                    paragraph2="
Tell Windsor Auto Group what you are looking for and let our team search the Japanese market around your requirements.
"
                    buttonText="Request a Vehicle"
                    href="/ Start Sourcing From Japan"
                />
            </Sections>
        </main>
    );
}
