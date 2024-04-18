import styled from 'styled-components/native';
import { useFontsAndLayout } from 'hooks/useFontsAndLayout';

const Container = styled.View`
    flex: 1;
    align-items: center;
`;

interface ViewStoriesProps {
    children: JSX.Element;
}

export const ViewStoriesContainer = ({ children }: ViewStoriesProps): JSX.Element | null => {
    const { fontsLoaded } = useFontsAndLayout();
    if (!fontsLoaded) return null;
    return <Container>{children}</Container>;
};
