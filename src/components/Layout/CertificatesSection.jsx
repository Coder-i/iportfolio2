import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiMedalLine, RiVerifiedBadgeLine, RiDownloadLine, RiExternalLinkLine } from 'react-icons/ri';

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    id: 1,
    title: 'Python Data Structures',
    issuer: 'Coursera',
    date: 'Mar 2022',
    icon: RiVerifiedBadgeLine,
    description: 'Advanced data structures implementation in Python including Lists, Dictionaries, and Trees',
    pdf: '/Certificates/python-data-structures.pdf'
  },
  {
    id: 2,
    title: 'Blockchain Basics',
    issuer: 'Coursera',
    date: 'Mar 2022',
    icon: RiMedalLine,
    description: 'Fundamentals of blockchain technology, smart contracts, and decentralized applications',
    pdf: '/Certificates/blockchain-basics.pdf'
  },
  {
    id: 3,
    title: 'Cloud Computing',
    issuer: 'futureSkills',
    date: 'Nov 2023',
    icon: RiVerifiedBadgeLine,
    description: 'Cloud architecture, deployment models, and services with hands-on projects',
    pdf: '/Certificates/cloud-computing.pdf'
  },
  {
    id: 4,
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Coursera',
    date: 'Jan 2022',
    icon: RiVerifiedBadgeLine,
    description: 'Comprehensive introduction to data analytics and visualization',
    pdf: '/Certificates/foundations-data-data-everywhere.pdf'
  },
  {
    id: 5,
    title: 'Programming for Everybody (Getting Started with Python)',
    issuer: 'Coursera',
    date: 'Feb 2022',
    icon: RiVerifiedBadgeLine,
    description: 'Introduction to Python programming fundamentals and best practices',
    pdf: '/Certificates/programming-with-everybody-python.pdf'
  }
];

const CertificateCard = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false);
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
        delay: index * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          end: 'top center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [index]);

  const handleCertificateAction = (e, type) => {
    e.preventDefault();
    const pdfUrl = certificate.pdf;
    
    if (type === 'view') {
      // For viewing, open in new tab
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    } else {
      // For downloading
      try {
        const link = document.createElement('a');
        link.href = pdfUrl;
        // Generate filename from certificate title
        const filename = certificate.title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Download failed:', error);
        alert('Unable to download the certificate. Please try again later.');
      }
    }
  };

  const Icon = certificate.icon;

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group overflow-hidden rounded-xl bg-base-200/30 backdrop-blur-sm 
                 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 
                 hover:bg-base-200/50 border border-base-300/30"
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="text-2xl text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-accent group-hover:text-secondary 
                         transition-colors duration-300 line-clamp-2">
            {certificate.title}
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-white/80">
              Issued by <span className="font-medium">{certificate.issuer}</span>
            </p>
            <p className="text-white/60 text-sm">
              {certificate.date}
            </p>
          </div>

          <p className="text-white/70 text-sm line-clamp-2">
            {certificate.description}
          </p>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={(e) => handleCertificateAction(e, 'view')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 
                       hover:bg-secondary/20 text-secondary transition-colors duration-300"
          >
            <RiExternalLinkLine className="text-lg" />
            View
          </button>
          <button
            onClick={(e) => handleCertificateAction(e, 'download')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 
                       hover:bg-primary/20 text-primary transition-colors duration-300"
          >
            <RiDownloadLine className="text-lg" />
            Download
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 
                    transition-opacity duration-300 pointer-events-none
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
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
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h2 className="certificates-title text-4xl md:text-5xl font-bold mb-6">
          <span className="text-primary">Professional</span>{' '}
          <span className="text-secondary">Certificates</span>
        </h2>
        <p className="text-white/60">
          A collection of professional certifications and achievements in various technical domains
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <CertificateCard 
            key={cert.id} 
            certificate={cert} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;