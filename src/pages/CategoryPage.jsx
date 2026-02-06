import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNews } from '../api';
import PostCard from '../components/Postcard';

const CategoryPage = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryData = async () => {
      setLoading(true);
      const articles = await fetchNews(category);
      setPosts(articles);
      setLoading(false);
    };

    loadCategoryData();
  }, [category]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Page Header */}
      <div className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white capitalize">
          {category} News
        </h1>
        <p className="text-gray-500 mt-2 dark:text-gray-400">
          Top headlines and breaking stories from the world of {category}.
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center py-20 text-gray-500 dark:text-gray-400 animate-pulse">
          Fetching latest articles...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main List */}
          <div className="md:col-span-2 space-y-8">
            {posts.length > 0 ? (
              posts.map((post) => <PostCard key={post.id} post={post} />)
            ) : (
              <div className="py-20 text-center text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-xl">
                No articles found right now. Try again later.
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl sticky top-24">
              <h4 className="font-bold text-lg mb-4 dark:text-white">About this Section</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                You are viewing the latest feed for <strong>{category}</strong>. 
                These stories are curated automatically from top news sources around the globe.
              </p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;