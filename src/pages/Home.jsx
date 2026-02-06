import React, { useEffect, useState } from "react";
import { fetchNews } from "../api";
import PostCard from "../components/Postcard";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const articles = await fetchNews("general");
      setPosts(articles);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">
        Loading top headlines...
      </div>
    );

  const featured = posts.slice(0, 1); // Top story
  const feed = posts.slice(1); // Rest of the stories

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Featured Hero Section */}
      {featured.map((post) => (
        <div
          key={post.id}
          className="relative rounded-2xl overflow-hidden h-125 mb-12 group cursor-pointer"
        >
          <Link to={`/post/${post.id}`} state={{ article: post }}>
            {" "}
            {/* Pass data via state */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-wider">
                Top Story
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl hidden md:block">
                {post.excerpt}
              </p>
            </div>
          </Link>
        </div>
      ))}

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 dark:text-white">
            Latest News
          </h3>
          {feed.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl sticky top-24">
            <h4 className="font-bold text-xl mb-6 dark:text-white">
              Trending Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {["AI", "Crypto", "Politics", "Space", "Movies"].map((tag) => (
                <Link
                  key={tag}
                  to={`/search/${tag}`}
                  className="text-sm bg-white dark:bg-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
