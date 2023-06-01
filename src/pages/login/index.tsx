'use client';

import { useAppSelector, wrapper } from '@/store/config';
import { setLoggedIn } from '@/store/slices/userSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const LoginPage = () => {
	const router = useRouter();
	const { isLoggedIn } = useAppSelector(state => state.user);

	useEffect(() => {
		if (isLoggedIn) {
			router.push('/');
		}
	}, [isLoggedIn]);

	return (
		<main className="container login">
			<section className="login-contents">
				<div className="center">
					<div className="logo-one">
						<Image src="/images/cta-logo-one.svg" alt="logo-one" fill objectFit="contain" />
					</div>
					<Link href={'/'} className="signup-link">
						지금 가입
					</Link>
					<div className="description">
						영화에 대한 프리미어 엑세스를 얻으십시오. 디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
					</div>
					<div className="logo-two">
						<Image src="/images/cta-logo-two.png" alt="logo-two" fill objectFit="contain" />
					</div>
				</div>
			</section>
		</main>
	);
};

export default LoginPage;

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
	const cookie = req.headers.cookie;
	const cookieArr = cookie?.split('; ').map(cookie => {
		const [key, value] = cookie.split('=');
		return { key: key, value: value };
	});
	const authCookie = cookieArr?.find(e => e.key === 'uid');
	if (authCookie) {
		await store.dispatch(setLoggedIn(true));
	} else {
		await store.dispatch(setLoggedIn(false));
	}

	return {
		props: {},
	};
});