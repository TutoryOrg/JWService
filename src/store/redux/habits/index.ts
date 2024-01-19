import { isSameDay } from 'utils/scaleFunctions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IHabit {
    id: string;
    label: string;
    isDone: boolean;
}

export interface IStoreHabits {
    date: string | null;
    image: string;
    habits: IHabit[];
    description: string;
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
                        image: '',
                        description: '',
                    },
                    ...state.savedHabits,
                ];
            } else {
                state.savedHabits[indexDay].habits = action.payload.habits;
            }
        },
        saveImage(
            state,
            action: PayloadAction<{ date: string; image: string }>
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
                        habits: [],
                        image: action.payload.image,
                        description: '',
                    },
                    ...state.savedHabits,
                ];
            } else {
                state.savedHabits[indexDay].image = action.payload.image;
            }
        },
        saveDesc(
            state,
            action: PayloadAction<{ date: string; description: string }>
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
                        habits: [],
                        image: '',
                        description: action.payload.description,
                    },
                    ...state.savedHabits,
                ];
            } else {
                state.savedHabits[indexDay].description =
                    action.payload.description;
            }
        },
    },
});

export const { saveHabits, saveImage, saveDesc, setSavedHabits } =
    habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
