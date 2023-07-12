import 'styled-components/native';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        bgColor: string;
        txtColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    bgColor: '#FFFFFF',
    txtColor: '#000000',
};

export const darkTheme: DefaultTheme = {
    bgColor: '#000000',
    txtColor: '#FFFFFF',
};
