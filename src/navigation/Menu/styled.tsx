import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export const SafeViewBg = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${props => props.theme.secondaryBnTextColor};
`;

export const ViewComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#faa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
