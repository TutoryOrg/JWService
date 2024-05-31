import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { isMobile, verticalScale, windowWidth } from 'utils/scaleFunctions';

export const YearContentContainer = styled.View`
    width: 90%;
    height: 70%;
    display: grid;
    grid-template-columns: ${isMobile ? 'auto auto auto' : 'auto auto auto auto'};
    justify-content: center;
    align-content: center;
    column-gap: ${windowWidth / 8}px;
    row-gap: ${isMobile ? verticalScale(50) : verticalScale(100)}px;
`;

export const MonthContainer = styled.View<{ selected: boolean }>`
    width: ${isMobile ? '80' : '100'}px;
    height: ${isMobile ? '80' : '100'}px;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 80px;
    background-color: ${props => (props.selected ? props.theme.selected : props.theme.bgColor)};
`;

export const MonthLabel = styled.Text<{ selected: boolean }>`
    color: ${props => (props.selected ? props.theme.txtSelected : props.theme.txtColor)};
    font-size: ${isMobile ? fontSizes.Xlarge : fontSizes.XXlarge}px;
    font-family: ${fontFamilies.CascadiaMono};
`;
