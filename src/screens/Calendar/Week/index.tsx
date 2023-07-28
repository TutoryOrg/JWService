import { Text, View } from 'react-native';
import { fontFamilies } from 'utils/constants';
import { verticalScale } from 'utils/scaleFunctions';
import {
    WeekContainer,
    HeaderContainer,
    HeaderMonth,
    ChooseDaysContainer,
    MonthText,
    MonthButton,
    LeftArrow,
} from './styled';

const DayOfTheWeek = ({ nameDay, numberDay }: { nameDay: string; numberDay: number }) => {
    return (
        <View
            style={{
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
            <Text style={{ fontFamily: fontFamilies.CascadiaMono, fontSize: verticalScale(18) }}>
                {nameDay}
            </Text>
            <Text style={{ fontFamily: fontFamilies.CascadiaMono, fontSize: verticalScale(16) }}>
                {numberDay}
            </Text>
        </View>
    );
};

const ChooseDays = () => {
    return (
        <ChooseDaysContainer>
            <DayOfTheWeek nameDay="Mon" numberDay={10} />
            <DayOfTheWeek nameDay="Tue" numberDay={11} />
            <DayOfTheWeek nameDay="Wen" numberDay={12} />
            <DayOfTheWeek nameDay="Thu" numberDay={13} />
            <DayOfTheWeek nameDay="Fri" numberDay={14} />
            <DayOfTheWeek nameDay="Sat" numberDay={15} />
            <DayOfTheWeek nameDay="Sun" numberDay={16} />
        </ChooseDaysContainer>
    );
};

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
