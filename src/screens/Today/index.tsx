import { Field } from 'utils/constants';
import { useState } from 'react';
import { TodayContainer } from './styled';
import { Header, Fields, ImagePicker, Comment } from 'components';

const initFields = [
    { title: Field.TIME, value: '6h:30m' },
    { title: Field.PUBLICATIONS, value: '3' },
    { title: Field.VIDEOS, value: '1' },
    { title: Field.RETURN_VISITS, value: '0' },
    { title: Field.BIBLE_STUDIES, value: '0' },
];
export function Today() {
    const [fields] = useState(initFields);
    const [comment, setComment] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const date = { day: '4.Monday', month: 'July' };

    return (
        <TodayContainer>
            <Header date={date} />
            <Fields fields={fields} />
            <Comment comment={comment} setComment={setComment} />
            <ImagePicker selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </TodayContainer>
    );
}
