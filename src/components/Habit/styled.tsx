import styled from 'styled-components/native';
import { isMobile, verticalScale } from 'utils/scaleFunctions';
import { fontSizes, fontFamilies } from 'utils/constants';

import _ from 'lodash';

export const HabitContainer = styled.View`
    width: 100%;
    height: ${verticalScale(40)}px;
    margin-top: ${verticalScale(10)}px;
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
    width: 50%;
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
    height: 85%;
    width: ${verticalScale(50)}px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.borderColor};
`;

export const CreateButton = styled(CancelButton)`
    border: 2px solid
        ${props =>
            props.disabled ? props.theme.gray : props.theme.borderColor};
    background-color: ${props =>
        props.disabled ? props.theme.bgColor : props.theme.borderColor};
`;

export const ButtonLabel = styled.Text`
    color: ${props => props.theme.txtColor};
    font-family: ${fontFamilies.CascadiaBold};
    font-size: ${fontSizes.large + verticalScale(2)}px;
    text-align: center;
`;

export const IconsLabel = styled(ButtonLabel)`
    bottom: ${isMobile ? verticalScale(2) : 0}px;
`;

export const CreateButtonLabel = styled(IconsLabel)<{ disabled: boolean }>`
    color: ${props =>
        props.disabled ? props.theme.gray : props.theme.txtSelected};
`;

export const ShowHabitContainer = styled(CreateHabitContainer)``;

export const ShowHabitLabel = styled(ButtonLabel)`
    width: 50%;
    text-align: left;
    font-size: ${isMobile
        ? fontSizes.large
        : fontSizes.large + verticalScale(2)}px;
`;

export const ShowHabitButtonContainer = styled(CreateButtonsContainer)``;

export const ShowHabitIndicator = styled(IconsLabel)<{ isDone: boolean }>`
    color: ${props =>
        props.isDone ? props.theme.txtSelected : props.theme.gray};
`;

export const ShowCheckButton = styled.TouchableOpacity`
    height: 80%;
    width: ${verticalScale(80)}px;
    justify-content: center;
    border-radius: 7px;
    border: 2px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.gray};
`;

export const ShowCheckIndicator = styled.View<{ isDone: boolean }>`
    height: 100%;
    width: ${verticalScale(40)}px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: ${props =>
        props.isDone ? props.theme.borderColor : props.theme.selected};
    background-color: ${props =>
        props.isDone ? props.theme.selected : props.theme.bgColor};
    transform: translateX(${props => (props.isDone ? verticalScale(39) : 0)}px);
`;

export const ShowOptionsButton = styled.TouchableOpacity`
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const ShowOptionsContainer = styled(CreateHabitContainer)`
    width: ${verticalScale(100)}px;
`;

export const ShowEditOptButtons = styled(CancelButton)`
    background-color: ${props => props.theme.borderColor};
    width: ${verticalScale(45)}px;
`;

export const ShowBasketButtonLabel = styled(IconsLabel)`
    color: ${props => props.theme.txtSelected};
    font-size: ${isMobile
        ? fontSizes.large
        : fontSizes.large + verticalScale(10)}px;
    padding-top: ${verticalScale(5)}px;
`;

export const ShowEditButtonLabel = styled(ButtonLabel)`
    color: ${props => props.theme.txtSelected};
    font-size: ${isMobile
        ? fontSizes.large + verticalScale(2)
        : fontSizes.large + verticalScale(10)}px;
    height: 110%;
    width: 100%;
    transform: ${isMobile ? '' : 'rotate(90deg)'};
`;
