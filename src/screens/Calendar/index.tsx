import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { IStoreHabits } from 'store/redux/habits';
import { CalendarHeader } from 'components';
import { View, Text, FlatList } from 'react-native';
import { RootState, useAppDispatch } from 'store/redux';
import { CalendarContainer, CalendarContentContainer, ItemContainer } from './styled';

export const Calendar = () => {
    const date = new Date();

    return (
        <CalendarContainer>
            <CalendarHeader date={date} />
            <CalendarContent />
        </CalendarContainer>
    );
};

const CalendarContent = () => {
    const ref = useRef<FlatList>(null);
    const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);

    const renderItem = ({ item, index }: { item: IStoreHabits; index: number }) => {
        return (
            <ItemContainer>
                <Text>{item.date}</Text>
            </ItemContainer>
        );
    };

    return (
        <CalendarContentContainer>
            <FlatList
                ref={ref}
                data={savedHabits}
                horizontal={true}
                renderItem={renderItem}
                keyExtractor={item => item.date}
                pagingEnabled={true}
                maxToRenderPerBatch={5}
            />
        </CalendarContentContainer>
    );
};
