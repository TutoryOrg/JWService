import { View } from 'react-native';
import { months, days } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import { Container, DateLabelText, MonthLabelText } from './styled';
import { ProgressCircle } from 'components/ProgressCircle';

interface IDateLabel {
    month: string;
    weekDay: string;
    numberDay: number;
}
export const DateLabel = (props: IDateLabel) => {
    const { month, weekDay, numberDay } = props;
    return (
        <View>
            <MonthLabelText children={month} />
            <DateLabelText children={`${numberDay}.${weekDay}`} />
        </View>
    );
};

interface IDateHeader {
    date: Date;
    progress: number;
}
export const DateHeader = (props: IDateHeader) => {
    const { date, progress } = props;
    const { t } = useTranslation();
    const month = months[date.getMonth()];
    const weekDay = days[date.getDay()];
    const numberDay = date.getDate();

    return (
        <Container>
            <DateLabel month={t(month)} weekDay={t(weekDay)} numberDay={numberDay} />
            <ProgressCircle progress={progress} />
        </Container>
    );
};
