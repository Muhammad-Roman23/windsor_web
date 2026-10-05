// data/mockBlogs.ts
export type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  featured?: boolean;
};

export const blogsData: Blog[] = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "How to Import Japanese Used Cars to UK - Full Guide" : "Toyota Auction Grade System Explained for Beginners",
  excerpt: "Windsor Autos Japan se best auction grade cars kaise select kare, complete export process aur documents ke sath.",
  image: `https://images.unsplash.com/photo-${i % 2 === 0 ? "1492144534655-ae79c964c9d7" : "1449965408869-eaa3f722e40d"}?w=600&q=80`,
  category: ["Auction Tips", "Export Guide", "Maintenance"][i % 3],
  date: "02 Oct 2024",
  author: "Windsor Autos",
  featured: i < 3,
}));