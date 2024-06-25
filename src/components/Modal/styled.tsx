import styled from 'styled-components/native';

export const ModalContainer = styled.View`
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
