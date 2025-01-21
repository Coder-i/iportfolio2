import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaDocker,
  FaShieldAlt,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    category: "Frontend Development",
    icon: FaReact,
    skills: ["Reactjs", "HTML", "CSS", "TailwindCSS", "GSAP", "Shadcn/ui","JavaScript","DaisyUI"],
    color: "primary",
  },
  {
    category: "Backend Development",
    icon: FaServer,
    skills: ["Node.js", "Python", "Express", "Django" ],
    color: "secondary",
  },
  {
    category: "Mobile Development",
    icon: FaMobileAlt,
    skills: ["React Native", "Java"],
    color: "accent",
  },
  {
    category: "Database",
    icon: FaDatabase,
    skills: ["MongoDB",  "MS-SQL",  "Supabase"],
    color: "info",
  },
 
  {
    category: "Others/Libraries",
    icon: FaShieldAlt,
    skills: ["JWT", "HTTPS", "Zustand","lucide-react","react-icons"],
    color: "warning",
  },
];

const SkillCard = ({ category, icon: Icon, skills, color, index }) => {
  const cardRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100",
        end: "top center",
        toggleActions: "play none none reverse",
      },
    });

    timeline
      .fromTo(
        cardRef.current,
        {
          autoAlpha: 0,
          y: 50,
          scale: 0.95,
        },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
        }
      )
      .fromTo(
        skillsRef.current.children,
        {
          autoAlpha: 0,
          scale: 0.8,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`card bg-base-200/30 backdrop-blur-sm transform transition-[shadow,background-color] duration-300 
        hover:shadow-lg hover:bg-base-200/50 border border-${color}/30`}
    >
      <div className="card-body">
        <div className="flex items-center gap-3 mb-4">
          <Icon className={`w-8 h-8 text-${color}`} />
          <h3 className="card-title text-white">{category}</h3>
        </div>
        <div ref={skillsRef} className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className={`social-icon badge badge-${color} badge-outline font-medium py-3
                transition-transform hover:text-primary duration-200 hover:scale-105`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = ({ currentTheme }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".skills-title",
      {
        autoAlpha: 0,
        y: -30,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
          end: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container mx-auto px-4 py-20  text-white"
    >
      <h2 className="animate header skills-title text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="text-primary">Technical</span>{" "}
        <span className="text-secondary">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
