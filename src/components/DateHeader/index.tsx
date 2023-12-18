import { View } from 'react-native';
import { Container, DateLabelText, MonthLabelText } from './styled';

export const DateLabel = () => {
    return (
        <View>
            <MonthLabelText>July</MonthLabelText>
            <DateLabelText>4.Monday</DateLabelText>
        </View>
    );
};

export const ProgressCircle = () => {
    return (
        <View>
            <DateLabelText>()</DateLabelText>
        </View>
    );
};

export const DateHeader = () => {
    return (
        <Container>
            <DateLabel />
            <ProgressCircle />
        </Container>
    );
};
