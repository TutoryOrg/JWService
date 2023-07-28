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

    const refMonth = today.getMonth();
    const numberToday = today.getDate();
    const refNumberDay = today.getDay();

    console.log({ refMonth });
    console.log(Days[refNumberDay]);
    console.log(Months[refMonth]);
    console.log(numberToday);

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
