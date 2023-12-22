import { isMobile } from 'utils/scaleFunctions';
import { CalendarMode } from '../index';
import { TouchableOpacity, View } from 'react-native';
import {
    DateLabelText,
    DaysOfWeekLabelText,
    WeekHeaderContainer,
    WeekSubHeaderContainer,
} from './styled';

const WeekSubHeader = (props: { daysOfWeek: string[] }) => {
    const { daysOfWeek } = props;
    return (
        <WeekSubHeaderContainer>
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
        </WeekSubHeaderContainer>
    );
};

interface IWeekHeader {
    month: string;
    weekDay: string;
    numberDay: number;
    setMode: (mode: CalendarMode) => void;
}
const WeekHeader = (props: IWeekHeader) => {
    const { month, weekDay, numberDay, setMode } = props;
    return (
        <WeekHeaderContainer>
            <DateLabelText children={`${numberDay}.${weekDay}`} />
            <TouchableOpacity onPress={() => setMode(CalendarMode.MONTH)}>
                <DateLabelText children={`${month}>`} />
            </TouchableOpacity>
        </WeekHeaderContainer>
    );
};

interface IWeek {
    month: string;
    weekDay: string;
    numberDay: number;
    daysOfWeek: string[];
    setMode: (mode: CalendarMode) => void;
}
export const Week = (props: IWeek) => {
    const { month, weekDay, numberDay, daysOfWeek, setMode } = props;
    return (
        <View>
            <WeekHeader
                setMode={setMode}
                month={month}
                weekDay={weekDay}
                numberDay={numberDay}
            />
            <WeekSubHeader daysOfWeek={daysOfWeek} />
        </View>
    );
};
