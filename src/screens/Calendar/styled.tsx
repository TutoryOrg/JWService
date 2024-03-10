import { windowHeight, windowWidth } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';
import styled from 'styled-components/native';

export const DateLabelText = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => props.theme.txtColor};
`;

export const ItemContainer = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    border: solid 2px yellow;
    align-items: center;
`;

export const CalendarContentContainer = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
`;

export const CalendarContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;
