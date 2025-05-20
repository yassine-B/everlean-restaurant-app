import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { menuList } from '@public/dummyData';

import { Title } from '@src/Components/Title';
import { Wrapper } from '@src/Components/Wrapper';
import { Overlay } from '@src/Components/Overlay';
import { TextUnderlines } from '@src/Components/TextUnderlines';

const MenuList = () => {
  const { t } = useTranslation('menu');
  const result = menuList.map((data) => {
    const { id, imageSource } = data;
    return (
      <div key={id} className={`${styles.menu_item_container}`}>
        <Overlay opacity={25} />
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={imageSource.blurDataURL}
          src={imageSource.src}
          alt={t(`menu.menu_list.${id}.image_description`)}
          className="rounded"
        />

        <div className={`${styles.menu_item_title}`}>
          <Title color="black">{t(`menu.menu_list.${id}.title`)}</Title>
        </div>
      </div>
    );
  });
  return <>{result}</>;
};

function Menu() {
  const { t } = useTranslation('menu');
  return (
    <section id="menu" className={`${styles.menu_container}`}>
      <Wrapper>
        <Wrapper>
          <div>
            <Title color="black" titleAlignment="center" size="large">
              {t('menu.menu_title')}
            </Title>
            <TextUnderlines center />
          </div>
        </Wrapper>
        <div className={styles.menu_grid}>
          <MenuList />
        </div>
      </Wrapper>
    </section>
  );
}

export default Menu;
