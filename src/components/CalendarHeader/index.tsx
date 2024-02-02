import { Week } from './Week';
import { Year } from './Year';
import { Month } from './Month';
import { useState } from 'react';
import { Container } from './styled';
import { days, months } from 'utils/constants';
import { CalendarMode } from 'utils/constants';
import { useTranslation } from 'react-i18next';

interface ICalendarHeader {}

export const CalendarHeader = (props: ICalendarHeader) => {
    const { t } = useTranslation();
    const [mode, setMode] = useState<CalendarMode>(CalendarMode.WEEK);

    const date = new Date();
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const weekDay = days[date.getDay()];
    const numberDay = date.getDate();
    const daysOfWeek = days.map(d => t(d));
    daysOfWeek.push(daysOfWeek.shift() as string);

    return (
        <Container>
            {mode === CalendarMode.WEEK && (
                <Week
                    month={t(month)}
                    weekDay={t(weekDay)}
                    numberDay={numberDay}
                    daysOfWeek={daysOfWeek}
                    setMode={setMode}
                />
            )}
            {mode === CalendarMode.MONTH && (
                <Month year={year} month={t(month)} daysOfWeek={daysOfWeek} setMode={setMode} />
            )}
            {mode === CalendarMode.YEAR && <Year year={year} setMode={setMode} />}
        </Container>
    );
};
