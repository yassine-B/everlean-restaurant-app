import React, { Fragment } from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Overlay } from '@src/Components/Overlay';
import { feedbackList } from '@public/dummyData';

function Feedback() {
  const { t } = useTranslation('feedback');
  const result = feedbackList.map((item) => {
    return (
      <Fragment key={item.id}>
        <Image
          width={100}
          height={80}
          className={`${styles.feedback_image_container}`}
          src={item.imageSource.src}
          alt={t(`feedback.${item.id}.image_description`)}
        />
        <Text color="white">{t(`feedback.${item.id}.description`)}</Text>
        <Title color="yellow">{t(`feedback.${item.id}.username`)}</Title>
      </Fragment>
    );
  });
  return (
    <section id="feedback" className={`${styles.feedback_container}`}>
      <Overlay />
      <div className={`${styles.feedback_content}`}>
        <Title color="white" size="medium" styles="pb-3">
          {t('feedback.feedback_title')}
        </Title>
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

export default Feedback;
