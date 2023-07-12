import { Text } from 'react-native';
import { ContentContainer, MenuContainer, SafeViewBg } from './styled';

export function Menu() {
    return (
        <SafeViewBg>
            <MenuContainer>
                <Text>Menu</Text>
            </MenuContainer>
            <ContentContainer>
                <Text>Content</Text>
            </ContentContainer>
        </SafeViewBg>
    );
}
