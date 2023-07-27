import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';
import { verticalScale } from 'utils/scaleFunctions';
import { AntDesign } from '@expo/vector-icons';

export const LeftArrow = styled(AntDesign)`
    color: ${props => props.theme.borderColor};
`;

export const ChooseDays = styled.View``;

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
