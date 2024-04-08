import { useState } from 'react';
import { WeekContent } from './WeekContent';
import { CalendarMode } from 'utils/constants';
import { CalendarHeader } from 'components';
import { CalendarContainer } from './styled';

export const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<CalendarMode>(CalendarMode.WEEK);

    return (
        <CalendarContainer>
            <CalendarHeader date={date} mode={mode} setMode={setMode} />
            {mode === CalendarMode.WEEK && <WeekContent setDate={setDate} />}
        </CalendarContainer>
    );
};
