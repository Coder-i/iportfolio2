import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMailBulk } from 'react-icons/fa';
import { FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { menuItems, socialLinks } from '../../utils/constants';
import { getIconHoverClass } from '../../utils/themeUtils';
const Footer = ({ currentTheme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200/30 backdrop-blur-sm text-primary mt-20">
      <div className="container mx-auto px-4 py-12 ">
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 m-3">Quick Links</h3>
            <ul className="flex space-x-4 p-3">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-secondary hover:text-primary hover:underline bg-base-200/30 p-2 rounded-full backdrop-blur-sm transition-all ">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Social Links */}
          <h3 className="text-xl font-bold m-2 ">Contact</h3>

          <div className='flex gap-2 p-2'>
            {socialLinks.map(({ icon: Icon, url }) => (
              <a
                key={url}
                href={url}
                className={`social-icon flex items-center justify-center rounded-full bg-base-200/30 p-4 text-secondary backdrop-blur-sm transition-all  hover:bg-primary`}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className=" border-t border-base-300 mt-8 pt-8 text-center">
            <p className=" flex text-secondary/60 ">
              <FaCopyright className="w-6 h-6 mr-1 " /> {currentYear} Aman Baghel ❤️‍🔥. All rights reserved.
            </p>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;