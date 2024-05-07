import styled from 'styled-components/native';
import { isMobile, scale, verticalScale } from 'utils/scaleFunctions';

export const YearContentContainer = styled.View`
    width: 90%;
    height: 70%;
    display: grid;
    grid-template-columns: ${isMobile ? 'auto auto auto' : 'auto auto auto auto'};
    justify-content: center;
    align-content: center;
    column-gap: ${isMobile ? verticalScale(50) : verticalScale(100)}px;
    row-gap: ${isMobile ? verticalScale(50) : verticalScale(100)}px;
`;
