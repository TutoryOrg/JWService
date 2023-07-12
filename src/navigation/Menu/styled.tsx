import styled from 'styled-components/native';
import { isMobile } from 'utils/scaleFunctions';

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: row;
    margin-top: ${isMobile ? '25px' : 'none'};
    border: ${isMobile ? '2px solid black' : 'none'};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: ${props => props.theme.bgColor};
`;

export const Content = styled.View`
    width: 90%;
    height: 100%;
    align-items: center;
    background-color: aliceblue;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;
