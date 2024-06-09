import { useState } from 'react';
import { WeekContent } from './WeekContent';
import { YearContent } from './YearContent';
import { CalendarMode } from 'utils/constants';
import { MonthContent } from './MonthContent';
import { CalendarHeader } from 'components';
import { CalendarContainer } from './styled';

export const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState<CalendarMode>(CalendarMode.WEEK);

    return (
        <CalendarContainer>
            <CalendarHeader date={date} mode={mode} setMode={setMode} />
            {mode === CalendarMode.WEEK && <WeekContent setDate={setDate} />}
            {mode === CalendarMode.MONTH && <MonthContent date={date} />}
            {mode === CalendarMode.YEAR && <YearContent date={date} />}
        </CalendarContainer>
    );
};
