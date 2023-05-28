'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const Nav = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('str');

	const [show, setShow] = useState(false);
	const [searchVal, setSearchVal] = useState(searchTerm || '');

	const handleScroll = useCallback(() => {
		if (window.scrollY > 50) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.addEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSearchVal(e.target.value);
			router.replace(`/search?str=${e.target.value}`);
		},
		[router]
	);

	return (
		<nav className={show ? 'on' : ''}>
			<Link href={'/'} className="logo">
				<Image alt="Disney plus logo" src="/images/logo.svg" fill />
			</Link>
			{/* user 정보에 따라 login, search  render */}
			<input
				className="nav__input"
				type="text"
				onChange={handleChange}
				value={searchVal as string}
				placeholder="검색어를 입력 해주세요."
			/>
			{/* <Link href={'/login'} className="login">
				Login
			</Link> */}
		</nav>
	);
};

export default Nav;
