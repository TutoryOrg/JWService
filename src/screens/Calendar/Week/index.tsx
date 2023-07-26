import { View } from 'react-native';
import { WeekContainer, HeaderContainer, HeaderMonth, HeaderDays } from './styled';

const WeekHeader = () => {
    return (
        <HeaderContainer>
            <HeaderMonth />
            <HeaderDays />
        </HeaderContainer>
    );
};

const WeekContent = () => {
    return <View></View>;
};

export const WeekComponent = () => {
    return (
        <WeekContainer>
            <WeekHeader />
            <WeekContent />
        </WeekContainer>
    );
};
