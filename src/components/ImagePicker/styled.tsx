import styled from 'styled-components/native';
import { verticalScale } from 'utils/scaleFunctions';

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 100%;
    height: 40%;
    max-width: 800px;
    align-self: center;
    border-radius: 10px;
    margin-top: ${verticalScale(20)}px;
    background-color: ${props => props.theme.gray};
`;
