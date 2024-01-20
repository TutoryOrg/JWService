import { useState } from 'react';
import { isSameDay } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { TodayContainer } from './styled';
import { RootState, useAppDispatch } from 'store/redux';
import { DateHeader, Habit, ImagePicker } from 'components';
import { IHabit, saveDesc, saveImage, saveHabits } from 'store/redux/habits';

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
            : savedHabits[0].habits.map(h => ({ ...h, isDone: false }))
    );
    const [todayImage, setTodayImage] = useState<string>(
        savedHabits[0]?.date && isSameDay(new Date(savedHabits[0].date), date)
            ? (savedHabits[0].image as string)
            : ''
    );

    const [todayDesc, setTodayDesc] = useState<string>('');

    const saveHabitsToStore = (hb: IHabit[]) => {
        dispatch(saveHabits({ date: date.toString(), habits: hb }));
    };

    const saveImageToStore = (newImage: string) => {
        dispatch(saveImage({ date: date.toString(), image: newImage }));
    };

    const saveDescToStore = (newDesc: string) => {
        dispatch(saveDesc({ date: date.toString(), description: newDesc }));
    };

    const addHabit = (newHabit: IHabit) => {
        const hb = [...todayHabits, newHabit];
        setHabits(hb);
        saveHabitsToStore(hb);
    };

    const removeHabit = (delHabit: IHabit) => {
        const hb = todayHabits.filter(({ id }) => id !== delHabit.id);
        setHabits(hb);
        saveHabitsToStore(hb);
    };

    const editHabit = (edHabit: IHabit) => {
        const hb = todayHabits.map(h => (h.id === edHabit.id ? edHabit : h));
        setHabits(hb);
        saveHabitsToStore(hb);
    };

    const addImage = (newImage: string) => {
        setTodayImage(newImage);
        saveImageToStore(newImage);
    };

    const addDesc = (desc: string) => {
        setTodayDesc(desc);
        saveDescToStore(desc);
    };

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

            <ImagePicker
                image={todayImage}
                editable={true}
                onChangeImage={addImage}
            />
        </TodayContainer>
    );
};
