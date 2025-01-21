import React from 'react';
import { getIconHoverClass } from '../../utils/themeUtils';
import { socialLinks } from '../../utils/constants';


const SocialIcons = ({ currentTheme }) => (
  <div className=" flex justify-center gap-4">
    {socialLinks.map(({ icon: Icon, url }) => (
      <a
        key={url}
        href={url}
        className={`social-icon flex items-center justify-center rounded-full bg-base-200/30 p-4 text-white backdrop-blur-sm transition-all ${getIconHoverClass(currentTheme)}`}
      >
        <Icon className="h-6 w-6" />
      </a>
    ))}
  </div>
);

export default SocialIcons;