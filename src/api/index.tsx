import { Data, Root } from '@/types/movie';
import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import requests from './request';

interface If {
	error?: undefined;
	data: any;
	meta?: any | undefined;
}

export const movieAPI = createApi({
	reducerPath: 'movieAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
		prepareHeaders: (headers, { getState }) => {
			headers.set('authorization', `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`);
			return headers;
		},
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath];
		}
	},
	tagTypes: ['NowPlaying', 'ByGenre', 'BySearch', 'BymovieId'],
	endpoints: build => ({
		getRandomMoviedetail: build.query({
			async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
				const nowPlaying = (await fetchWithBQ(`${requests.fetchNowPlaying}?language=ko-KR`)) as If;
				if (nowPlaying.error) return { error: nowPlaying.error as FetchBaseQueryError };
				const movieId = nowPlaying.data.results[Math.floor(Math.random() * nowPlaying.data.results.length)].id;
				const movieDetail = await fetchWithBQ(`/movie/${movieId}?append_to_response=videos&language=ko-KR`);
				return movieDetail.data ? { data: movieDetail.data } : { error: movieDetail.error as FetchBaseQueryError };
			},
			providesTags: ['NowPlaying'],
		}),
		getRowMovieLists: build.query({
			query: fetchUrl => {
				const url = requests[fetchUrl];
				if (url.indexOf('?') < 0) {
					return `${url}?language=ko-KR`;
				} else {
					return `${url}&language=ko-KR`;
				}
			},
			providesTags: (result, error, id) => [{ type: 'ByGenre', id }],
		}),
		getSearchMovieLists: build.query({
			query: (searchTerm: string) => `${requests.fetchSearchMovies}&query=${searchTerm}`,
			providesTags: (result, error, id) => [{ type: 'BySearch', id }],
		}),
		getMovieDetails: build.query({
			query: (movieId: string) => `/movie/${movieId}?language=ko-KR`,
			providesTags: (result, error, id) => [{ type: 'BymovieId', id }],
		}),
		//mutation 추가
	}),
});

export const {
	useGetRandomMoviedetailQuery,
	useGetRowMovieListsQuery,
	useGetSearchMovieListsQuery,
	useGetMovieDetailsQuery,
	util: { getRunningQueriesThunk },
} = movieAPI;

export const { getRandomMoviedetail, getRowMovieLists, getMovieDetails } = movieAPI.endpoints;
