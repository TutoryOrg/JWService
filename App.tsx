import { Menu } from 'navigation/Menu';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { useAppState } from 'hooks/useAppState';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from 'themes';

export default function App() {
    const store = useAppState();
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Provider store={store}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Menu />
                <StatusBar style="auto" />
            </ThemeProvider>
        </Provider>
    );
}
