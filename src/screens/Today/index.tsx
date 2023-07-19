import { useState } from 'react'
import { Field } from 'utils/constants';
import { FlatList } from 'react-native';
import { windowHeight } from 'utils/scaleFunctions';
import { ITime, IToday } from '@types';
import { ContentContainer, TodayContainer } from './styled';
import { Header, Fields, ImagePicker, Comment } from 'components';
import initDays from 'mock/data/infoDays.json';

interface IContent {
    day: IToday;
    onChangeImage: (date: Date, image: string) => void;
    onChangeComment: (date: Date, text: string) => void;
    onChangeField: (date: Date, key: string, value: ITime | number) => void;
}
const Content = (props: IContent) => {
    const { day, onChangeComment, onChangeField, onChangeImage } = props;
    const { date, fields, comment, image } = day;
    let dateObject = date;

    if (!(date instanceof Date)) {
        const dateParts = (date as string).split(' ');
        const month = dateParts[2];
        const dayN = parseInt(dateParts[3]);
        const year = parseInt(dateParts[4]);
        const time = dateParts[5];
        const timeZoneOffset = dateParts[6];
        dateObject = new Date(`${month} ${dayN}, ${year} ${time} ${timeZoneOffset}`);
    }

    return (
        <ContentContainer>
            <Header date={dateObject} />
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
    const today: IToday = {
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

    const [days] = useState<IToday[]>([today, ...(initDays as any)]);

    const onChangeImage = (date: Date, image: string) => {
        // console.log(date);
        console.log({ image });
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
            renderItem={({ item, index }) => {
                return (
                    <Content
                        key={index}
                        day={item}
                        onChangeImage={onChangeImage}
                        onChangeComment={onChangeComment}
                        onChangeField={onChangeField}
                    />
                );
            }}
            onScroll={e => {
                const index = Math.round(e.nativeEvent.contentOffset.y / windowHeight);
                if (days.length - 3 < index) {
                    console.log({ index });
                    console.log('needs to load more questions');
                }
            }}
        />
    );
};

export function Today() {
    return <TodayContainer children={<ListDays />} />;
}
