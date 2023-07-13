import { Text } from 'react-native';
import { DateContainer, HeaderContainer, Month, Day, TodayContainer } from './styled';

export const Date = () => {
    return (
        <DateContainer>
            <Month>July</Month>
            <Day>4. Monday</Day>
        </DateContainer>
    );
};

export const Progress = () => {
    return <Text>Progress</Text>;
};

export const Header = () => {
    return (
        <HeaderContainer>
            <Date />
            <Progress />
        </HeaderContainer>
    );
};

export function Today() {
    return (
        <TodayContainer>
            <Header />
        </TodayContainer>
    );
}
