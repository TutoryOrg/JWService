import { days, months } from 'utils/constants';
import { useTranslation } from 'react-i18next';
import { HeaderContainer, DateContainer, Month, ButtonText, Day } from './styled';

export function Header(props: { date: Date }) {
    const { date } = props;
    const { t } = useTranslation();

    const day = date.getDate();
    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];

    return (
        <HeaderContainer>
            <DateContainer>
                <Month>{t(month)}</Month>
                <Day>
                    {day}.{t(dayName)}
                </Day>
            </DateContainer>
            <ButtonText style={{ fontFamily: 'Cascadia' }}>Progress</ButtonText>
        </HeaderContainer>
    );
}
