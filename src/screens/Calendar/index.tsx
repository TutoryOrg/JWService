import { View } from 'react-native';
import { CalendarHeader } from 'components';

export const Calendar = () => {
    return (
        <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
            <CalendarHeader />
        </View>
    );
};
