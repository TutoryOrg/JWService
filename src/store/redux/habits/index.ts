import { IHabit } from 'screens/Today';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IHabit {
    id: string;
    label: string;
    isDone: boolean;
}

export interface IStoreHabits {
    date: string | null;
    habits: IHabit[];
}

export interface ISavedHabits {
    savedHabits: IStoreHabits[];
}

const initialState: ISavedHabits = {
    savedHabits: [],
};

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        setSavedHabits(state, action: PayloadAction<ISavedHabits>) {
            state.savedHabits = action.payload.savedHabits;
        },
        setTodayHabits(state, action: PayloadAction<IStoreHabits>) {
            console.log({ state });
            console.log(state.savedHabits);
            state.savedHabits = state.savedHabits.concat(action.payload);
        },
    },
});

export const { setTodayHabits, setSavedHabits } = habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
