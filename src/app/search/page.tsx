'use client';

import { movieAPI } from '@/api';
import useDebounce from '@/hooks/useDebounce';
import { SearchResult } from '@/types/movie';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const SearchPage = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get('str') || '';
	const debouncedTerm = useDebounce(searchTerm, 1000);
	const searchMovies = movieAPI.useGetSearchMovieListsQuery(searchTerm, { skip: debouncedTerm ? false : true });
	if (searchMovies.isLoading) {
		return (
			<section className="search-container--empty">
				<div className="loader"></div>
			</section>
		);
	} else {
		const movieDatas = searchMovies.data.results;
		if (movieDatas.length > 0) {
			return (
				<section className="search-container">
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
			);
		} else {
			return (
				<section className="search-container--empty no-results">
					<p>찾고자 하는 검색어 "{searchTerm}"에 맞는 검색어가 없습니다.</p>
				</section>
			);
		}
	}
};

export default SearchPage;
