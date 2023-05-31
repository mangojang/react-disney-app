import React, { FC } from 'react';
import { wrapper } from '../store/config';
import { AppProps } from 'next/app';
import '../scss/main.scss';
import AppLayout from '@/components/AppLayout';

const MyApp: FC<AppProps> = function MyApp({ Component, pageProps }) {
	return (
		<>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
};
export default wrapper.withRedux(MyApp);
