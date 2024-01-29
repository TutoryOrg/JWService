import styled from 'styled-components/native';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { months, days } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import { Container, DateLabelText, MonthLabelText } from './styled';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

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
    const size = 55;
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
        <View style={{ height: size + 5 }}>
            <Svg width={size} height={size}>
                <CircleStyled
                    r={radius - (isMobile ? 2 : 0)}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth={strokeWidth}
                />
                <CircleProgressStyled
                    r={radius - (isMobile ? 2 : 0)}
                    cx={size / 2}
                    cy={size / 2}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${circum} ${circum}`}
                    transform={`rotate(-90, ${size / 2}, ${size / 2})`}
                    strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
                />
            </Svg>
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
