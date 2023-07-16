import styled from 'styled-components/native';
import { windowHeight } from 'utils/scaleFunctions';

export const ContentContainer = styled.View`
    height: ${windowHeight}px;
    align-items: center;
    border-top-right-radius: 10px;
`;

export const TodayContainer = styled.View`
    height: ${windowHeight}px;
    border-top-right-radius: 8px;
`;
