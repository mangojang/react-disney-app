import counterSlice from '@/slices/counterSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
