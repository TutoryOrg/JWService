import { FlatList } from 'react-native';
import { RootState } from 'store/redux';
import { useSelector } from 'react-redux';
import { IStoreHabits } from 'store/redux/habits';
import { isSameDay, windowWidth } from 'utils/scaleFunctions';
import { GridItem, MonthContentContainer, NumberDate } from './styled';
import _ from 'lodash';

function getDaysOfMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysOfMonth = [];
    for (let day = 1; day <= numDays; day++) {
        daysOfMonth.push(new Date(year, month, day).toJSON());
    }
    return daysOfMonth;
}

const mergeDataAndDays = (days: string[], savedHabits: IStoreHabits[]) => {
    const data = Array.from(Array(42).keys());
    const firstDay = new Date(days[0]).getDay() - 1;
    const mergedArray = [];
    mergedArray.push(...data.slice(0, firstDay));
    mergedArray.push(...days);

    savedHabits.forEach(habit => {
        const index = days.findIndex(day => isSameDay(new Date(day), new Date(habit.date)));
        if (index !== -1) {
            mergedArray[index] = habit;
        }
    });

    if (mergedArray.length < data.length) {
        const remainingDays = data.length - mergedArray.length;
        const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => i + 1);
        mergedArray.push(...nextMonthDays);
    }

    return mergedArray;
};

interface IMonthContent {
    date: Date;
}
export const MonthContent = (props: IMonthContent) => {
    const { date } = props;
    const savedHabits = useSelector((state: RootState) => state.habits.savedHabits);
    const daysData = mergeDataAndDays(getDaysOfMonth(date), savedHabits);

    const renderItem = (props: any) => {
        const { item } = props;
        const isDay = typeof item === 'string' || typeof item === 'object';
        const hasData = isDay && !_.isEmpty(item.date);
        const itemDate = isDay && hasData ? new Date(item.date) : new Date(item);
        const progress = item.progress || 0;
        console.log(progress);

        return (
            <GridItem progress={progress} disabled={!hasData} invisible={!isDay} selected={hasData}>
                <NumberDate progress={progress} selected={hasData}>
                    {itemDate.getDate()}
                </NumberDate>
            </GridItem>
        );
    };

    return (
        <MonthContentContainer>
            <FlatList
                numColumns={7}
                data={daysData}
                renderItem={renderItem}
                columnWrapperStyle={{
                    margin: 20,
                    width: windowWidth - windowWidth * 0.18,
                    justifyContent: 'space-between',
                }}
            />
        </MonthContentContainer>
    );
};
