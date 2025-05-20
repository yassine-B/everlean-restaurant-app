import React from 'react';
import {
  HomeIcon,
  AboutIcon,
  ServicesIcon,
  MenuIcon,
  FeedbackIcon,
  ChefsIcon
} from '@public/dummyData/Icons';

import { useResize } from '@src/Hooks/useResize';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

export const navigationList = [
  { icon: <HomeIcon />, path: 'home' },
  { icon: <AboutIcon />, path: 'about' },
  { icon: <ServicesIcon />, path: 'services' },
  { icon: <MenuIcon />, path: 'menu' },
  { icon: <FeedbackIcon />, path: 'feedback' },
  { icon: <ChefsIcon />, path: 'chefs' }
];

const Header = () => {
  const [width] = useResize();
  return (
    <>
      {width > 768 && <DesktopHeader navigationList={navigationList} />}
      {width <= 768 && <MobileHeader navigationList={navigationList} />}
    </>
  );
};

export default Header;
