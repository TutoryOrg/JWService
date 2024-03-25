import 'styled-components/native';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        themeName: string;
        bgColor: string;
        bgColorDimmed: string;
        txtColor: string;
        selected: string;
        txtSelected: string;
        borderColor: string;
        gray: string;
    }
}

export const lightTheme: DefaultTheme = {
    themeName: 'lightTheme',
    bgColor: '#FFFFFF',
    bgColorDimmed: '#ffffff80',
    txtColor: '#000000',
    selected: '#000000',
    txtSelected: '#FFFFFF',
    borderColor: '#000000',
    gray: '#dedede',
};

export const darkTheme: DefaultTheme = {
    themeName: 'darkTheme',
    bgColor: '#000000',
    bgColorDimmed: '#00000080',
    txtColor: '#FFFFFF',
    selected: '#FFFFFF',
    txtSelected: '#000000',
    borderColor: '#FFFFFF',
    gray: '#565555',
};
