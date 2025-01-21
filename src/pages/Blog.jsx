import React from 'react';
import Footer from '../components/Layout/Footer';

const Blog = ({currentTheme}) => (
  <>
  <div className="container mx-auto px-4 py-20 text-center">
    <h1 className=" text-4xl font-bold text-primary mb-6">
      Blog
    </h1>
    <p className="animate-content text-lg text-secondary max-w-2xl mx-auto">
      Welcome to my blog! Here, I share insights, tutorials, and experiences
      related to FullStack development, technology, and more.
    </p>
  </div>
  <Footer/>
  </>
);

export default Blog;
