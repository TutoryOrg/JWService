import styled from 'styled-components/native';
import { fontSizes } from 'utils/constants';
import { isMobile, verticalScale } from 'utils/scaleFunctions';

export const ImageViewer = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ImageContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: ${props => props.theme.gray};
`;

export const ImagePickerContainer = styled.View`
    width: 100%;
    height: 100%;
    max-width: 1000px;
    align-self: center;
    margin-top: ${verticalScale(25)}px;
`;

export const CommentDesc = styled.TextInput`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: ${isMobile ? '15%' : '20%'};
    opacity: 0.5;
    border-radius: 10px;
    font-size: ${verticalScale(fontSizes.small)}px;
    color: ${props => props.theme.txtColor};
    background-color: ${props => props.theme.gray};
    padding-left: 20px;
`;
