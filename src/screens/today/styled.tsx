import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { verticalScale, isMobile } from 'utils/scaleFunctions';

export const CommentContainer = styled.TextInput`
    width: 80%;
    height: 10%;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    align-self: center;
    font-size: ${verticalScale(fontSizes.small)}px;
    background-color: lightgrey;
`;

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 80%;
    height: 35%;
    max-width: 800px;
    margin-top: 30px;
    border-radius: 10px;
    align-self: center;
    background-color: lightgrey;
`;

export const Value = styled.Text`
    color: ${props => props.theme.txtColor};
    font-family: ${fontFamilies.CascadiaMono};
    font-size: ${isMobile ? verticalScale(fontSizes.normal) : 30}px;
`;

export const Title = styled.Text`
    color: ${props => props.theme.txtColor};
    font-family: ${fontFamilies.Cascadia};
    font-size: ${isMobile ? verticalScale(fontSizes.normal) : 30}px;
`;

export const Field = styled.View`
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
`;

export const FieldContainer = styled.View`
    height: 30%;
    min-width: ${isMobile ? 200 : 100}px;
    align-items: center;
    justify-content: space-around;
    margin-top: ${verticalScale(20)}px;
`;

export const Month = styled.Text`
    font-family: 'CascadiaItalic';
    font-size: ${isMobile ? verticalScale(fontSizes.small) : 22}px;
    color: ${props => props.theme.txtColor};
`;

export const Day = styled.Text`
    font-family: 'CascadiaMono';
    font-size: ${isMobile ? verticalScale(fontSizes.large) : 40}px;
    color: ${props => props.theme.txtColor};
`;

export const DateContainer = styled.View``;

export const HeaderContainer = styled.View`
    width: 90%;
    height: 12%;
    min-height: 90px;
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
