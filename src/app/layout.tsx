'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { Provider } from 'react-redux';
import store from '../store';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'react-disney-app',
	description: '리엑트를 사용한 디즈니 플러스 앱 클로닝 사이트 입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider store={store}>{children}</Provider>
			</body>
		</html>
	);
}
