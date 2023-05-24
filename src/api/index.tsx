import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
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
		//query 추가
		getNowPlaying: build.query({
			query: () => ({ url: `${requests.fetchNowPlaying}?language=ko-KR` }),
		}),
		//mutation 추가
	}),
});

export const { useGetNowPlayingQuery } = movieAPI;
