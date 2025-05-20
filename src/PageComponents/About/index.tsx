import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import aboutImage from '@public/assets/images/about-1.jpg';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { Wrapper } from '@src/Components/Wrapper';
import { FadingContent } from '@src/Components/FadingContent';

function About() {
  const { t } = useTranslation('about');
  return (
    <>
      <Wrapper>
        <div id="about" className={`${styles.about_container}`}>
          <div className={`${styles.about_details}`}>
            <FadingContent>
              <Title titleAlignment="left" size="large">
                {t('about.about_title')}
              </Title>
              <Text textAlignment="left" styles={styles.about_description}>
                {t('about.about_description.part_1')}
              </Text>
              <Text textAlignment="left" styles={styles.about_description}>
                {t('about.about_description.part_2')}
              </Text>
              <Button bgColor="yellow">{t('about.about_button')}</Button>
            </FadingContent>
          </div>

          <div className={`${styles.about_image}`}>
            <Image
              layout="fill"
              placeholder="blur"
              blurDataURL={aboutImage.blurDataURL}
              src={aboutImage.src}
              alt={'about image description'}
            />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <div className={`${styles.about_alert}`}>
          <Text color="black" styles="bold" size="large">
            {t('about.about_alert')}
          </Text>
          <Button bgColor="gray"> {t('about.about_alert_button')}</Button>
        </div>
      </Wrapper>
    </>
  );
}

export default About;
