
import React from 'react';

const NexcentLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-green-600">Nexcent</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Features</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Community</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Blog</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Pricing</a>
        </nav>
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700">Register Now</button>
      </header>

      <section className="flex flex-col items-center text-center py-20 bg-gray-50">
        <h2 className="text-5xl font-bold mb-4">Lessons and insights <br /> <span className="text-green-600">from 8 years</span></h2>
        <p className="text-lg text-gray-600 mb-6">Where to grow your business as a photographer: site or social media?</p>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700">Register</button>
      </section>

      <section className="py-16 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Clients</h3>
        <p className="text-center text-gray-600 mb-12">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-wrap justify-center gap-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NexcentLandingPage;
