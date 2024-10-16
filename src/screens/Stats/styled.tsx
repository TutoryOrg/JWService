import styled from 'styled-components/native';
import { fontFamilies, fontSizes } from 'utils/constants';

export const TopLabel = styled.Text`
    font-size: ${fontSizes.large}px;
    font-family: ${fontFamilies.CascadiaBold};
    color: ${(props) => props.theme.txtColor};
`;

export const StatsContainer = styled.View`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;
