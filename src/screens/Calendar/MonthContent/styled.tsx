import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export const NumberDate = styled.Text<{ selected: boolean }>`
    font-size: ${isMobile ? fontSizes.normalX : fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => (props.selected ? props.theme.txtSelected : props.theme.txtColor)};
`;

export const GridItem = styled.TouchableOpacity<{ invisible: boolean; selected: boolean }>`
    opacity: ${props => props.invisible && '0'};
    align-items: center;
    justify-content: center;
    height: ${isMobile ? verticalScale(36) : verticalScale(60)}px;
    width: ${isMobile ? verticalScale(36) : verticalScale(60)}px;
    border-radius: ${verticalScale(18)}px;
    background-color: ${props => (props.selected ? props.theme.selected : props.theme.bgColor)};
`;

export const MonthContentContainer = styled.View`
    width: 100%;
    height: 80%;
    align-items: center;
`;
