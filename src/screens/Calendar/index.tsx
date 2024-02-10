import { useRef } from 'react';
import { View, FlatList } from 'react-native';
import { CalendarHeader } from 'components';
import { CalendarContainer } from './styled';

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
    return (
        <View style={{ height: '80%', width: '90%', backgroundColor: 'yellow' }}>
            <FlatList ref={ref} />
        </View>
    );
};
