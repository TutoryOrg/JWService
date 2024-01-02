import { DateHeader, Habit } from 'components';
import { TodayCotainer } from './styled';

export const Today = () => {
    const date = new Date();

    return (
        <TodayCotainer>
            <DateHeader date={date} progress={25} />
            <Habit />
        </TodayCotainer>
    );
};
