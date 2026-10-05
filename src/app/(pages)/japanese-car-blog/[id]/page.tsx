import { BlogDetailSection } from "@/components/sections/BlogDetailSection";
import { StartSourcingCTA } from "@/components/sections/Cta";

export default function BlogDetailPage() {
  return (
    <>
    <BlogDetailSection />
      <StartSourcingCTA
              heading="Find Your Next Japanese Stock Car"
              paragraph1="Looking for a Japanese used car, automatic SUV, hybrid hatchback, 7-seater or performance vehicle?"
              paragraph2="Tell Windsor Autos your preferred make, model, year, budget and destination, and our team can help you source suitable stock from Japan and arrange the export process."
              buttonText="Request a Vehicle"
              href="/ Start Sourcing From Japan"
            />
    </>
  );
}