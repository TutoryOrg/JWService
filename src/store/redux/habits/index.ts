import { IHabit } from 'screens/Today';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IStoreHabits {
    date: string | null;
    habits: IHabit[];
}

export interface ISavedHabits {
    savedHabits: IStoreHabits[];
}

const initialState: ISavedHabits = {
    savedHabits: [{ date: null, habits: [] }],
};

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        setSavedHabits(state, action: PayloadAction<ISavedHabits>) {
            state.savedHabits = action.payload.savedHabits;
        },
        setTodayHabits(state, action: PayloadAction<IStoreHabits>) {
            state.savedHabits = state.savedHabits.concat(action.payload);
        },
    },
});

export const { setTodayHabits, setSavedHabits } = habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
