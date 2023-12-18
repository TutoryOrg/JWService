import { StyleSheet, View } from 'react-native';
import { useFontsAndLayout } from 'hooks/useFontsAndLayout';

interface ViewStoriesProps {
    children: JSX.Element;
}

export const ViewStoriesContainer = ({
    children,
}: ViewStoriesProps): JSX.Element | null => {
    const { fontsLoaded } = useFontsAndLayout();
    if (!fontsLoaded) return null;
    return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        top: '10%',
        width: '90%',
    },
});
