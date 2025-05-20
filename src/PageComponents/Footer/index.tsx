import React from 'react';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { LocationIcon, MailIcon, PhoneIcon } from '@public/dummyData/Icons';
import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Wrapper } from '@src/Components/Wrapper';
import { TextUnderlines } from '@src/Components/TextUnderlines';

const links_list_data = {
  services: ['service_1', 'service_2', 'service_3', 'service_4'],
  quick_links: ['quick_link_1', 'quick_link_2', 'quick_link_3']
};
interface listLinksProps {
  title: string;
  listData: string[];
}
const LinksList = ({ title, listData }: listLinksProps) => {
  const { t } = useTranslation('footer');
  const result = listData.map((item) => {
    return (
      <li key={item} className={`${styles.footer_list_item}`}>
        {t(`footer.${title}.${item}`)}
      </li>
    );
  });
  return (
    <div className={styles.footer_grid_item}>
      <Title color="black" titleAlignment="left">
        {t(`footer.${title}.title`)}
      </Title>
      <TextUnderlines />
      <ul className="pt-1">{result}</ul>
    </div>
  );
};

function Footer() {
  const { t } = useTranslation('footer');
  return (
    <section id="contact">
      <div className={`${styles.footer_container}`}>
        <Wrapper>
          <div className={styles.footer_grid}>
            <div className={`${styles.footer_grid_item} order-1`}>
              <Title color="black" titleAlignment="left">
                {t('footer.footer_about.title')}
              </Title>
              <TextUnderlines />
              <Text color="black" textAlignment="left" styles="pt-2">
                {t('footer.footer_about.description')}
              </Text>
            </div>
            <div className={styles.footer_links_container}>
              <LinksList title="services_links" listData={links_list_data.services} />
              <LinksList title="quick_links" listData={links_list_data.quick_links} />
            </div>

            <div className={`${styles.footer_grid_item} order-3`}>
              <Title color="black" titleAlignment="left">
                {t('footer.main_office.title')}
              </Title>
              <TextUnderlines />
              <Text color="black" textAlignment="left" styles={styles.footer_address_text}>
                <span>
                  <LocationIcon />
                </span>
                {t('footer.main_office.address')}
              </Text>
              <Text color="black" styles={styles.footer_contact_text}>
                <span>
                  <MailIcon />
                </span>
                btwyassine@gmail.com
              </Text>
              <Text color="black" styles={styles.footer_contact_text}>
                <span>
                  <PhoneIcon />
                </span>
                123-123-123
              </Text>
            </div>
          </div>
        </Wrapper>
      </div>

      <Text color="gray" textAlignment="center" textTransform="capitalize" styles="p-2">
        {t('footer.copyright')}
      </Text>
    </section>
  );
}

export default Footer;
