import { useAppDispatch, useAppSelector } from '@/store/config';
import { setModal } from '@/store/slices/movieSlice';
import { Data } from '@/types/movie';
import Image from 'next/image';
import React, { useCallback } from 'react';

const MovieModal = () => {
	const { backdrop_path, title, overview, name, release_date, first_air_date, vote_average } = useAppSelector(
		state => state.movie.selectedMovie
	) as Data;
	const dispatch = useAppDispatch();

	const handleClick = useCallback(() => {
		dispatch(setModal(false));
	}, [dispatch]);

	return (
		<div className="presentation" role="presentation">
			<div className="wrapper-modal">
				<div className="modal">
					<span className="modal-close" onClick={() => handleClick()}>
						X
					</span>
					<div className="modal__poster-img">
						<Image src={`https://image.tmdb.org/t/p/w780${backdrop_path}`} alt={title} fill objectFit="contain" />
					</div>
					<div className="modal__content">
						<p className="modal__details">
							<span className="modal__user_perc">100% for you</span>
							&nbsp;{release_date ? release_date : first_air_date}
						</p>
						<h2 className="modal__title">{title ? title : name}</h2>
						<p className="modal__overview">평점 : {vote_average}</p>
						<p className="modal__overview">{overview}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieModal;
