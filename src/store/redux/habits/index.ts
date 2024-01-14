import { IHabit } from 'screens/Today';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStoreHabits {
    date: Date | null;
    habits: IHabit[];
}

export interface ISavedHabits {
    savedHabits: IStoreHabits[];
}

const initialState: ISavedHabits = { savedHabits: [] };

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        setSavedHabits(state, action: PayloadAction<ISavedHabits>) {
            state.savedHabits = action.payload.savedHabits;
        },
        setTodayHabits(state, action: PayloadAction<IStoreHabits>) {
            console.log({ action });
            console.log({ state });
            console.log(state.savedHabits);
            // state.habits = state.habits.push(action.payload);
        },
    },
});

export const { setTodayHabits, setSavedHabits } = habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
