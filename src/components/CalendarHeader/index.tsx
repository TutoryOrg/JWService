import { Week } from './Week';
import { Year } from './Year';
import { Month } from './Month';
import { useState } from 'react';
import { Container } from './styled';

export type IMode = 'week' | 'month' | 'year';

interface ICalendarHeader {}
export const CalendarHeader = (props: ICalendarHeader) => {
    const [mode, setMode] = useState<IMode>('week');

    return (
        <Container>
            {mode === 'week' && <Week setMode={setMode} />}
            {mode === 'month' && <Month setMode={setMode} />}
            {mode === 'year' && <Year setMode={setMode} />}
        </Container>
    );
};
