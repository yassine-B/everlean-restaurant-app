import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { mobileIconVariants, mobileMenuVariants, styles } from './Styles';
import { HeaderCloseMenuIcon, HeaderMenuIcon } from '@public/dummyData/Icons';

import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { ThemeToggler } from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

import { useToggle } from '@src/Hooks/useToggle';
import { ScrollLink } from '../ScrollLink';

interface mobileHeaderProps {
  navigationList: {
    icon: JSX.Element;
    path: string;
  }[];
}
const MobileHeader = ({ navigationList }: mobileHeaderProps) => {
  const { isOpen, onToggle, onClose } = useToggle();
  const navigationLinks = navigationList.map((nav) => {
    const { icon, path } = nav;
    return <ScrollLink key={path} onClose={onClose} icon={icon} path={path} />;
  });
  const navigationHeader = (
    <header className={`${styles.header_container} `}>
      <Title styles="dark:text-black" size="small">
        everlean
      </Title>
      <div className={`${styles.header_menu_list}`}>
        <div className={styles.header_menu_list_content}>
          <ThemeToggler />
          <LanguagesDropdown />
        </div>
        <Button styles={styles.header_menu_button} onClick={onToggle}>
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={mobileIconVariants}
            transition={{ duration: 0.3 }}>
            {isOpen ? <HeaderCloseMenuIcon /> : <HeaderMenuIcon />}
          </motion.div>
        </Button>
      </div>
    </header>
  );
  const navigationListComponent = (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={mobileMenuVariants}
          transition={{ duration: 0.5 }}
          className={styles.header_navigation_list}>
          <div>{navigationLinks}</div>
        </motion.nav>
      )}
    </AnimatePresence>
  );

  return (
    <section className="relative h-12">
      {navigationHeader}
      {navigationListComponent}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.header_overlay}></motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default MobileHeader;
