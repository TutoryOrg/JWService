import styled from 'styled-components/native';

export const Month = styled.Text`
    font-size: 14px;
    font-style: italic;
    color: ${props => props.theme.txtColor};
`;

export const Day = styled.Text`
    font-size: 25px;
    font-style: normal;
    color: ${props => props.theme.txtColor};
`;

export const DateContainer = styled.View``;

export const HeaderContainer = styled.View`
    width: 90%;
    height: 12%;
    padding: 12px;
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom-width: 2px;
    border-color: ${props => props.theme.borderColor};
`;

export const TodayContainer = styled.View`
    width: 100%;
    height: 100%;
    border-top-right-radius: 8px;
`;
