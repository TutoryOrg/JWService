import { useState } from 'react';
import { WeekComponent } from './Week';
import { CalendarContainer } from './styled';

export const Months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];

export const Days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];

type CalendarView = 'week' | 'month' | 'year';

export function Calendar() {
    const today = new Date();
    const [view, setView] = useState<CalendarView>('week');

    return (
        <CalendarContainer>
            {view === 'week' && (
                <WeekComponent
                    selectedDay={today}
                    onViewMonth={() => setView('month')}
                />
            )}
            {view === 'month' && (
                <WeekComponent
                    selectedDay={today}
                    onViewMonth={() => setView('month')}
                />
            )}
            {view === 'year' && (
                <WeekComponent
                    selectedDay={today}
                    onViewMonth={() => setView('month')}
                />
            )}
            {/* <MonthComonent />
            <YearComponent /> */}
        </CalendarContainer>
    );
}
