import styled from 'styled-components/native';

export const SafeViewBg = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: row;
    background-color: ${props => props.theme.bgColor};
`;

export const MenuContainer = styled.View`
    width: 10%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-right-width: 1px;
    border-color: black;
    background-color: red;
`;

export const ContentContainer = styled.View`
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
`;
