import { IToday } from '@types';
import { useDays } from 'hooks/useDays';
import { Content } from 'screens/Today';
import { WeekHeader } from './Header';
import { ContentContainer, WeekContainer } from './styled';

const emptyDay: IToday = {
    date: '',
    fields: [
        { key: 'time', value: { hours: 0, minutes: 0 } },
        { key: 'publications', value: 0 },
        { key: 'videos', value: 0 },
        { key: 'return_visits', value: 0 },
        { key: 'bible_studies', value: 0 },
    ],
    comment: '',
    image: null,
};

interface IWeekContent {
    selectedDay: Date;
}
const WeekContent = ({ selectedDay }: IWeekContent) => {
    const [days] = useDays();
    const cl = () => console.log('change');

    return (
        <ContentContainer>
            <Content
                day={days[0]}
                onChangeImage={cl}
                onChangeComment={cl}
                onChangeField={cl}
                editable={false}
            />
        </ContentContainer>
    );
};

interface IWeekComponent {
    selectedDay: Date;
    onViewMonth: () => void;
}
export const WeekComponent = ({ selectedDay, onViewMonth }: IWeekComponent) => {
    return (
        <WeekContainer>
            <WeekHeader selectedDay={selectedDay} onViewMonth={onViewMonth} />
            <WeekContent selectedDay={selectedDay} />
        </WeekContainer>
    );
};
