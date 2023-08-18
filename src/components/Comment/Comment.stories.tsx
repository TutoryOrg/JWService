import { View } from 'react-native';
import { Comment } from './index';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme, lightTheme } from 'themes';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

const CommentMeta: ComponentMeta<typeof Comment> = {
    title: 'Components/Comment',
    component: Comment,
    args: {},
    decorators: [
        Story => (
            <View style={{ padding: 16 }}>
                <Story />
            </View>
        ),
    ],
};

export default CommentMeta;

type MyCommentStory = ComponentStory<typeof Comment>;

export const Light: MyCommentStory = args => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Comment {...args} />
        </ThemeProvider>
    );
};

export const Dark: MyCommentStory = args => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Comment {...args} />
        </ThemeProvider>
    );
};

Light.parameters = {
    backgrounds: {
        default: 'light',
    },
};

Dark.parameters = {
    backgrounds: {
        default: 'dark',
    },
};
