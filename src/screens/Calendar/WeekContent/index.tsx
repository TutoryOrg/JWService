import { RootState } from 'store/redux';
import { windowWidth } from 'utils/scaleFunctions';
import { useSelector } from 'react-redux';
import { IStoreHabits } from 'store/redux/habits';
import { FlatList, View } from 'react-native';
import { useRef, useState } from 'react';
import { ImagePicker, ProgressCircle } from 'components';
import { InfoContainer, ItemContainer, InfoItemsLable, CalendarContentContainer } from './styled';

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
                        {item.habits.map(i => (
                            <InfoItemsLable isDone={i.isDone}>{i.label}</InfoItemsLable>
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
