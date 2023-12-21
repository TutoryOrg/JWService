import { useTranslation } from 'react-i18next';
import { TouchableOpacity, View, Text } from 'react-native';
import { days, months } from 'utils/constants';
import { IMode } from '../index';
import { DateLabelText, WeekHeaderContainer } from './styled';

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

const WeekSubHeader = () => {
    return (
        <View>
            <Text>WeekSubHeader</Text>
        </View>
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

    return (
        <View>
            <WeekHeader
                setMode={setMode}
                month={t(month)}
                weekDay={t(weekDay)}
                numberDay={numberDay}
            />
            <WeekSubHeader />
        </View>
    );
};
