import { movieAPI } from '@/api';
import { combineReducers, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { MakeStore } from 'next-redux-wrapper';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import movieSlice from './slices/movieSlice';
import userSlice from './slices/userSlice';

const logger = createLogger();

const rootReducer = (state: any, action: PayloadAction<any>) => {
	// hydration이 발생했을 때 처리하는 부분
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}

	return combineReducers({
		movie: movieSlice.reducer,
		user: userSlice.reducer,
		[movieAPI.reducerPath]: movieAPI.reducer,
	})(state, action);
};

const makeStore: MakeStore<any> = () =>
	configureStore({
		reducer: rootReducer,
		devTools: process.env.NODE_ENV == 'development' ? true : false,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false,
			}).concat(logger, movieAPI.middleware),
	});

type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
