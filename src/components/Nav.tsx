import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

const Nav = () => {
	const [show, setShow] = useState(false);

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

	return (
		<nav className={show ? 'on' : ''}>
			<Link href={'/'} className="logo">
				<Image alt="Disney plus logo" src="/images/logo.svg" fill />
			</Link>
		</nav>
	);
};

export default Nav;
