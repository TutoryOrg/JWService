import { Arrow } from 'components/Arrow';
import { isMobile } from 'utils/scaleFunctions';
import { ContainerRow } from '../styled';
import { TouchableOpacity, View } from 'react-native';
import { CalendarMode, Direction } from 'utils/constants';
import {
    DateLabelText,
    DaysOfWeekLabelText,
    WeekHeaderContainer,
    WeekSubHeaderContainer,
} from './styled';
import _ from 'lodash';

const WeekSubHeader = (props: { weekDay: string; daysOfWeek: string[] }) => {
    const { weekDay, daysOfWeek } = props;
    return (
        <WeekSubHeaderContainer>
            {daysOfWeek.map((d, i) => (
                <DaysOfWeekLabelText
                    key={i}
                    selected={_.isEqual(d, weekDay)}
                    children={isMobile ? d.substring(0, 1).toUpperCase() + d.substring(1, 3) : d}
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
                <ContainerRow>
                    <DateLabelText children={month} />
                    <Arrow direction={Direction.RIGHT} />
                </ContainerRow>
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
            <WeekHeader setMode={setMode} month={month} weekDay={weekDay} numberDay={numberDay} />
            <WeekSubHeader weekDay={weekDay} daysOfWeek={daysOfWeek} />
        </View>
    );
};
