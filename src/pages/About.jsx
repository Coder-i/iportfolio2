import React from 'react';
import Footer from '../components/Layout/Footer';

const About = ({currentTheme}) => (
 <> <div className="container mx-auto px-4 py-20 text-center">
 <h1 className=" text-4xl font-bold text-primary mb-6">
   About Me
 </h1>
 <p className="animate-content text-xl text-secondary max-w-2xl mx-auto">
   I am a FullStack engineer passionate about creating elegant solutions to
   complex problems. I love exploring new technologies, working on
   innovative projects, and sharing my knowledge with the community.
 </p>
</div>
<Footer/> </>
);

export default About;
