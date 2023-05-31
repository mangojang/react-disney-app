import React, { FC } from 'react';
import { wrapper } from '../store/config';
import { AppProps } from 'next/app';
import '../scss/main.scss';

const MyApp: FC<AppProps> = function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
};
export default wrapper.withRedux(MyApp);
