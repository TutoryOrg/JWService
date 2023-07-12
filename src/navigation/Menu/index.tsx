import { SideMenu } from 'navigation/SideMenu';
import { Content, Container } from './styled';

export function Menu() {
    return (
        <Container>
            <SideMenu />
            <Content />
        </Container>
    );
}
