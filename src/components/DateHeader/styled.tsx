import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { verticalScale, moderateScale } from 'utils/scaleFunctions';

export const MonthLabelText = styled.Text`
    font-size: ${fontSizes.normal}px;
    font-family: ${fontFamilies.Cascadia};
    color: ${props => props.theme.txtColor};
`;

export const DateLabelText = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${props => props.theme.txtColor};
`;

export const Container = styled.View`
    width: 100%;
    height: ${verticalScale(50)}px;
    background-color: #0ff;
    align-items: center;
    flex-direction: row;
    justify-content: space-between; 
    background-color: ${props => props.theme.bgColor};
    border: ${props => `2px solid ${props.theme.borderColor}`};
    border-right-width: 0px;
    border-left-width: 0px;
    border-top-width: 0px;
`;
