'use client';

import Banner from '@/components/Banner';
import Category from '@/components/Category';
import MovieModal from '@/components/MovieModal';
import Row from '@/components/Row';
import { useAppSelector } from '@/store/config';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const isModal = useAppSelector(state => state.movie.isModal);
	const { isLoggedIn } = useAppSelector(state => state.user);

	useEffect(() => {
		if (!isLoggedIn) {
			router.push('/login');
		}
	}, [isLoggedIn]);

	return (
		<main className="container">
			{isModal && <MovieModal />}
			<Banner />
			<Category />
			<Row title="Trending Now" id="TN" fetchUrl="fetchTrending" />
			<Row title="Top Rated" id="TR" fetchUrl="fetchTopRated" />
			<Row title="Action Movies" id="AM" fetchUrl="fetchActionMovies" />
			<Row title="Romance Movies" id="RM" fetchUrl="fetchRomanceMovies" />
			<Row title="Horror Movies" id="HM" fetchUrl="fetchHorrorMovies" />
			<Row title="Comedy Movies" id="CM" fetchUrl="fetchComedyMovies" />
		</main>
	);
}
