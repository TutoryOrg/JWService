import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TodayCotainer } from './styled';
import { DateHeader, Habit } from 'components';
import { RootState, useAppDispatch } from 'store/redux';
import { IStoreHabits, setTodayHabits } from 'store/redux/habits';

export interface IHabit {
    id: string;
    label: string;
    isDone: boolean;
}

export const emptyHabit: IHabit = {
    id: '',
    label: '',
    isDone: false,
};

const savedHabits: IHabit[] = [];

export const Today = () => {
    const date = new Date();
    const dispatch = useAppDispatch();
    const [habits, setHabits] = useState<IHabit[]>(savedHabits);
    const savedhabits = useSelector((state: RootState) => state.habits);

    console.log({ savedhabits });
    console.log({ habits });

    const addHabit = (newHabit: IHabit) => {
        setHabits(prev => [...prev, newHabit]);
        const todayHabits: IStoreHabits = {
            date: date,
            habits: habits,
        };
        console.log({ todayHabits });
        dispatch(setTodayHabits(todayHabits));
    };

    const removeHabit = (delHabit: IHabit) => {
        setHabits(prev => prev.filter(h => h.id !== delHabit.id));
    };

    const editHabit = (edHabit: IHabit) => {
        setHabits(prev => prev.map(h => (h.id === edHabit.id ? edHabit : h)));
    };

    return (
        <TodayCotainer>
            <DateHeader date={date} progress={25} />
            {habits.map((habit, index) => (
                <Habit
                    key={index}
                    habit={habit}
                    addHabit={addHabit}
                    editHabit={editHabit}
                    removeHabit={removeHabit}
                />
            ))}
            {habits.length < 5 && (
                <Habit
                    habit={emptyHabit}
                    addHabit={addHabit}
                    editHabit={editHabit}
                    removeHabit={removeHabit}
                />
            )}
        </TodayCotainer>
    );
};
