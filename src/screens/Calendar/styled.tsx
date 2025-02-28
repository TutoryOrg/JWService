import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { isMobile, windowWidth } from 'utils/scaleFunctions';

export const InfoItemsLable = styled.Text<{ isDone: boolean }>`
    font-size: ${fontSizes.normal}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${(props) => (props.isDone ? props.theme.txtColor : props.theme.gray)};
`;

export const InfoContainer = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    flex-direction: row;
    justify-content: space-around;
    padding-left: ${isMobile ? '0%' : '15%'};
    padding-right: ${isMobile ? '0%' : '15%'};
    padding-top: ${isMobile ? '10%' : '1%'};
    background-color: ${(props) => props.theme.bgColorDimmed};
`;

export const DateLabelText = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${(props) => props.theme.txtColor};
`;

export const ItemContainer = styled.View`
    width: ${windowWidth}px;
    height: 90vh;
    border: solid 2px white;
`;

export const CalendarContainer = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
`;
