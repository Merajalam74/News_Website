import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-serif font-bold mb-6 text-gray-900 dark:text-white">About Us</h1>
      <p className="text-xl mb-8 leading-relaxed text-gray-600 dark:text-gray-400">
        We are Daily News, a digital-first publication dedicated to bringing you the stories that matter.
      </p>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6">
          Founded in 2026, our mission is simple: to provide accurate, unbiased, and timely news to a global audience. 
          In an era of information overload, we strive to cut through the noise and deliver clarity.
        </p>

        <h2 className="text-2xl font-bold mb-4">The Team</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="font-bold text-lg dark:text-white">Meraj Alam</h3>
            <p className="text-blue-600 text-sm mb-2">Developer & Editor</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Leading our editorial vision with passion and integrity.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="font-bold text-lg dark:text-white">Global Contributors</h3>
            <p className="text-blue-600 text-sm mb-2">Journalists</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">A network of dedicated reporters from over 20 countries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;