import { Arrow } from 'components/Arrow';
import { isMobile } from 'utils/scaleFunctions';
import { ContainerRow } from '../styled';
import { TouchableOpacity, View } from 'react-native';
import { CalendarMode, Direction } from 'utils/constants';
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
                    children={isMobile ? d.substring(0, 1).toUpperCase() + d.substring(1, 3) : d}
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
                children={
                    <ContainerRow>
                        <Arrow direction={Direction.LEFT} />
                        <DateLabelText children={month} />
                    </ContainerRow>
                }
            />
            <TouchableOpacity
                onPress={() => setMode(CalendarMode.YEAR)}
                children={
                    <ContainerRow>
                        <DateLabelText children={year} />
                        <Arrow direction={Direction.RIGHT} />
                    </ContainerRow>
                }
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
