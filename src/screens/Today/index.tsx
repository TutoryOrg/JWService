import { useState } from 'react';
import { isSameDay } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { TodayContainer } from './styled';
import { RootState, useAppDispatch } from 'store/redux';
import { DateHeader, Habit, ImagePicker } from 'components';
import {
    IHabit,
    saveDesc,
    saveImage,
    saveHabits,
    saveProgress,
} from 'store/redux/habits';
import styled from 'styled-components/native';
import _ from 'lodash';

export const emptyHabit: IHabit = {
    id: '',
    label: '',
    isDone: false,
};

const Content = () => {
    const ContentContainer = styled.View`
        height: 100%;
        width: 100%;
    `;
    return <ContentContainer></ContentContainer>;
};

export const Today = () => {
    const date = new Date();
    const dispatch = useAppDispatch();

    const savedHabits = useSelector(
        (state: RootState) => state.habits.savedHabits
    );

    const [todayHabits, setHabits] = useState<IHabit[]>(
        _.isEmpty(savedHabits)
            ? []
            : isSameDay(new Date(savedHabits[0].date as string), date)
            ? (savedHabits[0].habits as IHabit[])
            : savedHabits[0].habits.map(h => ({ ...h, isDone: false }))
    );

    const [todayImage, setTodayImage] = useState<string>(
        _.isEmpty(savedHabits)
            ? ''
            : isSameDay(new Date(savedHabits[0].date as string), date)
            ? (savedHabits[0].image as string)
            : ''
    );

    const [todayDesc, setTodayDesc] = useState<string>(
        _.isEmpty(savedHabits)
            ? ''
            : isSameDay(new Date(savedHabits[0].date as string), date)
            ? (savedHabits[0].description as string)
            : ''
    );

    const saveHabitsToStore = (hb: IHabit[]) => {
        dispatch(saveHabits({ date: date.toString(), habits: hb }));
    };

    const saveImageToStore = (newImage: string) => {
        dispatch(saveImage({ date: date.toString(), image: newImage }));
    };

    const saveDescToStore = (newDesc: string) => {
        dispatch(saveDesc({ date: date.toString(), description: newDesc }));
    };

    const saveProgressToStore = (newProgress: number) => {
        dispatch(saveProgress({ progress: newProgress }));
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

    const calculateProgress = () => {
        const numHabits = todayHabits.length;
        const numHabitsDone = todayHabits.filter(h => h.isDone == true).length;
        const progress = (numHabitsDone / numHabits) * 100;
        if (isSameDay(date, new Date(savedHabits[0].date as string))) {
            saveProgressToStore(progress);
        }
        return progress;
    };

    return (
        <TodayContainer>
            <DateHeader date={date} progress={calculateProgress()} />
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
                editable={true}
                desc={todayDesc}
                image={todayImage}
                onAddDesc={addDesc}
                onChangeImage={addImage}
            />
        </TodayContainer>
    );
};
