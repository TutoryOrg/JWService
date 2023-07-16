import { HeaderContainer, DateContainer, Month, ButtonText, Day } from './styled';

export function Header(props: { date: Date | string }) {
    return (
        <HeaderContainer>
            <DateContainer>
                <Month></Month>
                <Day></Day>
            </DateContainer>
            <ButtonText style={{ fontFamily: 'Cascadia' }}>Progress</ButtonText>
        </HeaderContainer>
    );
}
