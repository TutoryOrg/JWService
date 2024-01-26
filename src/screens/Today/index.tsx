import { useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { TodayContainer } from './styled';
import { isSameDay, windowHeight } from 'utils/scaleFunctions';
import { RootState, useAppDispatch } from 'store/redux';
import { DateHeader, Habit, ImagePicker } from 'components';
import {
    IHabit,
    saveDesc,
    saveImage,
    saveHabits,
    saveProgress,
    IStoreHabits,
} from 'store/redux/habits';
import _ from 'lodash';
import styled from 'styled-components/native';

export const emptyHabit: IHabit = {
    id: '',
    label: '',
    isDone: false,
};

interface IContent {
    day: IStoreHabits;
    editable: boolean;
    onAddDesc: (des: string) => void;
    onAddImage: (img: string) => void;
    onAddHabit: (hab: IHabit) => void;
    onEditHabit: (hab: IHabit) => void;
    onRemoveHabit: (hab: IHabit) => void;
}

const Content = (props: IContent) => {
    const {
        day,
        editable,
        onAddDesc,
        onAddHabit,
        onAddImage,
        onRemoveHabit,
        onEditHabit,
    } = props;
    const { date, habits, description, image, progress } = day;

    const ContentContainer = styled.View`
        width: 100%;
        height: ${windowHeight}px;
    `;

    console.log({ day });

    return (
        <ContentContainer>
            <DateHeader date={new Date(date as string)} progress={progress} />

            {habits.map((habit, index) => (
                <Habit
                    key={index}
                    habit={habit}
                    addHabit={onAddHabit}
                    editHabit={onEditHabit}
                    removeHabit={onRemoveHabit}
                />
            ))}

            {habits.length < 5 && (
                <Habit
                    habit={emptyHabit}
                    addHabit={onAddHabit}
                    editHabit={onEditHabit}
                    removeHabit={onRemoveHabit}
                />
            )}

            <ImagePicker
                editable={editable}
                image={image}
                desc={description}
                onAddDesc={onAddDesc}
                onChangeImage={onAddImage}
            />
        </ContentContainer>
    );
};

export const Today = () => {
    const date = new Date();
    const dispatch = useAppDispatch();

    const savedHabits = useSelector(
        (state: RootState) => state.habits.savedHabits
    );

    // const [todayHabits, setHabits] = useState<IHabit[]>(
    //     _.isEmpty(savedHabits)
    //         ? []
    //         : isSameDay(new Date(savedHabits[0].date as string), date)
    //         ? (savedHabits[0].habits as IHabit[])
    //         : savedHabits[0].habits.map(h => ({ ...h, isDone: false }))
    // );

    // const [todayImage, setTodayImage] = useState<string>(
    //     _.isEmpty(savedHabits)
    //         ? ''
    //         : isSameDay(new Date(savedHabits[0].date as string), date)
    //         ? (savedHabits[0].image as string)
    //         : ''
    // );

    // const [todayDesc, setTodayDesc] = useState<string>(
    //     _.isEmpty(savedHabits)
    //         ? ''
    //         : isSameDay(new Date(savedHabits[0].date as string), date)
    //         ? (savedHabits[0].description as string)
    //         : ''
    // );

    // const saveHabitsToStore = (hb: IHabit[]) => {
    //     dispatch(saveHabits({ date: date.toString(), habits: hb }));
    // };
    //
    // const saveImageToStore = (newImage: string) => {
    //     dispatch(saveImage({ date: date.toString(), image: newImage }));
    // };
    //
    // const saveDescToStore = (newDesc: string) => {
    //     dispatch(saveDesc({ date: date.toString(), description: newDesc }));
    // };
    //
    // const saveProgressToStore = (newProgress: number) => {
    //     dispatch(saveProgress({ progress: newProgress }));
    // };

    const addHabit = (newHabit: IHabit) => {
        // const hb = [...todayHabits, newHabit];
        // setHabits(hb);
        // saveHabitsToStore(hb);
    };

    const removeHabit = (delHabit: IHabit) => {
        // const hb = todayHabits.filter(({ id }) => id !== delHabit.id);
        // setHabits(hb);
        // saveHabitsToStore(hb);
    };

    const editHabit = (edHabit: IHabit) => {
        // const hb = todayHabits.map(h => (h.id === edHabit.id ? edHabit : h));
        // setHabits(hb);
        // saveHabitsToStore(hb);
    };

    const addImage = (newImage: string) => {
        // setTodayImage(newImage);
        // saveImageToStore(newImage);
    };

    const addDesc = (desc: string) => {
        // setTodayDesc(desc);
        // _.debounce(() => saveDescToStore(desc), 1000);
    };

    // const calculateProgress = () => {
    //     const numHabits = todayHabits.length;
    //     const numHabitsDone = todayHabits.filter(h => h.isDone == true).length;
    //     const progress = (numHabitsDone / numHabits) * 100;
    //     if (isSameDay(date, new Date(savedHabits[0].date as string))) {
    //         saveProgressToStore(progress);
    //     }
    //     return progress;
    // };

    return (
        <TodayContainer>
            <FlatList
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={savedHabits}
                renderItem={({ item, index }) => {
                    return (
                        <Content
                            day={item}
                            key={index}
                            editable={true}
                            onAddDesc={addDesc}
                            onAddImage={addImage}
                            onAddHabit={addHabit}
                            onEditHabit={editHabit}
                            onRemoveHabit={removeHabit}
                        />
                    );
                }}
                onScroll={(e: any) => {
                    const index = Math.round(
                        e.nativeEvent.contentOffset.y / windowHeight
                    );
                    console.log({ index });
                }}
            />
        </TodayContainer>
    );
};
