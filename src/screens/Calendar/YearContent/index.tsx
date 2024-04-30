import { View } from 'react-native';

interface IYearContent {
    date: Date;
}
export const YearContent = (props: IYearContent) => {
    const { date } = props;
    return <View></View>;
};
