import { View } from 'react-native';
import {
    WeekContainer,
    HeaderContainer,
    HeaderMonth,
    ChooseDays,
    MonthText,
    MonthButton,
    LeftArrow,
} from './styled';

interface IWeekHeader {
    onViewMonth: () => void;
}
const WeekHeader = ({ onViewMonth }: IWeekHeader) => {
    return (
        <HeaderContainer>
            <HeaderMonth>
                <MonthButton onPress={onViewMonth}>
                    <LeftArrow name="left" size={24} />
                    <MonthText children={'July'} />
                </MonthButton>
            </HeaderMonth>
            <ChooseDays />
        </HeaderContainer>
    );
};

const WeekContent = () => {
    return <View></View>;
};

interface IWeekComponent {
    onViewMonth: () => void;
}
export const WeekComponent = ({ onViewMonth }: IWeekComponent) => {
    return (
        <WeekContainer>
            <WeekHeader onViewMonth={onViewMonth} />
            <WeekContent />
        </WeekContainer>
    );
};
