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
    const { date, progress } = args;
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <DateHeader date={date} progress={progress} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Dark.story = {
    args: {
        date: new Date(),
        progress: 10,
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const Light: ComponentStory<typeof DateHeader> = args => {
    const { date, progress } = args;
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <DateHeader date={date} progress={progress} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Light.story = {
    args: {
        date: new Date(),
        progress: 10,
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
