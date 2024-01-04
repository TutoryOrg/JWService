import { useState } from 'react';
import { TodayCotainer } from './styled';
import { DateHeader, Habit } from 'components';

export interface IHabit {
    label: string;
    isDone: boolean;
}

export const emptyHabit: IHabit = {
    label: '',
    isDone: false,
};

const savedHabits: IHabit[] = [];

export const Today = () => {
    const date = new Date();
    const [habits, setHabits] = useState<IHabit[]>(savedHabits);

    const addHabit = (newHabit: IHabit) => {
        setHabits(prev => [...prev, newHabit]);
    };

    const removeHabit = (delHabit: IHabit) => {
        setHabits(prev => prev.filter(h => h.label !== delHabit.label));
    };

    console.log(habits);

    return (
        <TodayCotainer>
            <DateHeader date={date} progress={25} />
            {habits.map((habit, index) => (
                <Habit
                    key={index}
                    habit={habit}
                    addHabit={addHabit}
                    removeHabit={removeHabit}
                />
            ))}
            <Habit
                habit={emptyHabit}
                addHabit={addHabit}
                removeHabit={removeHabit}
            />
        </TodayCotainer>
    );
};
