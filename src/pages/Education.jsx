import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationData } from "../utils/constants";
import CertificatesSection from "../components/Layout/CertificatesSection";
import Footer from "../components/Layout/Footer";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create main timeline
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation
      timeline.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      // Cards animation
      const cards = gsap.utils.toArray(".education-card");
      timeline.from(cards, {
        opacity: 0,
        x: -100,
        stagger: 0.3,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");

      // Timeline line animation
      gsap.from(".timeline-line", {
        height: 0,
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef); // Scope to container

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="container mx-auto px-4 py-20 overflow-visible">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-primary">Educational</span>{" "}
          <span className="text-secondary">Journey</span>
        </h1>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-4 md:left-1/2 h-full w-0.5 bg-primary transform -translate-x-1/2"></div>

          {/* Education cards */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`education-card flex flex-col md:flex-row gap-8 items-center 
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div
                    className="relative bg-base-200/30 backdrop-blur-sm p-6 rounded-lg border border-base-300/30 
                    hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:bg-base-200/50 w-full"
                  >
                    <h3 className="text-2xl font-bold text-accent mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-white/80 text-lg mb-2">{edu.institution}</p>
                    <p className="text-white/60">{edu.description}</p>
                    <div className="mt-4">
                      <span className="badge badge-primary hover:bg-success">{edu.grade}</span>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex w-full md:w-1/2 justify-center items-center">
                  <div className="text-xl font-bold text-white bg-primary hover:bg-success px-4 py-2 rounded-lg">
                    {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CertificatesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Education;