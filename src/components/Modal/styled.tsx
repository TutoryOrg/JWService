import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { verticalScale } from 'utils/scaleFunctions';

export const Icon = styled.Image`
    height: ${verticalScale(fontSizes.normal)}px;
    width: ${verticalScale(fontSizes.normal)}px;
`

export const CloseButton = styled.TouchableOpacity`
    position:absolute;
    top: 20;
    right: 20;
    height: ${verticalScale(fontSizes.Xlarge)}px;
    width: ${verticalScale(fontSizes.Xlarge)}px;
    border-radius: 90px;
    background-color: ${props => props.theme.borderColor};
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
    align-items: center;
    justify-content: center;
`;
