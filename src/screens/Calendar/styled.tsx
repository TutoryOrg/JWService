import { fontFamilies, fontSizes } from 'utils/constants';
import { windowHeight, windowWidth } from 'utils/scaleFunctions';
import styled from 'styled-components/native';

export const ImageContainer = styled.View`
    width: 100%;
    height: 100%;
`;

export const InfoContainer = styled.View`
    position: absolute;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

export const DateLabelText = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => props.theme.txtColor};
`;

export const ItemContainer = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight - 140}px;
    border: solid 2px white;
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
