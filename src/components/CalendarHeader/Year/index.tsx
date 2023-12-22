import { CalendarMode } from '../index';
import { View, TouchableOpacity } from 'react-native';
import { YearHeaderContainer, DateLabelText } from './styled';

interface IYear {
    year: number;
    setMode: (mode: CalendarMode) => void;
}
export const Year = (props: IYear) => {
    const { year, setMode } = props;

    return (
        <YearHeaderContainer>
            <TouchableOpacity
                onPress={() => setMode(CalendarMode.MONTH)}
                children={<DateLabelText children={`<${year}`} />}
            />
        </YearHeaderContainer>
    );
};
