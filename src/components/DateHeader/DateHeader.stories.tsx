import { DateHeader } from './index';
import { ThemeProvider } from 'styled-components/native';
import { ViewStoriesContainer } from 'components/ViewStory';
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

export const Dark: ComponentStory<typeof DateHeader> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <DateHeader />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Dark.story = {
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const Light: ComponentStory<typeof DateHeader> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <DateHeader />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Light.story = {
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
