import { Habit } from './index';
import { ThemeProvider } from 'styled-components/native';
import { ViewStoriesContainer } from 'components/ViewStory';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
    title: 'components/Habit',
    component: Habit,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof Habit>;

export const Dark: ComponentStory<typeof Habit> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <Habit {...args} />
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

export const Light: ComponentStory<typeof Habit> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <Habit {...args} />
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
