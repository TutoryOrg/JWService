import { useState } from 'react';
import { Months, Days } from '../../index';
import { useTranslation } from 'react-i18next';
import {
    HeaderContainer,
    HeaderMonth,
    ChooseDaysContainer,
    MonthText,
    MonthButton,
    LeftArrow,
    DayOfTheWeekContainer as WeekTouchable,
    NameOfDay,
    NumberOfDay,
} from './styled';

function getWeekDays(selectedDay: Date) {
    const daysInWeek = 7;
    const weekDays = [];

    // Get the day of the week (0 for Sunday, 1 for Monday, etc.) of the selected day
    const selectedDayKey = selectedDay.getDay();

    // Calculate the difference in keys between the selected day and Monday (to get the start of the week)
    const daysUntilMonday = (selectedDayKey + daysInWeek - 1) % daysInWeek;
    const startOfWeek = new Date(selectedDay);
    startOfWeek.setDate(selectedDay.getDate() - daysUntilMonday);

    // Add the rest of the days of the week (from Monday to Sunday) to the weekDays array
    for (let i = 0; i < daysInWeek; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        weekDays.push({
            key: i,
            name: Days[i],
            number: day.getDate(),
        });
    }

    return weekDays;
}

const WeekDay = ({
    nameDay,
    numberDay,
    selected,
    setSelected,
}: {
    nameDay: string;
    numberDay: number;
    selected: boolean;
    setSelected: () => void;
}) => {
    return (
        <WeekTouchable onPress={setSelected}>
            <NameOfDay children={nameDay} />
            <NumberOfDay selected={selected} children={numberDay} />
        </WeekTouchable>
    );
};

interface IWeekDay {
    key: number;
    name: string;
    number: number;
}
const ChooseDays = ({ selectedDay }: { selectedDay: Date }) => {
    const { t } = useTranslation();
    const [weekDays] = useState<IWeekDay[]>(getWeekDays(selectedDay));
    const [selected, setSelected] = useState<number>(selectedDay.getDate());

    return (
        <ChooseDaysContainer>
            {weekDays.map((d, index) => (
                <WeekDay
                    key={index}
                    nameDay={t(d.name)}
                    numberDay={d.number}
                    selected={d.number === selected}
                    setSelected={() => setSelected(d.number)}
                />
            ))}
        </ChooseDaysContainer>
    );
};

interface IWeekHeader {
    selectedDay: Date;
    onViewMonth: () => void;
}

export const WeekHeader = ({ selectedDay, onViewMonth }: IWeekHeader) => {
    const { t } = useTranslation();
    const month = Months[selectedDay.getMonth()];

    return (
        <HeaderContainer>
            <HeaderMonth>
                <MonthButton onPress={onViewMonth}>
                    <LeftArrow name="left" size={24} />
                    <MonthText children={t(month)} />
                </MonthButton>
            </HeaderMonth>
            <ChooseDays selectedDay={selectedDay} />
        </HeaderContainer>
    );
};
