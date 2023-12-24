import styled from 'styled-components/native';
import { useFontsAndLayout } from 'hooks/useFontsAndLayout';

const Container = styled.View`
    top: 10%;
    width: 100%;
    height: 100%;
    align-items: center;
`;

interface ViewStoriesProps {
    children: JSX.Element;
}

export const ViewStoriesContainer = ({
    children,
}: ViewStoriesProps): JSX.Element | null => {
    const { fontsLoaded } = useFontsAndLayout();
    if (!fontsLoaded) return null;
    return <Container>{children}</Container>;
};
