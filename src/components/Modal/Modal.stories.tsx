import { Text } from 'react-native';
import { Modal } from './index';
import { ThemeProvider } from 'styled-components/native';
import { ViewStoriesContainer } from 'components/ViewStory';
import { darkTheme, lightTheme } from 'themes';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'components/Modal',
    component: Modal,
    parameters: {
        notes: '',
    },
    argTypes: {},
} as ComponentMeta<typeof Modal>;

export const Dark: ComponentStory<typeof Modal> = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <ViewStoriesContainer>
                <Modal>
                    <Text>hola</Text>
                </Modal>
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Dark.story = {
    args: {},
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const Light: ComponentStory<typeof Modal> = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ViewStoriesContainer>
                <Text>hola</Text>
            </ViewStoriesContainer>
        </ThemeProvider>
    );
};

Light.story = {
    args: {},
    parameters: {
        backgrounds: {
            default: 'light',
        },
    },
};
