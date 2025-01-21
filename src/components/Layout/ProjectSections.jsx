import React, { useEffect, useRef } from 'react';
import {
  FaReact,
  FaNode,
  FaDocker,
  FaAws,
  FaGithub,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaTwitter,
  FaRocketchat,
  FaBitbucket,
} from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'GreatKart',
    description: 'An Ecommerce website with similar functionalities like Amazon, Flipkart.',
    icon: FaBitbucket,
    tech: ['Bootstrap', 'Python', 'HTML', 'CSS', 'SQLite3', 'Django'],
    color: 'primary',
    link: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Zingle',
    description: 'A Real Time Chat app with JWT Authentication and Online user status.',
    icon: FaRocketchat,
    tech: ['MERN', 'Zustand', 'DaisyUI', 'Socket.io', 'TailwindCSS'],
    color: 'secondary',
    link: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Twitter-clone',
    description: 'CRUD operations, commenting, liking posts, and editing user info.',
    icon: FaTwitter,
    tech: ['MERN', 'TailwindCSS', 'JWT', 'Tanstack'],
    color: 'accent',
    link: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Developer Portfolio',
    description: 'Modern portfolio website with theme switching and GSAP animations.',
    icon: FaLaptopCode,
    tech: ['React', 'Tailwind', 'GSAP', 'DaisyUI'],
    color: 'info',
    link: 'https://github.com',
    demo: 'https://demo.com',
  },
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      className={`card bg-base-200/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 
        transform hover:-translate-y-2 hover:bg-base-200/50 border border-base-300/30`}
    >
      <div className="card-body">
        <div className={`text-${project.color} text-4xl mb-4`}>
          <Icon />
        </div>
        <h2 className="card-title text-primary mb-2">{project.title}</h2>
        <p className="text-white/80 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className={`badge badge-${project.color} hover:text-secondary badge-outline`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="card-actions justify-end">
          <a
            href={project.link}
            className={`btn btn-ghost btn-sm gap-2 text-${project.color} hover:bg-${project.color}/20`}
          >
            <FaGithub className="h-4 w-4" />
            Code
          </a>
          <a href={project.demo} className={`btn btn-warning btn-sm gap-2`}>
            <FaExternalLinkAlt className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ currentTheme }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      '.section-title',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-24 md:py-32 lg:py-40"
    >
      <h2 className="section-title text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-primary">Featured</span>{' '}
        <span className="text-secondary">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
