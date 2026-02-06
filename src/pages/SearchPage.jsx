import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../api";
import PostCard from "../components/Postcard";

const SearchPage = () => {
  const { query } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const articles = await searchNews(query);
      setPosts(articles);
      setLoading(false);
    };
    loadData();
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Search Results for: <span className="text-blue-600">"{query}"</span>
      </h1>

      {loading ? (
        <p className="dark:text-gray-300">Searching...</p>
      ) : posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} layout="vertical" />
          ))}
        </div>
      ) : (
        <p className="dark:text-gray-300">No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
