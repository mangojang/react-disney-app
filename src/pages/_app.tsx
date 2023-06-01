import React, { FC } from 'react';
import { wrapper } from '../store/config';
import { AppProps } from 'next/app';
import '../scss/main.scss';
import AppLayout from '@/components/AppLayout';
import Head from 'next/head';

const MyApp: FC<AppProps> = function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>react-disney-app</title>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=yes"
				/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="description" content="리액트를 사용한 디즈니 플러스 클론 사이트 입니다."></meta>
				<meta property="og:title" content="react-disney-app" key="title" />
				<meta property="og:description" content="리액트를 사용한 디즈니 플러스 클론 사이트 입니다." key="description" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/og.png" key="image" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</>
	);
};
export default wrapper.withRedux(MyApp);
