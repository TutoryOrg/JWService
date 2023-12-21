import { IMode } from '../index';
import { View, Text } from 'react-native';

interface IMonth {
    setMode: (mode: IMode) => void;
}
export const Month = (props: IMonth) => {
    setTimeout(() => {
        props.setMode('week');
    }, 1000);
    return (
        <View>
            <Text>Month</Text>
        </View>
    );
};
