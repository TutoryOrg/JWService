import { IMode } from '../index';
import { View, Text } from 'react-native';

interface IYear {
    setMode: (mode: IMode) => void;
}
export const Year = (props: IYear) => {
    return (
        <View>
            <Text>Year</Text>
        </View>
    );
};
