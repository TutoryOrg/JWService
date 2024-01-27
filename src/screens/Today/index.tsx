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
}

const Content = (props: IContent) => {
    const { day } = props;
    const { date, habits, description, image, progress } = day;
    const dispatch = useAppDispatch();

    const ContentContainer = styled.View`
        width: 100%;
        height: ${windowHeight}px;
    `;

    // const [todayImage, setTodayImage] = useState<string>(
    //     _.isEmpty(savedHabits)
    //         ? ''
    //         : isSameDay(new Date(savedHabits[0].date as string), date)
    //         ? (savedHabits[0].image as string)
    //         : ''
    // );
    //
    // const [todayDesc, setTodayDesc] = useState<string>(
    //     _.isEmpty(savedHabits)
    //         ? ''
    //         : isSameDay(new Date(savedHabits[0].date as string), date)
    //         ? (savedHabits[0].description as string)
    //         : ''
    // );

    const onAddHabit = (newHabit: IHabit) => {
        // const hb = [...todayHabits, newHabit];
        // setHabits(hb);
        // saveHabitsToStore(hb);
    };

    const onRemoveHabit = (delHabit: IHabit) => {
        // const hb = todayHabits.filter(({ id }) => id !== delHabit.id);
        // setHabits(hb);
        // saveHabitsToStore(hb);
    };

    const onEditHabit = (edHabit: IHabit) => {
        // const hb = todayHabits.map(h => (h.id === edHabit.id ? edHabit : h));
        // setHabits(hb);
        // saveHabitsToStore(hb);
    };

    const onAddImage = (newImage: string) => {
        // setTodayImage(newImage);
        // saveImageToStore(newImage);
    };

    const onAddDesc = (desc: string) => {
        // setTodayDesc(desc);
        // _.debounce(() => saveDescToStore(desc), 1000);
    };

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
                editable={true}
                image={image}
                desc={description}
                onAddDesc={onAddDesc}
                onChangeImage={onAddImage}
            />
        </ContentContainer>
    );
};

export const Today = () => {
    const todayDate = new Date();
    const savedHabits = useSelector(
        (state: RootState) => state.habits.savedHabits
    );

    const [todayHabits, setTodayHabits] = useState<IStoreHabits[]>(
        _.isEmpty(savedHabits)
            ? [
                  {
                      date: todayDate.toString(),
                      image: '',
                      habits: [],
                      description: '',
                      progress: 0,
                  },
              ]
            : isSameDay(new Date(savedHabits[0].date as string), todayDate)
            ? savedHabits
            : [
                  {
                      date: todayDate.toString(),
                      image: '',
                      habits: savedHabits[0].habits.map(h => ({
                          ...h,
                          isDone: false,
                      })),
                      description: '',
                      progress: 0,
                  },
                  ...savedHabits,
              ]
    );

    return (
        <TodayContainer>
            <FlatList
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={todayHabits}
                renderItem={({ item, index }) => {
                    return <Content key={index} day={item} />;
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
