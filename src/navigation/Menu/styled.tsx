import styled from 'styled-components/native';
import { isMobile } from 'utils/scaleFunctions';

export const SafeViewBg = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    flex-direction: row;
    margin-top: ${() => (isMobile ? '25px' : 'none')};
    border: ${() => (isMobile ? '1.5px solid black' : 'none')};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: ${props => props.theme.bgColor};
`;

export const MenuContainer = styled.View`
    width: 10%;
    height: 100%;
    align-items: center;
    border-right-width: 1.5px;
    border-color: black;
`;

export const ContentContainer = styled.View`
    width: 90%;
    height: 100%;
    align-items: center;
`;
