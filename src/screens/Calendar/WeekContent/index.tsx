import { RootState } from 'store/redux';
import { windowHeight, windowWidth } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { IStoreHabits } from 'store/redux/habits';
import { FlatList, View } from 'react-native';
import { useRef, useState } from 'react';
import { Arrow, ImagePicker, ProgressCircle } from 'components';
import {
    InfoContainer,
    ItemContainer,
    InfoItemsLable,
    CalendarContentContainer,
    DirectionMoveLeft,
    DirectionMoveRight,
} from './styled';
import { Direction } from 'utils/constants';

interface ICalendarContent {
    setDate: (date: Date) => void;
}

export const WeekContent = (props: ICalendarContent) => {
    const { setDate } = props;
    const ref = useRef<FlatList>(null);
    const [index, setIndex] = useState(0);
    const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);

    const renderItem = ({ item }: { item: IStoreHabits; index: number }) => {
        return (
            <ItemContainer key={index}>
                <ImagePicker
                    image={item.image}
                    desc={item.description}
                    editable={false}
                    onChangeImage={() => console.log('')}
                    onAddDesc={() => console.log('')}
                />
                <InfoContainer>
                    <View>
                        {item.habits.map((i, index) => (
                            <InfoItemsLable key={index} isDone={i.isDone}>
                                {i.label}
                            </InfoItemsLable>
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

    const scrollToIndex = (index: number) => {
        if (!(index >= 0 && index < savedHabits.length)) return;
        setIndex(index);
        ref?.current?.scrollToIndex({
            index: index,
            animated: true,
            viewPosition: 0,
        });
    };

    return (
        <CalendarContentContainer>
            <DirectionMoveLeft
                disabled={index >= savedHabits.length - 1}
                onPress={() => scrollToIndex(index + 1)}
                children={<Arrow direction={Direction.LEFT} />}
            />

            <DirectionMoveRight
                disabled={index === 0}
                onPress={() => scrollToIndex(index - 1)}
                children={<Arrow direction={Direction.RIGHT} />}
            />

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
                getItemLayout={(data, index) => ({
                    length: data?.length as number,
                    offset: windowWidth * index,
                    index,
                })}
                onScroll={(e: any) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / windowWidth);
                    const showDay = savedHabits[index];
                    console.log({ savedHabits });
                    console.log({ index });
                    setIndex(index);
                    setDate(new Date(showDay.date));
                }}
            />
        </CalendarContentContainer>
    );
};
