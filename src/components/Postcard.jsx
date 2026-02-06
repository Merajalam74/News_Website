import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link 
      to={`/post/${post.id}`} 
      state={{ article: post }} 
      className="flex flex-col sm:flex-row gap-6 group cursor-pointer mb-8"
    >
      <div className="sm:w-1/3 overflow-hidden rounded-xl h-48 sm:h-auto relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="sm:w-2/3 flex flex-col justify-center py-2">
        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <span className="font-bold text-blue-600 uppercase tracking-wider">{post.source || "News"}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
      </div>
    </Link>
  );
};

export default PostCard;