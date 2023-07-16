import { Field } from 'utils/constants';
import { useState } from 'react';
import { ITime, IToday } from '@types';
import { ContentContainer, TodayContainer } from './styled';
import { Header, Fields, ImagePicker, Comment } from 'components';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { windowHeight } from 'utils/scaleFunctions';

const initDays: IToday[] = [
    {
        date: new Date(),
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
        date: '',
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
        date: 'chao',
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
        date: 'cia',
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
        date: 'ciaaaa',
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

const initToday: IToday = {
    date: new Date(),
    fields: [
        { key: Field.TIME, value: { hours: 0, minutes: 0 } },
        { key: Field.PUBLICATIONS, value: 0 },
        { key: Field.VIDEOS, value: 0 },
        { key: Field.RETURN_VISITS, value: 0 },
        { key: Field.BIBLE_STUDIES, value: 0 },
    ],
    comment: '',
    image: null,
};

const Content = (props: { data: IToday }) => {
    const { data } = props;
    const onChangeImage = (image: string) => {
        //     setToday(prev => ({ ...prev, image: image }));
    };

    const onChangeComment = (text: string) => {
        //     setToday(prev => ({ ...prev, comment: text }));
    };

    const onChangeField = (key: string, value: ITime | number) => {
        //     setToday(prev => ({
        //         ...prev,
        //         fields: prev.fields.map(f => (f.key === key ? { ...f, value } : f)),
        //     }));
    };

    return (
        <ContentContainer>
            <Header date={data.date} />
            <Fields fields={data.fields} onChangeField={onChangeField} />
            <Comment comment={data.comment} onChangeComment={onChangeComment} />
            <ImagePicker image={data.image} onChangeImage={onChangeImage} />
        </ContentContainer>
    );
};

const ListDays = () => {
    return (
        <FlatList
            pagingEnabled
            data={initDays}
            renderItem={({ item, index }) => <Content key={index} data={item} />}
        />
    );
};

export function Today() {
    return <TodayContainer children={<ListDays />} />;
}
