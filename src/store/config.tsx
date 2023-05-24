import { movieAPI } from '@/api';
import counterSlice from '@/store/slices/counterSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const rootReducer = combineReducers({
	counter: counterSlice.reducer,
	[movieAPI.reducerPath]: movieAPI.reducer,
});

const initialState = {};

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger, movieAPI.middleware),
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState: initialState,
	enhancers: defaultEnhancers => [...defaultEnhancers],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
