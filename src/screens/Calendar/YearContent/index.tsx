import { months } from 'utils/constants';
import { MonthContainer, MonthLabel, YearContentContainer } from './styled';

interface IYearContent {
    date: Date;
}
export const YearContent = (props: IYearContent) => {
    const { date } = props;
    const month = months[date.getMonth()];
    console.log({ month });
    return (
        <YearContentContainer>
            {months.map(m => (
                <MonthContainer>
                    <MonthLabel>{m}</MonthLabel>
                </MonthContainer>
            ))}
        </YearContentContainer>
    );
};
