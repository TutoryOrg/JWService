import { Text, View } from "react-native"

interface IMonth {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewWeek: () => void;
}
export const Month = ({ selectedDay, setSelectedDay, onViewWeek }: IMonth) => {
    return (<View><Text>Month</Text></View>)
}
