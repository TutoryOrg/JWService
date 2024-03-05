import { days } from 'utils/constants';
import { RootState } from 'store/redux';
import { useSelector } from 'react-redux';
import { IStoreHabits } from 'store/redux/habits';
import { CalendarHeader } from 'components';
import { Text, FlatList } from 'react-native';
import { useRef, useState } from 'react';
import { CalendarContainer, CalendarContentContainer, ItemContainer } from './styled';
import { windowWidth } from 'utils/scaleFunctions';

export const Calendar = () => {
    const date = new Date();
    const weekDay = days[date.getDay()];
    console.log({ weekDay });

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
    const [index, setIndex] = useState(0);

    const renderItem = ({ item, index }: { item: IStoreHabits; index: number }) => {
        const date = new Date(item.date);
        const weekDay = days[date.getDay()];
        console.log('-', { weekDay });

        return (
            <ItemContainer>
                <Text style={{ color: 'white' }}>{item.date}</Text>
            </ItemContainer>
        );
    };
    console.log({ savedHabits });
    return (
        <CalendarContentContainer>
            <FlatList
                ref={ref}
                data={savedHabits}
                inverted={true}
                horizontal={true}
                renderItem={renderItem}
                initialScrollIndex={index}
                keyExtractor={item => item.date}
                pagingEnabled={true}
                maxToRenderPerBatch={5}
            />
        </CalendarContentContainer>
    );
};
