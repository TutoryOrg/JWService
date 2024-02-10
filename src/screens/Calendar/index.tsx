import { View } from 'react-native';
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
    return <View style={{ height: '80%', width: '90%', backgroundColor: 'yellow' }}></View>;
};
