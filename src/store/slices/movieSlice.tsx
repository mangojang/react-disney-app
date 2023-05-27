import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MovieState {
	isModal: boolean;
	selectedMovie: object;
}

const initialState: MovieState = {
	isModal: false,
	selectedMovie: {},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		setModal(state, action: PayloadAction<boolean>) {
			state.isModal = action.payload;
		},
		setSelectedMovie(state, action: PayloadAction<object>) {
			state.selectedMovie = action.payload;
		},
	},
});

export const { setModal, setSelectedMovie } = movieSlice.actions;
export default movieSlice;
