import { isMobile } from 'utils/scaleFunctions';
import { CalendarMode } from '../index';
import { days, months } from 'utils/constants';
import { useTranslation } from 'react-i18next';
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
    setMode: (mode: CalendarMode) => void;
}
export const Week = ({ setMode }: IWeek) => {
    const date = new Date();
    const { t } = useTranslation();
    const month = months[date.getMonth()];
    const weekDay = days[date.getDay()];
    const numberDay = date.getDate();
    const daysOfWeek = days.map(d => t(d));

    return (
        <View>
            <WeekHeader
                setMode={setMode}
                month={t(month)}
                weekDay={t(weekDay)}
                numberDay={numberDay}
            />
            <WeekSubHeader daysOfWeek={daysOfWeek} />
        </View>
    );
};
