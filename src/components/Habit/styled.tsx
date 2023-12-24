import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';
import { fontSizes, fontFamilies } from 'utils/constants';

export const AddHabitLabel = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaItalic};
    color: ${props => props.theme.txtColor};
`;

export const AddHabitContainer = styled.TouchableOpacity`
    width: 100%;
    height: ${verticalScale(30)}px;
    justify-content: center;
    align-items: center;
`;

export const HabitContainer = styled.View`
    width: 100%;
    height: ${verticalScale(30)}px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 7px;
`;
