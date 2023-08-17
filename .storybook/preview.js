import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { darkTheme, lightTheme } from '../src/themes'

export const decorators = [withBackgrounds];

export const parameters = {
    backgrounds: {
        default: "plain",
        values: [
            { name: "plain", value: "white" },
            { name: "light", value: lightTheme.bgColor },
            { name: "dark", value: darkTheme.bgColor },
        ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};