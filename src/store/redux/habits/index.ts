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
    progress: number;
}

export interface ISavedHabits {
    savedHabits: IStoreHabits[];
}

const findIndexByDate = (savedHabits: IStoreHabits[], date: string) => {
    return savedHabits.findIndex(
        ({ date: savedDate }) =>
            savedDate && isSameDay(new Date(savedDate), new Date(date))
    );
};

const initialState: ISavedHabits = {
    savedHabits: [],
};

const habitsSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        setSavedHabits(state, action: PayloadAction<IStoreHabits[]>) {
            state.savedHabits = action.payload;
        },
        saveHabits(
            state,
            action: PayloadAction<{ date: string; habits: IHabit[] }>
        ) {
            const indexDay = findIndexByDate(
                state.savedHabits,
                action.payload.date
            );

            if (indexDay === -1) {
                state.savedHabits = [
                    {
                        date: action.payload.date,
                        habits: action.payload.habits,
                        image: '',
                        description: '',
                        progress: 0,
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
            const indexDay = findIndexByDate(
                state.savedHabits,
                action.payload.date
            );

            if (indexDay === -1) {
                state.savedHabits = [
                    {
                        date: action.payload.date,
                        habits: [],
                        image: action.payload.image,
                        description: '',
                        progress: 0,
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
            const indexDay = findIndexByDate(
                state.savedHabits,
                action.payload.date
            );

            if (indexDay === -1) {
                state.savedHabits = [
                    {
                        date: action.payload.date,
                        habits: [],
                        image: '',
                        description: action.payload.description,
                        progress: 0,
                    },
                    ...state.savedHabits,
                ];
            } else {
                state.savedHabits[indexDay].description =
                    action.payload.description;
            }
        },
        saveProgress(state, action: PayloadAction<{ progress: number }>) {
            state.savedHabits[0].progress = action.payload.progress;
        },
    },
});

export const { saveHabits, saveImage, saveDesc, saveProgress, setSavedHabits } =
    habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
