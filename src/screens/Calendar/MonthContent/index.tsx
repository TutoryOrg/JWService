import { FlatList } from 'react-native';
import { windowWidth } from 'utils/scaleFunctions';
import { GridItem, MonthContentContainer, NumberDate } from './styled';

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

    if (mergedArray.length < 42) {
        const remainingDays = 42 - mergedArray.length;
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
    const daysData: Date[] = mergeDataAndDays(getDaysOfMonth(date)) as Date[];
    console.log({ windowWidth });
    return (
        <MonthContentContainer>
            <FlatList
                numColumns={7}
                data={daysData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <GridItem
                            disabled={typeof item == 'number'}
                            invisible={typeof item == 'number'}
                            selected={false}>
                            <NumberDate selected={false}>{index + 1}</NumberDate>
                        </GridItem>
                    );
                }}
                columnWrapperStyle={{
                    margin: 20,
                    width: windowWidth - windowWidth * 0.18,
                    justifyContent: 'space-between',
                }}
            />
        </MonthContentContainer>
    );
};
