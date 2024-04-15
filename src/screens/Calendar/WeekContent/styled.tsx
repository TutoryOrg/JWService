import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { isMobile, windowHeight, windowWidth } from 'utils/scaleFunctions';

export const DirectionMoveLeft = styled.TouchableOpacity<{ disabled: boolean }>`
    opacity: ${props => props.disabled && 0};
    position: absolute;
    left: 8%;
    top: 300px;
    width: 50px;
    height: 50px;
    z-index: 99px;
    background-color: gray;
    border-radius: 90px;
    align-items: center;
    justify-content: center;
`;

export const DirectionMoveRight = styled.TouchableOpacity<{ disabled: boolean }>`
    opacity: ${props => props.disabled && 0};
    position: absolute;
    right: 8%;
    top: 300px;
    z-index: 99px;
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 90px;
    align-items: center;
    justify-content: center;
`;

export const InfoItemsLable = styled.Text<{ isDone: boolean }>`
    font-size: ${fontSizes.normal}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => (props.isDone ? props.theme.txtColor : props.theme.gray)};
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
    background-color: ${props => props.theme.bgColorDimmed};
`;

export const DateLabelText = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => props.theme.txtColor};
`;

export const ItemContainer = styled.View`
    width: ${windowWidth}px;
    height: 90vh;
    border: solid 2px white;
`;

export const CalendarContentContainer = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
`;
