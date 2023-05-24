import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Nav = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			console.log(window.scrollY);
			if (window.scrollY > 50) {
				setShow(true);
			} else {
				setShow(false);
			}
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	return (
		<nav className={show ? 'on' : ''}>
			<Link href={'/'} className="logo">
				<Image alt="Disney plus logo" src="/images/logo.svg" fill />
			</Link>
		</nav>
	);
};

export default Nav;
