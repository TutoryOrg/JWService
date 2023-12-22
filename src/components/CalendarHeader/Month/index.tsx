import { isMobile } from 'utils/scaleFunctions';
import { CalendarMode } from '../index';
import { TouchableOpacity, View } from 'react-native';
import {
    DateLabelText,
    DaysOfWeekLabelText,
    MonthHeaderContainer,
    MonthSubHeaderContainer,
} from './styled';

const MonthSubHeader = (props: { daysOfWeek: string[] }) => {
    const { daysOfWeek } = props;
    return (
        <MonthSubHeaderContainer>
            {daysOfWeek.map((d, i) => (
                <DaysOfWeekLabelText
                    key={i}
                    children={
                        isMobile
                            ? d.substring(0, 1).toUpperCase() +
                              d.substring(1, 3)
                            : d
                    }
                />
            ))}
        </MonthSubHeaderContainer>
    );
};

interface IMonthHeader {
    year: number;
    month: string;
    setMode: (mode: CalendarMode) => void;
}
const MonthHeader = (props: IMonthHeader) => {
    const { month, year, setMode } = props;
    return (
        <MonthHeaderContainer>
            <TouchableOpacity
                onPress={() => setMode(CalendarMode.WEEK)}
                children={<DateLabelText children={`<${month}`} />}
            />
            <TouchableOpacity
                onPress={() => setMode(CalendarMode.YEAR)}
                children={<DateLabelText children={`${year}>`} />}
            />
        </MonthHeaderContainer>
    );
};

interface IMonth {
    month: string;
    year: number;
    daysOfWeek: string[];
    setMode: (mode: CalendarMode) => void;
}
export const Month = (props: IMonth) => {
    const { month, year, daysOfWeek, setMode } = props;

    return (
        <View>
            <MonthHeader month={month} year={year} setMode={setMode} />
            <MonthSubHeader daysOfWeek={daysOfWeek} />
        </View>
    );
};
