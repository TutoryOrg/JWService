import { CalendarMode } from 'utils/constants';
import { ThemeProvider } from 'styled-components/native';
import { CalendarHeader } from './index';
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
                <CalendarHeader date={new Date()} mode={CalendarMode.WEEK} setMode={() => null} />
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
                <CalendarHeader date={new Date()} mode={CalendarMode.WEEK} setMode={() => null} />
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
