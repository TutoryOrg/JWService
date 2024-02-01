import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IHabit {
    id: string;
    label: string;
    isDone: boolean;
}

export interface IStoreHabits {
    date: string;
    image: string;
    habits: IHabit[];
    description: string;
    progress: number;
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
        setSavedHabits(state, action: PayloadAction<IStoreHabits[]>) {
            state.savedHabits = action.payload;
        },
    },
});

export const { setSavedHabits } = habitsSlice.actions;
export const habitsReducer = habitsSlice.reducer;
