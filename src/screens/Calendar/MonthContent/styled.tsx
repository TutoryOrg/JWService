import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export const NumberDate = styled.Text<{ progress: number; selected: boolean }>`
    font-size: ${isMobile ? fontSizes.normalX : fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => (props.progress >= 75 ? props.theme.txtSelected : props.theme.txtColor)};
`;

export const GridItem = styled.TouchableOpacity<{
    progress: number;
    invisible: boolean;
    selected: boolean;
}>`
    opacity: ${props => props.invisible && '0'};
    align-items: center;
    justify-content: center;
    height: ${isMobile ? verticalScale(36) : verticalScale(60)}px;
    width: ${isMobile ? verticalScale(36) : verticalScale(60)}px;
    border-radius: 12px;
    background-color: ${props =>
        props.selected
            ? props.progress === 0
                ? props.theme.pro0
                : props.progress >= 0 && props.progress < 25
                ? props.theme.pro1
                : props.progress >= 25 && props.progress < 55
                ? props.theme.pro2
                : props.progress >= 55 && props.progress < 75
                ? props.theme.pro3
                : props.progress >= 75 && props.progress < 100
                ? props.theme.pro4
                : props.progress === 100
                ? props.theme.pro5
                : props.theme.txtSelected
            : props.theme.bgColor};
`;
