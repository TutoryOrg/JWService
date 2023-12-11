import { DateHeader } from './index';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/DateHeader',
    component: DateHeader,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof DateHeader>;

export const Basic_darkTheme: ComponentStory<typeof DateHeader> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <DateHeader />
        </ThemeProvider>
    );
};

export const Basic_lightTheme: ComponentStory<typeof DateHeader> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <DateHeader />
        </ThemeProvider>
    );
};
