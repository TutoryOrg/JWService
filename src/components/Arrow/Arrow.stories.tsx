import { Arrow } from './index';
import { Direction } from 'utils/constants';
import { ThemeProvider } from 'styled-components/native';
import { ViewStoriesContainer } from 'components/ViewStory';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react-native';

export default {
    title: 'components/Arrow',
    component: Arrow,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof Arrow>;

export const Dark: ComponentStory<typeof Arrow> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <Arrow {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Dark.story = {
    args: {
        direction: Direction.RIGHT,
    },
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const Light: ComponentStory<typeof Arrow> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <Arrow {...args} />
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Light.story = {
    args: {
        direction: Direction.LEFT,
    },
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
