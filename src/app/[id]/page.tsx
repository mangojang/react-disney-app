'use client';

import { movieAPI } from '@/api';
import Image from 'next/image';
import React from 'react';

const DetailPage = ({ params }: { params: { id: string } }) => {
	const movieId = params.id;
	const movieDetails = movieAPI.useGetMovieDetailsQuery(movieId);

	if (!movieDetails.isSuccess) {
		return (
			<main className="container detail--skeleton">
				<section className="detail-contents">
					<div className="detail__img modal__poster-img skeleton"></div>
					<div className="detail__content modal__content">
						<div className="detail__details modal__details skeleton"></div>
						<div className="detail__title modal__title skeleton"></div>
						<div className="detail__rate modal__overview skeleton"></div>
						<div className="detail__overview modal__overview skeleton"></div>
					</div>
				</section>
			</main>
		);
	} else {
		const { backdrop_path, title, release_date, first_air_date, vote_average, overview } = movieDetails.data;
		return (
			<main className="container detail">
				<section className="detail-contents">
					<div className="detail__img modal__poster-img">
						<Image src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt={title} fill objectFit="contain" />
					</div>
					<div className="detail__content modal__content">
						<p className="detail__details modal__details">
							<span className="modal__user_perc">100% for you</span>
							&nbsp;{release_date ? release_date : first_air_date}
						</p>
						<h2 className="detail__title modal__title">{title ? title : name}</h2>
						<p className="detail__rate modal__overview">평점 : {vote_average}</p>
						<p className="detail__overview modal__overview">{overview}</p>
					</div>
				</section>
			</main>
		);
	}
};

export default DetailPage;
