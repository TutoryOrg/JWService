import { Text } from 'react-native';
import { Fields } from 'utils/constants';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Day,
    Month,
    Title,
    Value,
    Field,
    DateContainer,
    TodayContainer,
    FieldContainer,
    ImageContainer,
    HeaderContainer,
    CommentContainer,
} from './styled';

const initFields = [
    { title: Fields.TIME, value: '0h 0min' },
    { title: Fields.PUBLICATIONS, value: '_' },
    { title: Fields.VIDEOS, value: '_' },
    { title: Fields.RETURN_VISITS, value: '_' },
    { title: Fields.BIBLE_STUDIES, value: '_' },
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
    const { t } = useTranslation();
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
                        <Title>{t(field.title)}</Title>
                        <Value>{field.value}</Value>
                    </Field>
                ))}
            </FieldContainer>

            <CommentContainer editable multiline maxLength={100} numberOfLines={4} />

            <ImageContainer />
        </TodayContainer>
    );
}
