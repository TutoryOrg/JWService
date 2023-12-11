import { DateHeader } from './index';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ViewStoriesContainer } from 'components/ViewStory';

export default {
    title: 'components/DateHeader',
    component: DateHeader,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof DateHeader>;

export const DateHeader_dark: ComponentStory<typeof DateHeader> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <DateHeader />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

export const DateHeader_light: ComponentStory<typeof DateHeader> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <DateHeader />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};
