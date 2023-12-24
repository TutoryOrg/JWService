import { AddHabit } from './index';
import { ThemeProvider } from 'styled-components/native';
import { ViewStoriesContainer } from 'components/ViewStory';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
    title: 'components/AddHabitabit',
    component: AddHabit,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof AddHabit>;

export const Dark: ComponentStory<typeof AddHabit> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <AddHabit {...args} />
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

export const Light: ComponentStory<typeof AddHabit> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <AddHabit {...args} />
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
