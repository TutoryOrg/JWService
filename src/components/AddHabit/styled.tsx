import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';
import { fontFamilies, fontSizes } from 'utils/constants';

export const AddHabitLabel = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaItalic};
    color: ${props => props.theme.txtColor};
`;

export const AddHabitContainer = styled.TouchableOpacity`
    height: ${verticalScale(30)}px;
    width: 100%;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 7px;
    justify-content: center;
    align-items: center;
`;
