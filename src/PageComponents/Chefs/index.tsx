import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';
import { chefsList, companiesList } from '@public/dummyData';

import { Text } from '@src/Components/Text';
import { Wrapper } from '@src/Components/Wrapper';
import { Title } from '@src/Components/Title';
import { TextUnderlines } from '@src/Components/TextUnderlines';
import { FadingContent } from '@src/Components/FadingContent';

const ChefsList = () => {
  const { t } = useTranslation('chefs');
  const result = chefsList.map((data) => {
    const { id, imageSource } = data;
    return (
      <div key={id} className={`${styles.chef_container}`}>
        <div className={` ${styles.chef_image}`}>
          <Image
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            placeholder="blur"
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={t(`chefs.${id}.image_description`)}
          />
        </div>
        <div>
          <Title>{t(`chefs.${id}.title`)}</Title>
          <Text color="gray">{t(`chefs.${id}.description`)}</Text>
        </div>
      </div>
    );
  });

  return <>{result}</>;
};

const CompaniesList = () => {
  const result = companiesList.map((company) => {
    const { id, imageSource, imageDescription } = company;
    return (
      <Image
        key={id}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={imageSource.blurDataURL}
        src={imageSource.src}
        alt={imageDescription}
        className="rounded"
      />
    );
  });
  return <>{result}</>;
};

function Chefs() {
  const { t } = useTranslation('chefs');
  return (
    <section id="chefs">
      <Wrapper>
        <Wrapper>
          <div>
            <Title titleAlignment="center" size="large">
              {t('chefs.chefs_title')}
            </Title>
            <TextUnderlines color="primary" center />
          </div>
        </Wrapper>
        <FadingContent>
          <div className={styles.chefs_list_container}>
            <ChefsList />
          </div>
        </FadingContent>
      </Wrapper>
      <FadingContent>
        <div className={styles.chefs_companies_container}>
          <CompaniesList />
        </div>
      </FadingContent>
    </section>
  );
}

export default Chefs;
