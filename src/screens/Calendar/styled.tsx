import styled from 'styled-components/native';
import { isMobile, windowHeight, windowWidth } from 'utils/scaleFunctions';

export const ItemContainer = styled.View`
    width: ${isMobile ? windowWidth : windowWidth - 100}px;
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
