import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	userInfo: {},
	isLoggedIn: false,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<object>) {
			state.userInfo = action.payload;
		},
		setLoggedIn(state, action: PayloadAction<boolean>) {
			state.isLoggedIn = action.payload;
		},
	},
});

export const { setUser, setLoggedIn } = userSlice.actions;
export default userSlice;
