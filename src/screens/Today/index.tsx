import { Field } from 'utils/constants';
import { useState } from 'react';
import { TodayContainer } from './styled';
import { Header, Fields, ImagePicker, Comment } from 'components';

interface IToday {
    date: Date | string;
    fields: { key: string; value: string | number }[];
    comment: string;
    image: string | null;
}

const initToday: IToday = {
    date: 'Date Sun Jul 16 2023 10:49:54 GMT+0200 (Central European Summer Time)',
    fields: [
        { key: Field.TIME, value: '6h:30m' },
        { key: Field.PUBLICATIONS, value: 0 },
        { key: Field.VIDEOS, value: 0 },
        { key: Field.RETURN_VISITS, value: 0 },
        { key: Field.BIBLE_STUDIES, value: 0 },
    ],
    comment: '',
    image: null,
};

export function Today() {
    const [today, setToday] = useState(initToday);
    const { date, fields, comment, image } = today;

    const onChangeImage = (image: string) => {
        setToday(prev => ({ ...prev, image: image }));
    };

    const onChangeComment = (text: string) => {
        setToday(prev => ({ ...prev, comment: text }));
    };

    const onChangeField = (key: string, value: string | number) => {
        setToday(prev => ({
            ...prev,
            fields: prev.fields.map(f => (f.key === key ? { ...f, value } : f)),
        }));
    };

    return (
        <TodayContainer>
            <Header date={date} />
            <Fields fields={fields} onChangeField={onChangeField} />
            <Comment comment={comment} onChangeComment={onChangeComment} />
            <ImagePicker image={image} onChangeImage={onChangeImage} />
        </TodayContainer>
    );
}
