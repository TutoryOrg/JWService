import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isSameDay } from 'utils/scaleFunctions';

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
        saveHabits(
            state,
            action: PayloadAction<{ date: string; habits: IHabit[] }>
        ) {
            const indexDay = state.savedHabits.findIndex(
                ({ date }) =>
                    date &&
                    isSameDay(new Date(date), new Date(action.payload.date))
            );

            if (indexDay === -1) {
                state.savedHabits = [
                    {
                        date: action.payload.date,
                        habits: action.payload.habits,
                    },
                ];
            } else {
                state.savedHabits[indexDay].habits = action.payload.habits;
            }
        },
    },
});

export const { saveHabits, setSavedHabits } = habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
