import { isSameDay } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { TodayContainer } from './styled';
import { DateHeader, Habit } from 'components';
import { IHabit, saveHabits } from 'store/redux/habits';
import { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from 'store/redux';

export const emptyHabit: IHabit = {
    id: '',
    label: '',
    isDone: false,
};

export const Today = () => {
    const date = new Date();
    const dispatch = useAppDispatch();
    const savedHabits = useSelector(
        (state: RootState) => state.habits.savedHabits
    );

    const [todayHabits, setHabits] = useState<IHabit[]>(
        savedHabits[0]?.date && isSameDay(new Date(savedHabits[0].date), date)
            ? (savedHabits[0].habits as IHabit[])
            : []
    );

    const addHabit = (newHabit: IHabit) =>
        setHabits(prev => [...prev, newHabit]);

    const removeHabit = (delHabit: IHabit) =>
        setHabits(prev => prev.filter(({ id }) => id !== delHabit.id));

    const editHabit = (edHabit: IHabit) =>
        setHabits(prev => prev.map(h => (h.id === edHabit.id ? edHabit : h)));

    const saveHabitsToStore = () => {
        dispatch(saveHabits({ date: date.toString(), habits: todayHabits }));
    };

    useEffect(() => {
        saveHabitsToStore();
    }, [todayHabits]);

    return (
        <TodayContainer>
            <DateHeader date={date} progress={25} />
            {todayHabits.map((habit, index) => (
                <Habit
                    key={index}
                    habit={habit}
                    addHabit={addHabit}
                    editHabit={editHabit}
                    removeHabit={removeHabit}
                />
            ))}
            {todayHabits.length < 5 && (
                <Habit
                    habit={emptyHabit}
                    addHabit={addHabit}
                    editHabit={editHabit}
                    removeHabit={removeHabit}
                />
            )}
        </TodayContainer>
    );
};
