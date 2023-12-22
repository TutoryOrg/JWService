import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, Text } from 'react-native';
import { days, months } from 'utils/constants';
import { isMobile } from 'utils/scaleFunctions';
import { IMode } from '../index';
import {
    DaysOfWeekLabelText,
    WeekSubHeaderContainer,
    DateLabelText,
    WeekHeaderContainer,
} from './styled';

interface IWeekHeader {
    setMode: (mode: IMode) => void;
    month: string;
    weekDay: string;
    numberDay: number;
}
const WeekHeader = (props: IWeekHeader) => {
    const { setMode, month, weekDay, numberDay } = props;
    const DateLabel = () => {
        return (
            <View>
                <DateLabelText children={`${numberDay}.${weekDay}`} />
            </View>
        );
    };
    const GoToMonth = (props: { setMode: (mode: IMode) => void }) => {
        return (
            <TouchableOpacity onPress={() => setMode('month')}>
                <DateLabelText children={`${month}>`} />
            </TouchableOpacity>
        );
    };
    return (
        <WeekHeaderContainer>
            <DateLabel />
            <GoToMonth setMode={setMode} />
        </WeekHeaderContainer>
    );
};

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

interface IWeek {
    setMode: (mode: IMode) => void;
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
