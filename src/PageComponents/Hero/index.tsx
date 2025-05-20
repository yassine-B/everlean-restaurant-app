import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { Overlay } from '@src/Components/Overlay';

function Hero() {
  const { t } = useTranslation('hero');
  const result = ['banner_1', 'banner_2', 'banner_3'].map((bannerId) => {
    return (
      <div key={bannerId}>
        <Title color="yellow" size="large">
          {t(`hero.banners.${bannerId}.title`)}
        </Title>
        <Text styles="my-5" color="white">
          {t(`hero.banners.${bannerId}.description`)}
        </Text>
        <Button shape="rounded" bgColor="yellow">
          {t(`hero.banners.${bannerId}.button_text`)}
        </Button>
      </div>
    );
  });

  return (
    <section id="home" className={`${styles.hero_container}`}>
      <Overlay opacity={70} />

      <div className={styles.hero_banners_container}>
        <Carousel
          emulateTouch={true}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}>
          {result}
        </Carousel>
      </div>
    </section>
  );
}

export default Hero;
