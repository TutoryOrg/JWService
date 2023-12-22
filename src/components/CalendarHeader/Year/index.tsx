import { CalendarMode } from '../index';
import { View, TouchableOpacity } from 'react-native';
import { YearHeaderContainer, DateLabelText } from './styled';

const YearHeader = (props: {
    year: number;
    setMode: (mode: CalendarMode) => void;
}) => {
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

interface IYear {
    setMode: (mode: CalendarMode) => void;
}
export const Year = (props: IYear) => {
    const { setMode } = props;
    const date = new Date();
    const year = date.getFullYear();

    return (
        <View>
            <YearHeader year={year} setMode={setMode} />
        </View>
    );
};
