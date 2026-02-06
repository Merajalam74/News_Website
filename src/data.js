// src/data.js

const categories = ["Technology", "Design", "Business", "Travel", "World"];

const sampleImages = [
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800", // Tech
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800", // Design
  "https://images.unsplash.com/photo-1611974765270-ca1258634369?w=800", // Business
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800", // Travel
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800", // World
];

const titles = [
  "The Future of AI is Here",
  "Why Minimalist Design Works",
  "Global Markets Hit Record Highs",
  "Top 10 Hidden Travel Gems",
  "Climate Change Updates 2024",
  "The Rise of Remote Work",
  "Electric Cars Take Over",
  "Architecture in the Modern Age",
  "Crypto: Boom or Bust?",
  "Exploring the Alps"
];

// Function to generate 100 fake posts
const generatePosts = () => {
  return Array.from({ length: 100 }, (_, i) => {
    const category = categories[i % categories.length];
    return {
      id: i + 1,
      title: `${titles[i % titles.length]} - Vol. ${i + 1}`,
      category: category,
      image: sampleImages[i % sampleImages.length],
      excerpt: `This is a generated summary for post number ${i + 1}. It contains interesting insights about ${category} and the changing world around us.`,
      content: `Here is the full content for post #${i + 1}. If this were a real blog, you would be reading a very long and detailed article about ${category} right now. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      date: `Oct ${1 + (i % 30)}, 2023`,
      featured: i < 5, 
    };
  });
};

export const posts = generatePosts();