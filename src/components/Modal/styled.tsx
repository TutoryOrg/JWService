import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';

export const Icon = styled.Image`
    height: ${fontSizes.large}px;
    width: ${fontSizes.large}px;
`

export const CloseButton = styled.TouchableOpacity`
    position:absolute;
    top: 20;
    right: 20;
    height: ${fontSizes.XXlarge}px;
    width: ${fontSizes.XXlarge}px;
    border-radius: 90px;
    background-color: yellow;
    justify-content:center;
    align-items: center;

`;

export const ModalContainer = styled.View<{ isOpen: boolean }>`
    display: ${props => !props.isOpen && 'none'};
    position: absolute;
    flex: 1;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: ${props => props.theme.bgColorDimmed};
    border: 1px solid yellow;
    align-items: center;
    justify-content: center;
`;
