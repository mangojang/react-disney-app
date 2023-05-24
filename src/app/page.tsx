'use client';
import { movieAPI } from '@/api';

export default function Home() {
	const query = movieAPI.useGetNowPlayingQuery();
	console.log('query', query);
	return <h1>Hello disney!</h1>;
}
