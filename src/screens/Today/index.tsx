import { useState } from 'react';
import { Field } from 'utils/constants';
// import { FlatList } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { ITime, IToday } from '@types';
import { ContentContainer, TodayContainer } from './styled';
import { Header, Fields, ImagePicker, Comment } from 'components';

const secondDays: IToday[] = [
    {
        date: 'date 1',
        fields: [
            { key: Field.TIME, value: { hours: 2, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 2 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 2',
        fields: [
            { key: Field.TIME, value: { hours: 2, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 2 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 2 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 3',
        fields: [
            { key: Field.TIME, value: { hours: 1, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 2 },
            { key: Field.VIDEOS, value: 8 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 4',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 5',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
];

const initDays: IToday[] = [
    {
        date: 'date 1',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 2',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 3',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 4',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
    {
        date: 'date 5',
        fields: [
            { key: Field.TIME, value: { hours: 0, minutes: 0 } },
            { key: Field.PUBLICATIONS, value: 0 },
            { key: Field.VIDEOS, value: 0 },
            { key: Field.RETURN_VISITS, value: 0 },
            { key: Field.BIBLE_STUDIES, value: 0 },
        ],
        comment: '',
        image: null,
    },
];

interface IContent {
    day: IToday;
    onChangeImage: (date: Date, image: string) => void;
    onChangeComment: (date: Date, text: string) => void;
    onChangeField: (date: Date, key: string, value: ITime | number) => void;
}
const Content = (props: IContent) => {
    const { day, onChangeComment, onChangeField, onChangeImage } = props;
    const { date, fields, comment, image } = day;

    return (
        <ContentContainer>
            <Header date={date} />
            <Fields
                fields={fields}
                onChangeField={(key: string, value: ITime | number) =>
                    onChangeField(date as Date, key, value)
                }
            />
            <Comment
                comment={comment}
                onChangeComment={(text: string) => onChangeComment(date as Date, text)}
            />
            <ImagePicker
                image={image}
                onChangeImage={(image: string) => onChangeImage(date as Date, image)}
            />
        </ContentContainer>
    );
};

const ListDays = () => {
    const [days] = useState(initDays);

    const onChangeImage = (date: Date, image: string) => {
        // console.log(date);
        // console.log({ image });
    };

    const onChangeComment = (date: Date, text: string) => {
        // console.log(date);
        // console.log({ text });
    };

    const onChangeField = (date: Date, key: string, value: ITime | number) => {
        // const selectedDay = days.find(day => day.date === date) as IToday;
        // const newDay: IToday = {
        //     ...selectedDay,
        //     fields: selectedDay?.fields.map(f => (f.key === key ? { ...f, value } : f)) as any,
        // };
        // setDays([...days, newDay]);
    };

    return (
        <FlatList
            pagingEnabled
            data={days}
            renderItem={({ item, index }) => (
                <Content
                    key={index}
                    day={item}
                    onChangeImage={onChangeImage}
                    onChangeComment={onChangeComment}
                    onChangeField={onChangeField}
                />
            )}
        />
    );
};

export function Today() {
    return <TodayContainer children={<ListDays />} />;
}
