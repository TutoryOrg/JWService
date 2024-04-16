import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export const ModalContainer = styled.View`
    position: absolute;
    z-index: 99;
    width: 100vh;
    height: 100vh;
    background-color: grey;
`;
