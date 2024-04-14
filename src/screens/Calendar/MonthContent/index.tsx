import { FlatList, Text } from 'react-native';
import { GridItem, MonthContentContainer } from './styled';

function getDaysOfMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const numDays = new Date(year, month + 1, 0).getDate();
    const daysOfMonth = [];
    for (let day = 1; day <= numDays; day++) {
        daysOfMonth.push(new Date(year, month, day));
    }
    return daysOfMonth;
}

const mergeDataAndDays = (days: Date[]) => {
    const data = Array.from(Array(42).keys());
    const firstDay = days[0].getDay() - 1;
    const mergedArray = [];
    mergedArray.push(...data.slice(0, firstDay));
    mergedArray.push(...days);
    return mergedArray;
};

interface IMonthContent {
    date: Date;
}
export const MonthContent = (props: IMonthContent) => {
    const { date } = props;
    const daysData: Date[] = mergeDataAndDays(getDaysOfMonth(date)) as Date[];

    return (
        <MonthContentContainer>
            <FlatList
                data={daysData}
                renderItem={({ item, index }) => (
                    <GridItem>
                        <Text>{item.getDate()}</Text>
                    </GridItem>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={7}
            />
        </MonthContentContainer>
    );
};
