import styled from 'styled-components/native';
import { Screens } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export interface ISideMenu {
    options: IOption[];
    setOptions: (options: IOption[]) => void;
}

export interface IMenuOption extends IOption {
    setSelected: (text: string) => void;
}

export interface IOption {
    text: string;
    selected?: boolean;
    lastOne?: boolean;
}

export const initOptions: IOption[] = [
    {
        text: Screens.TODAY,
        selected: true,
        lastOne: false,
    },
    {
        text: Screens.CALENDAR,
        selected: false,
        lastOne: false,
    },
    {
        text: Screens.GOALS,
        selected: false,
        lastOne: false,
    },
    {
        text: Screens.PROFILE,
        selected: false,
        lastOne: true,
    },
];

export const TextContainer = styled.Text<{ selected?: boolean }>`
    width: 110px;
    text-align: center;
    align-self: center;
    font-size: ${isMobile ? verticalScale(15) : 22}px;
    transform: ${isMobile ? 'rotate(-90deg)' : ''};
    color: ${props => (props.selected ? props.theme.txtSelected : props.theme.txtColor)};
`;

export const OptionContainer = styled.TouchableOpacity<{ selected?: boolean; lastOne?: boolean }>`
    right: 0px;
    bottom: ${props => (props.lastOne ? 0 : 1)}px;
    height: 20%;
    width: 100%;
    align-content: center;
    justify-content: center;
    border: ${props => `1px solid ${props.theme.borderColor}`};
    border-right-width: 0px;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    position: ${props => (props.lastOne ? 'absolute' : 'relative')};
    background-color: ${props => (props.selected ? props.theme.selected : props.theme.bgColor)};
`;

export const SideMenuContainer = styled.View`
    max-width: 120px;
    min-width: ${isMobile ? 0 : 90}px;
    width: 8%;
    height: 100%;
    align-items: center;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 1.5px;
    border-top-left-radius: 8px;
    border: 1px solid ${props => props.theme.borderColor};
`;

export const MenuContainer = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: row;
    margin-top: ${isMobile ? 25 : 0}px;
    border: ${props => (isMobile ? `2px solid ${props.theme.borderColor}` : 'none')};
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${props => props.theme.bgColor};
`;

export const Content = styled.View`
    width: 92%;
    height: 100%;
    border-top-right-radius: 8px;
`;
