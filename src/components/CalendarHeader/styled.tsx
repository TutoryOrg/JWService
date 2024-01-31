import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';

export const ContainerRow = styled.View`
    flex-direction: row;
`;

export const Container = styled.View`
    width: 90%;
    height: 100%;
    margin-top: ${verticalScale(10)}px;
`;
