import { months } from 'utils/constants';
import { MonthContainer, MonthLabel, YearContentContainer } from './styled';
import { useTranslation } from 'react-i18next';

interface IYearContent {
    date: Date;
}
export const YearContent = (props: IYearContent) => {
    const { date } = props;
    const { t } = useTranslation();
    const currentMonth = months[date.getMonth()];
    console.log({ currentMonth });
    return (
        <YearContentContainer>
            {months.map(m => (
                <MonthContainer selected={m === currentMonth}>
                    <MonthLabel>{t(`${m}_`)}</MonthLabel>
                </MonthContainer>
            ))}
        </YearContentContainer>
    );
};
