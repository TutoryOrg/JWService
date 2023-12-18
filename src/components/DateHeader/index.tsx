import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { months, days } from 'utils/constants';
import { Container, DateLabelText, MonthLabelText } from './styled';

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

interface IProgressCircle {
    progress: number;
}
export const ProgressCircle = (props: IProgressCircle) => {
    const { progress } = props;
    return (
        <View>
            <DateLabelText children={progress} />
        </View>
    );
};

export const DateHeader = () => {
    const date = new Date();
    const { t } = useTranslation();
    const progress: number = 90;
    const month = months[date.getMonth()];
    const weekDay = days[date.getDay()];
    const numberDay = date.getDate();

    return (
        <Container>
            <DateLabel
                month={t(month)}
                weekDay={t(weekDay)}
                numberDay={numberDay}
            />
            <ProgressCircle progress={progress} />
        </Container>
    );
};
