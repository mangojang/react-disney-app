'use client';

import Banner from '@/components/Banner';
import Category from '@/components/Category';
import Row from '@/components/Row';

export default function Home() {
	return (
		<>
			<Banner />
			<Category />
			<Row title="Trending Now" id="TN" fetchUrl="fetchTrending" />
			<Row title="Top Rated" id="TR" fetchUrl="fetchTopRated" />
			<Row title="Action Movies" id="AM" fetchUrl="fetchActionMovies" />
			<Row title="Comedy Movies" id="CM" fetchUrl="fetchComedyMovies" />
		</>
	);
}
