import { RootState } from 'store/redux';
import { windowWidth } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { IStoreHabits } from 'store/redux/habits';
import { useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CalendarHeader, ImagePicker, ProgressCircle } from 'components';
import {
    InfoContainer,
    ItemContainer,
    CalendarContainer,
    CalendarContentContainer,
} from './styled';

interface ICalendarContent {
    setDate: (date: Date) => void;
}

const CalendarContent = (props: ICalendarContent) => {
    const { setDate } = props;
    const ref = useRef<FlatList>(null);
    const [index, setIndex] = useState(0);
    const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);

    const renderItem = ({ item }: { item: IStoreHabits; index: number }) => {
        return (
            <ItemContainer>
                <ImagePicker
                    image={item.image}
                    desc={''}
                    editable={false}
                    onChangeImage={() => console.log('')}
                    onAddDesc={() => console.log('')}
                />
                <InfoContainer>
                    <View>
                        {item.habits.map(i => (
                            <Text>{i.label}</Text>
                        ))}
                    </View>
                    <ProgressCircle
                        size={100}
                        strokeWidth={22}
                        showNumber={true}
                        progress={item.progress}
                    />
                </InfoContainer>
            </ItemContainer>
        );
    };

    return (
        <CalendarContentContainer>
            <FlatList
                ref={ref}
                data={savedHabits}
                inverted={true}
                horizontal={true}
                renderItem={renderItem}
                initialScrollIndex={index}
                keyExtractor={item => item.date}
                pagingEnabled={true}
                maxToRenderPerBatch={5}
                onScroll={(e: any) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / windowWidth);
                    const showDay = savedHabits[index];
                    setDate(new Date(showDay.date));
                }}
            />
        </CalendarContentContainer>
    );
};

export const Calendar = () => {
    const [date, setDate] = useState(new Date());

    return (
        <CalendarContainer>
            <CalendarHeader date={date} />
            <CalendarContent setDate={setDate} />
        </CalendarContainer>
    );
};
