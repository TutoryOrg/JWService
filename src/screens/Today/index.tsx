import { useEffect, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { isSameDay, windowHeight } from 'utils/scaleFunctions';
import { RootState, useAppDispatch } from 'store/redux';
import { DateHeader, Habit, ImagePicker } from 'components';
import { ContentContainer, TodayContainer } from './styled';
import { IHabit, IStoreHabits, setSavedHabits } from 'store/redux/habits';
import _ from 'lodash';

export const emptyHabit: IHabit = {
    id: '',
    label: '',
    isDone: false,
};

interface IContent {
    day: IStoreHabits;
    addHabit: (date: string, habits: IHabit[], hb: IHabit) => void;
    removeHabit: (date: string, habits: IHabit[], hb: IHabit) => void;
    editHabit: (date: string, habits: IHabit[], hb: IHabit) => void;
    addImage: (date: string, img: string) => void;
    addDescription: (date: string, desc: string) => void;
}

const Content = (props: IContent) => {
    const { day, addHabit, removeHabit, editHabit, addDescription, addImage } =
        props;
    const { date, habits, description, image, progress } = day;

    return (
        <ContentContainer>
            <DateHeader date={new Date(date as string)} progress={progress} />

            {habits.map((habit, index) => (
                <Habit
                    key={index}
                    habit={habit}
                    addHabit={h => addHabit(date as string, habits, h)}
                    editHabit={h => editHabit(date as string, habits, h)}
                    removeHabit={h => removeHabit(date as string, habits, h)}
                />
            ))}

            {habits.length < 5 && (
                <Habit
                    habit={emptyHabit}
                    addHabit={h => addHabit(date as string, habits, h)}
                    editHabit={h => editHabit(date as string, habits, h)}
                    removeHabit={h => removeHabit(date as string, habits, h)}
                />
            )}

            <ImagePicker
                editable={true}
                image={image}
                desc={description}
                onAddDesc={d => addDescription(date as string, d)}
                onChangeImage={i => addImage(date as string, i)}
            />
        </ContentContainer>
    );
};

export const Today = () => {
    const dispatch = useAppDispatch();
    const todayDate = new Date();
    const savedHabits = useSelector(
        (state: RootState) => state.habits.savedHabits
    );

    const [savedHabitsToday, setHabitsToday] = useState<IStoreHabits[]>(
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

    const saveDataAsync = useCallback(
        _.debounce((d: IStoreHabits[]) => {
            dispatch(setSavedHabits(d));
        }, 500),
        []
    );

    useEffect(() => {
        saveDataAsync(savedHabitsToday);
    }, [savedHabitsToday]);

    const addHabit = (date: string, habits: IHabit[], newHabit: IHabit) => {
        const hb = [...habits, newHabit];
        setHabitsToday((prev: IStoreHabits[]) =>
            prev.map(h => (h.date === date ? { ...h, habits: hb } : h))
        );
    };

    const removeHabit = (date: string, habits: IHabit[], delHabit: IHabit) => {
        const hb = habits.filter(({ id }) => id !== delHabit.id);
        setHabitsToday((prev: IStoreHabits[]) =>
            prev.map(h => (h.date === date ? { ...h, habits: hb } : h))
        );
    };

    const editHabit = (date: string, habits: IHabit[], edHabit: IHabit) => {
        const hb = habits.map(h => (h.id === edHabit.id ? edHabit : h));
        setHabitsToday((prev: IStoreHabits[]) =>
            prev.map(h => (h.date === date ? { ...h, habits: hb } : h))
        );
    };

    const addImage = (date: string, newImage: string) => {
        setHabitsToday((prev: IStoreHabits[]) =>
            prev.map(h => (h.date === date ? { ...h, image: newImage } : h))
        );
    };

    const addDescription = (date: string, desc: string) => {
        setHabitsToday((prev: IStoreHabits[]) =>
            prev.map(h => (h.date === date ? { ...h, description: desc } : h))
        );
    };

    return (
        <TodayContainer>
            <FlatList
                pagingEnabled
                data={savedHabitsToday}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <Content
                            key={index}
                            day={item}
                            addHabit={addHabit}
                            removeHabit={removeHabit}
                            editHabit={editHabit}
                            addImage={addImage}
                            addDescription={addDescription}
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
