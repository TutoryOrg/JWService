import { useState } from 'react';
import { Field, Screens } from 'utils/constants';
import { FlatList } from 'react-native';
import { windowHeight } from 'utils/scaleFunctions';
import { ITime, IToday } from '@types';
import { ContentContainer, TodayContainer } from './styled';
import { Header, Fields, ImagePicker, Comment } from 'components';
import initDays from 'mock/data/infoDays.json';
import { storeData } from 'store/async';

const parseDateStringToDate = (dateString: string) => {
    const cleanedDateString = dateString.replace(/GMT.*$/, '');
    const date = new Date(cleanedDateString);
    return date;
};

interface IContent {
    day: IToday;
    onChangeImage: (date: Date, image: string) => void;
    onChangeComment: (date: Date, text: string) => void;
    onChangeField: (date: Date, key: string, value: ITime | number) => void;
}
const Content = (props: IContent) => {
    const { day, onChangeComment, onChangeField, onChangeImage } = props;
    const { date, fields, comment, image } = day;

    let dateObject = date instanceof Date ? date : parseDateStringToDate(date);

    if (!dateObject) return null;

    return (
        <ContentContainer>
            <Header date={dateObject} />
            <Fields
                fields={fields}
                onChangeField={(key: string, value: ITime | number) =>
                    onChangeField(dateObject as Date, key, value)
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
        date: new Date().toString(),
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

    const [days, setDays] = useState<IToday[]>([today, ...(initDays as any)]);

    const onChangeImage = (date: Date, image: string) => {
        // console.log(date);
        // console.log({ image });
    };

    const onChangeComment = (date: Date, text: string) => {
        // console.log(date);
        // console.log({ text });
    };

    const onChangeField = (date: Date, key: string, value: ITime | number) => {
        const updateDay = days.map((d: IToday) => {
            const ddate = parseDateStringToDate(d.date as string);
            return ddate && date && ddate.valueOf() === date.valueOf()
                ? {
                      ...d,
                      fields: d.fields.map(f => {
                          return typeof f.value === 'number' &&
                              typeof value === 'number' &&
                              f.key === key
                              ? { key: f.key, value: value }
                              : f;
                      }),
                  }
                : d;
        });
        setDays(updateDay);
        storeData(Screens.TODAY, JSON.stringify(updateDay));
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
                }
            }}
        />
    );
};

export function Today() {
    return <TodayContainer children={<ListDays />} />;
}
