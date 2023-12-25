import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';
import { fontSizes, fontFamilies } from 'utils/constants';
import _ from 'lodash';

export const HabitContainer = styled.View`
    width: 100%;
    height: ${verticalScale(40)}px;
    border-radius: 7px;
    border: 2px solid ${props => props.theme.borderColor};
    padding-left: ${verticalScale(15)}px;
    padding-right: ${verticalScale(15)}px;
`;

export const AddHabitContainer = styled.TouchableOpacity`
    width: 100%;
    height: ${verticalScale(40)}px;
    justify-content: center;
    align-items: center;
`;

export const AddHabitLabel = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaItalic};
    color: ${props => props.theme.txtColor};
`;

export const CreateHabitContainer = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const CreateNewHabitInput = styled.TextInput<{ value: string }>`
    width: 70%;
    height: 100%;
    color: ${props => props.theme.txtColor};
    font-size: ${fontSizes.normal}px;
    font-family: ${props =>
        _.isEmpty(props.value)
            ? fontFamilies.CascadiaItalic
            : fontFamilies.CascadiaMono};
    padding-left: 10px;
    outline-style: none;
`;

export const CreateButtonsContainer = styled.View`
    height: 100%;
    width: ${verticalScale(120)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const CancelButton = styled.TouchableOpacity`
    height: 80%;
    width: ${verticalScale(50)}px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.borderColor};
`;

export const CreateButton = styled(CancelButton)<{ value: string }>`
    border: 2px solid
        ${props =>
            _.isEmpty(props.value)
                ? props.theme.gray
                : props.theme.borderColor};
    background-color: ${props =>
        _.isEmpty(props.value) ? props.theme.bgColor : props.theme.borderColor};
`;

export const ButtonLabel = styled.Text`
    color: ${props => props.theme.txtColor};
    font-family: ${fontFamilies.CascadiaBold};
    font-size: ${fontSizes.large + verticalScale(2)}px;
`;

export const CreateButtonLabel = styled(ButtonLabel)<{ value: string }>`
    color: ${props =>
        _.isEmpty(props.value) ? props.theme.gray : props.theme.txtSelected};
`;

export const ShowHabitContainer = styled(CreateHabitContainer)``;

export const ShowHabitLabel = styled(ButtonLabel)``;

export const ShowHabitButtonContainer = styled(CreateButtonsContainer)``;

export const ShowHabitIndicator = styled(ButtonLabel)<{ isDone: boolean }>`
    color: ${props =>
        props.isDone ? props.theme.txtSelected : props.theme.gray};
`;
