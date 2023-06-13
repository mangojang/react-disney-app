'use client';

import { movieAPI } from '@/api';
import useDebounce from '@/hooks/useDebounce';
import { wrapper } from '@/store/config';
import { setLoggedIn } from '@/store/slices/userSlice';
import { SearchResult } from '@/types/movie';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('str') || '';
	const debouncedTerm = useDebounce(searchTerm, 1000);
	const searchMovies = movieAPI.useGetSearchMovieListsQuery(searchTerm, { skip: debouncedTerm ? false : true });

	if (searchMovies.isLoading) {
		return (
			<main className="container search--empty">
				<div className="loader"></div>
			</main>
		);
	} else {
		const movieDatas = searchMovies?.data?.results || [];
		if (movieDatas.length > 0) {
			return (
				<main className="container search">
					<section className="search-contents">
						{movieDatas.map((movie: SearchResult) => {
							console.log('@@movie', movie);
							if (movie.backdrop_path !== null && movie.media_type !== 'person') {
								const imgurl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
								return (
									<div className="movie" key={movie.id}>
										<div className="movie__column-poster" onClick={() => router.push(`/${movie.id}`)}>
											<div style={{ backgroundImage: `url(${imgurl})` }} className="movie__poster" />
										</div>
									</div>
								);
							}
						})}
					</section>
				</main>
			);
		} else {
			return (
				<main className="container search--empty">
					<p>찾고자 하는 검색어 &ldquo;{searchTerm}&ldquo;에 맞는 검색어가 없습니다.</p>
				</main>
			);
		}
	}
};

export default SearchPage;

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
