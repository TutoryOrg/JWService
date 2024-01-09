import { useState } from 'react';
import { TodayCotainer } from './styled';
import { useAppDispatch } from 'store/redux';
import { setSavedHabits } from 'store/redux/habits';
import { DateHeader, Habit } from 'components';

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

    const addHabit = (newHabit: IHabit) => {
        setHabits(prev => [...prev, newHabit]);
        dispatch(setSavedHabits());
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
