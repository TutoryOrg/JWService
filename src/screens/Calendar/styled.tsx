import styled from 'styled-components/native';
import { windowHeight, windowWidth } from 'utils/scaleFunctions';

export const ItemContainer = styled.View`
    width: ${windowWidth - 100}px;
    height: 100%;
    background-color: red;
`;

export const CalendarContentContainer = styled.View`
    width: ${windowWidth - 100}px;
    height: 90%;
    background-color: yellow;
    align-self: center;
`;

export const CalendarContainer = styled.View`
    width: 90%;
    height: 100%;
    align-items: center;
`;
