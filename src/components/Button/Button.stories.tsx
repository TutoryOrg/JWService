import { View } from "react-native";
import { MyButton } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";

const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
  args: {
    text: "MyButton",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Basic: MyButtonStory = (args) => <MyButton {...args} />;
