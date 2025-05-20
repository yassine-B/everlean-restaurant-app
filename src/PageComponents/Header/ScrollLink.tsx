import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'next-i18next';
import { headerLinkStyles } from './Styles';

interface scrollLinksProps {
  icon?: JSX.Element;
  path: string;
  onClose?: () => void;
}

export function ScrollLink({ icon, path, onClose }: scrollLinksProps) {
  const { t } = useTranslation('header');
  return (
    <>
      <Link
        className={`${headerLinkStyles.header_link}`}
        to={path}
        activeClass={`${headerLinkStyles.header_active_link}`}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-70}
        duration={1000}
        delay={500}
        isDynamic={true}
        ignoreCancelEvents={false}
        onClick={onClose}>
        <span className={`${headerLinkStyles.header_icon}`}>{icon && icon}</span>
        {t(`header_navigation.${path}`)}
      </Link>
    </>
  );
}
