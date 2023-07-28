import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { verticalScale } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';

export const LeftArrow = styled(AntDesign)`
    color: ${props => props.theme.borderColor};
`;

export const DayOfTheWeekContainer = styled.TouchableOpacity`
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
`;

export const NameOfDay = styled.Text`
    font-size: ${verticalScale(16)}px;
    font-family: ${fontFamilies.CascadiaMono};
    color: ${props => props.theme.txtColor};
`;

export const NumberOfDay = styled.Text<{ selected: boolean }>`
    width: 30px;
    height: 30px;
    border: 2px;
    text-align: center;
    border-radius: 10px;
    border-bottom-width: 4px;
    font-size: ${verticalScale(14)}px;
    line-height: ${verticalScale(25)}px;
    font-family: ${fontFamilies.CascadiaMono};
    border-color: ${props => props.theme.selected};
    color: ${props =>
        props.selected ? props.theme.txtSelected : props.theme.txtColor};
    background-color: ${props =>
        props.selected ? props.theme.selected : props.theme.bgColor};
`;

export const ChooseDaysContainer = styled.View`
    height: 60%;
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
`;

export const MonthText = styled.Text`
    font-family: ${fontFamilies.CascadiaMono};
    font-size: ${verticalScale(fontSizes.large)}px;
    color: ${props => props.theme.txtColor};
`;

export const MonthButton = styled.TouchableOpacity`
    flex-direction: row;
    height: 40px;
    width: 100px;
    align-items: center;
    margin-top: ${verticalScale(30)}px;
`;

export const HeaderMonth = styled.View`
    width: 90%;
    height: 50%;
    border-bottom-width: 2px;
    border-color: ${props => props.theme.borderColor};
`;

export const HeaderContainer = styled.View`
    height: 20%;
    width: 100%;
    align-items: center;
`;

export const ContentContainer = styled.View``;

export const WeekContainer = styled.View`
    width: 100%;
    height: 100%;
`;
