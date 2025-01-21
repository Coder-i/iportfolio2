import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiMedalLine, RiVerifiedBadgeLine } from 'react-icons/ri';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    title: 'Python Data Structures',
    issuer: 'Coursera',
    date: 'Mar 2022',
    icon: RiVerifiedBadgeLine,
    pdf: '/Certificates/Coursera WZVM8WYYABK8.pdf', // Remove "public/"
  },
  {
    title: 'Blockchain Basics',
    issuer: 'Coursera',
    date: 'Mar 2022',
    icon: RiMedalLine,
    pdf: '/Certificates/Coursera XF3QCH2KE2NL.pdf',
  },
  {
    title: 'Cloud Computing',
    issuer: 'futureSkills',
    date: 'Nov 2023',
    icon: RiVerifiedBadgeLine,
    pdf: '/Certificates/Cloud Computing - Foundation Credential_1714388152315.pdf',
  },
  {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Coursera',
    date: 'Jan 2022',
    icon: RiVerifiedBadgeLine,
    pdf: '/Certificates/Coursera%20XNF7S3GWFDCZ.pdf',
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    date: 'Feb 2022',
    icon: RiVerifiedBadgeLine,
    pdf: '/Certificates/Coursera%20UND8QGNXH6YJ.pdf',
  },
];

const CertificateCard = ({ certificate, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
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

  const Icon = certificate.icon;

  return (
    <div
      ref={cardRef}
      className="card bg-base-200/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 
        transform hover:-translate-y-2 hover:bg-base-200/50 border border-base-300/30"
    >
      <div className="card-body">
        <div className="flex items-center gap-3 mb-4">
          <Icon className="text-3xl text-primary" />
          <h3 className="card-title  text-accent hover:text-secondary">{certificate.title}</h3>
        </div>
        <p className="text-white/80 mb-2">Issued by {certificate.issuer}</p>
        <p className="text-white/60 text-sm mb-4">
          •  {certificate.date}   
        </p>
      
        <div className="card-actions justify-end mt-4">
          <button className="btn text-secondary hover:text-info btn-sm">
           <a target="_blank" href={ certificate.pdf}> Show Certificate</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const CertificatesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      '.certificates-title',
      {
        opacity: 0,
        y: -30,
      },
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
      className="container mx-auto px-4 py-20 text-white"
    >
      <h2 className="certificates-title text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="text-primary">Professional</span>{' '}
        <span className="text-secondary">Certificates</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} certificate={cert} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;