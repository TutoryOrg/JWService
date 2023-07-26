import { WeekComponent } from './Week';
import { CalendarContainer } from './styled';

export function Calendar() {
    return (
        <CalendarContainer>
            <WeekComponent />
            {/* <MonthComonent />
            <YearComponent /> */}
        </CalendarContainer>
    );
}
