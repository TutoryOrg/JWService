import { HeaderContainer, DateContainer, Month, ButtonText, Day } from './styled';

export function Header(props: { date: { month: string; day: string } }) {
    return (
        <HeaderContainer>
            <DateContainer>
                <Month>{props.date.month}</Month>
                <Day>{props.date.day}</Day>
            </DateContainer>
            <ButtonText style={{ fontFamily: 'Cascadia' }}>Progress</ButtonText>
        </HeaderContainer>
    );
}
