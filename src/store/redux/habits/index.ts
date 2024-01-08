import { IHabit } from 'screens/Today';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStoreHabits {
    date: Date | null;
    habits: IHabit[];
}

interface ISavedHabits {
    savedHabits: IStoreHabits[];
}

const initialState: ISavedHabits = { savedHabits: [] };

const habitsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSavedHabits(state, action: PayloadAction<ISavedHabits>) {
            state.savedHabits = action.payload.savedHabits;
        },
    },
});

export const { setSavedHabits } = habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
