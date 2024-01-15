import { useState } from 'react';
import { isSameDay } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { TodayCotainer } from './styled';
import { DateHeader, Habit } from 'components';
import { RootState, useAppDispatch } from 'store/redux';
import { IHabit, IStoreHabits, setTodayHabits } from 'store/redux/habits';
import _ from 'lodash';

export const emptyHabit: IHabit = {
    id: '',
    label: '',
    isDone: false,
};

export const Today = () => {
    const date = new Date();
    const dispatch = useAppDispatch();
    const savedhabits = useSelector(
        (state: RootState) => state.habits.savedHabits
    );

    const [habits, setHabits] = useState<IHabit[]>(savedhabits[0].habits);

    const tdate = savedhabits[0].date as string;
    console.log(isSameDay(new Date(tdate), date));

    const addHabit = (newHabit: IHabit) => {
        setHabits(prev => [...prev, newHabit]);
        const todayHabits: IStoreHabits = {
            date: date.toString(),
            habits: [...habits, newHabit],
        };
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
