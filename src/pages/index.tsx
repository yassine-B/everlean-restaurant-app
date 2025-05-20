import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageComponents from '../PageComponents';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale ?? 'en',
        ['header', 'hero', 'about', 'services', 'menu', 'feedback', 'chefs', 'footer'],
        null,
        ['en', 'fr']
      ))
    }
  };
};

function HomePage() {
  return <PageComponents />;
}
export default HomePage;
