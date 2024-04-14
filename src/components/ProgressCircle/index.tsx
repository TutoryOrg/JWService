import styled from 'styled-components/native';
import { View } from 'react-native';
import { isMobile } from 'utils/scaleFunctions';
import Svg, { Circle } from 'react-native-svg';
import { fontFamilies, fontSizes } from 'utils/constants';

interface IProgressCircle {
    size: number;
    progress: number;
    strokeWidth: number;
    showNumber: boolean;
}
export const ProgressCircle = (props: IProgressCircle) => {
    const { progress, size, strokeWidth, showNumber } = props;
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

    const NumberText = styled.Text`
        font-size: ${fontSizes.normal}px;
        font-family: ${fontFamilies.CascadiaBold};
        color: ${props => props.theme.txtColor};
        position: absolute;
        top: ${(size - strokeWidth) / 2}px;
        left: ${progress === 0
            ? (size - strokeWidth + 4) / 2
            : progress === 100
            ? (size - strokeWidth - 12) / 2
            : (size - strokeWidth - 5) / 2}px;
    `;

    return (
        <View
            style={{
                height: size,
                width: size,
            }}>
            {showNumber && <NumberText>{progress}%</NumberText>}
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
