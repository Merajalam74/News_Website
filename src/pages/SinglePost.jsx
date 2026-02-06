import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";

const SinglePost = () => {
  const location = useLocation();
  const post = location.state?.article;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="text-blue-600 mb-6 inline-block hover:underline font-medium"
      >
        ← Back to Home
      </Link>

      <header className="mb-8">
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
          {post.source || "News"}
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm space-x-4 border-b border-gray-100 dark:border-gray-800 pb-8">
          <span className="font-semibold text-gray-900 dark:text-white">
            {post.author}
          </span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </header>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-100 md:h-125 object-cover rounded-2xl mb-10 shadow-lg"
      />

      <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-loose">
        <p className="lead text-xl mb-8 font-serif text-gray-800 dark:text-gray-200">
          {post.excerpt}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 text-center">
          <h3 className="font-bold text-xl dark:text-white mb-2">
            Want to read the official story?
          </h3>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            This article was curated from {post.source}. Support the original
            publisher by reading the full report on their site.
          </p>
          <a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            Read on {post.source} →
          </a>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;
