import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { servicesList } from '@public/dummyData';

import { Text } from '@src/Components/Text';
import { Title } from '@src/Components/Title';
import { Button } from '@src/Components/Button';
import { Wrapper } from '@src/Components/Wrapper';
import { TextUnderlines } from '@src/Components/TextUnderlines';
import { FadingContent } from '@src/Components/FadingContent';

const ServicesList = () => {
  const { t } = useTranslation('services');
  const result = servicesList.map((data) => {
    const { id, imageSource } = data;
    return (
      <div key={id} className={styles.service_item_container}>
        <div className={`${styles.service_item_image_container}`}>
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={t(`services.${id}.image_description`)}
          />
        </div>
        <Title>{t(`services.${id}.title`)}</Title>
        <Text color="gray">{t(`services.${id}.description`)}</Text>
        <Button bgColor="yellow">{t(`services.${id}.button_text`)}</Button>
      </div>
    );
  });
  return <>{result}</>;
};
function Services() {
  const { t } = useTranslation('services');
  return (
    <Wrapper>
      <Wrapper>
        <div id="services">
          <Title titleAlignment="center" size="large">
            {t('services.services_title')}
          </Title>
          <TextUnderlines color="primary" center />
        </div>
      </Wrapper>
      <FadingContent>
        <div className={styles.services_grid}>
          <ServicesList />
        </div>
      </FadingContent>
    </Wrapper>
  );
}

export default Services;
