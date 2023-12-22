import { Week } from './Week';
import { Year } from './Year';
import { Month } from './Month';
import { useState } from 'react';
import { Container } from './styled';

export enum CalendarMode {
    WEEK = 'week',
    MONTH = 'month',
    YEAR = 'year',
}

interface ICalendarHeader {}
export const CalendarHeader = (props: ICalendarHeader) => {
    const [mode, setMode] = useState<CalendarMode>(CalendarMode.WEEK);

    return (
        <Container>
            {mode === CalendarMode.WEEK && <Week setMode={setMode} />}
            {mode === CalendarMode.MONTH && <Month setMode={setMode} />}
            {mode === CalendarMode.YEAR && <Year setMode={setMode} />}
        </Container>
    );
};
