import React from 'react';

import ProjectSection from '../components/Layout/ProjectSections';
import SkillsSection from '../components/shared/SkillsSection';
import SocialIcons from '../components/shared/SocialIcons';
import ContactForm from '../components/Layout/ContactForm';
import Footer from '../components/Layout/Footer';

const Home = ({ currentTheme }) => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16 md:py-20 text-center fade-in">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          <span className="text-primary">FullStack</span> engineer,{" "}
          <span className="text-secondary">hobbyist</span>
          <br />
          Tech and a <span className="text-accent">space</span> lover.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base md:text-lg text-white">
          Welcome to my portfolio. Feel free to browse my website, and drop your
          suggestions on my{" "}
          <a href="https://github.com/Coder-i" className="text-primary hover:underline">
            Github repo
          </a>
          . Thank you for visiting!
        </p>
        <SocialIcons currentTheme={currentTheme} />
      </main>

      <ProjectSection currentTheme={currentTheme} />
      <SkillsSection currentTheme={currentTheme} />
      <ContactForm />
      <Footer currentTheme={currentTheme} />
    </div>
  );
};

export default Home;
