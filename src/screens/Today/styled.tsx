import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';

export const TodayContainer = styled.View`
    width: 100%;
    height: 100%;
    align-self: center;
    padding-left: ${verticalScale(10)}px;
    padding-right: ${verticalScale(10)}px;
`;
