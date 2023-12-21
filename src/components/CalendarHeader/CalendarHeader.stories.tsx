import { CalendarHeader } from './index';
import { ThemeProvider } from 'styled-components/native';
import { ViewStoriesContainer } from 'components/ViewStory';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/CalendarHeader',
    component: CalendarHeader,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof CalendarHeader>;

export const Dark: ComponentStory<typeof CalendarHeader> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <CalendarHeader />
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

export const Light: ComponentStory<typeof CalendarHeader> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <CalendarHeader />
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
