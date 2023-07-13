import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { verticalScale, isMobile } from 'utils/scaleFunctions';

export const Month = styled.Text`
    font-size: ${isMobile ? verticalScale(fontSizes.small) : 22}px;
    font-family: 'CascadiaItalic';
    color: ${props => props.theme.txtColor};
`;

export const Day = styled.Text`
    font-style: normal;
    font-size: ${isMobile ? verticalScale(fontSizes.large) : 40}px;
    font-family: 'CascadiaMono';
    color: ${props => props.theme.txtColor};
`;

export const DateContainer = styled.View``;

export const HeaderContainer = styled.View`
    width: 90%;
    height: 12%;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom-width: 2px;
    border-color: ${props => props.theme.borderColor};
`;

export const TodayContainer = styled.View`
    width: 100%;
    height: 100%;
    border-top-right-radius: 8px;
`;
