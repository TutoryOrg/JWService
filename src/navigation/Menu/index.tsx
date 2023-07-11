import { SafeViewBg, ViewComponent } from './styled';
import { useTheme } from 'styled-components';

export function Menu() {
    const theme = useTheme();
    console.log({ theme });
    // return <ViewComponent />;
    return <SafeViewBg />;
}
