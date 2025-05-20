import React from 'react';
import { appWithTranslation } from 'next-i18next';
import '../Styles/GlobalStyles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
