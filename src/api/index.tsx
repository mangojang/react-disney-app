import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import requests from './request';

export const movieAPI = createApi({
	reducerPath: 'movieAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
		prepareHeaders: (headers, { getState }) => {
			headers.set('authorization', `Bearer ${process.env.API_KEY}`);
			return headers;
		},
	}),
	endpoints: build => ({
		getRandomMoviedetail: build.query({
			async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
				const nowPlaying = await fetchWithBQ(`${requests.fetchNowPlaying}?language=ko-KR`);
				if (nowPlaying.error) return { error: nowPlaying.error as FetchBaseQueryError };
				const movieId = nowPlaying.data.results[Math.floor(Math.random() * nowPlaying.data.results.length)].id;
				const movieDetail = await fetchWithBQ(`/movie/${movieId}?append_to_response=videos&language=ko-KR`);
				return movieDetail.data ? { data: movieDetail.data } : { error: movieDetail.error as FetchBaseQueryError };
			},
		}),
		getRowMovieLists: build.query({
			query: (fetchUrl: string) => {
				const url = requests[fetchUrl];
				if (url.indexOf('?') < 0) {
					return `${url}?language=ko-KR`;
				} else {
					return `${url}&language=ko-KR`;
				}
			},
		}),
		//mutation 추가
	}),
});

export const { useGetRandomMoviedetailQuery, useGetRowMovieListsQuery } = movieAPI;
