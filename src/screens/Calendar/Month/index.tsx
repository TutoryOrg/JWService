import { Months } from "../index";
import { LeftArrow } from "../Week/Header/styled";
import { useTranslation } from "react-i18next";
import { MonthButtonContainer, MonthContainer, MonthContent, MonthHeader, MonthText, YearContainer, YearText } from "./styled";

interface IMonth {
    selectedDay: Date;
    setSelectedDay: (date: Date) => void;
    onViewWeek: () => void;
}

const YearButton = () => {
    return (
        <YearContainer>
            <YearText children={'2023'} />
            <LeftArrow name="right" size={24} />
        </YearContainer>
    )
}

const MonthButton = ({ text, onViewWeek }: { text: string; onViewWeek: () => void }) => {
    return (
        <MonthButtonContainer onPress={onViewWeek}>
            <LeftArrow name="left" size={24} />
            <MonthText children={text} />
        </MonthButtonContainer>
    )
}

const MonthHeaderComponent = ({ selectedDay, onViewWeek }: { selectedDay: Date; onViewWeek: () => void }) => {
    const { t } = useTranslation()
    const month = Months[selectedDay.getMonth()];

    return (
        <MonthHeader>
            <MonthButton text={t(month)} onViewWeek={onViewWeek} />
            <YearButton />
        </MonthHeader>
    )
}

export const Month = ({ selectedDay, setSelectedDay, onViewWeek }: IMonth) => {
    return (
        <MonthContainer>
            <MonthHeaderComponent selectedDay={selectedDay} onViewWeek={onViewWeek} />
            <MonthContent />
        </MonthContainer>
    )
}
