import { movieAPI } from '@/api';
import { Data } from '@/types/movie';
import React, { useCallback } from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useAppDispatch } from '@/store/config';
import { setModal, setSelectedMovie } from '@/store/slices/movieSlice';

interface PropsType {
	title: string;
	id: string;
	fetchUrl: string;
}

const Row = ({ title, id, fetchUrl }: PropsType) => {
	const rowMovie = movieAPI.useGetRowMovieListsQuery(fetchUrl);
	console.log(fetchUrl, rowMovie);
	const dispatch = useAppDispatch();

	const handleClickModal = useCallback(
		(movie: Data): void => {
			dispatch(setSelectedMovie(movie));
			dispatch(setModal(true));
		},
		[dispatch]
	);

	if (rowMovie.isLoading) {
		return (
			<div className="row row--skeleton">
				<h2>{title}</h2>
				<div className="row--skeleton__posters skeleton"></div>
			</div>
		);
	} else {
		const movieData: any = rowMovie.data.results;
		return (
			<div className="row">
				<h2>{title}</h2>
				<div className="slider">
					<div id={id} className="row__posters">
						<Swiper
							modules={[Navigation, A11y]}
							spaceBetween={16}
							navigation
							breakpoints={{
								335: {
									slidesPerView: 2,
								},
								758: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
						>
							{movieData.map((v: Data) => (
								<SwiperSlide key={v.id} className="row__poster">
									<div
										className="row__poster__inner"
										style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${v.backdrop_path})` }}
										onClick={() => handleClickModal(v)}
									></div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		);
	}
};

export default Row;
