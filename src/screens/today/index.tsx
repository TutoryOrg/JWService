import { Text } from 'react-native';
import {
    Day,
    Month,
    DateContainer,
    TodayContainer,
    HeaderContainer,
    FieldContainer,
    Title,
    Value,
    Field,
} from './styled';
import { useState } from 'react';

const initFields = [
    { title: 'time', value: '0h 0min' },
    { title: 'publications', value: '_' },
    { title: 'videos', value: '_' },
    { title: 'return_visits', value: '_' },
    { title: 'bible_studies', value: '_' },
];

export const Date = (props: { day: string; month: string }) => {
    const { day, month } = props;
    return (
        <DateContainer>
            <Month>{month}</Month>
            <Day>{day}</Day>
        </DateContainer>
    );
};

export const Progress = (props: { progress: number }) => {
    const { progress } = props;
    return <Text style={{ fontFamily: 'Cascadia' }}>Progress {progress}</Text>;
};

export function Today() {
    const [fields] = useState(initFields);
    const date = { day: '4.Monday', month: 'July' };
    const progress = 70;

    return (
        <TodayContainer>
            <HeaderContainer>
                <Date {...date} />
                <Progress progress={progress} />
            </HeaderContainer>

            <FieldContainer>
                {fields.map((field, index) => (
                    <Field key={index}>
                        <Title>{field.title}</Title>
                        <Value>{field.value}</Value>
                    </Field>
                ))}
            </FieldContainer>
        </TodayContainer>
    );
}
