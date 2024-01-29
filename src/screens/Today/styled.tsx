import styled from 'styled-components/native';
import { windowHeight, verticalScale } from 'utils/scaleFunctions';

export const ContentContainer = styled.View`
    width: 100%;
    height: ${windowHeight}px;
`;

export const TodayContainer = styled.View`
    width: 100%;
    height: ${windowHeight}px;
    align-self: center;
    padding-left: ${verticalScale(10)}px;
    padding-right: ${verticalScale(10)}px;
`;
