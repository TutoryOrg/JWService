import { months } from 'utils/constants';
import { MonthContainer, MonthLabel, YearContentContainer } from './styled';
import { useTranslation } from 'react-i18next';

interface IYearContent {
    date: Date;
}
export const YearContent = (props: IYearContent) => {
    const { date } = props;
    const { t } = useTranslation();
    const month = months[date.getMonth()];
    console.log({ month });
    return (
        <YearContentContainer>
            {months.map(m => (
                <MonthContainer>
                    <MonthLabel>{t(`${m}_`)}</MonthLabel>
                </MonthContainer>
            ))}
        </YearContentContainer>
    );
};
