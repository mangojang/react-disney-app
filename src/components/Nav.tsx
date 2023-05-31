'use client';

import app from '@/firebase';
import { useAppDispatch, useAppSelector } from '@/store/config';
import { setLoggedIn, setUser } from '@/store/slices/userSlice';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

const Nav = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('str');
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const dispatch = useAppDispatch();

	const [show, setShow] = useState(false);
	const [searchVal, setSearchVal] = useState(searchTerm || '');
	const { isLoggedIn, userInfo } = useAppSelector(state => state.user);

	const handleScroll = useCallback(() => {
		if (window.scrollY > 50) {
			setShow(true);
		} else {
			setShow(false);
		}
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			console.log('@@user', user);
			if (user) {
				dispatch(setUser(user));
				dispatch(setLoggedIn(true));
			} else {
				dispatch(setUser({}));
				dispatch(setLoggedIn(false));
			}
		});
	}, [auth]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.addEventListener('scroll', handleScroll);
		};
	}, []);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSearchVal(e.target.value);
			router.replace(`/search?str=${e.target.value}`);
		},
		[router]
	);

	const handleAuth = useCallback((e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then(result => {
				const user = result.user;
				dispatch(setUser(user));
				dispatch(setLoggedIn(true));
			})
			.catch(error => {
				alert(`잠시후 다시 시도해 주세요.\n${error.message}`);
				console.log(error);
			});
	}, []);

	const handleLogout = useCallback(() => {
		signOut(auth)
			.then(() => {
				dispatch(setUser({}));
				dispatch(setLoggedIn(false));
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<nav className={show ? 'on' : ''}>
			<Link href={'/'} className="logo">
				<Image alt="Disney plus logo" src="/images/logo.svg" fill />
			</Link>
			{isLoggedIn ? (
				<>
					<input
						className="nav__input"
						type="text"
						onChange={handleChange}
						value={searchVal as string}
						placeholder="검색어를 입력 해주세요."
					/>
					<div className="profile">
						<Image alt="profile image" className="userimg" src={userInfo.photoURL} width={48} height={48} />
						<div className="dropdown">
							<span className="btn--logout" onClick={handleLogout}>
								Logout
							</span>
						</div>
					</div>
				</>
			) : (
				<a className="btn--login" onClick={handleAuth}>
					Login
				</a>
			)}
		</nav>
	);
};

export default Nav;

// export async function getServerSideProps() {
// 	const auth = getAuth(app);
// 	const dispatch = useAppDispatch();

// 	onAuthStateChanged(auth, user => {
// 		console.log('@@user', user);
// 		if (user) {
// 			dispatch(setUser(user));
// 			dispatch(setLoggedIn(true));
// 		} else {
// 			dispatch(setLoggedIn(false));
// 		}
// 	});
// 	// const res = await fetch(`https://...`);
// 	// const projects = await res.json();

// 	// return { props: { projects } };
// }
