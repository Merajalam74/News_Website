const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL; 

const generateFullContent = (title, source) => {
  return `
    <p class="mb-4"><strong>(Note: This is a demo preview. The full article text is protected by copyright.)</strong></p>
    
    <p class="mb-4">This article about "<strong>${title}</strong>" was originally published by <strong>${source}</strong>. In a real-world application, this section would contain the full investigative report, interviews, and detailed analysis provided by the original journalists.</p>
    
    <h3 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">The Impact on the Industry</h3>
    <p class="mb-4">Experts suggest that this development could have far-reaching consequences. "It is a significant shift in the landscape," says one industry analyst. The market has reacted with a mixture of surprise and anticipation as stakeholders digest the news.</p>
    
    <p class="mb-4">Historical data indicates that similar events have led to a 15% shift in market trends over the subsequent quarter. As we move forward, it will be crucial to monitor how competitors and regulators respond to these changes.</p>
    
    <h3 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Looking Ahead</h3>
    <p class="mb-4">What does this mean for the average consumer? Primarily, it suggests a move towards more streamlined services. While the immediate effects might be subtle, the long-term trajectory is clear.</p>
    
    <p class="mb-4">We will continue to follow this story as it develops. For the complete, original coverage, please visit the source link below.</p>
  `;
};
const formatArticles = (articles) => {
  return articles.map((article, index) => {
    const image = article.image_url || `https://source.unsplash.com/800x600/?news,${index}`;
    const authorName = article.creator ? article.creator.join(', ') : "Daily News Team";
    const originalUrl = article.link;

    return {
      id: article.article_id || `${Date.now()}-${index}`,
      title: article.title,
      excerpt: article.description || "Click to read the full story coverage.",
      content: (article.content ? article.content.slice(0, 200) + "..." : "") + generateFullContent(article.title, article.source_id),
      image: image,
      date: new Date(article.pubDate).toLocaleDateString(),
      author: authorName,
      url: originalUrl,
      source: article.source_id
    };
  }).filter(art => art.title && art.title !== "[Removed]");
};

export const fetchNews = async (category = "top") => {
  const validCategory = (category === "general" || category === "home") ? "top" : category;

  try {
    const response = await fetch(
      `${BASE_URL}country=us&category=${validCategory}&size=10&apiKey=${API_KEY}`
    );
    
    if (!response.ok) {
        console.error(`API Error: ${response.status} ${response.statusText}`);
        return [];
    }

    const data = await response.json();
    return formatArticles(data.results || []);
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const searchNews = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}country=us&q=${encodeURIComponent(query)}&apiKey=${API_KEY}`
    );
    
    if (!response.ok) {
        console.error(`Search API Error: ${response.status}`);
        return [];
    }

    const data = await response.json();
    return formatArticles(data.results || []);
  } catch (error) {
    console.error("Error searching news:", error);
    return [];
  }
};
