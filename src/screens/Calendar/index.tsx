import { WeekComponent } from './Week';
import { CalendarContainer } from './styled';
import { useState } from 'react';

type CalendarView = 'week' | 'month' | 'year';

export function Calendar() {
    const [view, setView] = useState<CalendarView>('week');

    return (
        <CalendarContainer>
            {view === 'week' && <WeekComponent onViewMonth={() => setView('month')} />}
            {view === 'month' && <WeekComponent onViewMonth={() => setView('month')} />}
            {view === 'year' && <WeekComponent onViewMonth={() => setView('month')} />}
            {/* <MonthComonent />
            <YearComponent /> */}
        </CalendarContainer>
    );
}
