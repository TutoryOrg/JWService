import { LeftArrow } from "../Week/Header/styled";
import { MonthContainer, MonthContent, MonthHeader, MonthText, YearContainer, YearText } from "./styled";

interface IMonth {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewWeek: () => void;
}

const YearButton = () => {
    return (
        <YearContainer>
            <LeftArrow name="left" size={24} />
            <YearText children={'2023'} />
        </YearContainer>
    )
}


const MonthHeaderComponent = () => {
    return (
        <MonthHeader>
            <YearButton />
            <MonthText children={'July'} />
        </MonthHeader>
    )
}

export const Month = ({ selectedDay, setSelectedDay, onViewWeek }: IMonth) => {
    return (
        <MonthContainer>
            <MonthHeaderComponent />
            <MonthContent />
        </MonthContainer>
    )
}
