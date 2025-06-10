import React from 'react';
import { Boxes } from '../../ui/BoxBackground/BoxBg';

const HeroSectionBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <Boxes />
      <div className="[mask-image:radial-gradient(transparent,white)] absolute inset-0 bg-white " />
    </div>
  );
};

export default HeroSectionBackground;