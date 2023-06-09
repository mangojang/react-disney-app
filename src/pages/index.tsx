'use client';

import Banner from '@/components/Banner';
import Category from '@/components/Category';
import MovieModal from '@/components/MovieModal';
import Row from '@/components/Row';
import { wrapper, useAppSelector } from '@/store/config';
import { setLoggedIn } from '@/store/slices/userSlice';

export default function Home() {
	const { isModal } = useAppSelector(state => state.movie);

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

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
	const cookie = req.headers.cookie;
	const cookieArr = cookie?.split('; ').map(cookie => {
		const [key, value] = cookie.split('=');
		return { key: key, value: value };
	});
	let option = {};
	const authCookie = cookieArr?.find(e => e.key === 'uid');
	if (authCookie) {
		await store.dispatch(setLoggedIn(true));
	} else {
		await store.dispatch(setLoggedIn(false));
		option = {
			redirect: {
				permanent: false,
				destination: '/login',
			},
		};
	}

	return {
		...option,
		props: {},
	};
});
