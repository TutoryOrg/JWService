import styled from 'styled-components/native';
import { View } from 'react-native';
import { months, days } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import Svg, { Circle, Rect } from 'react-native-svg';
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
    const size = 65;
    const strokeWidth = 13;
    const radius = (size - strokeWidth) / 2;
    const circum = radius * 2 * Math.PI;
    const svgProgress = 100 - progress;

    const CircleStyled = styled(Circle)`
        fill: transparent;
        stroke: ${props => props.theme.gray};
    `;

    const CircleProgressStyled = styled(Circle)`
        fill: transparent;
        stroke: ${props => props.theme.txtColor};
    `;

    return (
        <View style={{ bottom: 10 }}>
            <Svg width={size} height={size}>
                <CircleStyled
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth={strokeWidth}
                />
                <CircleProgressStyled
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circum} ${circum}`}
                    transform={`rotate(-90, ${size / 2}, ${size / 2})`}
                    strokeDashoffset={
                        radius * Math.PI * 2 * (svgProgress / 100)
                    }
                />
            </Svg>
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
