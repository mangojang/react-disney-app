import React, { useState } from 'react';
import { movieAPI } from '@/api';

const Banner = () => {
	const randomMovieDetail = movieAPI.useGetRandomMoviedetailQuery();
	console.log('@@results', randomMovieDetail);
	const movieData: any = randomMovieDetail.data;
	const [isPlay, setIsPlay] = useState(false);

	const truncate = (str: string, n: number) => {
		return str?.length > n ? str.substring(0, n) + '...' : str;
	};

	if (randomMovieDetail.isLoading) {
		return <div className="banner--skeleton skeleton"></div>;
	} else {
		if (isPlay) {
			return (
				<div className="video-banner">
					<div className="video-banner__container">
						<iframe
							src={`https://www.youtube.com/embed/${movieData?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movieData?.videos?.results[0]?.key}`}
							frameBorder="0"
							allow="autoplay; fullscreen"
							allowFullScreen
						></iframe>
					</div>
					<button onClick={() => setIsPlay(false)}>X</button>
				</div>
			);
		} else {
			return (
				<div
					className="banner"
					style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData?.backdrop_path})` }}
				>
					<div className="banner__contents">
						<h1 className="banner__title">{movieData?.title || movieData?.name || movieData?.original_name}</h1>
						<div className="banner__buttons">
							{movieData?.videos?.results[0]?.key && (
								<button className="banner__button play" onClick={() => setIsPlay(true)}>
									Play
								</button>
							)}
						</div>
						<p className="banner__description">{truncate(movieData?.overview, 100)}</p>
						<div className="banner__fadeBottom"></div>
					</div>
				</div>
			);
		}
	}
};

export default Banner;
