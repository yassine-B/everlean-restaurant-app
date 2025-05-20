import { styles } from './Styles';
import { ScrollLink } from '../ScrollLink';
import { Title } from '@src/Components/Title';
import { ThemeToggler } from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

interface desktopHeaderProps {
  navigationList: {
    icon: JSX.Element;
    path: string;
  }[];
}
function DesktopHeader({ navigationList }: desktopHeaderProps) {
  const result = navigationList.map((navItem) => {
    return <ScrollLink key={navItem.path} path={navItem.path} />;
  });
  return (
    <div className={`${styles.header_container}`}>
      <Title color="black" size="medium">
        everlean
      </Title>
      <div className={`${styles.header_navigation}`}>
        {result}
        <ThemeToggler />
        <LanguagesDropdown />
      </div>
    </div>
  );
}
export default DesktopHeader;
