import './i18n';
import { Menu } from 'navigation/Menu';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { useAppState } from 'hooks/useAppState';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from 'themes';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const store = useAppState();
    const isDarkMode = useColorScheme() === 'dark';

    const [fontsLoaded] = useFonts({
        Cascadia: require('./assets/fonts/CascadiaCode-Regular.otf'),
        CascadiaBold: require('./assets/fonts/CascadiaCode-Bold.otf'),
        CascadiaItalic: require('./assets/fonts/CascadiaCode-Italic.otf'),
        CascadiaMono: require('./assets/fonts/CascadiaMono-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Menu onLayoutRootView={onLayoutRootView} />
                <StatusBar style={isDarkMode ? 'light' : 'dark'} />
            </ThemeProvider>
        </Provider>
    );
}
