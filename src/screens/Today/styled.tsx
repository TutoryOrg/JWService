import styled from 'styled-components/native';
import { verticalScale, windowHeight } from 'utils/scaleFunctions';

export const ImageContainer = styled.View`
    width: 90%;
    height: 45%;
    align-self: center;
    margin-top: ${verticalScale(25)}px;
`;

export const ContentContainer = styled.View`
    width: 100%;
    height: ${windowHeight}px;
`;

export const TodayContainer = styled.View`
    width: 100%;
    height: ${windowHeight}px;
`;
