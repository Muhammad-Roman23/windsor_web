const makerImages = [
  "/images/hero/toyota.jpg",
  "/images/hero/honda.jpg",
  "/images/hero/nissan.jpg",
  "/images/hero/lexus.jpg",
  "/images/hero/sport.jpg",
] as const;

export const manufacturers = {
  title: "Find Cars From Leading Manufacturers",
  body: "Explore vehicles from popular Japanese and international manufacturers available through the Japanese used car market.",
  makers: [
    "Toyota",
    "Honda",
    "Nissan",
    "Suzuki",
    "Mazda",
    "Mitsubishi",
    "Subaru",
    "Lexus",
    "Daihatsu",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
  ].map((name, index) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    image: makerImages[index % makerImages.length],
  })),
};
