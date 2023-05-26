import { movieAPI } from '@/api';
import { Data } from '@/types/movie';
import Image from 'next/image';
import React from 'react';

interface PropsType {
	title: string;
	id: string;
	fetchUrl: string;
}

const Row = ({ title, id, fetchUrl }: PropsType) => {
	const rowMovie = movieAPI.useGetRowMovieListsQuery(fetchUrl);
	console.log(fetchUrl, rowMovie);
	const movieData: any = rowMovie.data?.results;

	if (rowMovie.isLoading) {
		return <div className="row--skeleton skeleton"></div>;
	} else {
		return (
			<div className="row">
				<h2>{title}</h2>
				<div className="slider">
					<div className="slider__arrow slider__arrow-left">
						<span className="arrow">{'<'}</span>
					</div>
					<div id={id} className="row__posters" style={{ width: movieData.length * 256 + 'px' }}>
						{movieData.map((v: Data) => (
							// <Image
							// 	key={v.id}
							// 	className="row__poster"
							// 	src={`http://image.tmdb/org/t/p/original${v.backdrop_path}`}
							// 	alt={v.title}
							// 	fill
							// />
							<div key={v.id} className="row__poster">
								<div
									className="row__poster__inner"
									style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${v.backdrop_path})` }}
								></div>
							</div>
						))}
					</div>
					<div className="slider__arrow slider__arrow-right">
						<span className="arrow">{'>'}</span>
					</div>
				</div>
			</div>
		);
	}
};

export default Row;
