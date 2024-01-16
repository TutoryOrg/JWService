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
        setNewHabits(state, action: PayloadAction<IStoreHabits>) {
            state.savedHabits = state.savedHabits.concat(action.payload);
        },
        addHabits(state, action: PayloadAction<IHabit[]>) {
            console.log('habits to add ', state.savedHabits[0].habits);
            console.log(action.payload);
            state.savedHabits[0].habits = action.payload;
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

export const { saveHabits, addHabits, setNewHabits, setSavedHabits } =
    habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
