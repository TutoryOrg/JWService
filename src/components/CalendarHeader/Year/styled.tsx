import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';

export const DateLabelText = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => props.theme.txtColor};
`;
export const YearHeaderContainer = styled.View`
    width: 100%;
    height: ${verticalScale(50)}px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${props => props.theme.bgColor};
    border: 2px solid ${props => props.theme.borderColor};
    border-right-width: 0px;
    border-left-width: 0px;
    border-top-width: 0px;
`;
