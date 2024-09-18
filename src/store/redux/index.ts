import { userReducer } from './user';
import { useDispatch } from 'react-redux';
import { habitsReducer } from './habits';
import { AnyAction, ThunkDispatch, CombinedState, configureStore, combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	user: userReducer,
	habits: habitsReducer,
});

export const emptyStore = configureStore({ reducer: rootReducer });

const _getDispatch = () => emptyStore.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof _getDispatch>;

export const useAppDispatch = (): ThunkDispatch<CombinedState<RootState>, undefined, AnyAction> => useDispatch<AppDispatch>();
