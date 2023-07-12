import styled from 'styled-components/native';

interface IMenuOption {
    selected?: boolean;
    text: string;
}
export const MenuOption = ({ selected, text }: IMenuOption) => {
    const TextContainer = styled.Text`
        width: 60px;
        text-align: center;
        align-self: center;
        transform: rotate(-90deg);
        color: ${selected ? 'white' : 'black'};
    `;

    const OptionContainer = styled.View`
        height: 20%;
        width: 100%;
        justify-content: center;
        align-content: center;
        border: 1px solid black;
        border-right-width: 0px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        background-color: ${selected ? 'black' : 'white'};
    `;

    return (
        <OptionContainer>
            <TextContainer children={text} />
        </OptionContainer>
    );
};

export const Container = () => {
    const MenuContainer = styled.View`
        width: 10%;
        height: 100%;
        align-items: center;
        border-color: black;
        border-right-width: 1.5px;
    `;

    return (
        <MenuContainer>
            <MenuOption selected text={'today'} />
            <MenuOption text={'calendar'} />
            <MenuOption text={'goals'} />
            <MenuOption text={'profile'} />
        </MenuContainer>
    );
};
